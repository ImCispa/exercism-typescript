export class PrimeNumbers{

  public static GetPrimes(number : number) : number[] {
    let primes : number[] = [1];
    let actualValue = number;
    if (actualValue < 0){
      primes.push(-1);
      actualValue = actualValue * -1
    }
    if (number == 0){
      return [0];
    }
    if (number == 1){
      return primes;
    }
    const defaultTestValue = 2;
    let testValue = 2;
    while(actualValue > 1){
      if ((actualValue % testValue) == 0){
        actualValue = actualValue / testValue;
        primes.push(testValue);
        testValue = defaultTestValue;
      }
      else {
        testValue +=1;
      }
    }

    return primes;
  }
}

export class Rational {
  numerator : number;
  denominator : number;
  constructor(enumerator : number, denominator : number) {

    if (denominator < 0){
      enumerator *= -1;
      denominator *= -1;
    }

    let primeEnumerator = PrimeNumbers.GetPrimes(enumerator);
    let primeDenominator = PrimeNumbers.GetPrimes(denominator);

    let newEnumerator : number[] = primeEnumerator;
    let newDenominator : number[] = [1];
    for (let index = 0; index < primeDenominator.length; index++) {
      const element = primeDenominator[index];
      if (element == 1){
        continue;
      }
      if (newEnumerator.includes(element)){
        newEnumerator.splice(newEnumerator.indexOf(element), 1);
      }
      else
      {
        newDenominator.push(element);
      }
    }

    if (newEnumerator.includes(0)){
      this.numerator = 0;
      this.denominator = 1;
    }
    else {
      this.numerator = newEnumerator.reduce((prev, curr) => prev * curr);
      this.denominator = newDenominator.reduce((prev, curr) => prev * curr);
    }
  }

  add(rational : Rational) : Rational {
    return new Rational(this.numerator * rational.denominator + rational.numerator * this.denominator, this.denominator * rational.denominator);
  }

  sub(rational : Rational) : Rational {
    return new Rational(this.numerator * rational.denominator - rational.numerator * this.denominator, this.denominator * rational.denominator);
  }

  mul(rational : Rational) : Rational {
    return new Rational(this.numerator * rational.numerator, this.denominator * rational.denominator);
  }

  div(rational : Rational) : Rational {
    return new Rational(this.numerator * rational.denominator, this.denominator * rational.numerator);
  }

  abs() : Rational {
    return new Rational(Math.abs(this.numerator), Math.abs(this.denominator));
  }

  exprational(exp : number) : Rational {
    if (exp > 0){
      return new Rational(this.numerator ** exp, this.denominator ** exp);
    }
    else {
      return new Rational(this.denominator ** Math.abs(exp), this.numerator ** Math.abs(exp));
    }
  }

  expreal(exp : number) : number {
    return Math.pow(exp ** this.numerator, 1 / this.denominator);
  }

  reduce() : Rational {
    return new Rational(this.numerator, this.denominator);
  }
}
