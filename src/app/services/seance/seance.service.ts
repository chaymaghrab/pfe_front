import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SeanceService {

  url="http://127.0.0.1:8000/api/seance";

  constructor(private http:HttpClient) {
    }

  add_seance(data:any){
    return this.http.post(this.url+'/add',data);
  }
  update_seance(id:any,data:any){
    return this.http.put(this.url+'/'+id+'/update',data);
  }
  get_seance(id_grp_forma:any){
    return this.http.get(this.url+'/'+id_grp_forma+'/find_bygrp_forma');
  }

 get_seance_by_list_grps_id(data:any)
{
 return this.http.get(this.url+'/find_bylist_grp_forma',{ params:data}) ;
}


get_seance_by_list_formateur_id(data:any)
{
 return this.http.get(this.url+'/find_bylist_formateur_forma',{ params:data}) ;
}


}
