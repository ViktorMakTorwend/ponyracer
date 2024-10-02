import { TestBed } from "@angular/core/testing";
import { LocalStarageService } from "./local-starage.service";
import { RaceLocalStorageService } from "./race-local-storage.service";

class FakeLocalStorage {
  get(key: string): any {
    return [{name: "Lyon"}, {name: "London"}, {name: "York"}];
  }
}

describe("RaceDI with fake service", () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{provide: LocalStarageService, useClass: FakeLocalStorage}]
    })
  });

  it("should return 3 races from localStorage", () => {
    const service = TestBed.inject(RaceLocalStorageService);
    const races = service.list();
    expect(races.length).toBe(3);
  })
})

describe("RaceDI best with fake service", () => {
  const localStorage = jasmine.createSpyObj<LocalStarageService>('LocalStarageService', ["get"]);
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{provide: LocalStarageService, useValue: localStorage}]
    })
  });

  it("should return 3 races from localStorage best", () => {
    localStorage.get.and.returnValue([{name: "Lyon"}, {name: "London"}, {name: "York"}]);

    const service = TestBed.inject(RaceLocalStorageService);
    const races = service.list();

    expect(races.length).toBe(3);
    expect(localStorage.get).toHaveBeenCalledOnceWith("races");
  })
})