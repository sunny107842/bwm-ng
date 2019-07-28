import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RentalListComponent } from './rental-list/rental-list.component';
import { RentalListItemComponent } from './rental-list-item/rental-list-item.component';
import { RentalComponent } from './rental.component';

  
@NgModule({
    declarations: [
      RentalListComponent,
      RentalListItemComponent,
      RentalComponent
    ],
    imports:[]
 })
  
export class RentalModule {}
