import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
@Injectable()
export class PropertyService {
  server_route = 'http://127.0.0.1:8000/'
  constructor(private _http: Http) { }

  searchProperties(searchParams){
    console.log(searchParams)
  }

  createProperty(property){
    console.log("HIT PROPERTY SERVICE")
    console.log(property)
    return this._http.post(this.server_route + 'api/places/create', property)
    .map(data => data.json())
    .toPromise();
  }

}
