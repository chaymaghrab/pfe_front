
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ColumnMode, SelectionType } from '@swimlane/ngx-datatable';
import { Page } from 'app/model/page';
import { CertificationService } from 'app/services/certification/certification.service';
import { EtudiantService } from 'app/services/etudiant/etudiant.service';
import { FormateurService } from 'app/services/formateur/formateur.service';
import { GroupeCertifService } from 'app/services/groupe_certif/groupe-certif.service';
import { GroupeClasseService } from 'app/services/groupe_classe/groupe-classe.service';
import { GroupeFormationService } from 'app/services/groupe_formation/groupe-formation.service';
import { LocalService } from 'app/services/local/local.service';
import { SeanceService } from 'app/services/seance/seance.service';
import { SurveillantService } from 'app/services/surveillant/surveillant.service';
import { HOUR } from 'ngx-bootstrap/chronos/units/constants';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { catchError } from 'rxjs/operators';

import Swal from 'sweetalert2';
@Component({
  selector: 'app-planification-certif',
  templateUrl: './planification-certif.component.html',
  styleUrls: ['./planification-certif.component.css']
})
export class PlanificationCertifComponent implements OnInit {

  @ViewChild('myTable') table: any;

  public deupdate_grp_certif: {
    surv1_id: number;
    surv2_id: number;
    local_id: number;
    date:string;
    heuredeb:string;
    heurefin:string;
  }



  public add_seance_certif: {
    hdeb: string;
    hfin: string;
    type: string;
    groupe_certification_id: number;
  }

  datechoisie: any = [];
  cherchergroupe: FormGroup | any;
  planifier_certif: FormGroup | any;
  local: any = [];
  ensg: any = [];

  all_certif: any = []
  all_cours: any = [];
  groupe_certif: any = [];

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
  b_surv1: Boolean;
  b_surv2: Boolean;


  b_salle_base: Boolean;
  b_surv1_base: Boolean;
  b_surv2_base: Boolean;


  grp_cert_ids: any = [];
  surv1_ids: any = [];

  surv2_ids: any = [];
  testchay: any = [];



  constructor(private service_certif: CertificationService,
    private service_grp_certification: GroupeCertifService,
    private service_local: LocalService,
    private service_surve: SurveillantService,
    private service_classe: GroupeClasseService,
    private fb: FormBuilder,
    private modalService: BsModalService,
    private service_seance: SeanceService
  ) {
    
  }


  ngOnInit(): void {
    this.cherchergroupe = this.fb.group({
      certification_id: [2, [Validators.required]],
      cours: ['jour', [Validators.required]],
      langue: ['Français', [Validators.required]],

    });

    this.planifier_certif = this.fb.group({
      local_id: [, [Validators.required]],
      serv1_id: [, [Validators.required]],
      serv2_id: [,],
      date: ['', [Validators.required]],
      timedeb: [, [Validators.required]],
      timefin: [, [Validators.required]],


    });
   

    this.service_certif.get_certifications().subscribe((data) => {
      console.log(data);
      this.all_certif = data;
    });


    this.service_classe.get_cours().subscribe((data) => {
      console.log(data);
      this.all_cours = data;
    });


    this.service_surve.get_surveillants().subscribe((data) => {
      console.log(data);
      this.ensg = data;
    });

    this.cherchergroupe.get("certification_id").valueChanges.subscribe(x => {
      this.cherchergroupe.patchValue({ certification_id: x, }, { onlySelf: true, emitEvent: false });

      console.log(this.cherchergroupe.value.certification_id);

      this.service_certif.get_certifById(this.cherchergroupe.value.certification_id).subscribe((data: any) => {
        this.service_local.get_locals_bytype_and_langue(data.type_examan,this.cherchergroupe.value.langue).subscribe((d: any) => {
          this.local = d;
          console.log(d);
        });
      });

    });
    

  }

  mytime: Date = new Date();
  mytimef: Date = new Date();


