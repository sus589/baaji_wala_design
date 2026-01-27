import { Routes } from '@angular/router';
import { HomeComponent } from './dashboard/home/home.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Component } from '@angular/core';
import { LeftSidebarComponent } from './left-sidebar/left-sidebar.component';
import { AsideComponent } from './aside/aside.component';
import { CasinoComponent } from './dashboard/casino/casino.component';
import { Home2Component } from './dashboard/home-2/home-2.component';

export const routes: Routes = [
    {path:'',component: HomeComponent},
    {path:'dashboard', component: DashboardComponent,
        children:[
            {path:'home', component:HomeComponent},
            {path:'games/LIVE', component: CasinoComponent},
            {path:'sports', component: Home2Component}
        ]
    },
    {path:'footer', component:FooterComponent},
    {path:'left-sidebar', component:LeftSidebarComponent},
    {path:'aside', component:AsideComponent}
];


