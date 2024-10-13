import { Component } from '@angular/core';
import { AuthHttpService } from '../auth-http.service';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth.service';
import { CreditionalService } from '../creditional.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule,RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private cred: CreditionalService
  ) {
    this.form = this.fb.group({
      mobile: [''],
      password: [''],
    });
    if (this.cred.isAuthenticated()) {
      this.router.navigate(['/']);
    }
  }
  form: any;
  message: string = '';
  login() {
    this.authService.login(this.form.value).subscribe({
      next: () => {
        this.message = 'ورود با موفقیت انجام شد';

      },
      error: (error: any) => {

      },
      complete: () => {
          console.log("salam");
          this.router.navigate(['/']);

      }
    });
  }
}
