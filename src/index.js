export class Ship {
  constructor(length) {
    this.length = length;
    this.damage = 0;
  }

  hit() {
    this.damage++;
  }

  isSunk() {
    return this.length === this.damage;
  }
}
