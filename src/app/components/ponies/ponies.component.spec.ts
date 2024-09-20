import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoniesComponent } from './ponies.component';

describe('PoniesComponent', () => {
  let component: PoniesComponent;
  let fixture: ComponentFixture<PoniesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PoniesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
