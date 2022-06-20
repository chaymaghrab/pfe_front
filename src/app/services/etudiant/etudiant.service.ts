import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {

  url="http://127.0.0.1:8000/api/etudiant/import";
  url2="http://127.0.0.1:8000/api/grp_classe_cetif/import"

  constructor(private http:HttpClient) { }

 
 import_data(data:any)
 {
  console.log(data);
 return this.http.post(this.url, data);
 }
 import_etud_certif(data:any)
 {
  return this.http.post(this.url2, data);

 }
}
