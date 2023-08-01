import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store'
import { AppState } from 'src/app/Store/app.state';
import { loginStart } from '../store/auth.actions';
import { AuthState } from '../store/auth.state';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private store: Store<AppState>) { }

  movies$ = this.store.select('shared')

  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl(null, [
      Validators.required,
      Validators.minLength(3)
    ])
  })

  showEmailErrors(): string {
    const emailForm = this.loginForm.get('email');
    if (emailForm?.touched && emailForm.invalid) {
      if (emailForm.getError('required'))
        return 'Email Id is required';
      if (emailForm.getError('email'))
        return 'Email Id is not valid';
    }
    return ''
  }

  showPasswordErrors(): string {
    const passwordForm = this.loginForm.get('password');
    if (passwordForm?.touched && !passwordForm.valid) {
      if (passwordForm.getError('required'))
        return 'Password is required';
      if (passwordForm.getError('minlength'))
        return 'Password length should be minimum 3 letters';
    }
    return ''
  }

  onSubmit() {
    if (this.loginForm.invalid) return
    const { email, password } = this.loginForm.value
    this.store.dispatch(loginStart({ email, password }))
  }
}
