const input_fields = {
name: 	/^[a-zA-Z0-9]+([a-zA-Z0-9](_|-| )[a-zA-Z0-9])*[a-zA-Z0-9]*$/,
Surname:	/^[a-zA-Z0-9]+([a-zA-Z0-9](_|-| )[a-zA-Z0-9])*[a-zA-Z0-9]*$/,
email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
phone:/^\d{11}$/,
message: 	/^[a-zA-Z0-9]+([a-zA-Z0-9](_|-| )[a-zA-Z0-9])*[a-zA-Z0-9]*$/,}
const validate = (field, regex) => {
regex.test(field.value) ? field.className = 'valid' : field.className = 'invalid';

}
let keys = document.querySelectorAll('input');
keys.forEach(item => item.addEventListener(
'keyup', e => {
  validate(e.target, input_fields[e.target.attributes.name.value])
}
));
