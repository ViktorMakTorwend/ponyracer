
export class Pony {

  constructor(
    public name: string,
    public speed: number,
  ){}

  isFasterThan(speed: number): boolean {
    return this.speed > speed;
  }

  run(speed: number): boolean {
    return speed > 0 ? true : false;
  }
}

describe("My first test suit", () => {
  it("should construct a pony", () => {
    const pony = new Pony("Rainbow dush", 10);
    expect(pony.name).toBe("Rainbow dush");
    expect(pony.speed).not.toBe(1);
    expect(pony.isFasterThan(8)).toBe(true);
  })
})