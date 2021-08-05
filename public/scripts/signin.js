const emailBtn = document.querySelector('.email-opt');
const phoneBtn = document.querySelector('.phone-opt');
const emailForm = document.querySelector('.signin-email-form');
const phoneForm = document.querySelector('.signin-phone-form');
const signinOptions = document.querySelector('.signin-option');
const goBackBtn = document.querySelectorAll('.go-back');
const keypadNumbers = document.querySelectorAll('.keypad-number');
const phoneInput = document.getElementById('phone-number');
const clearInput = document.querySelector('.clear-phone-input');
const backspaceInput = document.querySelector('.backspace-phone-input');
let dialedNumber = '';

emailBtn.addEventListener('click', () => {
    signinOptions.classList.add('moveForm');
    setTimeout(() => {
        signinOptions.classList.add('hideForm');
        emailForm.classList.add('showForm');
    }, 400)
});

phoneBtn.addEventListener('click', () => {
    signinOptions.classList.add('moveForm');
    setTimeout(() => {
        signinOptions.classList.add('hideForm');
        phoneForm.classList.add('showForm');
    }, 400)
});

goBackBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
        phoneForm.classList.remove('showForm');
        emailForm.classList.remove('showForm');
        signinOptions.classList.remove('hideForm');
        signinOptions.classList.remove('moveForm');
    });
});

keypadNumbers.forEach((number) => {
    number.addEventListener('click', () => {
        dialedNumber = dialedNumber + number.innerHTML;
        phoneInput.value = dialedNumber;
    });
});

clearInput.addEventListener('click', () => {
    dialedNumber = '';
    phoneInput.value = dialedNumber;
});

backspaceInput.addEventListener('click', () => {
    backspaceNum = dialedNumber.slice(0, -1);
    dialedNumber = backspaceNum;
    phoneInput.value = dialedNumber;
})
