class Add {
  add(num1, num2) {
    this.a = num1;
    this.b = num2;
    this.res = this.a + this.b;
  }
  display() {
    console.log("Addition is", this.res);
  }
}

class Sub extends Add {
  sub(num1, num2) {
    this.a = num1;
    this.b = num2;
    this.res1 = this.a - this.b;
  }
  display1() {
    console.log("Subtraction is", this.res1);
  }
}
class Mul extends Add {
  mul(num1, num2) {
    this.a = num1;
    this.b = num2;
    this.res2 = this.a * this.b;
  }
  display2() {
    console.log("Multiplication is", this.res2);
  }
}
class Div extends Add {
  div(num1, num2) {
    this.a = num1;
    this.b = num2;
    this.res3 = this.a / this.b;
  }
  display3() {
    console.log("Division is", this.res3);
  }
}

const obj = new Sub();
const obj1 = new Mul();
const obj2 = new Div();
obj1.add(20, 10);
obj1.display();
obj.sub(20, 10);
obj.display1();
obj1.mul(20, 10);
obj1.display2();
obj2.div(20, 10);
obj2.display3();
