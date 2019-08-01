import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
//import { Rental } from './rental.model';
import { HttpClient } from '@angular/common/http';
import { Rental } from './rental.model';


@Injectable()
export class RentalService {

    private rentals :Rental[];
  constructor(private http: HttpClient) {}


  public getRentalById(rentalId: string): Observable<any> {
    return this.http.get('/api/v1/rentals/' + rentalId);
  }

  public getRentals(): Observable<any> {
    return this.http.get('/api/v1/rentals');
  }

}