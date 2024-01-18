import { Ship } from ".";

test("Testing if the ship is being hit", () => {
  const newShip = new Ship;
  newShip.hit();
  expect(newShip.damage).toBe(1);
});

test("Testing if the ship is sunk", () => {
  const newShip = new Ship(1);
  newShip.hit();
  expect(newShip.isSunk()).toBe(true);
})
