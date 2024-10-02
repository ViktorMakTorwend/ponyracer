import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PonyComponent } from './pony.component';

describe("PonyComponent", () => {
  
  beforeEach(() => {
    TestBed.configureTestingModule({});
  })

  it("should have an image", () => {
    const fixture = TestBed.createComponent(PonyComponent);
    const ponyComponent = fixture.componentInstance;

    ponyComponent.pony = {
      id: 11, 
      name: 'Test_1',
      birtday: "2022-03-25",
      numberInCatalog: 58624,
      winPer: 0.8,
      cost: 2547,
      color: "BLUE",
    }
    fixture.detectChanges();

    const element = fixture.nativeElement as HTMLElement;
    const imageElement = element.querySelector('img');
    expect(imageElement?.getAttribute('src')).toContain('/images/pony-blue-running.jpg');
    expect(imageElement?.getAttribute('alt')).toBe('Test_1');
  })

  it("should emit an event on click", () => {
    const fixture = TestBed.createComponent(PonyComponent);
    const ponyComponent = fixture.componentInstance;

    ponyComponent.pony = {
      id: 11, 
      name: 'Test_1',
      birtday: "2022-03-25",
      numberInCatalog: 58624,
      winPer: 0.8,
      cost: 2547,
      color: "BLUE",
    }
    spyOn(ponyComponent.ponySelected, "emit");

    const element = fixture.nativeElement as HTMLElement;
    const image = element.querySelector("img");
    image?.dispatchEvent(new Event('click'));

    fixture.detectChanges();

    expect(ponyComponent.ponySelected.emit).toHaveBeenCalled();
  })
})
