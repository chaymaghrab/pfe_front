import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CertificationService {
  url="http://127.0.0.1:8000/api/certif";

  constructor(private http:HttpClient) { }

  get_certifications(){
    return this.http.get(this.url+'s');
}


get_certificationsbytype(data:any){
  return this.http.get(this.url+'s_bytype',{ params:data});
}


 add_certif(data:any)
 {
  console.log(data);
  return this.http.post(this.url+"/add", data);
 }
 delete_certif(id:any)
 {
   return this.http.delete(this.url+'/'+id+'/delete');
 }

 get_certifById(id:number)
 {
   return this.http.get(this.url+'/'+id+'/find');
 }

 update_certif(id:any,data:any)
 {
  return this.http.put(this.url+'/'+id+'/update',data);
 }

 
 import_data(data:any)
 {
  console.log(data);
  return this.http.post(this.url+'/import', data);
 }
}
