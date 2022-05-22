import { Routes } from "@angular/router";
import { AddFormateurComponent } from "./add-formateur/add-formateur.component";
import { ListFormateurComponent } from "./list-formateur/list-formateur.component";
import { UpdateFormateurComponent } from "./update-formateur/update-formateur.component";

export const FormateurRoutes: Routes = [
    {
        path: '',
        children: [{
            path: 'add',
            component: AddFormateurComponent
        }]
    },{
        path: '',
        children: [{
            path: 'list',
            component: ListFormateurComponent
        }]
    },{
        path: '',
        children: [{
            path: 'update/:id',
            component: UpdateFormateurComponent
        }]
    }
];