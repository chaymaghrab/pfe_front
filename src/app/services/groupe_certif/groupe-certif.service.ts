import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GroupeCertifService {

  url3="http://127.0.0.1:8000/api/etud_certif";
  url="http://127.0.0.1:8000/api/groupe_certif";
  url2="http://127.0.0.1:8000/api/etud_grp_certif";


  constructor(private http:HttpClient) { }


  get_etud_filtre(data:any)
  {
    return this.http.get(this.url3+'s',{ params:data}) ;

  }
  
get_grp_certif_byfiltre(data:any)
{
 return this.http.get(this.url+'/filtre',{ params:data}) ;
}


delete_grp_certif(id:any)
{
  return this.http.delete(this.url+'/'+id+'/delete') ;

}

add_grp_certif(data:any)
{
 return this.http.post(this.url+'/add',data) ;
}

affecter_etd_grp_certif(data:any)
{
 return this.http.post(this.url2+'/add',data) ;
}

get_etudiants(id:any)
{
 return this.http.get(this.url+'/'+id+'/etudiant') ;
}

get_grp_certif_bylocal(id:any)
{
  return this.http.get(this.url+'/'+id+'/bylocal') ;

}
get_grp_certif_bysv(id:any)
{
  return this.http.get(this.url+'/'+id+'/bysurveillant') ;

}
get_grp_certif_byid(id:any)
{
  return this.http.get(this.url+'/'+id+'/find') ;

}

update_grp_certif(id:any,data:any)
{
  return this.http.put(this.url+'/'+id+'/update',data) ;

}

}
