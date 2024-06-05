import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddMobileComponent } from './add-mobile/add-mobile.component';
import { ViewMobileComponent } from './view-mobile/view-mobile.component';

export const routes: Routes = [
    {
        path:"",
        component:HomeComponent
    },
    {
        path:"add-mobile",
        component:AddMobileComponent
    },
    {
        path:"view-mobile",
        component:ViewMobileComponent
    }
];
