class multMatrix {
  constructor(x, y) {
    this.a = x;
    this.b = y;
    this.z = [[], []];
  }

  mult() {
    for (var i = 0; i < 2; i++) {
      for (var j = 0; j < 3; j++) {
        this.z[i][j] = this.a[i][j] * this.b[i][j];
      }
    }
  }

  display() {
    for (var i = 0; i < 2; i++) {
        for(var j=0; j < 3; j++){
            console.log(this.z[i][j])
        }
    }
  }
}

var arr1 = [
  [1, 2, 3],
  [4, 5, 6],
];
var arr2 = [
  [1, 2, 3],
  [4, 5, 6],
];

const obj = new multMatrix(arr1, arr2);
obj.mult();
obj.display();
