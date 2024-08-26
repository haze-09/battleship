import { describe, expect, test } from "@jest/globals";
import ship from "./ship";

describe("ship objects can", () => {
  test("take hits and sink", () => {
    let cruiser = ship(3);
    for (let i = 0; i < 3; i++) {
      cruiser.hit();
    }
    expect(cruiser.sunk).toBe(true);
  });

  test("take hits and not sink", () => {
    let cruiser = ship(3);
    for (let i = 0; i < 2; i++) {
      cruiser.hit();
    }
    expect(cruiser.sunk).toBe(false);
  });
});
