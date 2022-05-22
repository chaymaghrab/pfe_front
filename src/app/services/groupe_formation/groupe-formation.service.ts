import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Params } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GroupeFormationService {

  url="http://127.0.0.1:8000/api/groupe_forma";
  url2="http://127.0.0.1:8000/api/etud_grp_forma";
  constructor(private http:HttpClient) { }

  
get_classe_byfiltre(data:any)
{
 return this.http.get(this.url+'/filtre',{ params:data}) ;
}

get_grp_forma()
{
 return this.http.get(this.url+'s') ;
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


}
