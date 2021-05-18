import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class TripService extends DataService {

  constructor(http: HttpClient) {
    super('http://localhost:9090/WhereToNow/trips', http)
  }

  getTrips(from, to) {
    console.log('http://localhost:9090/WhereToNow/trips?from=' + from + '&to=' + to)
    return this.http.get('http://localhost:9090/WhereToNow/trips?from=' + from + '&to=' + to)
      .pipe(
        map(
          response => response
        )
      )
  }
}
