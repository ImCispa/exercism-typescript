export class Squares {

  r: number[];
  
  constructor(count: number) {
    this.r = Array.from({ length: count }, (_, i) => i + 1);
  }

  get sumOfSquares(): number {
    return this.r.reduce((a, b) => a + b ** 2, 0);
  }

  get squareOfSum(): number {
    return this.r.reduce((a, b) => a + b, 0) ** 2;
  }

  get difference(): number {
    return this.squareOfSum - this.sumOfSquares;
  }
}
