import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'eva-register-form-array',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './register-form-array.component.html',
  styleUrl: './register-form-array.component.css'
})
export class RegisterFormArrayComponent {
  tagsArray = this.fb.array(['']);
  blogPostForm = this.fb.group({
    title: '',
    content: '',
    tags: this.tagsArray,
  })

  constructor(private fb: FormBuilder) {}

  addTag() {
    this.tagsArray.push(this.fb.control(''))
  }

  removeTag(index: number) {
    this.tagsArray.removeAt(index);
  }

  register() {
    console.log(this.blogPostForm.value);
    console.log('FORM_VALID: ', this.blogPostForm.valid)
  }
}
