import { Routes } from "@angular/router";
import { AddLocalComponent } from "./add-local/add-local.component";

export const localRoutes: Routes = [
    {
        path: '',
        children: [{
            path: 'add',
            component: AddLocalComponent
        }]
    }
];