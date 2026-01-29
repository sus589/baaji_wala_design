import { Component } from '@angular/core';
import { LeftSidebarComponent } from '../left-sidebar/left-sidebar.component';
import { SidebarService } from '../sidebar.service';

@Component({
  selector: 'app-match',
  imports: [LeftSidebarComponent],
  templateUrl: './match.component.html',
  styleUrl: './match.component.css'
})
export class MatchComponent {
  isSidebarOpen = false;
  
    constructor(private sidebarService: SidebarService) {
      this.sidebarService.sidebarOpen$
        .subscribe(state => this.isSidebarOpen = state);
    }
}
