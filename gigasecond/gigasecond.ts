export class Gigasecond {
  private static readonly GIGASECOND_IN_MS = 1_000_000_000 * 1000;
  private startDate: Date;

  constructor(startDate: Date) {
    this.startDate = startDate;
  }

  public date(): Date {
    return new Date(this.startDate.getTime() + Gigasecond.GIGASECOND_IN_MS);
  }
}