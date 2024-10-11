import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterFormArrayComponent } from './register-form-array.component';

describe('RegisterFormArrayFormComponent', () => {
  let component: RegisterFormArrayComponent;
  let fixture: ComponentFixture<RegisterFormArrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterFormArrayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterFormArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
