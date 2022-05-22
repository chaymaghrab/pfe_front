import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddSurvComponent } from './add-surv/add-surv.component';
import { ListSurvComponent } from './list-surv/list-surv.component';
import { UpdateSurvComponent } from './update-surv/update-surv.component';



@NgModule({
  declarations: [AddSurvComponent, ListSurvComponent, UpdateSurvComponent],
  imports: [
    CommonModule
  ]
})
export class SurveillantModule { }
