import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { SidebarService } from '../sidebar.service';
import { AsideComponent } from '../aside/aside.component';

@Component({
  selector: 'app-desktop-header',
  imports: [AsideComponent , RouterLink],
  templateUrl: './desktop-header.component.html',
  styleUrl: './desktop-header.component.css'
})
export class DesktopHeaderComponent {

  isSidebarOpen = false;

  constructor(private route: Router, private sidebarService: SidebarService
  ) {
    this.sidebarService.sidebarOpen$
      .subscribe(state => this.isSidebarOpen = state);
  }

  onDesktopBtnClick() {
    this.sidebarService.toggleSidebar();
  }
  
  clickBtn(){
    this.route.navigate(['/aside'])
  }

}
