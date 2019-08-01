import { RentalService } from './shared/rental.service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RentalListComponent } from './rental-list/rental-list.component';
import { RentalListItemComponent } from './rental-list-item/rental-list-item.component';
import { RentalComponent } from './rental.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RentalDetailComponent } from './rental-detail/rental-detail.component';

const routes: Routes = [
  { path: 'rentals',
    component: RentalComponent,
    children: [
    	{ path: '', component: RentalListComponent },
    	{ path: ':rentalId', component: RentalDetailComponent},
    ]
  }
]
  

@NgModule({
    declarations: [
      RentalListComponent,
      RentalListItemComponent,
      RentalComponent,
      RentalDetailComponent
    ],exports:[RentalComponent],
    imports:[
      RouterModule.forChild(routes),
      BrowserModule,HttpClientModule],
    providers:[RentalService]
 })
  
export class RentalModule {}
