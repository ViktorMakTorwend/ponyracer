import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';
import { UserModel } from '../../types/userModel';

@Component({
  selector: 'eva-register-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
  ],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css'
})
export class RegisterFormComponent {
  password: FormControl;
  user: UserModel = {
    username: '',
    password: '',
  }
  constructor() {
    this.password = new FormControl('Viktor');
    console.log("DIRTY: ", this.password.dirty);
    console.log("PASSWORD: ", this.password.value);
    console.log("HAS_ERROR: ", this.password.hasError("required"));
  }

  register(): void {
    console.log(this.user);
  }
}
