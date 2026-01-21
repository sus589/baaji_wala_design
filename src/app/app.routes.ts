import { Routes } from '@angular/router';
import { HomeComponent } from './dashboard/home/home.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Component } from '@angular/core';

export const routes: Routes = [
    {path:'',component: HomeComponent},
    {path:'dashboard', component: DashboardComponent,
        children:[
            {path:'home', component:HomeComponent}
        ]
    },
    {path:'footer', component:FooterComponent}
];
