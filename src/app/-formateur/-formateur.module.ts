import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddFormateurComponent } from './add-formateur/add-formateur.component';
import { ListFormateurComponent } from './list-formateur/list-formateur.component';
import { UpdateFormateurComponent } from './update-formateur/update-formateur.component';
import { RouterModule } from '@angular/router';
import { FormateurRoutes } from './formateur.routing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { TagInputModule } from 'ngx-chips';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';



@NgModule({
  declarations: [AddFormateurComponent, ListFormateurComponent, UpdateFormateurComponent],
  imports: [
    CommonModule,
    FormsModule,
    TagInputModule,
    JwBootstrapSwitchNg2Module,
    NgbModule,
    RouterModule.forChild(FormateurRoutes),
    NgxDatatableModule
  ]
})
export class FormateurModule { }
