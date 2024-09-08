export function hey(message: string): string {
  if (message.trimEnd().endsWith('?')) {
    if (message.toUpperCase() == message && message.toLocaleLowerCase() != message){
      return 'Calm down, I know what I\'m doing!';
    }
    else {
      return 'Sure.';
    }
  }
  else {
    if (message.toUpperCase() == message && message.toLocaleLowerCase() != message){
      return 'Whoa, chill out!';
    }
    else if (message.trim() == ''){
      return 'Fine. Be that way!';
    }
  }
  return 'Whatever.';
}
