import { Routes } from "@angular/router";
import { AutoSousGroupeFormaComponent } from "./auto-sous-groupe-forma/auto-sous-groupe-forma.component";
import { PlanificationSessionsComponent } from "./planification-sessions/planification-sessions.component";
import { SousGroupeFormationComponent } from "./sous-groupe-formation/sous-groupe-formation.component";

export const planingFormationRoutes: Routes = [
    {
        path: '',
        children: [{
            path: 'sous_groupe_formation',
            component: SousGroupeFormationComponent
        }]
    },
    {
        path: '',
        children: [{
            path: 'auto_sous_groupe_formation',
            component: AutoSousGroupeFormaComponent
        }]
    },
    {
        path: '',
        children: [{
            path: 'planification_session',
            component: PlanificationSessionsComponent
        }]
    }
];