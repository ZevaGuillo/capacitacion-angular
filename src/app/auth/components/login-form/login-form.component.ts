import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'auth-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

// NG MODEL

  // userLogin: { username: string, password: string } = {
  //   username: 'guillermozev',
  //   password: '123456'
  // }

  // classError: string = 'text-red-200';

  // constructor() { }

  // login() {
  //   console.log(this.userLogin);
  // }

// REACTIVE FORM
  // public loginForm: FormGroup = new FormGroup({
  //   username: new FormControl('Hola', [Validators.required, Validators.minLength(3)]),
  //   password: new FormControl('', [Validators.required, Validators.minLength(6)])
  // });


  public loginForm: FormGroup = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(3)]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });

  constructor(private fb: FormBuilder) { }

  login(){
    console.log(this.loginForm.value);

    this.loginForm.reset();
  }

}
