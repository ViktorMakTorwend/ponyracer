import { ComponentFixture, TestBed } from "@angular/core/testing"
import { PoniesComponent } from "./ponies.component"
import { PonyComponent } from "../pony/pony.component";
import { By } from "@angular/platform-browser";

fdescribe("RaceComponent", () => {
  let fixture: ComponentFixture<PoniesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    fixture = TestBed.createComponent(PoniesComponent);
  });

  it("should have a name and a list of ponies", () => {
    const ponyComponent = fixture.componentInstance;
    ponyComponent.ponies = [
      {
        id: 1,
        name: 'Rainbow Dash',
        birtday: "2022-03-25",
        numberInCatalog: 58624,
        winPer: 0.8,
        cost: 2547,
        color: "white",
      },
      {
        id: 2,
        name: 'Pinkie Pie',
        birtday: "2021-04-25",
        numberInCatalog: 95127,
        winPer: 0.75,
        cost: 3574,
        color: "black",
      },
      {
        id: 3,
        name: 'London Vi',
        birtday: "2020-08-15",
        numberInCatalog: 12475,
        winPer: 0.3,
        cost: 6524,
        color: "brown",
      }
    ];

    fixture.detectChanges();

    const element = fixture.nativeElement as HTMLElement;
    expect(element.querySelector("h2")!.textContent).toBe(" Ponies ");

    const ponies = fixture.debugElement.queryAll(By.directive(PonyComponent));
    expect(ponies.length).toBe(3);

    const rainbowDash = ponies[0].componentInstance.pony;
    expect(rainbowDash.name).toBe("Rainbow Dash");
  })
})