import { Component } from '@angular/core';
import { SidebarService } from '../../sidebar.service';
import { LeftSidebarComponent } from '../../left-sidebar/left-sidebar.component';

@Component({
  selector: 'app-casino',
  imports: [LeftSidebarComponent],
  templateUrl: './casino.component.html',
  styleUrl: './casino.component.css'
})
export class CasinoComponent {
  isSidebarOpen = false;
  
    constructor(private sidebarService: SidebarService) {
      this.sidebarService.sidebarOpen$
        .subscribe(state => this.isSidebarOpen = state);
    }
}
