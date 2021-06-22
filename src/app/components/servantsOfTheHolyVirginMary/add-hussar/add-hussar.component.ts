import { Component, OnInit } from '@angular/core';
import { Banner } from 'src/app/models/banner';
import { Hussar } from 'src/app/models/hussar';
import { BannersService } from 'src/app/services/banners.service';
import { HussarsService } from 'src/app/services/hussars.service';

@Component({
  selector: 'app-add-hussar',
  templateUrl: './add-hussar.component.html',
  styleUrls: ['./add-hussar.component.css']
})
export class AddHussarComponent implements OnInit {

  hussar: Hussar = new Hussar();
  addedHussar: boolean = false;
  errors: string[] = [];
  banners: Banner[] = [];

  constructor(private hussarsService: HussarsService, private bannersService: BannersService) { 
    this.bannersService.getAllBanners()
      .subscribe(response =>{
        this.banners = response as Banner[];
      })
   }

  ngOnInit(): void {
  }

  addHussar(){
    this.hussarsService.createHussar(this.hussar)
      .subscribe(response => {
        this.errors = [];
        this.addedHussar = true;
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
}