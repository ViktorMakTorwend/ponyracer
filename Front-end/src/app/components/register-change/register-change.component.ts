import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  debounceTime,
  distinctUntilChanged,
} from 'rxjs';


@Component({
  selector: 'eva-register-change',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './register-change.component.html',
  styleUrl: './register-change.component.css'
})
export class RegisterChangeComponent {
  usernameCtrl = this.fb.control('', Validators.required);
  passwordCtrl = this.fb.control('', Validators.required);
  userForm = this.fb.group({
    username: this.usernameCtrl,
    password: this.passwordCtrl,
  });
  passwordStrength = 0;

  constructor(private fb: FormBuilder) {
    this.passwordCtrl.valueChanges
      .pipe(
        debounceTime(400),
        distinctUntilChanged()
      ).subscribe(newValue => (this.passwordStrength = newValue ? newValue.length : 0))
  }

  register(): void {
    console.log(this.userForm.value);
  }
}
