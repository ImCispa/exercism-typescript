export class GradeSchool {
  readonly db : Record<number, string[]> = {};
  readonly names : string[] = [];

  roster() : Record<number, string[]> {
    return this.db;
  }

  add(nome : string, grado : number) {
    if (!this.db[grado]){
      this.db[grado] = [];
    }
    if (this.names.includes(nome)){
      Object.entries(this.db).forEach(([x, y]) => { y = y.filter(z => z === nome);});      
    }
    else{
      this.names.push(nome);
    }
    this.db [grado].push(nome);
  }

  grade(grado : number) : string[] {
    if (!this.db[grado]){
      return [];
    }
    return this.db[grado].sort();
  }
}
