import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SurveillantService {

  url="http://127.0.0.1:8000/api/formateur";
  //companyData:any=[];
  constructor(private http:HttpClient) {
    }

  get_surveillants(){
    //let url="http://127.0.0.1:8000/api/ surveillant";
  //  this.companyData=this.http.get(this.url+'s');
    return this.http.get(this.url+'s');
}


 add_surveillant(data:any)
 {
  console.log(data);
  return this.http.post(this.url+"/add", data);
 }
 delete_surveillant(id:any)
 {
   return this.http.delete(this.url+'/'+id+'/delete');
 }

 get_surveillantById(id:number)
 {
   return this.http.get(this.url+'/'+id+'/find');
 }

 update_surveillant(id:any,data:any)
 {
  return this.http.put(this.url+'/'+id+'/update',data);
 }
}
