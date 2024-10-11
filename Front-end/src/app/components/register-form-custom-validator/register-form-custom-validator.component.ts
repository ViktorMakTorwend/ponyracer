import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormBuilder,
  Validators,
  AbstractControl,
  ValidationErrors
} from '@angular/forms';
import { map, Observable } from 'rxjs';
import { HTTPUserService } from '../../services/HTTP-user.service';

@Component({
  selector: 'eva-register-form-custom-validator',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './register-form-custom-validator.component.html',
  styleUrl: './register-form-custom-validator.component.css'
})
export class RegisterFormCustomValidatorComponent {
  usernameCtrl = this.fb
    .control('',
      Validators.required,
      control => this.isUserNameAvailable(control),
    );
  passwordCtrl = this.fb.control('', Validators.required);
  birthdayCtrl = this.fb.control('', [Validators.required, RegisterFormCustomValidatorComponent.isOldEnough])
  userForm = this.fb.group({
    username: this.usernameCtrl,
    password: this.passwordCtrl,
    birthday: this.birthdayCtrl,
  })

  constructor(
    private fb: FormBuilder,
    private userService: HTTPUserService,
  ) { }

  static isOldEnough(control: AbstractControl): Validators | null {
    const birthDatePlus18 = new Date(control.value);
    birthDatePlus18.setFullYear(birthDatePlus18.getFullYear() + 18);
    return birthDatePlus18 < new Date() ? null : { tooYoung: true };
  }

  isUserNameAvailable(control: AbstractControl): Observable<ValidationErrors | null> {
    const userName = control.value;
    return this.userService
      .isUserAvailabel(userName)
      .pipe(map(available => (available.length == 0 ? null : { alreadyUsed: true })));
  }

  register(): void {
    console.log(this.userForm.value);
    console.log('FORM_VALID: ', this.userForm.valid)
  }

}
