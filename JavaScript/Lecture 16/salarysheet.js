class SalarySheet {
  constructor(emp1) {
    this.a = emp1;
    this.size = this.a.length - 1;
    this.absent = 0;
    this.totalSal = 0;
  }
  add() {
    this.absent = (this.a[this.size] * this.a[0]) / 26;
    this.totalSal = Math.floor(
      this.a[0] + this.a[1] + this.a[2] + this.a[3] - (this.a[4] + this.absent)
    );
  }
  display() {
    console.log("Total Salary of Employee is ", this.totalSal);
  }
}

var emp1 = [200000, 1000, 1500, 500, 900, 4];
var emp2 = [150000, 1200, 1000, 600, 800, 5];
var emp3 = [220000, 1400, 1800, 900, 1200, 3];

const obj = new SalarySheet(emp1);
obj.add();
obj.display();
const obj1 = new SalarySheet(emp2);
obj1.add();
obj1.display();
const obj2 = new SalarySheet(emp3);
obj2.add();
obj2.display();
