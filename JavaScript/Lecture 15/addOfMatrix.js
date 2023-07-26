class addMatrix {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
  add() {
    this.c = this.a + this.b;
  }
  display() {
    console.log("Addition of matrix values ", this.a, this.b, " is ", this.c);
  }
}

var arr1 = [
  [1, 3, 5],
  [7, 10, 12],
];
var arr2 = [
  [2, 4, 6],
  [8, 11, 13],
];

var num1, num2;

for (var i = 0; i < 2; i++) {
  for (var j = 0; j < 3; j++) {
    num1 = arr1[i][j];
    num2 = arr2[i][j];
    const obj = new addMatrix(num1, num2);
    obj.add();
    obj.display();
  }
}
