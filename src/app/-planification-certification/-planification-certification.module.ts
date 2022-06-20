import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanificationCertifComponent } from './planification-certif/planification-certif.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import { TagInputModule } from 'ngx-chips';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule } from '@angular/material/select';
import { AgGridModule } from 'ag-grid-angular';
import {MatRadioModule} from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { planingcertifRoutes } from './planification_certif.routing';
import { ImportCsvComponent } from './import-csv/import-csv.component';
import { GroupeCertifComponent } from './groupe-certif/groupe-certif.component';
import { TimePickerModule } from '@syncfusion/ej2-angular-calendars';
import { TimepickerModule} from 'ngx-bootstrap/timepicker';

@NgModule({
  declarations: [PlanificationCertifComponent, ImportCsvComponent, GroupeCertifComponent],
  imports: [
   CommonModule,
    FormsModule,
    TagInputModule,
    JwBootstrapSwitchNg2Module,
    NgbModule,
    RouterModule.forChild( planingcertifRoutes),
    NgxDatatableModule,
    MatSelectModule,
    ReactiveFormsModule,
    AgGridModule.withComponents([]),
    AgGridModule,
    MatRadioModule,
    MatInputModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatFormFieldModule,
    BsDatepickerModule.forRoot(),
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    TimepickerModule.forRoot(),
  ]
})
export class PlanificationCertificationModule { }
