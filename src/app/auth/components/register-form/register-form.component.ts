import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styles: [
  ]
})
export class RegisterFormComponent {


  public registerForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.minLength(3)]],
    username: ['', [Validators.required, Validators.minLength(3)]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });

  constructor(private fb: FormBuilder, private authService: AuthService) { }

  register() {
    console.log(this.registerForm.value);
    this.authService.login(this.registerForm.value.email, this.registerForm.value.password)
      .subscribe(resp => {
        console.log(resp);
      });
    this.registerForm.reset();
  }

}
