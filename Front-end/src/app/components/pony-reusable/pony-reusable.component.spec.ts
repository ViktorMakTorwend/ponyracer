import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PonyReusableComponent } from './pony-reusable.component';

describe('PonyReusableComponent', () => {
  let component: PonyReusableComponent;
  let fixture: ComponentFixture<PonyReusableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PonyReusableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PonyReusableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
