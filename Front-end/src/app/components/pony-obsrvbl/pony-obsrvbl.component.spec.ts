import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PonyObsrvblComponent } from './pony-obsrvbl.component';

describe('PonyObsrvblComponent', () => {
  let component: PonyObsrvblComponent;
  let fixture: ComponentFixture<PonyObsrvblComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PonyObsrvblComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PonyObsrvblComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
