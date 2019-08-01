import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RentalService } from '../shared/rental.service';
import { Rental } from '../shared/rental.model';

@Component({
  selector: 'bwn-rental-detail',
  templateUrl: './rental-detail.component.html',
  styleUrls: ['./rental-detail.component.css']
})
export class RentalDetailComponent implements OnInit {

  rental :Rental;
  constructor(private activatedRoute :ActivatedRoute,private rentalService :RentalService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params)=>{

    this.getRental(params['rentalId'])
      });
  }

  getRental(rentalId :string){
this.rentalService.getRentalById(rentalId).subscribe(

  (rental)=>{this.rental =rental;},
  (err)=>{}
)

  }
}
