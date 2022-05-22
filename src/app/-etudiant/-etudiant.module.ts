import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImportEtudiantComponent } from './import-etudiant/import-etudiant.component';
import { ListEtudiantComponent } from './list-etudiant/list-etudiant.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EtudiantRoutes } from './etudiant.routing';
import { RouterModule } from '@angular/router';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import { TagInputModule } from 'ngx-chips';



@NgModule({
  declarations: [ImportEtudiantComponent, ListEtudiantComponent],
  imports: [
    CommonModule,
    FormsModule,
    TagInputModule,
    JwBootstrapSwitchNg2Module,
    NgbModule,
    FormsModule,
    RouterModule.forChild(EtudiantRoutes),
  ]
})
export class EtudiantModule { }
