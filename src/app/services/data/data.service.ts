import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  info = new BehaviorSubject('information');
  http: HttpClient;

  constructor(private url: string, http: HttpClient) {
    this.http = http;
   }
  requestCounter: number;

  getInfo(): Observable<string> {
    return this.info.asObservable();
  }

  getInfoValue(): string {
    return this.info.getValue();
  }

  setInfo(val: string) {
    this.info.next(val);
  }

  getAll() {
    return this.http.get(this.url)
      .pipe(
        map(
          response => response
        )
      )
  }

  get(id: any) {
    return this.http.get(this.url + '/' + id)
      .pipe(
        map(
          response => response
        )
      )
  }

  create(resource: any) {
    return this.http.post(this.url, JSON.stringify(resource))
      .pipe(
        map(
          response => response
        )
      )

  }

  update(resource: any) {
    this.setInfo('Object updated');

    return this.http.put(this.url + '/' + resource.id, JSON.stringify(resource))
    .pipe(
      map(
        response => response
      )
    )
  }


  delete(id: number) {
    this.setInfo('Object deleted');

    return this.http.delete(this.url + '/' + id) 
    .pipe(
      map(
        response => response
      )
    )
  }

}
