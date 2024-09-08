export class Clock {
  private hour : number;
  private minute : number;

  constructor(hour: number, minute?: number | null) {
    this.hour = hour;
    if (minute === undefined || minute === null){
      this.minute = 0;
    }
    else {
      this.minute = minute;
    }
    this.Roll();
  }

  private Roll(){
    while(0 > this.minute){
      this.hour -= 1;
      this.minute += 60;
    }    
    while(this.minute >= 60){
      this.hour += 1;
      this.minute -= 60;
    }
    while(0 > this.hour){
      this.hour += 24;
    }    
    while(this.hour >= 24){
      this.hour -= 24;
    }
  }

  public toString(): string {
    return this.hour.toString().padStart(2, "0") + ":" + this.minute.toString().padStart(2, "0");
  }

  public plus(minutes: number): Clock {
    this.minute += minutes;
    this.Roll();
    return this;
  }

  public minus(minutes: number): Clock {
    this.minute -= minutes;
    this.Roll();
    return this;
  }

  public equals(other: Clock): boolean {
    return this.toString() === other.toString();
  }
}
