import { Component, OnInit } from '@angular/core';
import { CertificationService } from 'app/services/certification/certification.service';
import Swal from 'sweetalert2';


declare var $:any;



@Component({
  selector: 'app-list-certif',
  templateUrl: './list-certif.component.html',
  styleUrls: ['./list-certif.component.css']
})
export class ListCertifComponent implements OnInit {
    
    headerRow: string[];
    footerRow: string[];
    datacertif : any ;
    constructor(private service_certif:CertificationService) {
   
    } 
    ngOnInit(){
      this.service_certif.get_certifications()
      .subscribe((alldata)=>{
        this.datacertif= alldata;
      });
      this.headerRow=[ 'nom formation', 'nombre dheure', 'score de passage', 'nombre de question', 'type dexaman', 'duree' ];
       this.footerRow= ['nom formation', 'nombre dheure', 'score de passage', 'nombre de question', 'type dexaman', 'duree'  ];
        
        
    }

    ngAfterViewInit(){
    /*  $('#datatable').DataTable({
        "pagingType": "full_numbers",
        "lengthMenu": [
          [10, 25, 50, -1],
          [10, 25, 50, "All"]
        ],
        responsive: true,
        language: {
          search: "_INPUT_",
          searchPlaceholder: "Search records",
        }

      });

     var table = $('#datatable').DataTable();

      // Edit record
      table.on('click', '.edit', function() {
        let $tr = $(this).closest('tr');

        var data = table.row($tr).data();
        alert('You press on Row: ' + data[0] + ' ' + data[1] + ' ' + data[2] + '\'s row.');
      });

      // Delete a record
      table.on('click', '.remove', function(e) {
        let $tr = $(this).closest('tr');
        table.row($tr).remove().draw();
        e.preventDefault();
      });

      //Like record
      table.on('click', '.like', function() {
        alert('You clicked on Like button');
      });*/
    }

    delete_certif(certif_id : any)
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
                      
                this.service_certif.delete_certif(certif_id)
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
                this.ngOnInit();
              }
              });
              
          }
        })
    
    }
}
