import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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
  get_senace(id_grp_forma:any){
    return this.http.get(this.url+'/'+id_grp_forma+'/find_bygrp_forma');
  }

 get_seance_by_list_grps_id(data:any)
{
 return this.http.get(this.url+'/find_bylist_grp_forma',{ params:data}) ;
}

}
