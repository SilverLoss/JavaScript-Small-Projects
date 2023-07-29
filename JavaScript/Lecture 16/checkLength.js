class CheckLength {
  constructor(s) {
    this.s = s;
    this.s1 = "";
    this.max = 0;
    this.maxString = "";
    this.arr = [];
  }
  check() {
    for (var i of this.s) {
      if (i == " ") {
        this.arr.push(this.s1);
        this.s1 = "";
      } else {
        this.s1 += i;
      }
    }
    if (this.s1 != "") {
      this.arr.push(this.s1);
    }

    for (var i = 0; i < this.arr.length; i++) {
        if(this.arr[i].length > this.max){
            this.max = this.arr[i].length;
            this.maxString = this.arr[i];
        }
    }
  }
  display(){
    console.log("Maximum Length is " + this.maxString)
  }
}

var s = "it is a long established fact that a reader will be distracted";

const obj = new CheckLength(s);
obj.check();
obj.display();