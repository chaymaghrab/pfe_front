import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ColumnMode, SelectionType } from '@swimlane/ngx-datatable';
import { Page } from 'app/model/page';
import { CertificationService } from 'app/services/certification/certification.service';
import { GroupeClasseService } from 'app/services/groupe_classe/groupe-classe.service';
import { GroupeFormationService } from 'app/services/groupe_formation/groupe-formation.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-auto-sous-groupe-forma',
  templateUrl: './auto-sous-groupe-forma.component.html',
  styleUrls: ['./auto-sous-groupe-forma.component.css']
})
export class AutoSousGroupeFormaComponent implements OnInit {

  public groupeformatp_add: {
    nom_groupe_forma: string;
    certification_id: number;
    langue: string;
    cours: string;
    effectif: number;

  }
  public affacter_etd_grp_forma_tp: {
    grp_forma_id: number;
    etudiant_id: Array<number>;
  }

  @ViewChild('myTable') table: any;

  @ViewChild('myTable2') table2: any;

  cherchergroupe: FormGroup | any;
  groupeforma: FormGroup | any;
  indice_groupe = 0;

  opt_selected: any;
  groupeformatp: any = [];
  list_etd_groupe: any = [];
  all_certif: any = []
  list_etudiant: any = [];
  all_cours: any = [];
  all_ecoles: any = [];
  rows = [];
  selected = [];
  selected2 = [];
  ColumnMode = ColumnMode;
  SelectionType = SelectionType;
  taillesousgroupe = 0;
  expanded: any = {};
  timeout: any;
  titletext = "";
  htmltext = "";
  page = new Page();


  constructor(private fb: FormBuilder,
    private service_certif: CertificationService,
    private service_grp_formation: GroupeFormationService,
    private service_classe: GroupeClasseService,) { }

