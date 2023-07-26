class checkPalindrome {
  constructor(s) {
    this.s = s;
    this.flag = true;
  }
  check() {
    for (var i = 0; i < this.s.length / 2; i++) {
      if (this.s[i] != this.s[this.s.length - i - 1]) {
        this.flag = false;
        break;
      }
    }
  }
  display() {
    if(this.flag){
        console.log("Palindrome")
    }else{
        console.log("Not palindrome")
    }
  }
}

var s = "civic";
const obj = new checkPalindrome(s);
obj.check();
obj.display();
