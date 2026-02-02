import { Component } from '@angular/core';
import { SidebarService } from '../../sidebar.service';
import { LeftSidebarComponent } from '../../left-sidebar/left-sidebar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-casino',
  imports: [LeftSidebarComponent, CommonModule],
  templateUrl: './casino.component.html',
  styleUrl: './casino.component.css'
})
export class CasinoComponent {
  isSidebarOpen = false;

  constructor(private sidebarService: SidebarService) {
    this.sidebarService.sidebarOpen$
      .subscribe(state => this.isSidebarOpen = state);
  }

  activeTab: string = "ALL";

  changeTab(tab: any) {
    this.activeTab = tab;
  }
  
  isOpenSearchPage: boolean = false;
  openSearchPage() {
    this.isOpenSearchPage = true;
  }
  closeSearchPage() {
    this.isOpenSearchPage = false;
  }
}
