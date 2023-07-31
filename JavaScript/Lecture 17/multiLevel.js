class Rectangle {
  area(l, w) {
    this.l = l;
    this.w = w;
    this.area = this.l * this.w;
  }
  display() {
    console.log("Area of Rectangle", this.area);
  }
}

class Circle extends Rectangle {
  area1(r) {
    this.r = r;
    this.area1 =  3.14 * this.r * this.r;
  }
  display1() {
    console.log("Area of Circle",this.area1);
  }
}

class Triangle extends Circle {
  area2(h, b) {
    this.h = h;
    this.b = b;
    this.area2 = 0.5 * this.h * this.b;
  }
  display2() {
    console.log("Area of Triangle", this.area2);
  }
}

const obj = new Triangle();
obj.area(10, 20);
obj.display();
obj.area1(10);
obj.display1();
obj.area2(10, 20);
obj.display2();
