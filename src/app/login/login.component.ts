import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import {
  FormControl,
  // <<<<<<< Updated upstream
  FormGroupDirective,
  NgForm,
  Validators,
  FormsModule,
  ReactiveFormsModule,
  FormGroup,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
// =======
//   Validators,
//   FormsModule,
//   ReactiveFormsModule,
//   FormGroup,
// } from '@angular/forms';
// >>>>>>> Stashed changes
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
// <<<<<<< Updated upstream


// export class MyErrorStateMatcher implements ErrorStateMatcher {
//   isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
//     const isSubmitted = form && form.submitted;
//     return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
//   }
// }
// =======
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
// >>>>>>> Stashed changes

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    // <<<<<<< Updated upstream
    MatIconModule],
  // =======
  //     MatIconModule,
  //   ],
  // >>>>>>> Stashed changes
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  // <<<<<<< Updated upstream
  //   emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  //   matcher = new MyErrorStateMatcher();

  //   hide = signal(true);
  //   clickEvent(event: MouseEvent) {
  //     this.hide.set(!this.hide());
  //     event.stopPropagation();
  // =======
  personForm = new FormGroup({
    email: new FormControl('', { validators: [Validators.required, Validators.email], nonNullable: true }),
    password: new FormControl('', { validators: [Validators.required], nonNullable: true })
  })

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    this.authService.user$.subscribe((user: any) => {
      if (user) {
        this.router.navigateByUrl('/');
      }
    })
  }

  onSubmit() {
    const data = this.personForm.value;
    this.authService.login(data.email, data.password);
    // >>>>>>> Stashed changes
  }
}
