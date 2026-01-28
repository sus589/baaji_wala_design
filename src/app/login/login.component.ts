import { Component } from '@angular/core';
import { SidebarService } from '../sidebar.service';
import { LeftSidebarComponent } from '../left-sidebar/left-sidebar.component';

@Component({
  selector: 'app-login',
  imports: [LeftSidebarComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
isSidebarOpen = false;

  constructor(private sidebarService: SidebarService) {
    this.sidebarService.sidebarOpen$
      .subscribe(state => this.isSidebarOpen = state);
  }
}
