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


affecter_certif(id_groupe:any ,id_certif:any)
{
  return this.http.post(this.url2+'/'+id_groupe+'/'+id_certif+'/affecter',null);
}

isaffected(id_grp:any,idcertif:any)
{
  return this.http.get(this.url2+'/'+id_grp+'/'+idcertif+"/isaffected");
}
delete_certif(id_grp_class_certif : any )
{
  return this.http.delete(this.url2+'/'+id_grp_class_certif+'/delete');
}

get_cours()
{
  return this.http.get(this.url+'/cours');

}
get_ecole()
{
  return this.http.get(this.url+'/ecoles');

}
get_departement()
{
  return this.http.get(this.url+'/departement');
}
get_niveau()
{
  return this.http.get(this.url+'/niveau');
}
get_grps_bydepartement()
{ 
  return this.http.get(this.url+'/bydepartement');
}

grp_filtrecertif()
{ 
  return this.http.get(this.url+'/filtrecertif');
}

get_niveau_bydepartement(dep:any)
{ 
  return this.http.get(this.url+'/'+dep+'/bydepartement_niveau');
}


get_ecole_bydep_niv(dep:any,niv:any)
{ 
  return this.http.get(this.url+'/'+dep+'/'+niv+'/getecole');
}

get_gep_affecter_bycertif(certif_id:any)
{
  return this.http.get(this.url2+'/'+certif_id+'/getgrp_certif');

}
get_allgep_affecter()
{
  return this.http.get(this.url2+'s');

}

getgrp_byfilre(data:any)
{
  return this.http.get(this.url+'/get_grp_filtre',{ params:data});

}
get_distinct()
{
  return this.http.get(this.url+'/get_grp_distinct');
}

get_grp_certif_saved()
{
  return this.http.get(this.url2+'/get_grp_certif_distinct');
}


get_grp_certif_distinct(certif_id:any)
{
  return this.http.get(this.url+'/'+certif_id+'/get_grpaff_distinct');
}

}

