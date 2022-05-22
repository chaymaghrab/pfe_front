import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ColumnMode, SelectionType } from '@swimlane/ngx-datatable';
import { Page } from 'app/model/page';
import { CertificationService } from 'app/services/certification/certification.service';
import { GroupeClasseService } from 'app/services/groupe_classe/groupe-classe.service';
import { GroupeFormationService } from 'app/services/groupe_formation/groupe-formation.service';
import { until } from 'protractor';
import { repeat } from 'rxjs-compat/operator/repeat';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-auto-sous-groupe-forma',
  templateUrl: './auto-sous-groupe-forma.component.html',
  styleUrls: ['./auto-sous-groupe-forma.component.css']
})
export class AutoSousGroupeFormaComponent implements OnInit {
  @ViewChild('myTable') table: any;

  @ViewChild('myTable2') table2: any;

  cherchergroupe: FormGroup | any;
  groupeforma: FormGroup | any;
  indice_groupe = 65;

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

  page = new Page();


  constructor(private fb: FormBuilder,
    private service_certif: CertificationService,
    private service_grp_formation: GroupeFormationService,
    private service_classe: GroupeClasseService,) { }

  ngOnInit(): void {
    this.cherchergroupe = this.fb.group({
      certif_id: [2, [Validators.required]],
      cours: ['jour', [Validators.required]],
      langue: ['fr', [Validators.required]],
      ecole: ['ecole1', [Validators.required]],
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
    //console.log( this.groupeforma.value.nbetud);
    if(this.list_etudiant.length != 0){

    this.groupeformatp = [];
    this.list_etd_groupe = [];
    let x = this.list_etudiant.length;
    let y = this.groupeforma.value.nbetud;
    let incr = 0;
if(x%y==0){
  var titletext=Math.floor(x / y) + " groupe de "+y;
  var htmltext='';
}
else{
  var titletext=Math.floor(x / y) + " groupe de "+y+" et un groupe de "+x%y;
  var htmltext='<div class="form-group">' +
  '<input type="radio" name="opt" value="1"checked><label for="1">repartir le dernier groupe</label></div>'+
  '<div class="form-group"><input type="radio" name="opt" value="2"><label for="2">creer un nouveau groupe</label>'+
    '</div>'
}


    Swal.fire({
      title: x + " etudiants ",
      text: titletext,
      type: 'warning',
      html: htmltext,
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
          this.list_etd_groupe['name'] = String.fromCharCode(this.indice_groupe);

          this.indice_groupe++;
          this.groupeformatp.push([this.list_etd_groupe]);
          incr += y;
          this.list_etd_groupe = [];
        }
        if (x > incr && incr > 0) {
          this.list_etd_groupe = [];
          for (let j = incr; j < x; j++) {
            this.list_etd_groupe.push(this.list_etudiant[j]);
          }
          this.list_etd_groupe['name'] = String.fromCharCode(this.indice_groupe);
          this.indice_groupe++;
          this.groupeformatp.push([this.list_etd_groupe]);

        }

        Swal.fire(
          {
            title: 'created!',
            text: 'Your groupes has been created.',
            type: 'success',
            confirmButtonClass: "btn btn-success",
            buttonsStyling: false
          }
        )
        var tesss=$(document.querySelector('input[name="opt"]:checked')).val();
        console.log(tesss)
        this.groupeformatp = [...this.groupeformatp];
        console.log(this.groupeformatp);
      }
    })
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

  }
}
