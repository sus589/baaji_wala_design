import { Component } from '@angular/core';
import { SidebarService } from '../sidebar.service';
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-left-sidebar',
  imports: [CommonModule , NgIf],
  templateUrl: './left-sidebar.component.html',
  styleUrl: './left-sidebar.component.css'
})
export class LeftSidebarComponent {
isSidebarOpen = false;

  constructor(private sidebarService: SidebarService) {
    this.sidebarService.sidebarOpen$
      .subscribe(state => this.isSidebarOpen = state);
  }
}
