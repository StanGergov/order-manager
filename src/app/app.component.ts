import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { AuthService } from './auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
<<<<<<< Updated upstream
  imports: [RouterOutlet, RouterLink, NavbarComponent],
=======
<<<<<<< Updated upstream
  imports: [RouterOutlet, NavbarComponent],
=======
  imports: [
    RouterOutlet,
    RouterLink,
    NavbarComponent,
    CommonModule 
  ],
>>>>>>> Stashed changes
>>>>>>> Stashed changes
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'order-manager';

  constructor(public authService: AuthService) {

  }
}