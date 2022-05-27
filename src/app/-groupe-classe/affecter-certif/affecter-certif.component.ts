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
      certification_id: [3, [Validators.required]],

    });

    /*this.service_groupeclasse.get_groupe_classes().subscribe((data)=>{
     // console.log(data);
      this.allgroupe_classes=data;
     });*/


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


    this.service_certif.get_certifications().subscribe((data) => {
      console.log(data);
      this.all_certif = data;
    });
    this.addnbheure = {
      test: '',
    }

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
  onActivate(event) {
    console.log('Activate Event', event);
  }

  openModal(template: TemplateRef<any>, id?: any) {

    this.modalRef = this.modalService.show(template);
    this.idgrp = id;
  }

  openModal2(template: TemplateRef<any>, id?: any) {
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

  }
  certif_add(model: addnbheure, isValid: boolean) {
    if (isValid) {
      let id_certif = <HTMLInputElement>document.getElementById('certifid');
      let semestre = <HTMLInputElement>document.getElementById('semestre');
      let nbheure = <HTMLInputElement>document.getElementById('nbheure');

      this.data = [semestre.value, nbheure.value];
      console.log(id_certif.value);
      this.service_groupeclasse.affecter_certif(this.idgrp, id_certif.value, this.data).subscribe((result) => {
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
    console.log(this.allgroupe_classes);
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

}
