import { Component, OnInit } from '@angular/core';
import { Banner } from 'src/app/models/banner';
import { Hussar } from 'src/app/models/hussar';
import { BannersService } from 'src/app/services/banners.service';
import { HussarsService } from 'src/app/services/hussars.service';

@Component({
  selector: 'app-hussars',
  templateUrl: './hussars.component.html',
  styleUrls: ['./hussars.component.css']
})
export class HussarsComponent implements OnInit {

  hussars: Hussar[] = [];
  selectedHussar?: Hussar;
  hussar: Hussar = new Hussar();
  editModeActive: boolean = false;
  errors: string[] = [];
  banners: Banner[] = [];

  constructor(private hussarsService: HussarsService, private bannersService: BannersService) {
    this.bannersService.getAllBanners()
      .subscribe(response =>{
        this.banners = response as Banner[];
      })
  }

  ngOnInit(): void {
    this.viewAllHussars();
  }

  onSelect(hussar: Hussar): void{
    this.selectedHussar = hussar;
  }

  editMode(activate: boolean): void{
    this.editModeActive = activate;
    if(activate){
      this.hussar = Object.assign({}, this.selectedHussar);
    }else{
      this.errors = [];
    }
  }

  viewAllHussars(){
    this.hussarsService.getAllHussars()
      .subscribe(response =>{
        this.hussars = response as Hussar[];
      })
  }

  getBannerName(id: number): string{
    if(id === null){
      return "Brak";
    }
    return this.banners.find(banner => banner.id === id).name;
  }

  editHussar(){
    this.hussarsService.updateHussar(this.hussar.id, this.hussar)
      .subscribe(response => {
        this.errors = [];
        this.selectedHussar = null;
        this.editModeActive = false;
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

  deleteHussar(){
    if(!confirm("Czy na pewno usunąć sługę " + this.selectedHussar.firstName + " " + this.selectedHussar.lastName + "?")){
      return;
    }
    this.hussarsService.deleteHussar(this.selectedHussar.id)
      .subscribe(response =>{
        this.selectedHussar = null;
        this.ngOnInit();
      })
  }
}

