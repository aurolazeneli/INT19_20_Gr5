
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
function myFunctionm() {
  var str = "The rain in SPAIN stays mainly in the plain";
  var res = str.match(/ain/g);
  document.getElementById("demo").innerHTML = res;
}

function Person(first, last, age, color) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = color;
}

var diorProduct = new Person("Christian ", "Dior", 1905 , "blue");
var hudaProduct = new Person("Huda", "Kattan", 1983, "green");

document.getElementById("Pdemo").innerHTML =
"Christian Dior made dior product on  " + diorProduct.age + ".\n Huda Kattan made huda product on  " + hudaProduct.age;

// Constructor function for Person objects
function Person1(first, last, eye) {
  this.firstName = first;
  this.lastName = last;

  this.eyeColor = eye;
}

// Create 2 Person objects
var myfavorite = new Person1("Kylie", "Jenner", "blue");
var myfavorite1 = new Person1("Kim", "Kardashion", "green");

// Add nationality to first object
myfavorite.nationality = "Kylie Jenner products";

// Display nationality
document.getElementById("Cdemo").innerHTML =
"My favorite make products are  " + myfavorite.nationality;