  public changeDate(): void {
    this.mytime = new Date();
    
   

  }

changeMyTime()
{
  console.log('aaaa');

 //this.mytimef.setHours(this.mytime.getHours());
 //this.mytimef.setMinutes(this.mytime.getMinutes());
/*
  this.minTimef.setHours(this.mytime.getHours());
  this.minTimef.setMinutes(this.mytime.getMinutes());
*/
  console.log(this.planifier_certif.value);
  //console.log(this.minTimef);
  /*this.minTimefinal.setHours(10);
  this.minTimefinal.setMinutes(55);
  this.maxTimefinal.setHours(17);
  this.maxTimefinal.setMinutes(0);*/
}

changeMyTimefinal()
{

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



    this.planifier_certif = this.fb.group({
      local_id: [, [Validators.required]],
      surv1_id: [, [Validators.required]],
      surv2_id: [, ],
      date: ['', [Validators.required]],
      
      timedeb: [, [Validators.required]],
      timefin: [, [Validators.required]],

    });


    this.modalRef = this.modalService.show(template);
    this.rowselected = row;
    //this.rowindex=this.table.bodyComponent.getRowIndex(this.rowselected);


    //console.log(this.planifier_certif.value.timedeb.setHours(7));

    /*this.planifier_certif.get("serv1_id").valueChanges.subscribe(x => {
      this.planifier_certif.patchValue({ serv1_id: x, }, { onlySelf: true, emitEvent: false });
      console.log('bb')
    

    });*/

  }

  recherche_grp() {
 console.log(this.cherchergroupe.value);
    this.service_grp_certification.get_grp_certif_byfiltre(this.cherchergroupe.value).subscribe((data: any) => {
      this.groupe_certif = [];
      console.log(this.groupe_certif);
      console.log(data);
      data.forEach((element: any) => {
        //this.grp_forma_test['name']=element.nom_groupe_forma;
        console.log(element);
        this.service_grp_certification.get_etudiants(element.id).subscribe((res: any) => {
          console.log(res);
            res['id'] = element.id;
          res['name'] = element.nom_groupe_certif;
          res['certif'] = element.certification_id;
          res['langue'] = element.langue;
          res['date'] = element.date;
          res['heuredeb'] = element.heuredeb;
          res['heurefin'] = element.heurefin;
          res['surv1'] = element.surv1_id;
          res['surv2'] = element.surv2_id;
          res['salle'] = element.local_id;

          res['cours'] = element.cours;
          res['effectif'] = res.length;
          this.groupe_certif.push(res);
          console.log(this.groupe_certif);
          this.groupe_certif = [...this.groupe_certif];
          this.selected = [this.groupe_certif[0]];
        });

      });


    });

      


  }

  getdate(rowdate: Date) {
     console.log(rowdate);
    var date1 = rowdate.getFullYear() + '-' + (rowdate.getUTCMonth() + 1) + '-' + rowdate.getDate();
    return date1 

  }

