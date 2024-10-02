import { Pony } from "../components/pony/pony-class.component.spec";
import { RaceService } from "./race.service";

describe("Race", () => {
  let rainbowDash: Pony;
  let pinkiePie: Pony;
  let race: RaceService;

  beforeEach(() => {
    rainbowDash = new Pony("RainbowDash", 10);
    spyOn(rainbowDash, "run").and.returnValue(true);

    pinkiePie = new Pony("PinkiePie", 10);
    spyOn(pinkiePie, "run").and.returnValue(false);

    race = new RaceService([rainbowDash, pinkiePie]);
  })

  it("should make the ponies run when it starts", () => {
    const runningPonies: Array<Pony> = race.start();
    
    expect(pinkiePie.run).toHaveBeenCalled();
    expect(rainbowDash.run).toHaveBeenCalledOnceWith(10);
    expect(pinkiePie.run).toHaveBeenCalledOnceWith(10);
    expect(runningPonies).toEqual([rainbowDash]);
  })

})
