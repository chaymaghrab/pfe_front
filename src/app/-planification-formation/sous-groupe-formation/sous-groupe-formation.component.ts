import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild, ɵSWITCH_COMPILE_DIRECTIVE__POST_R3__ } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ColumnMode, SelectionType } from '@swimlane/ngx-datatable';
import { Page } from 'app/model/page';
import { CertificationService } from 'app/services/certification/certification.service';
import { GroupeClasseService } from 'app/services/groupe_classe/groupe-classe.service';
import { GroupeFormationService } from 'app/services/groupe_formation/groupe-formation.service';
import Swal from 'sweetalert2';




@Component({
  selector: 'app-sous-groupe-formation',
  templateUrl: './sous-groupe-formation.component.html',
  styleUrls: ['./sous-groupe-formation.component.css']
})


export class SousGroupeFormationComponent implements OnInit {
  public grp_forma_add: {
    nom_groupe_forma: string;
    certification_id: number;
    langue: string;
    cours: string;
    effectif: number;

  }
  public affacter_etd_grp_forma: {
    grp_forma_id: number;
    grp_classe_id: number;
  }
  cherchergroupe: FormGroup | any;

  
  @ViewChild('myTable') table: any;

  @ViewChild('myTable2') table2: any;
  @ViewChild('myTable3') table3: any;


  grp_classe_filtre: any = [];
  sous_groupe_classe: any = [];
  all_certif: any = []

  all_cours: any = [];
  all_ecoles: any = [];
  groupe_forma: any = [];
  groupe_forma_base: any = [];
  text: string = "";
  grp_forma_test: any = [];
  taillesousgroupe = 0;
  indice_groupe = 65;

  rows = [];
  selected = [];
  selected2 = [];
  selected3 = [];

  ColumnMode = ColumnMode;
  SelectionType = SelectionType;

  page = new Page();


  rows2: any[] = [];
  expanded: any = {};
  timeout: any;


  constructor(private service_certif: CertificationService,
    private service_grp_formation: GroupeFormationService,
    private service_classe: GroupeClasseService,
    private fb: FormBuilder,
    private http: HttpClient) {

    this.page.pageNumber = 0;
    this.page.size = 3;

  }

  ngOnInit(): void {
    this.cherchergroupe = this.fb.group({
      certification_id: [, [Validators.required]],
      cours: ['jour', [Validators.required]],
      langue: ['Français', [Validators.required]],
      ecole: ['all', [Validators.required]],

    });

    var cert = {
      type: 'théorique'
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
      this.cherchergroupe.patchValue({certification_id: x,}, { onlySelf: true, emitEvent: false });
      this.refrech_grp_forma();
    });
    this.cherchergroupe.get("cours").valueChanges.subscribe(x => {
      this.cherchergroupe.patchValue({cours: x,}, { onlySelf: true, emitEvent: false });
      this.refrech_grp_forma();
    });
    
