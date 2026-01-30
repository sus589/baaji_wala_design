import { Component } from '@angular/core';
import { LeftSidebarComponent } from '../../left-sidebar/left-sidebar.component';
import { SidebarService } from '../../sidebar.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [LeftSidebarComponent , CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  isSidebarOpen = true;

  constructor(private sidebarService: SidebarService) {
    this.sidebarService.sidebarOpen$
      .subscribe(state => this.isSidebarOpen = state);
  }

  activeTab: string = "hot-game";

  changeTab(tab:any){
    this.activeTab = tab;
  }
}
