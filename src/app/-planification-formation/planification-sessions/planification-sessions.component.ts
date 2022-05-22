import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CertificationService } from 'app/services/certification/certification.service';
import { GroupeClasseService } from 'app/services/groupe_classe/groupe-classe.service';
import { GroupeFormationService } from 'app/services/groupe_formation/groupe-formation.service';

@Component({
  selector: 'app-planification-sessions',
  templateUrl: './planification-sessions.component.html',
  styleUrls: ['./planification-sessions.component.css']
})
export class PlanificationSessionsComponent implements OnInit {
  
  cherchergroupe: FormGroup | any ;

  all_certif: any = []

  all_cours: any = [];
  constructor(private service_certif: CertificationService,
    private service_grp_formation: GroupeFormationService,
    private service_classe: GroupeClasseService,
    private fb: FormBuilder,) { }

  ngOnInit(): void {
    this.cherchergroupe = this.fb.group({
      certif_id: [,[Validators.required]],
      cours: ['jour',[Validators.required]],
      langue:['Français',[Validators.required]],

    });
    this.service_certif.get_certifications().subscribe((data) => {
      console.log(data);
      this.all_certif = data;
    });
 

    this.service_classe.get_cours().subscribe((data) => {
      console.log(data);
      this.all_cours = data;
    });

  }
  recherche_grp()
  {
    
  }
}
