
var attempt = 5; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate(){
var username = document.getElementById("l_username").value;
var password = document.getElementById("l_userpassword").value;
if ( username == "Formget" && password == "formget#123"){
alert ("Login successfully");
window.location = "success.html"; // Redirecting to other page.
return false;
}
else{
attempt --;// Decrementing by one.
alert("You have left "+attempt+" attempt;");
// Disabling fields after 3 attempts.
if( attempt == 0){
document.getElementById("l_username").disabled = true;
document.getElementById("l_userpassword").disabled = true;
document.getElementById("btn").disabled = true;
return false;
}
}
}


$(document).ready(function(){

  $("input").focus(function(){
    $(this).css("background-color", "");

  });
  $("input").blur(function(){
    $(this).css("background-color","");
  });
});
