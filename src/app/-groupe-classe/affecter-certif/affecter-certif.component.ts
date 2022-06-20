import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ColumnMode, SelectionType } from '@swimlane/ngx-datatable';
import { Page } from 'app/model/page';
import { CertificationService } from 'app/services/certification/certification.service';
import { GroupeClasseService } from 'app/services/groupe_classe/groupe-classe.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ColdObservable } from 'rxjs/internal/testing/ColdObservable';
import Swal from 'sweetalert2';
declare interface addnbheure {
  test?: string;
  nbheure?: number;
}
@Component({
  selector: 'app-affecter-certif',
  templateUrl: './affecter-certif.component.html',
  styleUrls: ['./affecter-certif.component.css']
})

export class AffecterCertifComponent implements OnInit {

  @ViewChild('myTable') table: any;
  @ViewChild('myTable2') table2: any;


  public grpclasse: {
    departement: string;
    niveau: number;
    ecole: string;
    certif_id:number;
  }

  allgroupe_classes: any = [];
  all_certif: any = []
  grp_certif: any = [];
  idgrp: any;
  data: any = [];
  all_certif_id: any = [];
  nom_formations: Array<string> = [];
  dep_niv: any = [];
  modalRef?: BsModalRef;
  cherchergroupe: FormGroup | any;
  selected = [];
  selected2 = [];
  selected3 = [];
  certif_grp_aff:any=[];

  ColumnMode = ColumnMode;
  SelectionType = SelectionType;

  page = new Page();


  public addnbheure: addnbheure;

  constructor(private service_groupeclasse: GroupeClasseService,
    private service_certif: CertificationService,
    private router: ActivatedRoute,
    private modalService: BsModalService,
    private fb: FormBuilder,
  ) {
  }

  ngOnInit(): void {

    this.cherchergroupe = this.fb.group({
      certification_id: [, [Validators.required]],

    });

    this.service_groupeclasse.get_distinct().subscribe((data)=>{
      this.allgroupe_classes=data;
      this.allgroupe_classes = [...this.allgroupe_classes];
      this.selected = [this.allgroupe_classes[0]];
    });

    this.service_certif.get_certifications().subscribe((data) => {
      console.log(data);
      this.all_certif = data;
    });

    this.refrech_grp_forma();

    this.cherchergroupe.get("certification_id").valueChanges.subscribe(x => {
      this.cherchergroupe.patchValue({ certification_id: x, }, { onlySelf: true, emitEvent: false });
      this.refrech_grp_forma();
    });

    /*this.service_groupeclasse.get_groupe_classes().subscribe((data)=>{
     // console.log(data);
      this.allgroupe_classes=data;
     });*/
/*
this.refrech_grp_forma();
   
    this.addnbheure = {
      test: '',
    }


    this.service_groupeclasse.get_grps_bydepartement().subscribe((data: any) => {
      data.forEach(element => {


        this.service_groupeclasse.get_niveau_bydepartement(element.departement).subscribe((da: any) => {

          da.forEach((el: any) => {

            this.service_groupeclasse.get_ecole_bydep_niv(element.departement, el.niveau).subscribe((d: any) => {
              d.forEach((elem: any) => {
                this.dep_niv = []
                this.dep_niv['departement'] = element.departement;
                this.dep_niv['niveau'] = el.niveau;
                this.dep_niv['ecole'] = elem.ecole;
                this.allgroupe_classes.push(this.dep_niv);

              });
              this.allgroupe_classes = [...this.allgroupe_classes];
              this.selected = [this.allgroupe_classes[0]];

            });

          });

        });
      });
    });
*/
  }

  onClick(event) {
    console.log(event);
    // testtt.hide=true;
  }

  onSelect({ selected }) {
    console.log('Select Event', selected, this.selected);

  }
  onSelect2({ selected2 }) {
    console.log('Select Event', selected2, this.selected2);

  }
  onSelect3({ selected3 }) {
    console.log('Select Event', selected3, this.selected3);

  }
  onActivate(event) {
    console.log('Activate Event', event);
  }

  openModal(template: TemplateRef<any>, id?: any) {

    this.modalRef = this.modalService.show(template);
    this.idgrp = id;
  }

