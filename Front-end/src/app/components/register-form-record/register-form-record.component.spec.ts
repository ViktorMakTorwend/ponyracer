import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterFormRecordComponent } from './register-form-record.component';

describe('RegisterFormRecordComponent', () => {
  let component: RegisterFormRecordComponent;
  let fixture: ComponentFixture<RegisterFormRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterFormRecordComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterFormRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
