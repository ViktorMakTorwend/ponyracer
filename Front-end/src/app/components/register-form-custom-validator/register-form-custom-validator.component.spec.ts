import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterFormCustomValidatorComponent } from './register-form-custom-validator.component';

describe('RegisterFormCustomValidatorComponent', () => {
  let component: RegisterFormCustomValidatorComponent;
  let fixture: ComponentFixture<RegisterFormCustomValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterFormCustomValidatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterFormCustomValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
