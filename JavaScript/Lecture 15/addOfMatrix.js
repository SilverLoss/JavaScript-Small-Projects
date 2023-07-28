class addMatrix {
  constructor(a, b) {
    this.a = a;
    this.b = b;
    this.z = [[], []];
  }
  add() {    
    for (var i = 0; i < 2; i++) {
      for (var j = 0; j < 3; j++) {
        this.z[i][j] = this.a[i][j] + this.b[i][j];
      }
    }
  }
  display() {
    for (var i = 0; i < 2; i++) {
      for (var j = 0; j < 3; j++) {
        console.log(this.z[i][j])
      }
    }
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

const obj = new addMatrix(arr1, arr2);
obj.add();
obj.display();
