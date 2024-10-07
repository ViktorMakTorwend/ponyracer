import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'eva-register-form-2',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './register-form-2.component.html',
  styleUrl: './register-form-2.component.css'
})
export class RegisterForm2Component {
  userForm = this.fb.group({
    username: this.fb.control('', [Validators.required, Validators.minLength(3)]),
    password: this.fb.control('', Validators.required),
  })

  constructor(private fb: FormBuilder) {}

  register(): void {
    console.log(this.userForm.value);
    console.log('FORM_VALID: ', this.userForm.valid)
  }

}
