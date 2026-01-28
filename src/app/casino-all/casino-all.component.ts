import { Component } from '@angular/core';
import { SidebarService } from '../sidebar.service';
import { LeftSidebarComponent } from '../left-sidebar/left-sidebar.component';

@Component({
  selector: 'app-casino-all',
  imports: [LeftSidebarComponent],
  templateUrl: './casino-all.component.html',
  styleUrl: './casino-all.component.css'
})
export class CasinoAllComponent {
isSidebarOpen = false;

  constructor(private sidebarService: SidebarService) {
    this.sidebarService.sidebarOpen$
      .subscribe(state => this.isSidebarOpen = state);
  }
}