  ngOnInit(): void {
    this.cherchergroupe = this.fb.group({
      certification_id: [3, [Validators.required]],
      cours: ['jour', [Validators.required]],
      langue: ['Français', [Validators.required]],
      ecole: ['all', [Validators.required]],
    });

    this.groupeforma = this.fb.group({
      nbetud: [1, [Validators.required, Validators.min(1)]],
    })

    var cert = {
      type: 'pratique'
    }
    this.service_certif.get_certificationsbytype(cert).subscribe((data) => {
      console.log(data);
      this.all_certif = data;
    });


    this.service_classe.get_cours().subscribe((data) => {
      console.log(data);
      this.all_cours = data;
    });

    this.service_classe.get_ecole().subscribe((data) => {
      console.log(data);
      this.all_ecoles = data;
    });

    this.refrech_grp_forma();
    this.cherchergroupe.get("certification_id").valueChanges.subscribe(x => {
      this.cherchergroupe.patchValue({ certification_id: x, }, { onlySelf: true, emitEvent: false });
      this.refrech_grp_forma();
    });
    this.cherchergroupe.get("cours").valueChanges.subscribe(x => {
      this.cherchergroupe.patchValue({ cours: x, }, { onlySelf: true, emitEvent: false });
      this.refrech_grp_forma();
    });

    this.cherchergroupe.get("langue").valueChanges.subscribe(x => {
      this.cherchergroupe.patchValue({ langue: x, }, { onlySelf: true, emitEvent: false });
      this.refrech_grp_forma();
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
  onSelect2({ selected2 }) {
    console.log('Select Event', selected2, this.selected2);

  }
  onActivate2(event) {
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
    this.table2.rowDetail.toggleExpandRow(row);
  }

  onDetailToggle(event) {
    console.log('Detail Toggled', event);
  }



  recherche_grp() {
    this.taillesousgroupe = 0;
    this.list_etudiant = [];
    console.log(this.cherchergroupe.value);
    this.service_grp_formation.get_classe_byfiltre(this.cherchergroupe.value)
      .subscribe((data: any) => {
        data.forEach((element) => {
          element['effectif'] = element.etudiants.length;
          this.taillesousgroupe += element.effectif;
          element.etudiants.forEach((ele: any) => {
            this.list_etudiant.push(ele);
            this.list_etudiant = [...this.list_etudiant];
          });
        });
        this.rows = data;
        this.selected = [this.rows[0]];
        console.log(this.list_etudiant);
      });

  }

  creergroupe() {
    this.indice_groupe = 65;
    var cer = (<HTMLInputElement>document.getElementById('cer_id')).textContent;
    var cou = (<HTMLInputElement>document.getElementById('cou_id')).textContent;
   

    //console.log( this.groupeforma.value.nbetud);
    if (this.list_etudiant.length != 0) {
      this.opt_selected = '';
      this.groupeformatp = [];
      this.list_etd_groupe = [];
      let x = this.list_etudiant.length;
      let y = this.groupeforma.value.nbetud;
      let incr = 0;
      this.titletext = "";
      if (x % y == 0) {
        this.titletext = Math.floor(x / y) + " groupe de " + y;
        this.htmltext = '';
      }
      else {
        this.titletext = "";
        this.htmltext = Math.floor(x / y) + ' groupe de ' + y + ' et un groupe de ' + x % y + '<br><br><input type="radio" name="opt" value="1"checked><label for="1">repartir le dernier groupe</label><br>' +
          '<input type="radio" name="opt" value="2"><label for="2">creer un nouveau groupe</label>';
      }

      //console.log(this.titletext);
      Swal.fire({
        title: x + " etudiants ",
        text: this.titletext,
        type: 'warning',
        html: this.htmltext,
        showCancelButton: true,
        confirmButtonClass: 'btn btn-success',
        cancelButtonClass: 'btn btn-danger',
        confirmButtonText: 'Yes, delete it!',
        buttonsStyling: false
      }).then((result) => {
        if (result.value) {
          while (x - incr >= y) {

            for (let i = incr; i < incr + y; i++) {
              // console.log(this.list_etudiant[i]);
              this.list_etd_groupe.push(this.list_etudiant[i]);
            }
            this.list_etd_groupe['name'] = String.fromCharCode(this.indice_groupe) + '/' + cer+'/' + cou;
            this.list_etd_groupe['certif'] = this.cherchergroupe.value.certification_id;
            this.list_etd_groupe['langue'] = this.cherchergroupe.value.langue;
            this.list_etd_groupe['cours'] = this.cherchergroupe.value.cours;
            this.list_etd_groupe['effectif'] = this.list_etd_groupe.length;

            this.indice_groupe++;
            this.groupeformatp.push(this.list_etd_groupe);
            console.log(this.groupeformatp);

            incr += y;
            this.list_etd_groupe = [];
          }
          this.opt_selected = $(document.querySelector('input[name="opt"]:checked')).val() + '';



          if (x > incr && incr > 0) {
            console.log(this.opt_selected);
            this.list_etd_groupe = [];
            if (this.opt_selected === '2') {
              for (let j = incr; j < x; j++) {
                this.list_etd_groupe.push(this.list_etudiant[j]);
              }
              this.list_etd_groupe['name'] = String.fromCharCode(this.indice_groupe) + '/'+ cer+'/' + cou+'/' ;;
              this.list_etd_groupe['certif'] = this.cherchergroupe.value.certification_id;
              this.list_etd_groupe['langue'] = this.cherchergroupe.value.langue;
              this.list_etd_groupe['cours'] = this.cherchergroupe.value.cours;
              this.list_etd_groupe['effectif'] = this.list_etd_groupe.length;
              this.indice_groupe++;
              this.groupeformatp.push(this.list_etd_groupe);
            }
            else {
              var t = Math.floor((x % y) / (Math.floor(x / y)));
              var r = (x % y) % (Math.floor(x / y));
              if (t > 0) {
                for (let p = 0; p < Math.floor(x / y) - 1; p++) {
                  for (let n = incr; n < incr + t; n++) {
                    this.groupeformatp[p].push(this.list_etudiant[n]);
                  }
                  incr += t;
                }
                for (let m = incr; m < x; m++) {
                  this.groupeformatp[Math.floor(x / y) - 1].push(this.list_etudiant[m])
                }

              }
              else {
                var o = 0;
                for (let z = incr; z < x; z++) {
                  this.groupeformatp[o].push(this.list_etudiant[z])
                  o++
                }
              }
            }
          }
          Swal.fire(
            {
              title: 'created!',
              text: $(document.querySelector('input[name="opt"]:checked')).val() + '',
              type: 'success',
              confirmButtonClass: "btn btn-success",
              buttonsStyling: false
            }
          )

          console.log(this.groupeformatp);
          this.groupeformatp = [...this.groupeformatp];

        }
      });
      /*  while (x - incr >= y) {
  
          for (let i = incr; i < incr + y; i++) {
          // console.log(this.list_etudiant[i]);
            this.list_etd_groupe.push(this.list_etudiant[i]);
          }
          this.list_etd_groupe['name']=String.fromCharCode(this.indice_groupe);
          
          this.indice_groupe++;
          this.groupeformatp.push([this.list_etd_groupe]);
          incr += y;
          this.list_etd_groupe=[];
        }
    if (x > incr && incr > 0) {
          this.list_etd_groupe=[];
          for (let j = incr; j < x; j++) {
            this.list_etd_groupe.push(this.list_etudiant[j]);
          }
          this.list_etd_groupe['name']=String.fromCharCode(this.indice_groupe);
          this.indice_groupe++;
          this.groupeformatp.push([this.list_etd_groupe]);
          
        }*/
    }

  }

  save_grp_forma() {


    this.service_grp_formation.get_grp_forma_byfiltre(this.cherchergroupe.value).subscribe((rs: any) => {

      var b = true;
      rs.forEach(e => {
        if (e.local_id != null)
          b = false;

      });

      if (b == true) {
        rs.forEach(rs_elem => {
          this.service_grp_formation.delete_grp_forma(rs_elem.id).subscribe(resul => {
            console.log(resul);
          })
        });
        this.groupeformatp.forEach(element => {
          var list_etd_id = [];
          // console.log(element)
          this.groupeformatp_add = {
            nom_groupe_forma: element.name,
            certification_id: element.certif,
            langue: element.langue,
            cours: element.cours,
            effectif: element.effectif
          }
          console.log(this.groupeformatp_add);
          this.service_grp_formation.add_grp_forma(this.groupeformatp_add).subscribe((data: any) => {
            console.log(data);
            element.forEach((elem: any) => {
              list_etd_id.push(elem.id);

            });
            this.affacter_etd_grp_forma_tp = {
              grp_forma_id: data.id,
              etudiant_id: list_etd_id,
            }
            console.log(this.affacter_etd_grp_forma_tp)
            this.service_grp_formation.affecter_etd_grp_forma_tp(this.affacter_etd_grp_forma_tp).subscribe((res: any) => {
              console.log(res);
            });

          });

        });
      }
      else {
        Swal.fire({
          title: 'Cancelled',
          text: 'Your imaginary file is safe :)',
          type: 'error',
          confirmButtonClass: "btn btn-info",
          buttonsStyling: false
        })
      }
    });
  }

  refrech_grp_forma() {
    this.groupeformatp = [];
    this.taillesousgroupe = 0;
    this.list_etudiant = [];
    this.service_grp_formation.get_grp_forma_byfiltre(this.cherchergroupe.value).subscribe((data: any) => {
      console.log(this.cherchergroupe.value);
      data.forEach((element: any) => {
        //this.grp_forma_test['name']=element.nom_groupe_forma;
        this.service_grp_formation.get_etudiants(element.id).subscribe((res: any) => {

          res['name'] = element.nom_groupe_forma;
          res['certif'] = element.certification_id;
          res['langue'] = element.langue;
          res['cours'] = element.cours;
          res['effectif'] = element.effectif;
          this.groupeformatp.push(res);
          console.log(this.groupeformatp);
          this.groupeformatp = [...this.groupeformatp];
          this.selected = [this.groupeformatp[0]];
        });

      });


    });


  }


}
