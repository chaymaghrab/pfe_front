import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';

export const AppRoutes: Routes = [{
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },{
        path: '',
        component: AdminLayoutComponent,
        children: [{
            path: '',
            loadChildren: './dashboard/dashboard.module#DashboardModule'
        },{
            path: 'certif',
            loadChildren: './-certification/-certification.module#CertificationModule'
        },{
            path: 'etudiant',
            loadChildren: './-etudiant/-etudiant.module#EtudiantModule'
        },{
            path: 'planing_certification',
            loadChildren: './-planification-certification/-planification-certification.module#PlanificationCertificationModule'
        },{
            path: 'formateur',
            loadChildren: './-formateur/-formateur.module#FormateurModule'
        },{
            path: 'planing_formation',
            loadChildren: './-planification-formation/-planification-formation.module#PlanificationFormationModule'
        },{
            path: 'GrpClasse',
            loadChildren: './-groupe-classe/-groupe-classe.module#GroupeClasseModule'
        },{
            path: 'local',
            loadChildren: './-local/-local.module#LocalModule'
        },{
            path: 'components',
            loadChildren: './components/components.module#ComponentsModule'
        },{
            path: 'forms',
            loadChildren: './forms/forms.module#Forms'
        },{
            path: 'tables',
            loadChildren: './tables/tables.module#TablesModule'
        },{
            path: 'maps',
            loadChildren: './maps/maps.module#MapsModule'
        },{
            path: 'charts',
            loadChildren: './charts/charts.module#ChartsModule'
        },{
            path: 'calendar',
            loadChildren: './calendar/calendar.module#CalendarModule'
        },{
            path: '',
            loadChildren: './userpage/user.module#UserModule'
        },{
            path: '',
            loadChildren: './timeline/timeline.module#TimelineModule'
        },{
            path: '',
            loadChildren: './widgets/widgets.module#WidgetsModule'
        }]
        },{
            path: '',
            component: AuthLayoutComponent,
            children: [{
                path: 'pages',
                loadChildren: './pages/pages.module#PagesModule'
            }]
        }
];
