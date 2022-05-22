import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AffecterCertifComponent } from './affecter-certif/affecter-certif.component';

import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { TagInputModule } from 'ngx-chips';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import { GrpClasseRoutes } from './grp_classe.routing';



@NgModule({
  declarations: [AffecterCertifComponent],
  imports: [
    CommonModule,
    FormsModule,
    TagInputModule,
    JwBootstrapSwitchNg2Module,
    NgbModule,
    RouterModule.forChild(GrpClasseRoutes),
  ]
})
export class GroupeClasseModule { }
