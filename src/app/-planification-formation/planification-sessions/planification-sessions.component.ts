import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbCalendar, NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { ColumnMode, SelectionType } from '@swimlane/ngx-datatable';
import { Page } from 'app/model/page';
import { CertificationService } from 'app/services/certification/certification.service';
import { FormateurService } from 'app/services/formateur/formateur.service';
import { GroupeClasseService } from 'app/services/groupe_classe/groupe-classe.service';
import { GroupeFormationService } from 'app/services/groupe_formation/groupe-formation.service';
import { LocalService } from 'app/services/local/local.service';
import { SeanceService } from 'app/services/seance/seance.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { element } from 'protractor';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-planification-sessions',
  templateUrl: './planification-sessions.component.html',
  styleUrls: ['./planification-sessions.component.css'],

})
export class PlanificationSessionsComponent implements OnInit {

  @ViewChild('myTable') table: any;

  public update_grp_form: {
    formateur_id: number;
    local_id: number;
  }



  public add_seance_forma: {
    datedeb: string;
    datefin: string;
    type: string;
    groupe_formation_id: number;
  }

  datechoisie: any = [];
  cherchergroupe: FormGroup | any;
  planifier_forma: FormGroup | any;
  local: any = [];
  formateur: any = [];

  all_certif: any = []
  all_cours: any = [];
  groupe_forma: any = [];

  ColumnMode = ColumnMode;
  SelectionType = SelectionType;
  page = new Page();
  selected = [];
  expanded: any = {};
  timeout: any;
  modalRef?: BsModalRef;
  minDate: Date;
  maxDate: Date;

  rowselected: any = [];
  rowindex: any;
  b_salle: Boolean;
  b_formateur: Boolean;

  b_salle_base: Boolean;
  b_formateur_base: Boolean;

  grp_form_ids: any = [];
  formateur_ids: any = [];
  testchay: any = [];

  constructor(private service_certif: CertificationService,
    private service_grp_formation: GroupeFormationService,
    private service_local: LocalService,
    private service_formateur: FormateurService,
    private service_classe: GroupeClasseService,
    private fb: FormBuilder,
    private modalService: BsModalService,
    private service_seance: SeanceService
  ) {
    this.minDate = new Date();
    this.maxDate = new Date();
    this.minDate.setDate(this.minDate.getDate() - 1);
    this.maxDate.setDate(this.maxDate.getDate() + 7);
  }


  ngOnInit(): void {
    this.cherchergroupe = this.fb.group({
      certification_id: [, [Validators.required]],
      cours: ['jour', [Validators.required]],
      langue: ['Français', [Validators.required]],

    });

    this.planifier_forma = this.fb.group({
      local_id: [, [Validators.required]],
      formateur_id: [, [Validators.required]],
      date: ['', [Validators.required]],

    });


    this.service_certif.get_certifications().subscribe((data) => {
      console.log(data);
      this.all_certif = data;
    });


    this.service_classe.get_cours().subscribe((data) => {
      console.log(data);
      this.all_cours = data;
    });


    this.service_formateur.get_formateurs().subscribe((data) => {
      console.log(data);
      this.formateur = data;
    });

    this.cherchergroupe.get("certification_id").valueChanges.subscribe(x => {
      this.cherchergroupe.patchValue({ certification_id: x, }, { onlySelf: true, emitEvent: false });

      console.log(this.cherchergroupe.value.certification_id);

      this.service_certif.get_certifById(this.cherchergroupe.value.certification_id).subscribe((data: any) => {
        this.service_local.get_locals_bytype(data.type_examan).subscribe((d: any) => {
          this.local = d;
          console.log(d);
        });
      });



    });

  }




  onClick(event) {
    console.log(event);
    // testtt.hide=true;
  }

  onSelect({ selected }) {
    console.log('Select Event', selected, this.selected);

  }

