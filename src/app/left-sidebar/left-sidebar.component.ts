import { Component } from '@angular/core';
import { SidebarService } from '../sidebar.service';
import { CommonModule, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-left-sidebar',
  imports: [CommonModule , NgIf , RouterLink],
  templateUrl: './left-sidebar.component.html',
  styleUrl: './left-sidebar.component.css'
})
export class LeftSidebarComponent {
isSidebarOpen = true;

  constructor(private sidebarService: SidebarService) {
    this.sidebarService.sidebarOpen$
      .subscribe(state => this.isSidebarOpen = state);
  }
 

  // activeTab: boolean = false;
  // changeTab(){
  //   this.activeTab = !this.activeTab;
  // }


  openMenu: string | null = null;

  toggleMenu(menu:any){
   if(this.openMenu === menu){
     this.openMenu = null;
   }else{
    this.openMenu = menu;
   }
  }
}
