import { Component, OnInit } from '@angular/core';
import { EtudiantService } from 'app/services/etudiant/etudiant.service';

import { catchError } from 'rxjs/operators';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-import-etudiant',
  templateUrl: './import-etudiant.component.html',
  styleUrls: ['./import-etudiant.component.css']
})
export class ImportEtudiantComponent implements OnInit {
 test:any='no';
  files:any;
  constructor(private service_etudiant:EtudiantService) { }

  ngOnInit(): void {
  }

  
fileChanged(event : any ) {
    this.files = event.target.files[0];
    console.log(this.files);
    

}


uploadDocument()
{ 
  let formdata = new FormData();
  formdata.append("file",this.files,this.files.name);
    this.service_etudiant.import_data(formdata)
    .pipe( catchError(async (error) => {
      console.log(error)
        this.openswal('no');
      }))
    .subscribe((result)=>{
    if(result=='ok'){
      this.openswal('ok');
    }
    });
    
}




openswal(valid:string){
  console.log(valid);
  if(valid=='ok')  
      {
        Swal.fire({
          title: "success d'ajout!",
          text: "students added!",
          buttonsStyling: false,
          confirmButtonClass: "btn btn-success",
          type: "success"
      })
      this.ngOnInit();
      }
  else{
          Swal.fire({
            title: "la format de votre fichier ne correspond pas a la regle si dessous",
            buttonsStyling: false,
            confirmButtonClass: "btn btn-success"

        })
      }
}
}

