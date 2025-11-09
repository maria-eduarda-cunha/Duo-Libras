import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { AlertComponent } from '../../alert/alert.component';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  signInForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private auth: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.signInForm = this.fb.group({
      nome: ['', [Validators.pattern(/^\w+\s\w+$/), Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      passwordCheck: ['', [Validators.required]],
    }, { validators: this.passwordsMatch }); // valida se senhas coincidem
  }

  passwordsMatch = (group: AbstractControl) => {
    const password = group.get('password')?.value;
    const passwordCheck = group.get('passwordCheck')?.value;
    return password === passwordCheck ? null : { passwordsMismatch: true };
  };

  // Método chamado no submit
  submitSignIn(): void {
    console.log(this.signInForm.value);
    if (this.signInForm.valid) {
      this.auth.signin(
        this.signInForm.get('nome')?.value,
        this.signInForm.get('email')?.value,
        this.signInForm.get('password')?.value,
      ).subscribe({

        error: (err) => {
          alert('Erro ao realizar cadastro!');
        },
        next: (res: any) => {
          this.auth.login(
            this.signInForm.get('email')?.value,
            this.signInForm.get('password')?.value,
          ).subscribe({

            error: (err) => {
              alert('Erro ao realizar login!');
            },
            next: (res: any) => {
              const user = this.signInForm.get('email')?.value;
              const pwd = this.signInForm.get('password')?.value
              if (user && pwd) {

                localStorage.setItem('user', user);

                alert('Cadastro realizado com sucesso!');

                this.router.navigate(['/user/home']);
              }
            }
          });
        }
      })
    };
  }
}
