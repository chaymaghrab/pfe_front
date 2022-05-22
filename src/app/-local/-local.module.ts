import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddLocalComponent } from './add-local/add-local.component';
import { ListLocalComponent } from './list-local/list-local.component';
import { UpdateLocalComponent } from './update-local/update-local.component';
import { ImportLocalComponent } from './import-local/import-local.component';

import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { TagInputModule } from 'ngx-chips';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import { localRoutes } from './local.routing';

@NgModule({
  declarations: [AddLocalComponent, ListLocalComponent, UpdateLocalComponent, ImportLocalComponent],
  imports: [
    CommonModule,
    FormsModule,
    TagInputModule,
    JwBootstrapSwitchNg2Module,
    NgbModule,
    RouterModule.forChild(localRoutes),
  ]
})
export class LocalModule { }
