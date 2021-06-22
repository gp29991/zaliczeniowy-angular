import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HussarsComponent } from './components/servantsOfTheHolyVirginMary/hussars/hussars.component';
import { AddHussarComponent } from './components/servantsOfTheHolyVirginMary/add-hussar/add-hussar.component';
import { HolyMaryComponent } from './components/holy-mary/holy-mary.component';
import { RouteReuseStrategy } from '@angular/router';
import { CustomReuseStrategy } from './route-reuse-strategy';
import { BannersComponent } from './components/banners/banners/banners.component';



@NgModule({
  declarations: [
    AppComponent,
    HussarsComponent,
    AddHussarComponent,
    HolyMaryComponent,
    BannersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: CustomReuseStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