    this.cherchergroupe.get("langue").valueChanges.subscribe(x => {
      this.cherchergroupe.patchValue({langue: x,}, { onlySelf: true, emitEvent: false });
      this.refrech_grp_forma();
    });


  }



  recherche_grp() {
    this.service_grp_formation.get_classe_byfiltre(this.cherchergroupe.value)
      .subscribe((data: any) => {
        //console.log(data);

        data.forEach((element: any) => {
          element['effectif'] = element.etudiants.length;
        });
        this.sous_groupe_classe = [];
        this.taillesousgroupe = 0;
        this.rows = data;
        if (this.groupe_forma.length != 0) {
          this.groupe_forma.forEach(element => {
            element.forEach(elem => {
              this.rows = this.rows.filter(t => t.code_groupe != elem.code_groupe);

            });
          });
          this.selected = [this.rows[0]];
        }
        this.selected = [this.rows[0]];
        // this.grp_classe_filtre = data;

      });

    //console.log(this.cherchergroupe.value)
  }

  afficher_etudiants(id: any) {
    console.log(id);
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
    console.log(this.selected3);
  }

  onActivate(event) {
    console.log('Activate Event', event);
  }

  add(row: any) {
    if (this.rows.length != 0) {
      let x = this.table.bodyComponent.getRowIndex(row);
      this.rows.splice(x, 1);
      this.rows = [...this.rows];
      this.selected = [this.rows[0]];
      this.sous_groupe_classe.push(row);
      this.sous_groupe_classe = [...this.sous_groupe_classe];
      this.selected2 = [this.sous_groupe_classe[0]];
      this.sous_grp_length(row, 'add');

    }
    else {
      console.log(this.sous_groupe_classe);
    }

  }
  addall(row: any) {
    if (this.rows.length != 0) {

      this.rows.forEach(element => {
        this.sous_groupe_classe.push(element);
        this.sous_grp_length(element, 'add');
      });
      this.sous_groupe_classe = [...this.sous_groupe_classe];
      this.rows = []
      this.rows = [...this.rows];
      this.selected = [this.rows[0]];
      this.selected2 = [this.sous_groupe_classe[0]];

    }
    else {
      console.log(this.sous_groupe_classe);
    }

  }

  delete(row: any) {
    if (this.sous_groupe_classe.length != 0) {

      let x = this.table2.bodyComponent.getRowIndex(row);
      this.sous_groupe_classe.splice(x, 1);
      this.sous_groupe_classe = [...this.sous_groupe_classe];
      this.selected2 = [this.sous_groupe_classe[0]];
      this.rows.push(row);
      this.rows = [...this.rows];
      this.selected = [this.rows[0]];
      this.sous_grp_length(row, 'delete');
    }
    else {
      console.log(this.sous_groupe_classe);
    }
  }

  deleteall(row: any) {
    if (this.sous_groupe_classe.length != 0) {


      this.sous_groupe_classe.forEach(element => {
        this.rows.push(element);
        this.sous_grp_length(element, 'delete');
      });
      this.rows = [...this.rows];
      this.selected = [this.rows[0]];
      this.sous_groupe_classe = [];
      this.sous_groupe_classe = [...this.sous_groupe_classe];
      this.selected2 = [this.sous_groupe_classe[0]];
    }
    else {
      console.log(this.sous_groupe_classe);
    }
  }

  sous_grp_length(row: any, param: any) {
    if (param == 'add')
      this.taillesousgroupe += row.effectif;
    else if (param == 'delete')
      this.taillesousgroupe -= row.effectif;
    else
      console.log('non');
  }

  down() {
    if (this.sous_groupe_classe.length != 0) {
      this.sous_groupe_classe['name'] = String.fromCharCode(this.indice_groupe);
      this.sous_groupe_classe['certif'] = this.cherchergroupe.value.certification_id;
      this.sous_groupe_classe['langue'] = this.cherchergroupe.value.langue;
      this.sous_groupe_classe['cours'] = this.cherchergroupe.value.cours;
      this.sous_groupe_classe['effectif'] = this.taillesousgroupe;

      this.indice_groupe++;
      this.groupe_forma.push(this.sous_groupe_classe);
      this.groupe_forma = [...this.groupe_forma];
      this.selected3 = [this.groupe_forma[0]];
      this.sous_groupe_classe = [];
      this.sous_groupe_classe = [...this.sous_groupe_classe];
      this.taillesousgroupe = 0;
      console.log(this.groupe_forma);
    }
    else {
      console.log('non');
    }

  }
  up(row: any) {
    // console.log(this.groupe_forma);
    if (this.groupe_forma.length != 0) {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonClass: 'btn btn-success',
        cancelButtonClass: 'btn btn-danger',
        confirmButtonText: 'Yes, remove it!',
        buttonsStyling: false
      }).then((result) => {
        if (result.value) {
          let x = this.table3.bodyComponent.getRowIndex(row);
          this.groupe_forma.splice(x, 1);
          // this.groupe_forma = [...this.groupe_forma];
          // console.log(this.groupe_forma);

          this.selected3 = [this.groupe_forma[0]];
          row.forEach(element => {
            this.sous_groupe_classe.push(element);
            this.sous_grp_length(element, 'add');
          });
          this.sous_groupe_classe = [...this.sous_groupe_classe];
          this.selected2 = [this.sous_groupe_classe[0]];
        }
      });
    }
  }

  onPage(event) {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      console.log('paged!', event);
    }, 100);
  }



  toggleExpandRow(row) {
    console.log('Toggled Expand Row!', row);
    this.table3.rowDetail.toggleExpandRow(row);
  }

  onDetailToggle(event) {
    console.log('Detail Toggled', event);
  }

  effectif_grp_final(row: any) {
    let x = 0;
    row.forEach(element => {
      x += element.effectif;
    });
    return x;
  }

  save_grp_forma() {
    
    this.service_grp_formation.get_grp_forma_byfiltre(this.cherchergroupe.value).subscribe((rs: any) => {
      rs.forEach(rs_elem => {
        this.service_grp_formation.delete_grp_forma(rs_elem.id).subscribe(resul=>
        {
          console.log(resul);
        })
      });

    this.groupe_forma.forEach(element => {
      this.grp_forma_add = {
        nom_groupe_forma: element.name,
        certification_id: element.certif,
        langue: element.langue,
        cours: element.cours,
        effectif: element.effectif
      }
      console.log(this.grp_forma_add);
      this.service_grp_formation.add_grp_forma(this.grp_forma_add).subscribe((data: any) => {
        element.forEach((elem: any) => {
          this.affacter_etd_grp_forma = {
            grp_forma_id: data.id,
            grp_classe_id: elem.id,

          }
          this.service_grp_formation.affecter_etd_grp_forma(this.affacter_etd_grp_forma).subscribe((res: any) => {
            console.log(res);
          });
        });

      });

    });
  });

  }
  refrech_grp_forma() {
    this.groupe_forma = [];
    this.rows = [];
    this.sous_groupe_classe = [];
    this.taillesousgroupe = 0;    this.service_grp_formation.get_grp_forma_byfiltre(this.cherchergroupe.value).subscribe((data: any) => {
      console.log(this.cherchergroupe.value);
      data.forEach((element: any) => {
        //this.grp_forma_test['name']=element.nom_groupe_forma;
        this.service_grp_formation.get_sous_grp(element.id).subscribe((res: any) => {
          res.forEach((elem) => {
            elem['effectif'] = elem.etudiants.length;
          });
          res['name'] = element.nom_groupe_forma;
       /*   res['certif'] = element.certification_id;
          res['langue'] = element.langue;
          res['cours'] = element.cours;
          res['effectif'] = element.effectif;*/
          this.groupe_forma.push(res);
          console.log(this.groupe_forma);
          this.groupe_forma = [...this.groupe_forma];
          this.selected3 = [this.groupe_forma[0]];
        });

      });


    });

    
  }
  changevalue() {
    console.log('aaaaa');
  }
}
