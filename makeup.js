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


function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}


//javascript searchbox
function filter() {
  var Filtervalue,input,ul,li,i;

  input = document.getElementById('search');
  FilterValue = input.value.toUpperCase();
  ul = document.getElementById('menu');
  li = ul.getElementsByTagName('li');

  for(i=0;i<li.length;i++)
  {
    var a = li[i].getElementsByTagName('a')[0];
    if(a.innerHTML.toUpperCase().indexOf(FilterValue) > -1)
    {
      li[i].style.display="";

    }else {
      {
        li[i].style.display ="none";
      }
    }
  }
}

function initStorage() {

function saveName() {
  var name = document.getElementById('name');
  localStorage.setItem('name',name.value);
  
}
function saveEmail() {
var email = document.getElementById('email');
  localStorage.setItem('email',email.value);

}
saveName();
saveEmail();


}

function clearAll() {
  localStorage.clear();
  window.location.reload();

 
}
