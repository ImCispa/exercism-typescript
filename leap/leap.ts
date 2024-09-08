export function isLeap(anno : number) {
  let d4 = (anno % 4) == 0;
  let d100 = (anno % 100) == 0;
  let d400 = (anno % 400) == 0;
  return d4 && (!d100 || d400);
}
