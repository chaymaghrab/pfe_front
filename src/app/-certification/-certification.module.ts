import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCertifComponent } from './add-certif/add-certif.component';
import { ImportCertifComponent } from './import-certif/import-certif.component';
import { ListCertifComponent } from './list-certif/list-certif.component';
import { UpdateCertifComponent } from './update-certif/update-certif.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import { TagInputModule } from 'ngx-chips';
import { RouterModule } from '@angular/router';
import { CertifRoutes } from './certif.routing';
import { MatRadioModule } from '@angular/material/radio';



@NgModule({
  declarations: [
    AddCertifComponent,
     ImportCertifComponent, 
     ListCertifComponent,
      UpdateCertifComponent,
     // EqualValidator
    ],
  imports: [
    CommonModule,
    FormsModule,
    TagInputModule,
    JwBootstrapSwitchNg2Module,
    NgbModule,
    FormsModule,
    RouterModule.forChild(CertifRoutes),
    MatRadioModule
  ] ,
  exports: [RouterModule]
})
export class CertificationModule { }
