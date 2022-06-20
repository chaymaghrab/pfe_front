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

get_locals_bytype(type:any){
  return this.http.get(this.url+'/'+type+'/type');
}
get_local_byid(id:any)
{
  return this.http.get(this.url+'/'+id+'/find');
}
get_locals_bytype_and_langue(type:any,l:any)
{
  return this.http.get(this.url+'/'+type+'/'+l+'/type_langue');
}
}
