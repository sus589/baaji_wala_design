import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DesktopHeaderComponent } from './desktop-header/desktop-header.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet , DesktopHeaderComponent , FooterComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'baaji_wala_design';
}
