import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GroupeClasseService {

 
  url="http://127.0.0.1:8000/api/grp_classe";
  url2="http://127.0.0.1:8000/api/grp_classe_cetif";
  
  
  constructor(private http:HttpClient) { }

  get_groupe_classes(){
    return this.http.get(this.url+'s');
}

find_groupe_classe(id:any){
  
   return this.http.get(this.url+'/'+id+'/find');
}


affecter_certif(id_groupe:any ,id_certif:any ,data:any)
{
  return this.http.post(this.url2+'/'+id_groupe+'/'+id_certif+'/affecter',data);
}

get_all_certifs(id_grp:any)
{
  return this.http.get(this.url2+'/'+id_grp+"/get_certifs");
}
delete_certif(id_grp_class_certif : any )
{
  return this.http.delete(this.url2+'/'+id_grp_class_certif+'/delete');
}

get_cours()
{
  return this.http.get("http://127.0.0.1:8000/api/grp_classe/cours");

}
get_ecole()
{
  return this.http.get("http://127.0.0.1:8000/api/grp_classe/ecoles");

}



}

