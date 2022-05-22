import { Routes } from '@angular/router';
import { AddCertifComponent } from './add-certif/add-certif.component';
import { ImportCertifComponent } from './import-certif/import-certif.component';
import { ListCertifComponent } from './list-certif/list-certif.component';
import { UpdateCertifComponent } from './update-certif/update-certif.component';


export const CertifRoutes: Routes = [
    {
        path: '',
        children: [{
            path: 'add',
            component: AddCertifComponent
        }]
    },{
        path: '',
        children: [{
            path: 'list',
            component: ListCertifComponent
        }]
    },{
        path: '',
        children: [{
            path: 'import',
            component: ImportCertifComponent
        }]
    },{
        path: '',
        children: [{
            path: 'update/:id',
            component: UpdateCertifComponent
        }]
    }
];
