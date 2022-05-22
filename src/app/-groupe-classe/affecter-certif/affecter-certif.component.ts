import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CertificationService } from 'app/services/certification/certification.service';
import { GroupeClasseService } from 'app/services/groupe_classe/groupe-classe.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ColdObservable } from 'rxjs/internal/testing/ColdObservable';
import Swal from 'sweetalert2';
declare interface addnbheure {
  test?:string;
  nbheure?:number;
}
@Component({
  selector: 'app-affecter-certif',
  templateUrl: './affecter-certif.component.html',
  styleUrls: ['./affecter-certif.component.css']
})

export class AffecterCertifComponent implements OnInit {
  
  allgroupe_classes:any = [];
  all_certif:any = []
  idgrp:any;
  data:any = [];
  all_certif_id:any=[];
  nom_formations:Array<string>=[];
  modalRef?: BsModalRef;
  public addnbheure:addnbheure;

  constructor(private service_groupeclasse:GroupeClasseService , 
              private service_certif:CertificationService,
               private router:ActivatedRoute, 
                private modalService: BsModalService)
  {    
}

ngOnInit(): void {
  this.service_groupeclasse.get_groupe_classes().subscribe((data)=>{
    console.log(data);
    this.allgroupe_classes=data;
   });
   this.service_certif.get_certifications().subscribe((data)=>{
    console.log(data);
    this.all_certif=data;
   });
   this.addnbheure = {
     test:'',
}
 
}
openModal(template: TemplateRef<any> , id?:any) {
    
  this.modalRef = this.modalService.show(template);
  this.idgrp=id;
 }
 
 openModal2(template: TemplateRef<any> , id?:any) {
  this.nom_formations=[];
  this.service_groupeclasse.get_all_certifs(id).subscribe((data)=>{
    this.all_certif_id=data;
   this.all_certif_id.forEach((item :any) =>{  
      this.service_certif.get_certifById(item['certif_id']).subscribe((result : any)=>{
        this.nom_formations.push(result.nom_formation);
              });
          });
         });
  this.modalRef = this.modalService.show(template);
  
 }
 certif_add(model: addnbheure, isValid: boolean)
   {
     if(isValid)
     {
     let id_certif= <HTMLInputElement>document.getElementById('certifid');
     let semestre= <HTMLInputElement>document.getElementById('semestre');
     let nbheure= <HTMLInputElement>document.getElementById('nbheure');
    
     this.data=[semestre.value,nbheure.value];
     console.log(id_certif.value);
      this.service_groupeclasse.affecter_certif(this.idgrp,id_certif.value,this.data).subscribe((result)=>{
        console.log(result);
        if(result=='no')  
            {
                Swal.fire({
                title: "cette formation est deja affacter pour cette groupe",
                buttonsStyling: false,
                confirmButtonClass: "btn btn-success"
            })
             }
             else{
                Swal.fire({
                    title: "success d'ajout!",
                    text: "formation affected!",
                    buttonsStyling: false,
                    confirmButtonClass: "btn btn-success",
                    type: "success"
                })
               
        this.modalRef.hide();

             }
       });
      }
    }
    
    deletecertif(id:any)
    {
        this.service_groupeclasse.delete_certif(id)
        .subscribe((result)=>{
          console.log(result)
        });
    }
   
}
