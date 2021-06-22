import { HtmlParser } from '@angular/compiler';
import { Host, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BannersComponent } from './components/banners/banners/banners.component';
import { HolyMaryComponent } from './components/holy-mary/holy-mary.component';
import { AddHussarComponent } from './components/servantsOfTheHolyVirginMary/add-hussar/add-hussar.component';
import { HussarsComponent } from './components/servantsOfTheHolyVirginMary/hussars/hussars.component';

const routes: Routes = [
  {path: 'hussars', component: HolyMaryComponent},
  {path: 'lista_husarzy', component: HussarsComponent},
  {path: 'nowy_husarz', component: AddHussarComponent},
  {path: 'banners', component: BannersComponent},
  {path: '**', redirectTo: 'hussars', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
