import { Component } from '@angular/core';
import { LeftSidebarComponent } from '../../left-sidebar/left-sidebar.component';
import { SidebarService } from '../../sidebar.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-parlay',
  imports: [LeftSidebarComponent , RouterLink , CommonModule],
  templateUrl: './parlay.component.html',
  styleUrl: './parlay.component.css'
})
export class ParlayComponent {
isSidebarOpen = false;

  constructor(private sidebarService: SidebarService) {
    this.sidebarService.sidebarOpen$
      .subscribe(state => this.isSidebarOpen = state);
  }

  activeTab : string = 'live';

  changeTab(event:Event){
    // this.activeTab = tab;
    const  value = (event.target as HTMLSelectElement).value;
    this.activeTab = value;
  }
}
