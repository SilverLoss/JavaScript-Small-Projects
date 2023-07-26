class checkPrime {
  constructor(a) {
    this.a = a;
    this.prime = 0;
    this.i = 1;
  }
  primeNo() {
    while (this.i <= this.a) {
      if (this.a % this.i == 0) {
        this.prime++;
      }
      this.i++;
    }
  }

  display() {
    if (this.prime == 2) {
      console.log(`${this.a} is a Prime Number`);
    } else {
      console.log(`${this.a} is not a Prime Number`);
    }
  }
}

const obj = new checkPrime(5);
obj.primeNo();
obj.display();
