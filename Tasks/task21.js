//Task 2.1

var char = prompt("Enter you string.");

var e = char.match(/[e,E]/g);

console.log(e);

if (typeof e != "undefined") {
  document.writeln(`<h1>e = ${e.length}</h1>`);
} else {
  document.writeln(`<h1>Your sentnse doesn't contain "e" </h1>`);
}
