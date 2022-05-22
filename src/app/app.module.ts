import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { APP_BASE_HREF } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent }   from './app.component';

import { SidebarModule } from './sidebar/sidebar.module';
import { FixedPluginModule } from './shared/fixedplugin/fixedplugin.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './shared/navbar/navbar.module';
import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';
import { AppRoutes } from './app.routing';
import { PlanificationFormationModule } from './-planification-formation/-planification-formation.module';
import { GroupeClasseModule } from './-groupe-classe/-groupe-classe.module';
import { CertificationModule } from './-certification/-certification.module';
import { EtudiantModule } from './-etudiant/-etudiant.module';
import { FormateurModule } from './-formateur/-formateur.module';
import { LocalModule } from './-local/-local.module';
import { SurveillantModule } from './-surveillant/-surveillant.module';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap/modal';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
    imports:      [
        BrowserAnimationsModule,
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(AppRoutes,{
          useHash: true
        }),
        NgbModule,
        HttpModule,
        SidebarModule,
        NavbarModule,
        FooterModule,
        FixedPluginModule,
        EtudiantModule,
        CertificationModule,
        GroupeClasseModule,
        PlanificationFormationModule,
        FormateurModule,
        LocalModule,
        SurveillantModule,
        HttpClientModule,
        ModalModule.forRoot(),
        MatFormFieldModule,
        MatInputModule
        

    ],
    exports:[
        
    ],
    declarations: [
        AppComponent,
        AdminLayoutComponent,
        AuthLayoutComponent,
    ],
    bootstrap:    [ AppComponent ]
})

export class AppModule { }
