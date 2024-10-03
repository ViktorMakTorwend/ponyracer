import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PonyComponent } from './pony.component';
import { PonyModel } from '../../types/ponyModel';

@Component({
  selector: 'eva-test-host',
  template: '',
  standalone: true,
  imports: [PonyComponent]
})
class TestHostComponent {
  pony: PonyModel = {
    id: 11, 
    name: 'Test_1',
    birtday: "2022-03-25",
    numberInCatalog: 58624,
    winPer: 0.8,
    cost: 2547,
    color: "WHITE",
  };
}

describe("PonyComponent", () => {
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it("should display a non-running pony by default", () => {
    TestBed.overrideTemplate(TestHostComponent, '<eva-pony [pony]="pony"/>');
    fixture = TestBed.createComponent(TestHostComponent);

    fixture.detectChanges();

    const element = fixture.nativeElement as HTMLElement;
    expect(element.querySelector("img")!.src).toContain("pony-white.jpg")
  });

  it("should display a running pony if the 'running' is true", () => {
    TestBed.overrideTemplate(TestHostComponent, '<eva-pony [pony]="pony" [running]="true"/>');
    fixture = TestBed.createComponent(TestHostComponent);

    fixture.detectChanges();

    const element = fixture.nativeElement as HTMLElement;
    expect(element.querySelector("img")!.src).toContain("pony-white-running.jpg")
  });
})
