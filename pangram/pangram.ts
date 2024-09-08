export function isPangram(testo: string) {
  const alfabeto: string[] = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let tutte = true;
  alfabeto.forEach(x => 
    {
      tutte &&= testo.toLowerCase().includes(x);
    });
    return tutte;
}
