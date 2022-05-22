import { Routes } from "@angular/router";
import { AffecterCertifComponent } from "./affecter-certif/affecter-certif.component";

export const GrpClasseRoutes: Routes = [
    {
        path: '',
        children: [{
            path: 'affecterCertif',
            component: AffecterCertifComponent
        }]
    }
];