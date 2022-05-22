import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListFormateurComponent } from 'app/-formateur/list-formateur/list-formateur.component';
import { CorporateEmployee } from 'app/model/CorporateEmployee';
import { formateur } from 'app/model/formateur';
import { Page } from 'app/model/page';
import { PagedData } from 'app/model/paged-data';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class FormateurService {
  url="http://127.0.0.1:8000/api/formateur";
  //companyData:any=[];
  constructor(private http:HttpClient) {
    }

  get_formateurs(){
    //let url="http://127.0.0.1:8000/api/formateur";
  //  this.companyData=this.http.get(this.url+'s');
    return this.http.get(this.url+'s');
}


 add_formateur(data:any)
 {
  console.log(data);
  return this.http.post(this.url+"/add", data);
 }
 delete_formateur(id:any)
 {
   return this.http.delete(this.url+'/'+id+'/delete');
 }

 get_formateurById(id:number)
 {
   return this.http.get(this.url+'/'+id+'/find');
 }

 update_formateur(id:any,data:any)
 {
  return this.http.put(this.url+'/'+id+'/update',data);
 }
 public getResults(page: Page,companyData:any): Observable<PagedData<formateur>> {
// console.log(companyData);
  return of(companyData)
    .pipe(map(d => this.getPagedData(page,companyData)))
    .pipe(delay(1000 * Math.random()));
}

/**
 * Package companyData into a PagedData object based on the selected Page
 * @param page The page data used to get the selected data from companyData
 * @returns {PagedData<formateur>} An array of the selected data and page
 */
private getPagedData(page: Page,companyData:any): PagedData<formateur> {
  const pagedData = new PagedData<formateur>();
  page.totalElements = companyData.length;
  page.totalPages = page.totalElements / page.size;
  const start = page.pageNumber * page.size;
  const end = Math.min(start + page.size, page.totalElements);
  for (let i = start; i < end; i++) {
    const jsonObj = companyData[i];
    const forma = new formateur(jsonObj.user[0].nom, jsonObj.user[0].prenom, jsonObj.user[0].email, jsonObj.user[0].password, jsonObj.statut, jsonObj.telephone);
    pagedData.data.push(forma);
    console.log(forma);
  }
  pagedData.page = page;
  return pagedData;
}

}
