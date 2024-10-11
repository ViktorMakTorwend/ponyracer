import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'eva-register-form-record',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './register-form-record.component.html',
  styleUrl: './register-form-record.component.css'
})
export class RegisterFormRecordComponent {
  equipmentRecord = this.fb.record({
    toothbrush: true
  });
  packingListForm = this.fb.group({
    equipments: this.equipmentRecord
  });
  
  constructor(private fb: NonNullableFormBuilder) {}

  addEquipment(equipment: string) {
    this.equipmentRecord.addControl(equipment, this.fb.control(true));
  };

  removeEquipment(equipment: string) {
    this.equipmentRecord.removeControl(equipment);
  }

  register() {
    console.log(this.packingListForm.value);
    console.log('FORM_VALID: ', this.packingListForm.valid)
  }
}
