import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormateurService } from 'app/services/formateur/formateur.service';
import Swal from 'sweetalert2';
//import { ColumnMode } from 'projects/swimlane/ngx-datatable/src/public-api';

import { ColumnMode } from 'app/model/column_mode.type';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { Page } from 'app/model/page';
import { CorporateEmployee } from 'app/model/CorporateEmployee';
import { formateur } from 'app/model/formateur';

@Component({
  selector: 'app-list-formateur',
  templateUrl: './list-formateur.component.html',
  styleUrls: ['./list-formateur.component.css']
})
export class ListFormateurComponent implements OnInit {
  @ViewChild('myTable') myTable!: DatatableComponent;
 dataforma:any=[];
  page = new Page();
  rows = new Array<formateur>();

  ColumnMode = ColumnMode;

  constructor(private formateurService: FormateurService) {
    this.page.pageNumber = 0;
    this.page.size = 3;
  }

  ngOnInit() {
    this.formateurService.get_formateurs()
    .subscribe((alldata)=>{
      this.dataforma= alldata;
   console.log(this.dataforma);
    this.setPage({ offset: 0 });
    });
   
  }
  /**
   * Populate the table with new data based on the page number
   * @param page The page to select
   */
  setPage(pageInfo) {
    this.page.pageNumber = pageInfo.offset;
   // console.log(aa);
    this.formateurService.getResults(this.page,this.dataforma).subscribe(pagedData => {
      this.page = pagedData.page;
      this.rows = pagedData.data;
    });
  }


/*
  headerRow: string[];
  footerRow: string[];
  dataforma : any ;
  constructor(private service_forma:FormateurService ,private routerlink: Router) {
 
  } 
  ngOnInit(){
    this.service_forma.get_formateurs()
    .subscribe((alldata)=>{
      this.dataforma= alldata;
    });
    this.headerRow=[ 'nom ', 'prenom', 'email', 'statut', 'telephone' ];
     this.footerRow= ['nom ', 'prenom', 'email', 'statut', 'telephone' ];
      
      
  }

  

  delete_formateur(forma_id : any)
  { 
   
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonClass: 'btn btn-success',
        cancelButtonClass: 'btn btn-danger',
        confirmButtonText: 'Yes, delete it!',
         buttonsStyling: false
      }).then((result) => {
        if (result.value) {
                    
              this.service_forma.delete_formateur(forma_id)
              .subscribe((result)=>{
                console.log(result)
              // this.ngOnInit();
              if(result=='ok'){
              Swal.fire(
                {
                  title: 'Deleted!',
                  text: 'Your formation has been deleted.',
                  type: 'success',
                  confirmButtonClass: "btn btn-success",
                  buttonsStyling: false
                }
              )
              this.routerlink.navigate(['/formateur/list']);
            }
            });
            
        }
      })
  
  }*/
}
