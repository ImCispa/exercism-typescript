export class LinkedList<TElement> {
  route : TElement[] = []; 

  public push(element: TElement) {
    this.route.push(element);
  }

  public pop(): unknown {
    return this.route.pop();
  }

  public shift(): unknown {
    return this.route.shift();
  }

  public unshift(element: TElement) {
    this.route.unshift(element);
  }

  public delete(element: TElement) {
    this.route = this.route.filter(x => x !== element);
  }

  public count(): number {
    return this.route.length;
  }
}
