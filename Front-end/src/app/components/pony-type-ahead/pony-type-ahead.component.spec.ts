import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PonyTypeAheadComponent } from './pony-type-ahead.component';

describe('PonyTypeAheadComponent', () => {
  let component: PonyTypeAheadComponent;
  let fixture: ComponentFixture<PonyTypeAheadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PonyTypeAheadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PonyTypeAheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
