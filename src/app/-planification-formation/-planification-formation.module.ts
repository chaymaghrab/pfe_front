import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SousGroupeFormationComponent } from './sous-groupe-formation/sous-groupe-formation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { planingFormationRoutes } from './planification_formation.routing';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import { TagInputModule } from 'ngx-chips';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule } from '@angular/material/select';
import { AgGridModule } from 'ag-grid-angular';
import { AutoSousGroupeFormaComponent } from './auto-sous-groupe-forma/auto-sous-groupe-forma.component';
import {MatRadioModule} from '@angular/material/radio';
import { PlanificationSessionsComponent } from './planification-sessions/planification-sessions.component';
@NgModule({
  declarations: [SousGroupeFormationComponent, AutoSousGroupeFormaComponent, PlanificationSessionsComponent],
  imports: [
    CommonModule,
    FormsModule,
    TagInputModule,
    JwBootstrapSwitchNg2Module,
    NgbModule,
    RouterModule.forChild( planingFormationRoutes),
    NgxDatatableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    AgGridModule.withComponents([]),
    AgGridModule,
    MatRadioModule
  ]
})
export class PlanificationFormationModule { }
