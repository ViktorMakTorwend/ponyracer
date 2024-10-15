import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoniesObsrvblComponent } from './ponies-obsrvbl.component';

describe('PoniesObsrvblComponent', () => {
  let component: PoniesObsrvblComponent;
  let fixture: ComponentFixture<PoniesObsrvblComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PoniesObsrvblComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoniesObsrvblComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
