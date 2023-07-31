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
  display1() {
    console.log("Subtraction is", this.a - this.b);
  }
}
class Mul extends Sub {
  display2() {
    console.log("Multiplication is", this.a * this.b);
  }
}
class Div extends Mul {
  display3() {
    console.log("Division is", this.a / this.b);
  }
}
const obj = new Div();
obj.add(20, 10);
obj.display();
obj.display1();
obj.display2();
obj.display3();
