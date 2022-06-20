import { Routes } from "@angular/router";
import { planingFormationRoutes } from "app/-planification-formation/planification_formation.routing";
import { GroupeCertifComponent } from "./groupe-certif/groupe-certif.component";
import { ImportCsvComponent } from "./import-csv/import-csv.component";
import { PlanificationCertifComponent } from "./planification-certif/planification-certif.component";

export const planingcertifRoutes: Routes = [
    {
        path: '',
        children: [{
            path: 'planification-certif',
            component: PlanificationCertifComponent
        }]
    },{
        path: '',
        children: [{
            path: 'import-csv',
            component: ImportCsvComponent
        }]
    },{
        path: '',
        children: [{
            path: 'groupe_certif',
            component: GroupeCertifComponent
        }]
    }
];