  onActivate(event) {
    console.log('Activate Event', event);
  }
  onPage(event) {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      console.log('paged!', event);
    }, 100);
  }



  toggleExpandRow(row) {
    console.log('Toggled Expand Row!', row);
    this.table.rowDetail.toggleExpandRow(row);
  }

  onDetailToggle(event) {
    console.log('Detail Toggled', event);
  }

  openModal(template: TemplateRef<any>, row?: any) {



    this.planifier_forma = this.fb.group({
      local_id: [, [Validators.required]],
      formateur_id: [, [Validators.required]],
      date: ['', [Validators.required]],

    });

    this.modalRef = this.modalService.show(template);
    this.rowselected = row;
    //this.rowindex=this.table.bodyComponent.getRowIndex(this.rowselected);





  }

  recherche_grp() {

    //console.log(this.cherchergroupe.value);
    this.service_grp_formation.get_grp_forma_byfiltre(this.cherchergroupe.value).subscribe((data: any) => {
      this.groupe_forma = [];
      console.log(this.groupe_forma);
      console.log(data);
      //this.groupe_forma = data;
      data.forEach((element: any) => {
        this.service_grp_formation.get_sous_grp(element.id).subscribe((res: any) => {
          res['id'] = element.id;
          res['cours'] = element.cours;
          res['name'] = element.nom_groupe_forma;
          res['effectif'] = element.effectif;
          res['salle'] = element.local_id;
          res['formateur'] = element.formateur_id;
          res['datedeb'] = '';
          res['datefin'] = '';

          this.service_seance.get_seance(element.id).subscribe((resul: any) => {
            if (resul != null) {
              res['datedeb'] = resul.datedeb;
              res['datefin'] = resul.datefin;
            }
          });

          this.groupe_forma.push(res);
          // console.log( this.groupe_forma);

          this.groupe_forma = [...this.groupe_forma];
          this.selected = [this.groupe_forma[0]];
        });
      });
    });


  }

  getdate(rowdate: Date[]) {
    this.datechoisie = [];
    // console.log(rowdate[0]);
    var date1 = rowdate[0].getFullYear() + '-' + (rowdate[0].getUTCMonth() + 1) + '-' + rowdate[0].getDate();
    var x = rowdate.length - 1
    var date2 = rowdate[x].getFullYear() + '-' + (rowdate[x].getUTCMonth() + 1) + '-' + rowdate[x].getDate();
    this.datechoisie.push(date1);
    this.datechoisie.push(date2);

    return this.datechoisie

  }
  planifier_formation() {
    this.b_salle = true;
    this.b_formateur = true;
    this.b_salle_base = true;
    this.b_formateur_base = true;
    var i = 0;
    this.grp_form_ids = [];
    this.formateur_ids = [];
    let nv_local = this.planifier_forma.value.local_id;

    let nv_formateur = this.planifier_forma.value.formateur_id;
    let nv_date = this.getdate(this.planifier_forma.value.date);

    var datedeb = new Date(nv_date[0]);

    var datefin = new Date(nv_date[1]);

    this.service_local.get_local_byid(nv_local).subscribe((dt: any) => {

     
    //let listdate=this.getdate(this.planifier_forma.value.date);
    //console.log(listdate);
if(dt.capacite>this.rowselected.effectif)
    // console.log(dateOne)
{
 
    //console.log(this.groupe_forma[i]['salle']=='ss');
    while (this.b_salle && this.b_formateur && i < this.groupe_forma.length) {

      if (i != this.table.bodyComponent.getRowIndex(this.rowselected)) {
        let dateOne = new Date(this.groupe_forma[i]['datedeb']);
        let datetwo = new Date(this.groupe_forma[i]['datefin']);
        if (this.groupe_forma[i]['salle'] == nv_local) {
          if ((datedeb >= dateOne && datedeb <= datetwo) || (datefin >= dateOne && datefin <= datetwo)||(datedeb <=dateOne && datefin >= datetwo)) {
            this.b_salle = false;
          }
        }
        if (this.groupe_forma[i]['formateur'] == nv_formateur) {
          if ((datedeb >= dateOne && datedeb <= datetwo) || (datefin >= dateOne && datefin <= datetwo)||(datedeb <=dateOne && datefin >= datetwo)) {
            this.b_formateur = false;
          }
        }
      }
      i++;
    }


    if (this.b_salle && this.b_formateur) {

      this.service_grp_formation.get_grp_forma_bylocal(nv_local).subscribe((d: any) => {
        this.grp_form_ids = [];
        d.forEach((elt: any) => {
          this.grp_form_ids.push(elt.id);
        });

        this.service_seance.get_seance_by_list_grps_id(this.grp_form_ids).subscribe((element: any) => {

          console.log(element);
          var h = 0;
          if (element.length != 0) {

            while (this.b_salle_base && h < element.length) {
              var nomgrp: any;

              let dateOne = new Date(element[h].datedeb);
              let datetwo = new Date(element[h].datefin);
              //console.log(dateOne);
              console.log(this.cherchergroupe.value.cours)
             
              if ((datedeb >= dateOne && datedeb <= datetwo) || (datefin >= dateOne && datefin <= datetwo)||(datedeb <=dateOne && datefin >= datetwo)) {
                
                if(this.cherchergroupe.value.cours=="aménagée")
                {
                  if(element[h].type=="aménagée")
                    {this.b_salle_base = false;
                    nomgrp = element[h].groupe_formation_id;
                    }
                }
                else
                {
                  if(element[h].type=="jour"||element[h].type=="alternance")
                  {
                    this.b_salle_base = false;
                    nomgrp = element[h].groupe_formation_id;
                  }
                }
                
              }


              h++

            }
         
          }
          if (this.b_salle_base == true) {

            this.service_grp_formation.get_grp_forma_byformateur(nv_formateur).subscribe((de: any) => {
              this.grp_form_ids = [];
              de.forEach((elte: any) => {
                this.grp_form_ids.push(elte.id);
              });

              this.service_seance.get_seance_by_list_grps_id(this.grp_form_ids).subscribe((element1: any) => {

                var g = 0;
                if (element1.length != 0) {

                  while (this.b_formateur_base && g < element1.length) {
                    var nomgrp1: any;

                    let dateOne = new Date(element1[g].datedeb);
                    let datetwo = new Date(element1[g].datefin);
                    //console.log(dateOne);
                    if ((datedeb >= dateOne && datedeb <= datetwo) || (datefin >= dateOne && datefin <= datetwo)||(datedeb <=dateOne && datefin >= datetwo)) {
                        
                if(this.cherchergroupe.value.cours=="aménagée")
                {
                  if(element1[g].type=="aménagée")
                      {
                      this.b_formateur_base = false;
                      nomgrp1 = element1[g].groupe_formation_id;
                      }
                }
                else
                {
                  if(element1[g].type=="jour"||element1[g].type=="alternance")
                  {
                    this.b_formateur_base = false;
                      nomgrp1 = element1[g].groupe_formation_id;
                  }
                }
                


                      //console.log('aaaaa');
                      // console.log(this.b_salle_base);
                    }
                    g++

                  }
                }
                if (this.b_formateur_base == true) {


                  this.rowselected['salle'] = nv_local;
                  this.rowselected['formateur'] = nv_formateur;
                  this.rowselected['datedeb'] = (this.getdate(this.planifier_forma.value.date))[0];
                  this.rowselected['datefin'] = (this.getdate(this.planifier_forma.value.date))[1];



                  this.modalRef.hide();

                }
                else {
                  this.service_grp_formation.get_grp_forma_byid(nomgrp1).subscribe((e1: any) => {
                  Swal.fire({
                    title: "formateur est occuppée dans cette date par le groupe" + e1.nom_groupe_forma,
                    buttonsStyling: false,
                    confirmButtonClass: "btn btn-success"
                  })
                });
                }

              });
            });
          }
          else{
            this.service_grp_formation.get_grp_forma_byid(nomgrp).subscribe((e: any) => {
            Swal.fire({
              title: "salle est occuppée dans cette date par le groupe "+e.nom_groupe_forma,
              buttonsStyling: false,
              confirmButtonClass: "btn btn-success"
          });
        });
          }


        });

      });


      /*  this.service_grp_formation.get_grp_forma_byformateur(nv_formateur).subscribe((d: any) => {
        
          d.forEach((elt:any) => {
           this.formateur_ids.push(elt.id);
          });
    
          this.service_seance.get_seance_by_list_grps_id(this.formateur_ids).subscribe((res: any) => {
    
            console.log(res);
            if(res.length==0)
            {
              this.b_formateur= false;
            }
                   });
        });
    */



    }
    else if (this.b_salle == false) {
      Swal.fire({
        title: "salle est occuppée dans cette date !",
        buttonsStyling: false,
        confirmButtonClass: "btn btn-success"
      });

    }
    else {
      Swal.fire({
        title: "formateur est occuppée dans cette date!",
        buttonsStyling: false,
        confirmButtonClass: "btn btn-success"
      })

    }
    // this.rowselected['formateur']=nv_formateur
    /*this.getdate(this.planifier_forma.value.date);

*/

 
}
else
{
  Swal.fire({
    title: "capacite de la salle inferieur aux effectif du groupe ",
    buttonsStyling: false,
    confirmButtonClass: "btn btn-success"
  })

}
})
  }

  save_grp_forma() {
    if (this.groupe_forma.length != 0) {
      this.groupe_forma.forEach((element: any) => {
        this.update_grp_form = {
          formateur_id: element['formateur'],
          local_id: element['salle'],
        }


        console.log(element['datedeb']);
        this.service_grp_formation.update_grp_forma(element['id'], this.update_grp_form).subscribe((data: any) => {
          //console.log(data);



          // console.log(element['id']);
          this.service_seance.get_seance(element['id']).subscribe((resul: any) => {
            // console.log(resul);
            if (resul != null) {
              this.add_seance_forma = {
                datedeb: element['datedeb'],
                datefin: element['datefin'],
                type: element['cours'],
                groupe_formation_id: element['id'],
              }

              this.service_seance.update_seance(resul.id, this.add_seance_forma).subscribe((rest: any) => {
                console.log(rest);

              });
            }
            else {

              this.add_seance_forma = {
                datedeb: element['datedeb'],
                datefin: element['datefin'],
                type: element['cours'],
                groupe_formation_id: element['id'],
              }
              console.log(this.add_seance_forma)
              this.service_seance.add_seance(this.add_seance_forma).subscribe((res: any) => {
                console.log(res);
              });
            }

          });


        });


      });


    }
  }

  initialiser(row: any) {

    row.datedeb = '';
    row.datefin = '';
    row.formateur = null;
    row.salle = null;
    row.type = null;

    this.groupe_forma = [...this.groupe_forma];
    this.update_grp_form = {
      formateur_id: null,
      local_id: null,
    }



    this.service_grp_formation.update_grp_forma(row.id, this.update_grp_form).subscribe((data: any) => {
      //console.log(data);



      // console.log(element['id']);
      this.service_seance.get_seance(row.id).subscribe((resul: any) => {
        // console.log(resul);
        if (resul != null) {
          this.add_seance_forma = {
            datedeb: null,
            datefin: null,
            type: null,
            groupe_formation_id: row.id,
          }

          this.service_seance.update_seance(resul.id, this.add_seance_forma).subscribe((rest: any) => {
           
            console.log(this.groupe_forma);
          });
        }


      });


    });

  }
}

