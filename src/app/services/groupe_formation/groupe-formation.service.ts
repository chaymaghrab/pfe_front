import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GroupeFormationService {

  url="http://127.0.0.1:8000/api/groupe_forma";
  url2="http://127.0.0.1:8000/api/etud_grp_forma";
  constructor(private http:HttpClient) { }

  
get_classe_byfiltre(data:any)
{
 return this.http.get(this.url+'/grp_classe',{ params:data}) ;
}

get_grp_forma()
{
 return this.http.get(this.url+'s') ;
}


get_etudiants(id:any)
{
 return this.http.get(this.url+'/'+id+'/etudiant') ;
}

get_grp_forma_byfiltre(data:any)
{
 return this.http.get(this.url+'/filtre',{ params:data}) ;
}

get_sous_grp(id:any)
{
 return this.http.get(this.url+'/'+id+'/get_sous_groupe') ;
}


add_grp_forma(data:any)
{
 return this.http.post(this.url+'/add',data) ;
}


affecter_etd_grp_forma(data:any)
{
 return this.http.post(this.url2+'/add',data) ;
}


affecter_etd_grp_forma_tp(data:any)
{
 return this.http.post(this.url2+'/tp/add',data) ;
}

delete_grp_forma(id:any)
{
  return this.http.delete(this.url+'/'+id+'/delete') ;

}

update_grp_forma(id:any,data:any)
{
  return this.http.put(this.url+'/'+id+'/update',data) ;

}

get_grp_forma_bylocal(id:any)
{
 return this.http.get(this.url+'/'+id+'/bylocal') ;
}


get_grp_forma_byformateur(id:any)
{
 return this.http.get(this.url+'/'+id+'/byformateur') ;
}

get_grp_forma_byid(id:any)
{
  return this.http.get(this.url+'/'+id+'/find') ;

}
get_classe_byfiltrecertif(data:any)
{
 return this.http.get(this.url+'/grp_classe_certif',{ params:data}) ;
}

}
