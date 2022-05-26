import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalService {

  url="http://127.0.0.1:8000/api/local";
  //companyData:any=[];
  constructor(private http:HttpClient) {
    }

  get_locals(){
    return this.http.get(this.url+'s');
}
}
