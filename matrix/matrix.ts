export class Matrix {
  valore : string;

  constructor(v : string) {
    this.valore = v;
  }

  get rows(): number[][] {
    return this.valore.split('\n').map(x => x.split(' ').map(y => Number(y)));
  }

  get columns(): number[][] {
    let righe = this.valore.split('\n').map(x => x.split(' ').map(y => Number(y)));
    let colonne : number[][] = Array(righe[0].length).fill(0).map(() => Array(righe.length).fill(0));
    for (let x = 0; x < righe.length; x++) {
      const element = righe[x];
      for (let y = 0; y < element.length; y++) {
        const v = element[y];
        colonne[y][x] = v;
      }
    }
    return colonne;
  }
}
