function validate1()
{
  var uname = document.getElementById('uname');
  var pwd = document.getElementById('pwd');
  if(uname.value.trim() =="" || pwd.value.trim() =="")
  {
    alert("Both fields should not be blank");
    return false;
  }
  else
  {
  true;
}
/*if(pwd.length<6|| pwd>12){
  alert("Password must be 6 to 12 characters");
  return;
}
var str=uname.slice(0,1);
if(uname.slice(0,1)=="_" ||uname.slice(0,1)=="@" || str.match(/[0-9]/g)!null){
  alert("username should not start with _, @ and Number");
  return;
}*/
}
/*const input_fields = {
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
));*/
