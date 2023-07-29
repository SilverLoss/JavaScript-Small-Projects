class Student {
  
  constructor(rollNo, names, branch, fees) {
    this.rollNo = rollNo;
    this.names = names;
    this.branch = branch;
    this.fees = fees;
    this.arr = [];
    this.swap = 0;
    this.avg = Math.floor((0 + this.fees.length) / 2);
    this.index = 0;
  }

  compare() {
    for (var a = 0; a < this.fees.length; a++) {
      this.arr.push(this.fees[a]);
    }

    for (var i = 0; i < this.fees.length; i++) {
      for (var j = i + 1; j < this.fees.length; j++) {
        if (this.fees[i] > this.fees[j]) {
          this.swap = this.fees[i];
          this.fees[i] = this.fees[j];
          this.fees[j] = this.swap;
        }
      }
    }

    for (var k = 0; k <= 4; k++) {
      if (this.fees[this.fees.length - 1] == this.arr[k]) {
        this.index = k;
        break;
      }
    }
  }

  display() {
    console.log(
      "The Minimum Fees is ",
      this.fees[0],
      "The Average Fees is ",
      this.fees[this.avg],
      "The Maximum Fees is ",
      this.fees[this.fees.length - 1]
    );

    console.log(
      "The Maximum Fees Student Details ",
      "Roll No. ",
      this.rollNo[this.index],
      " Name ",
      this.names[this.index],
      " Branch ",
      this.branch[this.index],
      " Fees ",
      this.arr[this.index]
    );
  }
}

var rollNo = [1, 2, 3, 4, 5];
var names = ["stu1", "stu2", "stu3", "stu4", "stu5"];
var branch = ["CE", "ME", "CS", "IT", "EC"];
var fees = [50000, 45000, 55000, 60000, 35000];

const obj = new Student(rollNo, names, branch, fees);
obj.compare();
obj.display();
