import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterChangeComponent } from './register-change.component';

describe('RegisterChangeComponent', () => {
  let component: RegisterChangeComponent;
  let fixture: ComponentFixture<RegisterChangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterChangeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
