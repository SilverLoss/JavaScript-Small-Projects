class Add{
  accept(a,b){
    this.a = a;
    this.b = b;
  }
  add(){
    this.result = this.a +  this.b;
  }
  display(s){
    console.log("Result of" , s , "is", this.result);
  }
}

class Sub extends Add{
  sub(){
    this.result = this.a - this.b;
  }
}

class Mult extends Add{
  mult(){
    this.result = this.a * this.b;
  }
}

class Div extends Add{
  div(){
    this.result = this.a / this.b;
  }
}

const obj = new Div();
obj.accept(200, 100)
obj.div();
obj.display('Division')

const obj1 = new Mult();
obj1.accept(20, 10)
obj1.mult();
obj1.display('Multiplication')

const obj2 = new Add()
obj2.accept(20, 10)
obj2.add();
obj2.display('Addition')