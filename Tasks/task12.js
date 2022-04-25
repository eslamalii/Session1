// Task 1.2

var sum = 0;

while (sum < 100) {
  var nums = parseInt(prompt("Please enter a number."));
  if (nums == 0) break;
  if (typeof nums === "number") {
    sum += nums;
  }
}

document.writeln(`<h1> Your sum is ${sum}</h1>`);
