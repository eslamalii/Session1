var name = prompt("Name: ");
var isNameVaild = /\D/.test(name);

var phoneNum = prompt("Phone number (8 digits): ");
var isPhoneVaild = /^[0-9]{8}$/.test(phoneNum);

var mobileNum = prompt("Mobile Number (010, 012, 011) :");
var isMobileVaild = /^((010)|(012)|(011))[0-9]{8}/.test(mobileNum);

var email = prompt("Email: ");
var isEmailVaild = /\w+@[A-Za-z]+.com/.test(email);

var colors = colorsCheck();

document.writeln("<h1>Entering user info</h1> <hr>");

checkVaildtion(isNameVaild, colors, "Welcome dear guest", name);
checkVaildtion(isPhoneVaild, colors, "your telephone number is ", phoneNum);
checkVaildtion(isMobileVaild, colors, "your mobile number is", mobileNum);
checkVaildtion(isEmailVaild, colors, "your email address is ", email);

const timeElapsed = Date.now();
const today = new Date(timeElapsed);

document.writeln(
  `<span style="color:${colors};font-size:28px;" >Today is </span> <span style="font-size:28px">${today.toDateString()}</span>`
);

function checkVaildtion(vaildation, color, msg, input) {
  if (vaildation) {
    document.writeln(
      `<span style="color:${color}; font-size:28px">${msg} </span> <span style="font-size:28px">${input}</span> <br>`
    );
  } else {
    document.writeln(
      `<span style="color:${color}; font-size:28px">${msg} </span> <span style="font-size:28px"> Invaild</span> <br>`
    );
  }
}

//Check Color Vaildation
function colorsCheck() {
  var color = prompt("Choose a color: Red, Blue, Green").toLowerCase();
  if (color === "red" || color === "blue" || color === "green") {
    return color;
  } else {
    return "black";
  }
}
