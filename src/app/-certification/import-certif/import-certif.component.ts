import { Component, OnInit } from '@angular/core';
import { CertificationService } from 'app/services/certification/certification.service';

@Component({
  selector: 'app-import-certif',
  templateUrl: './import-certif.component.html',
  styleUrls: ['./import-certif.component.css']
})
export class ImportCertifComponent implements OnInit {

  files:any;

  constructor(private certif_service:CertificationService) { }

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
this.certif_service.import_data(formdata)
.subscribe((result)=>{
console.log(result);
});
}


}
