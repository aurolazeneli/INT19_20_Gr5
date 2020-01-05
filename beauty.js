
 function validate1()
{
  var username = document.getElementById('name');
  var useremail = document.getElementById('email');
  if(username.value.trim() =="" || email.value.trim() =="")
  {
    alert("No blank values allowed");
    return false;
  }
  else
  {
  true;
  }
}
const input_fields = {
name: 	/^[a-zA-Z0-9]+([a-zA-Z0-9](_|-| )[a-zA-Z0-9])*[a-zA-Z0-9]*$/,

email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
}
const validate = (field, regex) => {
regex.test(field.value) ? field.className = 'valid' : field.className = 'invalid';

}
let keys = document.querySelectorAll('input');
keys.forEach(item => item.addEventListener(
'keyup', e => {
  validate(e.target, input_fields[e.target.attributes.name.value])
}
));

function myFunction2() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn1");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}
function myFunction1() {
  var dots = document.getElementById("dots1");
  var moreText = document.getElementById("more1");
  var btnText = document.getElementById("myBtn11");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}
function myFunction2() {
  var dots = document.getElementById("dots2");
  var moreText = document.getElementById("more2");
  var btnText = document.getElementById("myBtn12");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

console.log('It works');
//ni for loop diqka
var component = ["Aloevera", "Honey", "Water", "Pouder"];
var text = "";
var i;
for (i = 0; i < component.length; i++) {
  text += component[i] + "<br>";
}
document.getElementById("demo").innerHTML = text;

//ni switch loop

var day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case  6:
    day = "Saturday";
}
document.getElementById("demo1").innerHTML = "Today is " + day;

function myFunction2() {
  var str = document.getElementById("replacedemo").innerHTML;
  var res = str.replace("awsome", "GREAT");
  document.getElementById("replacedemo").innerHTML = res;
}

var text = "";
var i = 0;
while (i < 5) {
  text += "<br>The number of quality " + i;
  i++;
}
document.getElementById("wdemo").innerHTML = text;


//toesponencial
function myFunctionE() {
  var num = 5.56789;
  var n = num.toExponential();
  document.getElementById("demoE").innerHTML = n;
}

//toString

function myFunctionS() {
  var num = 15;
  var n = num.toString();
  document.getElementById("demoS").innerHTML = n;
}

function myFunctionM() {
  document.getElementById("demoM").innerHTML = Number.MAX_VALUE;
}


function myFunctionN() {
  var res = "";
  res = res + Number.isNaN(123) + ": 123<br>";
  res = res + Number.isNaN(0) + ": 0<br>";
  res = res + Number.isNaN('123') + ": '123'<br>";
  res = res + Number.isNaN(true) + ": true<br>";;
  res = res + Number.isNaN('NaN') + ": 'NaN'<br>";
  res = res + Number.isNaN(0 / 0) + ": 0 / 0<br>";

  document.getElementById("demoN").innerHTML = res;
}
