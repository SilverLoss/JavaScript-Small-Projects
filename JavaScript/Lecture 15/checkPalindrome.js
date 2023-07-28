class checkPalindrome {
  constructor(s) {
    this.s = s;
    this.flag = 'Palindrome';
  }
  check() {
    for (var i = 0; i < this.s.length / 2; i++) {
      if (this.s[i] != this.s[this.s.length - i - 1]) {
        this.flag = 'Not palindrome';
        break;
      }
    }
  }
  display() {
   console.log(flag);
  }
}

var s = "civic";
const obj = new checkPalindrome(s);
obj.check();
obj.display();
