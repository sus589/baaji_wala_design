import { Component, Input } from '@angular/core';
import { SidebarService } from '../sidebar.service';
import { CommonModule, Location } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-aside',
  imports: [CommonModule , RouterLink],
  templateUrl: './aside.component.html',
  styleUrl: './aside.component.css'
})
export class AsideComponent {

  constructor(private location : Location , private router : Router){}

  goback(){
    this.location.back();
  }

  activeTab : string = '';

  changeTab(tab : any){
    this.activeTab = tab;
  }
}
