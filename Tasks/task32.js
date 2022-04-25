var array = [];
for (let i = 0; i < 5; i++) {
  var num = parseInt(prompt("Enter a number : "));
  if (typeof num == "number") {
    array.push(num);
  }
}

document.writeln("<h1>Sorting</h1> <hr>");

document.write(
  `<span style="font-size:24px; color:red"> You've entered the values of </span> <span style="font-size:24px;">${array.join(
    " , "
  )}</span> <br>`
);

array.sort();
array.reverse();

document.writeln(
  `<span style="font-size:24px; color:red"> Your values after being sorted descending </span> <span style="font-size:24px;"> ${array.join(
    " , "
  )}</span><br>`
);

array.sort();
document.writeln(
  `<span style="font-size:24px; color:red"> Your values after being sorted ascending </span> <span style="font-size:24px;"> ${array.join(
    " , "
  )}</span>`
);
