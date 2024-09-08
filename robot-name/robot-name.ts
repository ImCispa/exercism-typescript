class Configurazione {
  static names : string[] = [];
}

export class Robot {
  public name : string = "";

  constructor() 
  {
    this.resetName();
  }

  public resetName(): void {
    let n = this.getName();
    while (Configurazione.names.includes(n))
    {
      n = this.getName();
    }
    Configurazione.names.push(n);
    this.name = n;
  }

  private getName(): string {
    let primaLettera= RandomLettera();
    let secondaLettera= RandomLettera();
    let numero = String(Math.floor(Math.random() * 999) + 1);
    return primaLettera + secondaLettera + numero;
  }

  public static releaseNames(): void {
    Configurazione.names = [];
  }
}

export function RandomLettera() : string {
  const alfabeto: string[] = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let n = Math.floor(Math.random() * 26);
  return alfabeto[n].toUpperCase();
}