  gettime(rowtime : Date)
{    var t= rowtime.getHours()+':'+rowtime.getMinutes()+':00';
    
    return t ;
  }
  planifier_certification() {
    this.b_salle = true;
    this.b_surv1 = true;
    this.b_surv2 = true;
    this.b_salle_base = true;
    this.b_surv1_base = true;
    this.b_surv2_base = true;
    var i = 0;
    this.grp_cert_ids = [];
    this.surv1_ids = [];
    this.surv2_ids = [];

    let nv_local = this.planifier_certif.value.local_id;
    let nv_surv1 = this.planifier_certif.value.surv1_id;
    let nv_surv2 = this.planifier_certif.value.surv2_id;
    let hdeb = this.gettime(this.planifier_certif.value.timedeb);
    let hfin = this.gettime(this.planifier_certif.value.timefin);
    

    let nv_date = this.getdate(this.planifier_certif.value.date);
//console.log(nv_date);
    var date = new Date(nv_date);

   // var hfin = new Date(nv_date[1]);

       this.service_local.get_local_byid(nv_local).subscribe((dt: any) => {

     
    //let listdate=this.getdate(this.planifier_certif.value.date);
    //console.log(listdate);
 
if(dt.capacite>this.rowselected.effectif)
    // console.log(TimeOne)
{
 
    //console.log(this.groupe_certif[i]['salle']=='ss');
    while (this.b_salle && this.b_surv1 && this.b_surv2 && i < this.groupe_certif.length) {

      if (i != this.table.bodyComponent.getRowIndex(this.rowselected)) {
       // let TimeOne = new Date(this.groupe_certif[i]['hdeb']);
        let datel = new Date(this.groupe_certif[i]['date']);
       let TimeOne = this.groupe_certif[i]['heuredeb'];
       let Timetwo =this.groupe_certif[i]['heurefin'];
        if (this.groupe_certif[i]['salle'] == nv_local) {
          if ((datel==date)&&(hdeb >= TimeOne && hdeb <= Timetwo) || (hfin >= TimeOne && hfin <= Timetwo)||(hdeb <=TimeOne && hfin >= Timetwo)) {
            this.b_salle = false;
          }
        }
        if (this.groupe_certif[i]['surv1'] == nv_surv1||this.groupe_certif[i]['surv1'] == nv_surv2) {
          if ((datel==date)&&(hdeb >= TimeOne && hdeb <= Timetwo) || (hfin >= TimeOne && hfin <= Timetwo)||(hdeb <=TimeOne && hfin >= Timetwo)) {
            this.b_surv1 = false;
          }
        }
        if(nv_surv2.length!=0)
        {
          if (this.groupe_certif[i]['surv2'] == nv_surv2 ||this.groupe_certif[i]['surv2'] == nv_surv1) {
            if ((datel==date)&&(hdeb >= TimeOne && hdeb <= Timetwo) || (hfin >= TimeOne && hfin <= Timetwo)||(hdeb <=TimeOne && hfin >= Timetwo)) {
              this.b_surv2 = false;
            }
          }
        }
      }
      i++;
    }


    if (this.b_salle && this.b_surv1 && this.b_surv2) {

      this.service_grp_certification.get_grp_certif_bylocal(nv_local).subscribe((d: any) => {
      //  this.grp_cert_ids = [];
      

      //  this.service_seance.get_seance_by_list_grps_id(this.grp_cert_ids).subscribe((element: any) => {

        //  console.log(element);
          var h = 0;
          if (d.length != 0) {

            while (this.b_salle_base && h < d.length) {
              var nomgrp: any;
              var bdate=new Date(d[h].date);
              let TimeOne = d[h].heuredeb;
              let Timetwo = d[h].heurefin;
              //console.log(TimeOne);
              console.log(this.cherchergroupe.value.cours)
             
              if ((bdate==date)&&(hdeb >= TimeOne && hdeb <= Timetwo) || (hfin >= TimeOne && hfin <= Timetwo)||(hdeb <=TimeOne && hfin >= Timetwo)) {
                
                if(this.cherchergroupe.value.cours=="aménagée")
                {
                  if(d[h].type=="aménagée")
                    {this.b_salle_base = false;
                    nomgrp = d[h].nom_groupe_certif;
                    }
                }
                else
                {
                  if(d[h].type=="jour"||d[h].type=="alternance")
                  {
                    this.b_salle_base = false;
                    nomgrp = d[h].nom_groupe_certif;
                  }
                }
                
              }


              h++

            }
         
          }
          if (this.b_salle_base == true) {

            this.service_grp_certification.get_grp_certif_bysv(nv_surv1).subscribe((de: any) => {
              this.grp_cert_ids = [];
             
              //this.service_seance.get_seance_by_list_grps_id(this.grp_cert_ids).subscribe((de: any) => {

                var g = 0;
                if (de.length != 0) {

                  while (this.b_surv1_base && g < de.length) {
                    var nomgrp1: any;

                    var bdate=new Date(d[g].date);

              let TimeOne = d[g].heuredeb;
              let Timetwo = d[g].heurefin;
                    //console.log(TimeOne);
                    if ((bdate==date)&&(hdeb >= TimeOne && hdeb <= Timetwo) || (hfin >= TimeOne && hfin <= Timetwo)||(hdeb <=TimeOne && hfin >= Timetwo)) {
                        
                if(this.cherchergroupe.value.cours=="aménagée")
                {
                  if(de[g].type=="aménagée")
                      {
                      this.b_surv1_base = false;
                      nomgrp1 = de[g].nom_groupe_certif;
                      }
                }
                else
                {
                  if(de[g].type=="jour"||de[g].type=="alternance")
                  {
                    this.b_surv1_base = false;
                      nomgrp1 = de[g].nom_groupe_certif;
                  }
                }
                


                      //console.log('aaaaa');
                      // console.log(this.b_salle_base);
                    }
                    g++

                  }
                }






                this.service_grp_certification.get_grp_certif_bysv(nv_surv2).subscribe((de: any) => {
                  this.grp_cert_ids = [];
                
                  //this.service_seance.get_seance_by_list_grps_id(this.grp_cert_ids).subscribe((de: any) => {
    
                    var bn = 0;
                    if (de.length != 0) {
    
                      while (this.b_surv2_base && bn < de.length) {
                        var nomgrp1: any;
    
                        var bdate=new Date(d[bn].date);

                  let TimeOne = d[bn].heuredeb;
                  let Timetwo = d[bn].heurefin;
                        //console.log(TimeOne);
                        if ((bdate==date)&&(hdeb >= TimeOne && hdeb <= Timetwo) || (hfin >= TimeOne && hfin <= Timetwo)||(hdeb <=TimeOne && hfin >= Timetwo)) {
                            
                    if(this.cherchergroupe.value.cours=="aménagée")
                    {
                      if(de[bn].type=="aménagée")
                          {
                          this.b_surv2_base = false;
                          nomgrp1 = de[bn].nom_groupe_certif;
                          }
                    }
                    else
                    {
                      if(de[bn].type=="jour"||de[bn].type=="alternance")
                      {
                        this.b_surv2_base = false;
                          nomgrp1 = de[bn].nom_groupe_certif;
                      }
                    }
                    
    
    
                          //console.log('aaaaa');
                          // console.log(this.b_salle_base);
                        }
                        bn++
    
                      }
                    }
    
    
    


                if (this.b_surv1_base == true && this.b_surv2_base == true) {


                  this.rowselected['salle'] = nv_local;
                  this.rowselected['surv1'] = nv_surv1;
                  this.rowselected['surv2'] = nv_surv2;
                  this.rowselected['date'] = nv_date;
                  this.rowselected['heuredeb'] = hdeb;
                  this.rowselected['heurefin'] = hfin;



                  this.modalRef.hide();

                }
                else {
                  //this.service_grp_certification.get_grp_certif_byid(nomgrp1).subscribe((e1: any) => {
                  Swal.fire({
                    title: "surv1 est occuppée dans cette date par le groupe" + nomgrp1,
                    buttonsStyling: false,
                    confirmButtonClass: "btn btn-success"
                  })
               
                }

                });
            });
          }
          else{
           // this.service_grp_certification.get_grp_certif_byid(nomgrp).subscribe((e: any) => {
            Swal.fire({
              title: "salle est occuppée dans cette date par le groupe "+nomgrp,
              buttonsStyling: false,
              confirmButtonClass: "btn btn-success"
          });
        
          }


      


       
    


      });
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
        title: "surv1 est occuppée dans cette date!",
        buttonsStyling: false,
        confirmButtonClass: "btn btn-success"
      })

    }
    // this.rowselected['surv1']=nv_surv1
    //this.getdate(this.planifier_certif.value.date);



 
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

  save_grp_certif() {
    if (this.groupe_certif.length != 0) {
      this.groupe_certif.forEach((element: any) => {
        this.deupdate_grp_certif = {
          surv1_id: element['surv1'],
          surv2_id: element['surv2'],
          date: element['date'],
          heuredeb: element['heuredeb'],
          heurefin: element['heurefin'],
          local_id: element['salle'],
        }

console.log(element);
       // console.log(element['hdeb']);
        this.service_grp_certification.update_grp_certif(element['id'], this.deupdate_grp_certif).subscribe((data: any) => {
          //console.log(data);

console.log(data);

          // console.log(element['id']);
         /* this.service_seance.get_seance(element['id']).subscribe((resul: any) => {
            // console.log(resul);
            if (resul != null) {
              this.add_seance_certif = {
                hdeb: element['hdeb'],
                hfin: element['hfin'],
                type: element['cours'],
                groupe_certification_id: element['id'],
              }

              this.service_seance.update_seance(resul.id, this.add_seance_certif).subscribe((rest: any) => {
                console.log(rest);

              });
            }
            else {

              this.add_seance_certif = {
                hdeb: element['hdeb'],
                hfin: element['hfin'],
                type: element['cours'],
                groupe_certification_id: element['id'],
              }
              console.log(this.add_seance_certif)
              this.service_seance.add_seance(this.add_seance_certif).subscribe((res: any) => {
                console.log(res);
              });
            }

          });*/


        });


      });


    }
  }

  initialiser(row: any) {

    row.hdeb = '';
    row.hfin = '';
    row.surv1 = null;
    row.salle = null;
    row.type = null;

    this.groupe_certif = [...this.groupe_certif];
    this.deupdate_grp_certif = {
      surv1_id: null,
      surv2_id: null,
      date: null,
      heuredeb: null,
      heurefin: null,
      local_id: null,
    }



    this.service_grp_certification.update_grp_certif(row.id, this.deupdate_grp_certif).subscribe((data: any) => {
      console.log(data);



    });

  }

}
