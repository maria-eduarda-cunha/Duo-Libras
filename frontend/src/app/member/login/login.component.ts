import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private auth: AuthenticationService,
  ) {}

  public errorAuth: boolean = false;

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });

  getError() {
    return this.errorAuth;
  }

  submitLogin() {
    this.errorAuth = false;
    const email =this.loginForm.get('email')?.value;
    const pwd = this.loginForm.get('password')?.value;
    
    if(email && pwd) {
      this.auth.login(email,pwd).subscribe({
        error: (err) => {
          this.errorAuth = true
        },
        next: (res: any) => {
          const user = this.loginForm.get('email')?.value;

          if(user) {
            localStorage.setItem('user', user);
            this.router.navigate(['/home']);
          }
        }
      });
    }
  }

  logOut() {
    localStorage.removeItem('user');
  }

}
