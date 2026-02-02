import { Component } from '@angular/core';
import { SidebarService } from '../../sidebar.service';
import { LeftSidebarComponent } from '../../left-sidebar/left-sidebar.component';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-2',
  imports: [LeftSidebarComponent , RouterLink , CommonModule],
  templateUrl: './home-2.component.html',
  styleUrl: './home-2.component.css'
})
export class Home2Component {
isSidebarOpen = false;

  constructor(private sidebarService: SidebarService) {
    this.sidebarService.sidebarOpen$
      .subscribe(state => this.isSidebarOpen = state);
  }

  activeTab : string = 'live';

  changeTab(tab:any){
    this.activeTab = tab;
  }

  // competitionTab: string = 'time';

  // tbChange(tab:any){
  //  this.competitionTab = tab; 
  // }

  activeMainTab:  'live' | 'upcoming' | 'league' = 'live';
  activeSubTab: 'fav' | 'cricket' | 'soccer' | 'tennis' = 'fav';

  setMainTab(tab : any){
    this.activeMainTab = tab;
    this.activeSubTab = 'fav';
  }

  setSubTab(tab: any){
    this.activeSubTab = tab;
  }

   isCollapse : boolean = false;

  setCollapse(){
    this.isCollapse = !this.isCollapse;
  }
}
