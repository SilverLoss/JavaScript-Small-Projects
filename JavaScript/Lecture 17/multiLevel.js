class Circle {
  accept(a){
    this.a = a;
    this.area = 0;
  }
  circleArea(){
    this.area = 3.14 * this.a * this.a;
  }
  display(s){
    console.log("The area of", s, "is", this.area);
  }
}

class Rectangle extends Circle {
  accept1(b){
    this.b = b;
  }
  rectArea(){
    this.area = this.a * this.b;
  }
}

class Triangle extends Rectangle{
  triArea(){
    this.area = 0.5 * this.a * this.b;
  }
}


const obj = new Triangle();
obj.accept(10);
obj.accept1(20);
obj.triArea();
obj.display('Triangle')

const obj1 = new Rectangle();
obj.accept(10);
obj.accept1(20);
obj.rectArea();
obj.display('Rectangle');

const obj2 = new Circle();
obj2.accept(10);
obj2.circleArea();
obj2.display('Circle')