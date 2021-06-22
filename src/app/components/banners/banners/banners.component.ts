import { Component, OnInit } from '@angular/core';
import { Banner } from 'src/app/models/banner';
import { Hussar } from 'src/app/models/hussar';
import { BannersService } from 'src/app/services/banners.service';

@Component({
  selector: 'app-banners',
  templateUrl: './banners.component.html',
  styleUrls: ['./banners.component.css']
})
export class BannersComponent implements OnInit {

  constructor(private bannersService: BannersService) { }

  banner: Banner = new Banner();
  banners: Banner[] = [];
  selectedBanner?: Banner;
  errors: string[] = [];
  editModeActive: boolean = false;
  showingHussarsUnderBanner: boolean = false;
  hussarsUnderBanner: Hussar[] = [];

  ngOnInit(): void {
    this.viewAllBanners();
  }

  onSelect(banner: Banner): void{
    this.selectedBanner = banner;
    this.showingHussarsUnderBanner = false;
  }

  editMode(activate: boolean): void{
    this.editModeActive = activate;
    if(activate){
      this.errors = [];
      this.banner = Object.assign({}, this.selectedBanner);
    }else{
      this.errors = [];
      this.banner = new Banner();
    }
  }

  resetState(): void{
    this.errors = [];
    this.selectedBanner = null;
    this.editModeActive = false;
    this.banner = new Banner();
    this.showingHussarsUnderBanner = false;
  }

  viewAllBanners(){
    this.bannersService.getAllBanners()
      .subscribe(response =>{
        this.banners = response as Banner[];
      })
  }

  editBanner(){
    this.bannersService.updateBanner(this.banner.id, this.banner)
      .subscribe(response => {
        this.resetState();
        this.ngOnInit();
      },
      errorResponse => {
        if(errorResponse.status === 400 && errorResponse.error.errors !== undefined){
          this.errors = [];
          for (var i in errorResponse.error.errors){
            this.errors.push(errorResponse.error.errors[i][0]);
          }
        }
      });
  }

  deleteBanner(){
    if(!confirm("Czy na pewno usunąć chorągiew " + this.selectedBanner.name + "?")){
      return;
    }
    this.bannersService.deleteBanner(this.selectedBanner.id)
      .subscribe(response =>{
        this.selectedBanner = null;
        this.resetState();
        this.ngOnInit();
      },
      errorResponse => {
        if(errorResponse.status === 400 && errorResponse.error === "BannerHasHussars"){
          alert("Nie można usunąć chorągwi, gdyż wciąż są do niej przypisani husarze!")
        }
      });
  }

  addBanner(){
    this.bannersService.createBanner(this.banner)
      .subscribe(response => {
        this.resetState();
        this.ngOnInit();
      },
      errorResponse => {
        if(errorResponse.status === 400 && errorResponse.error.errors !== undefined){
          this.errors = [];
          for (var i in errorResponse.error.errors){
            this.errors.push(errorResponse.error.errors[i][0]);
          }
        }
      });
  }

  showHussarsUnderBanner(activate: boolean){
    this.showingHussarsUnderBanner = activate;
    if(activate){
      this.bannersService.getHussarsUnderBanner(this.selectedBanner.id)
        .subscribe(response => {
          this.hussarsUnderBanner = response as Hussar[];
        });
    }
  }

}
