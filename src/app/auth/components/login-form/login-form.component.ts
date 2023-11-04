import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'auth-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

  // NG MODEL

  // userLogin: { email: string, password: string } = {
  //   email: 'guillermozev',
  //   password: '123456'
  // }

  // classError: string = 'text-red-200';

  // constructor() { }

  // login() {
  //   console.log(this.userLogin);
  // }

  // REACTIVE FORM
  // public loginForm: FormGroup = new FormGroup({
  //   email: new FormControl('Hola', [Validators.required, Validators.minLength(3)]),
  //   password: new FormControl('', [Validators.required, Validators.minLength(6)])
  // });


  public loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.minLength(3)]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });

  constructor(private fb: FormBuilder, private authService: AuthService) { }

  login() {
    console.log(this.loginForm.value);
    this.authService.login(this.loginForm.value.email, this.loginForm.value.password)
      .subscribe(resp => {
        console.log(resp);
      });
    this.loginForm.reset();
  }

}
