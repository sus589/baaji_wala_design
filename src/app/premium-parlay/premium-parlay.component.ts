import { Component } from '@angular/core';
import { LeftSidebarComponent } from '../left-sidebar/left-sidebar.component';
import { SidebarService } from '../sidebar.service';

@Component({
  selector: 'app-premium-parlay',
  imports: [LeftSidebarComponent],
  templateUrl: './premium-parlay.component.html',
  styleUrl: './premium-parlay.component.css'
})
export class PremiumParlayComponent {
  isSidebarOpen = false;
  
    constructor(private sidebarService: SidebarService) {
      this.sidebarService.sidebarOpen$
        .subscribe(state => this.isSidebarOpen = state);
    }
}
