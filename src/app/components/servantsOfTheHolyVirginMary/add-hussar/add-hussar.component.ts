import { Component, OnInit } from '@angular/core';
import { Hussar } from 'src/app/models/hussar';
import { HussarsService } from 'src/app/services/hussars.service';

@Component({
  selector: 'app-add-hussar',
  templateUrl: './add-hussar.component.html',
  styleUrls: ['./add-hussar.component.css']
})
export class AddHussarComponent implements OnInit {

  // hussar: Hussar = {
  //   id: -1,
  //   firstName: '',
  //   lastName: ''
  // }
  hussar: Hussar = new Hussar();
  addedHussar: boolean = false;
  errors: string[] = [];

  constructor(private hussarsService: HussarsService) {  }

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

  // newHussar(): void {
  //   this.addedHussar = false;
  //   this.hussar = {
  //     id: -1,
  //     firstName: '',
  //     lastName: ''
  //   }
  // }
}