export function toRna(dna : string) {
  
  let risultato : string = "";
  dna.split("").forEach(element => {
    switch(element){
      case 'G':
        risultato += 'C';
        break;
      case 'C':
        risultato += 'G';
        break;
      case 'T':
        risultato += 'A';
        break;
      case 'A':
        risultato += 'U';
        break;
      default:
        throw new Error ('Invalid input DNA.');
      }
  });
  return risultato;
}
