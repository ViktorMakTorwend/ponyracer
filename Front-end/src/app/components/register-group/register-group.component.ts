import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'eva-register-group',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './register-group.component.html',
  styleUrl: './register-group.component.css'
})
export class RegisterGroupComponent {
  usernameCtrl = this.fb.control('', Validators.required);
  passwordCtrl = this.fb.control('', Validators.required);
  confirmCtrl = this.fb.control('', Validators.required);
  passwordGroup = this.fb.group(
    { password: this.passwordCtrl, confirm: this.confirmCtrl },
    { validators: RegisterGroupComponent.passwordMatch }
  );

  userForm = this.fb.group(
    {
      username: this.usernameCtrl,
      passwordForm: this.passwordGroup
    }
  );

  constructor(private fb: FormBuilder) { }

  static passwordMatch(group: AbstractControl): ValidationErrors | null {
    const password = group.get('password')!.value;
    const confirm = group.get('confirm')!.value;
    return password === confirm ? null : { matchingError: true };
  }

  register(): void {
    console.log(this.userForm.value);
  }
}
