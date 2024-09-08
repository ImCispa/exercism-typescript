export function find(haystack: number[], needle: number): number | never {
  if (haystack.length == 0){
    throw new Error('Value not in array');
  }

  let source : number[] = haystack;
  let position : number = 0;


  while (true){
    if(source.length == 1){
      if (source[0] == needle){
        return position;
      }
      else {
        throw new Error('Value not in array');
      }
    }
    else{
      let centerIndex = Math.floor(source.length / 2);
      if (source[centerIndex] > needle){
        source = source.splice(0, centerIndex);
      }
      else if (needle > source[centerIndex]){
        position += centerIndex;
        source = source.splice(centerIndex, source.length - centerIndex);
      }
      else{
        return position + centerIndex;
      }
    }
  }
}
