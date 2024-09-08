export function commands(code : number) : string[] {
  let actions : string[] = [];
  let binaryCode : string = code.toString(2);
  let position : number = 0;
  binaryCode.split('').reverse().forEach(element => {
    switch (position){
      case 0:
        if (element == '1'){
          actions.push('wink');
        }
        break;
      case 1:
        if (element == '1'){
          actions.push('double blink');
        }
        break;
      case 2:
        if (element == '1'){
          actions.push('close your eyes');
        }
        break;
      case 3:
        if (element == '1'){
          actions.push('jump');
        }
        break;
      case 4:
        if (element == '1'){
          actions.reverse();
        }
        break;
      default:
        break;
    }
    position += 1;
  });

  return actions;
}
