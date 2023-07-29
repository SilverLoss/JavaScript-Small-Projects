class Student {
  constructor(a) {
    this.student = a;
    this.size = this.student.length;
    this.arr = [];
    this.swap = 0;
  }

  add() {
    this.arr.push(
      obj1.student[this.size - 1],
      obj2.student[this.size - 1],
      obj3.student[this.size - 1],
      obj4.student[this.size - 1],
      obj5.student[this.size - 1]
    );

    for (var i = 0; i < this.arr.length; i++) {
      for (var j = i + 1; j < this.arr.length; j++) {
        if (this.arr[i] > this.arr[j]) {
          this.swap = this.arr[i];
          this.arr[i] = this.arr[j];
          this.arr[j] = this.swap;
        }
      }
    }
  }

  display() {
    console.log(
      "The Minimum Fees is ",
      this.arr[0],
      "The Average Fees is ",
      this.arr[Math.floor(this.size / 2)],
      "The Maximum Fees is ",
      this.arr[this.size]
    );

    if (this.arr[this.size] == obj1.student[this.size - 1]) {
      console.log(obj1.student);
    } else if (this.arr[this.size] == obj2.student[this.size - 1]) {
      console.log(obj2.student);
    } else if (this.arr[this.size] == obj3.student[this.size - 1]) {
      console.log(obj3.student);
    } else if (this.arr[this.size] == obj4.student[this.size - 1]) {
      console.log(obj4.student);
    } else {
      console.log(obj5.student);
    }
  }
}

var arr1 = [1, "stu1", "CE", 50000];
var arr2 = [2, "stu2", "ME", 45000];
var arr3 = [3, "stu3", "CS", 55000];
var arr4 = [4, "stu4", "IT", 60000];
var arr5 = [5, "stu5", "EC", 35000];

const obj1 = new Student(arr1);
const obj2 = new Student(arr2);
const obj3 = new Student(arr3);
const obj4 = new Student(arr4);
const obj5 = new Student(arr5);

obj5.add();
obj5.display();
