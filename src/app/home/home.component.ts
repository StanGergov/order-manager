import { Component } from '@angular/core';
<<<<<<< Updated upstream
=======
import { RouterOutlet, RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

>>>>>>> Stashed changes

@Component({
  selector: 'app-home',
  standalone: true,
<<<<<<< Updated upstream
  imports: [],
=======
  imports: [RouterOutlet, RouterLink, MatButtonModule],
>>>>>>> Stashed changes
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
