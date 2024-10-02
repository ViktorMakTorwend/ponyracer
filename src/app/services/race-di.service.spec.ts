import { TestBed, waitForAsync } from "@angular/core/testing";
import { RaceDIService } from "./race-di.service";

describe("RaceDI", () => {
  it("should return races when list() is called", () => {
    const raceService = new RaceDIService();
    expect(raceService.list().length).toBe(2)
  })

  it("should return races when list() is called through DI", () => {
    const raceService_DI = TestBed.inject(RaceDIService);
    expect(raceService_DI.list().length).toBe(2);
  })
})

describe("RaceDI best with observable", () => {
  let service: RaceDIService;

  beforeEach(() => {
    service = TestBed.inject(RaceDIService);
  })

  it("should return races when list() is called through DI best", () => {
    expect(service.list().length).toBe(2);
  })

  it("should return an observable of 2 races", waitForAsync(() => {
    service.listObservable().subscribe(arr => { expect(arr.length).toBe(2) });
  }))
})
