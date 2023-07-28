class checkPrime {
  constructor(a) {
    this.a = a;
    this.prime = "Prime";
  }
  primeNo() {
    if (this.a == 0 || this.a == 1) {
      this.prime = "Not prime";
    } else {
      for (var i = 2; i < this.a; i++) {
        if (this.a % i == 0) {
          this.prime = "Not prime";
          break;
        }
      }
    }
  }
  display() {
    console.log(this.prime);
  }
}
var num = 23;
const obj = new checkPrime(num);
obj.primeNo();
obj.display();
