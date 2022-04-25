var array = [];
for (let i = 0; i < 3; i++) {
  var num = parseInt(prompt("Enter a number : "));
  if (typeof num == "number") {
    array.push(num);
  }
}
document.writeln(
  "<h1> Adding -- Multiplying -- and dividing 3 values</h1> <hr>"
);
var total = 0;

var arraySum = array.join(" + ");
var arrayMul = array.join(" * ");
var arrayDiv = array.join(" / ");

//Sum
for (var i = 0; i < array.length; i++) {
  total += array[i];
}
//Print Sum
printString(arraySum, total, "Sum of the 3 values");

total = 1;
//Multiplcation
for (var i = 0; i < array.length; i++) {
  total *= array[i];
}
//Print Multiplcation
printString(arrayMul, total, "multioplication of the 3 values");

total = 1;
//Division
for (var i = 0; i < array.length; i++) {
  total /= array[i];
}
//Print Division
printString(arrayDiv, total, "Division of the 3 values ");

function printString(numsString, totalNums, msg) {
  document.writeln(
    `<span style="font-size:24px; color:red">  ${msg} </span> <span style="font-size:24px;">${numsString} = ${totalNums} </span> <br>`
  );
}
