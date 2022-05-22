import { Routes } from "@angular/router";
import { ImportEtudiantComponent } from "./import-etudiant/import-etudiant.component";
import { ListEtudiantComponent } from "./list-etudiant/list-etudiant.component";

export const EtudiantRoutes: Routes = [
   {
        path: '',
        children: [{
            path: 'list',
            component: ListEtudiantComponent
        }]
    },{
        path: '',
        children: [{
            path: 'import',
            component: ImportEtudiantComponent
        }]
    }
    
];
