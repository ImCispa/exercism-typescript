export class DnDCharacter {
  strength: number = DnDCharacter.generateAbilityScore();
  dexterity: number = DnDCharacter.generateAbilityScore();
  constitution: number = DnDCharacter.generateAbilityScore();
  intelligence: number = DnDCharacter.generateAbilityScore();
  wisdom: number = DnDCharacter.generateAbilityScore();
  charisma: number = DnDCharacter.generateAbilityScore();
  hitpoints: number = 10 + DnDCharacter.getModifierFor(this.constitution);
  
  public static generateAbilityScore(): number {
    let dadi : number[] = [ Dado(), Dado(), Dado(), Dado()];
    dadi.sort((a, b) => b - a);
    return dadi[0] + dadi[1] + dadi[2];
  }

  public static getModifierFor(abilityValue: number): number {
    return Math.floor((abilityValue - 10) / 2);
  }
}

export function Dado() : number {
  return Math.floor(Math.random() * 6) + 1;
}