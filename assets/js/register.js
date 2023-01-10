import RegisterUserService from "./http/Register/RegisterUserService.js";

const form = register;
const nameError = document.querySelector('.name-error');
const emailError = document.querySelector('.email-error');
const passwordError = document.querySelector('.password-error');
const confirmPasswordError = document.querySelector('.confirm-password-error');
const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

let fname = form.name;
let email = form.email;
let pw1 = form.password;
let pw2 = form.confirm_password;

console.log(fname)

    



form.addEventListener('submit', (e) => {e.preventDefault(); validate()})

const validate = async () => {
    nameError.innerHTML = "";
    emailError.innerHTML = "";
    passwordError.innerHTML = "";
    confirmPasswordError.innerHTML = "";

    fname.classList.remove('input-error');
    email.classList.remove('input-error');
    pw1.classList.remove('input-error');
    pw2.classList.remove('input-error');
    if(fname.value.trim().length < 3){
        fname.classList.add('input-error');
        nameError.innerHTML = "Name must contain at least 3 characters!";
    }
    else if(fname.value.trim().length > 17){
        fname.classList.add('input-error');
        nameError.innerHTML = "Name can't contain more than 16 characters!";
    }
    else if(!email.value.trim().match(emailRegex)){
        email.classList.add('input-error');
        emailError.innerHTML = "E-mail address not valid!";
    }
    else if(pw1.value.trim().length < 8 || pw1.value.trim().length > 17){
        pw1.classList.add('input-error');
        passwordError.innerHTML = "Password must be between 8 and 16 characters!";
    }
    else if(pw1.value.trim() !== pw2.value.trim()){
        pw1.classList.add('input-error');
        pw2.classList.add('input-error');
        confirmPasswordError.innerHTML = "Password must match!";
    }
    else {
        const userData = {
            name: fname.value,
            email: email.value,
            password: pw1.value
        };

        console.log(userData)
        await RegisterUserService.Register(userData)
        .then(res => console.log(res));
        console.log('register successful!');
    }
}