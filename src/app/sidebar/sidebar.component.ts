import { Component, OnInit, AfterViewInit, AfterViewChecked, AfterContentInit } from '@angular/core';

//Metadata
export interface RouteInfo {
    path: string;
    title: string;
    type: string;
    collapse?: string;
    icontype: string;
    // icon: string;
    children?: ChildrenItems[];
}

export interface ChildrenItems {
    path: string;
    title: string;
    ab: string;
    type?: string;
}

//Menu Items
export const ROUTES: RouteInfo[] = [{
        path: '/dashboard',
        title: 'Dashboard',
        type: 'link',
        icontype: 'nc-icon nc-bank'
    },{
        path: '/components',
        title: 'Components',
        type: 'sub',
        collapse: 'components',
        icontype: 'nc-icon nc-layout-11',
        children: [
            {path: 'buttons', title: 'Buttons', ab:'B'},
            {path: 'grid', title: 'Grid System', ab:'GS'},
            {path: 'panels', title: 'Panels', ab:'P'},
            {path: 'sweet-alert', title: 'Sweet Alert', ab:'SA'},
            {path: 'notifications', title: 'Notifications', ab:'N'},
            {path: 'icons', title: 'Icons', ab:'I'},
            {path: 'typography', title: 'Typography', ab:'T'}
        ]
    },{
        path: '/forms',
        title: 'Forms',
        type: 'sub',
        collapse: 'forms',
        icontype: 'nc-icon nc-ruler-pencil',
        children: [
            {path: 'regular', title: 'Regular Forms', ab:'RF'},
            {path: 'extended', title: 'Extended Forms', ab:'EF'},
            {path: 'validation', title: 'Validation Forms', ab:'VF'},
            {path: 'wizard', title: 'Wizard', ab:'W'}
        ]
    },{
        path: '/certif',
        title: 'certif',
        type: 'sub',
        collapse: 'certif',
        icontype: 'nc-icon nc-ruler-pencil',
        children: [
            {path: 'add', title: 'add', ab:'RF'},
            {path: 'list', title: 'list', ab:'EF'},
            {path: 'import', title: 'import', ab:'VF'}
        ]
    },{
        path: '/etudiant',
        title: 'etudiant',
        type: 'sub',
        collapse: 'etudiant',
        icontype: 'nc-icon nc-ruler-pencil',
        children: [
            {path: 'list', title: 'list', ab:'EF'},
            {path: 'import', title: 'import', ab:'VF'}
        ]
    },{
        path: '/formateur',
        title: 'formateur',
        type: 'sub',
        collapse: 'formateur',
        icontype: 'nc-icon nc-ruler-pencil',
        children: [
            {path: 'list', title: 'list', ab:'EF'},
            {path: 'add', title: 'add', ab:'VF'},
            {path: 'import', title: 'import', ab:'VF'}
        ]
    },{
        path: '/GrpClasse',
        title: 'groupe classe',
        type: 'sub',
        collapse: 'GrpClasse',
        icontype: 'nc-icon nc-ruler-pencil',
        children: [
            {path: 'affecterCertif', title: 'affecterCertif', ab:'VF'}
        ]
    },{
        path: '/planing_formation',
        title: 'planification des formations',
        type: 'sub',
        collapse: 'planing_formation',
        icontype: 'nc-icon nc-ruler-pencil',
        children: [
            {path: 'sous_groupe_formation', title: 'groupes formation de cours', ab:'VF'},
            {path: 'auto_sous_groupe_formation', title: 'groupes formation de tp', ab:'VF'},
            {path: 'planification_session', title: 'planification des sessions ', ab:'VF'}

        ]
    },{
        path: '/local',
        title: 'local',
        type: 'sub',
        collapse: 'GrpClasse',
        icontype: 'nc-icon nc-ruler-pencil',
        children: [
            {path: 'add', title: 'add', ab:'VF'}
        ]
    },{
        path: '/tables',
        title: 'table',
        type: 'sub',
        collapse: 'tables',
        icontype: 'nc-icon nc-single-copy-04',
        children: [
            {path: 'regular', title: 'Regular Tables', ab:'RT'},
            {path: 'extended', title: 'Extended Tables', ab:'ET'},
            {path: 'datatables.net', title: 'Datatables.net', ab:'DT'}
        ]
    },{
        path: '/maps',
        title: 'Maps',
        type: 'sub',
        collapse: 'maps',
        icontype: 'nc-icon nc-pin-3',
        children: [
            {path: 'google', title: 'Google Maps', ab:'GM'},
            {path: 'fullscreen', title: 'Full Screen Map', ab:'FSM'},
            {path: 'vector', title: 'Vector Map', ab:'VM'}
        ]
    },{
        path: '/widgets',
        title: 'Widgets',
        type: 'link',
        icontype: 'nc-icon nc-box'

    },{
        path: '/charts',
        title: 'Charts',
        type: 'link',
        icontype: 'nc-icon nc-chart-bar-32'

    },{
        path: '/calendar',
        title: 'Calendar',
        type: 'link',
        icontype: 'nc-icon nc-calendar-60'
    },{
        path: '/pages',
        title: 'Pages',
        collapse: 'pages',
        type: 'sub',
        icontype: 'nc-icon nc-book-bookmark',
        children: [
            {path: 'timeline', title: 'Timeline Page', ab:'T'},
            {path: 'user', title: 'User Page', ab:'UP'},
            {path: 'login', title: 'Login Page', ab:'LP'},
            {path: 'register', title: 'Register Page', ab:'RP'},
            {path: 'lock', title: 'Lock Screen Page', ab:'LSP'}
        ]
    }
];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent {
    public menuItems: any[];
    isNotMobileMenu(){
        if( window.outerWidth > 991){
            return false;
        }
        return true;
    }

    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
    ngAfterViewInit(){
    }
}