  /*openModal2(template: TemplateRef<any>, id?: any) {
    this.nom_formations = [];
    this.service_groupeclasse.get_all_certifs(id).subscribe((data) => {
      this.all_certif_id = data;
      this.all_certif_id.forEach((item: any) => {
        this.service_certif.get_certifById(item['certif_id']).subscribe((result: any) => {
          this.nom_formations.push(result.nom_formation);
        });
      });
    });
    this.modalRef = this.modalService.show(template);

  }*/
  certif_add(model: addnbheure, isValid: boolean) {
    if (isValid) {
      let id_certif = <HTMLInputElement>document.getElementById('certifid');
      let semestre = <HTMLInputElement>document.getElementById('semestre');
      let nbheure = <HTMLInputElement>document.getElementById('nbheure');

      this.data = [semestre.value, nbheure.value];
      console.log(id_certif.value);
      this.service_groupeclasse.affecter_certif(this.idgrp, id_certif.value).subscribe((result) => {
        console.log(result);
        if (result == 'no') {
          Swal.fire({
            title: "cette formation est deja affacter pour cette groupe",
            buttonsStyling: false,
            confirmButtonClass: "btn btn-success"
          })
        }
        else {
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

  deletecertif(id: any) {
    this.service_groupeclasse.delete_certif(id)
      .subscribe((result) => {
        console.log(result)
      });
  }
  recherche_grp() {
    this.service_groupeclasse.get_grp_certif_saved().subscribe((data: any) => {
      })
/*this.allgroupe_classes=[];

    this.service_groupeclasse.get_grps_bydepartement().subscribe((data: any) => {
      data.forEach(element => {


        this.service_groupeclasse.get_niveau_bydepartement(element.departement).subscribe((da: any) => {

          da.forEach((el: any) => {

            this.service_groupeclasse.get_ecole_bydep_niv(element.departement, el.niveau).subscribe((d: any) => {
              d.forEach((elem: any) => {
                this.dep_niv = []
                this.dep_niv['departement'] = element.departement;
                this.dep_niv['niveau'] = el.niveau;
                this.dep_niv['ecole'] = elem.ecole;
                this.allgroupe_classes.push(this.dep_niv);
              });
              this.allgroupe_classes = [...this.allgroupe_classes];
              this.selected = [this.allgroupe_classes[0]];

            });

          });

        });
      });
    });
*/

  }


  add(row: any) {
    if (this.allgroupe_classes.length != 0) {
      let x = this.table.bodyComponent.getRowIndex(row);
      this.allgroupe_classes.splice(x, 1);
      this.allgroupe_classes = [...this.allgroupe_classes];
      this.selected = [this.allgroupe_classes[0]];
      this.grp_certif.push(row);
      this.grp_certif = [...this.grp_certif];
      this.selected2 = [this.grp_certif[0]];


    }
    else {
      console.log(this.grp_certif);
    }

  }


  delete(row: any) {
    if (this.grp_certif.length != 0) {

      let x = this.table2.bodyComponent.getRowIndex(row);
      this.grp_certif.splice(x, 1);
      this.grp_certif = [...this.grp_certif];
      this.selected2 = [this.grp_certif[0]];
      this.allgroupe_classes.push(row);
      this.allgroupe_classes = [...this.allgroupe_classes];
      this.selected = [this.allgroupe_classes[0]];

    }
    else {
      console.log(this.grp_certif);
    }
  }
  
  affecter() {
    if (this.grp_certif.length != 0) {

      this.grp_certif.forEach(element => {
        
    
        this.grpclasse= {
          departement: element.departement,
          niveau: element.niveau,
          ecole: element.ecole,
        certif_id:this.cherchergroupe.value.certification_id
        }
        //console.log(this.cherchergroupe.value.certification_id);
        this.service_groupeclasse.getgrp_byfilre(this.grpclasse).subscribe((del: any) => {
        console.log(del);
        });
        //this.refrech_grp_forma();

      });
    }
    this.refrech_grp_forma();
  }

  refrech_grp_forma() {
    this.grp_certif=[];
    this.certif_grp_aff=[];
    this.service_groupeclasse.get_grp_certif_distinct(this.cherchergroupe.value.certification_id).subscribe((d: any) => {
      this.certif_grp_aff=d;
      console.log(d);
      this.certif_grp_aff = [...this.certif_grp_aff];
          this.selected3 = [this.certif_grp_aff[0]];
     /* this.certif_grp_aff = [...this.certif_grp_aff];
      this.selected3 = [this.certif_grp_aff[0]];*/
    });
    
/*    this.service_groupeclasse.get_allgep_affecter().subscribe((d: any) => {
      d.forEach((element:any) => {
        this.service_groupeclasse.find_groupe_classe(element.grp_classe_id).subscribe((data: any) => {
        
        if(this.certif_grp_aff.length==0)
        {
          this.dep_niv = []
          this.dep_niv['departement'] = data.departement;
          this.dep_niv['niveau'] = data.niveau;
          this.dep_niv['ecole'] = data.ecole;
          this.dep_niv['certif'] = element.certif_id;
          this.certif_grp_aff.push(this.dep_niv);
          this.certif_grp_aff = [...this.certif_grp_aff];
          this.selected3 = [this.certif_grp_aff[0]];

        }
        else{
          var b=true;
          this.certif_grp_aff.forEach((ele:any) => {
            if(ele.departement==data.departement&&ele.niveau==data.niveau&&ele.ecole==data.ecole && ele.certif==element.certif_id)
            {
              b=false;
            }
          });
          if(b==true)
          {
            this.dep_niv = []
            this.dep_niv['departement'] = data.departement;
            this.dep_niv['niveau'] = data.niveau;
            this.dep_niv['ecole'] = data.ecole;
            this.dep_niv['certif'] =element.certif_id;
            this.certif_grp_aff.push(this.dep_niv);
            this.certif_grp_aff = [...this.certif_grp_aff];
            this.selected3 = [this.certif_grp_aff[0]];
console.log(this.certif_grp_aff);
          }
        }
        
        });
      });
    });*/
    
  }

  save()
  {if(this.certif_grp_aff!=0)
    {
      this.certif_grp_aff.forEach(element => {
        
    
      this.grpclasse= {
        departement: element.departement,
        niveau: element.niveau,
        ecole: element.ecole,
        certif_id:this.cherchergroupe.value.certification_id

      }
      //console.log(this.cherchergroupe.value.certification_id);
      this.service_groupeclasse.getgrp_byfilre(this.grpclasse).subscribe((del: any) => {
        del.forEach((ele:any) => {
          this.service_groupeclasse.affecter_certif(ele.id,element['certif']).subscribe((del: any) => {
          });
        });
      });
    });
    }

  }

}
