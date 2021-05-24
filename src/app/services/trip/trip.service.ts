import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { DataService } from '../data/data.service';

const URL = 'https://where-to-now.herokuapp.com/trips'
//const URL = 'http://localhost:9090/WhereToNow/trips'

@Injectable({
  providedIn: 'root'
})
export class TripService extends DataService {

  constructor(http: HttpClient) {
    super(URL, http)
  }

  getTrips(from, to) {
    console.log(URL + '?from=' + from + '&to=' + to)
    return this.http.get(URL + '?from=' + from + '&to=' + to)
      .pipe(
        map(
          response => response
        )
      )
  }
}
