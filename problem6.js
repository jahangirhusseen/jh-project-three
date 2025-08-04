/** Problem 06 :  (Current Salary )  */
var experience = 40;
var startingSalary = 30000;
//write your code here

var currentSalary = startingSalary;

for (var j = 0; j < experience; j++) {
  currentSalary += currentSalary * 0.05;
}
console.log(currentSalary.toFixed(2));
