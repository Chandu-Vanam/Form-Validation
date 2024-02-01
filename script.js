const getName = document.getElementById("name");
const erName = document.getElementById("errorName");

const validateName = () => {
    let nameError;
    let nameValue = getName.value;
    // console.log(nameValue.length+1)
    
    if (nameValue.length >= 10) nameError = "Max length is 10";
    else if (nameValue === "") nameError = "Empty field";
    else if (/^[a-zA-Z\s]+$/.test(nameValue)) nameError = "Valid name";
    else nameError = "Enter a valid name";
    
    if (nameError === "Valid name") {
        erName.innerText = nameError;
        erName.style.color = "green";
    } else {
        erName.innerText = nameError;
        erName.style.color = "red";
    }
};
getName.addEventListener("input", validateName);

const getEmail = document.getElementById("email");
const erEmail = document.getElementById("errorEmail");

const validateEmail = () => {
    let emailError = "Cannot be Empty field";
    let emailValue = getEmail.value;
    // console.log(nameValue.length+1)
    
    if (emailValue === "") emailError = "Cannot be Empty field";
    else if (emailValue[0] === "@" || !emailValue.endsWith("@gmail.com"))
    emailError = "Enter a valid email";
else emailError = "correct";

console.log(emailError);
if (emailError === "correct") {
    erEmail.innerText = emailError;
    erEmail.style.color = "green";
} else {
    erEmail.innerText = emailError;
    erEmail.style.color = "red";
}
};
getEmail.addEventListener("input", validateEmail);

const getPassword = document.getElementById("password");
const erPassword = document.getElementById("errorPassword");

const validatePassword = () => {
    let passwordValue = getPassword.value;
    
    // if(/[A-Z]/.test(passwordValue))
    // document.getElementById('passwordCapital').style.color = 'green';
    // else
    // document.getElementById('passwordCapital').style.color = 'red';
    // if(/[0-9]/.test(passwordValue))
    // document.getElementById('passwordNumber').style.color = 'green';
    // else
    // document.getElementById('passwordNumber').style.color = 'red';
    // if(/[@,#,$,&]/.test(passwordValue))
    // document.getElementById('passwordSpecial').style.color = 'green';
    // else
    // document.getElementById('passwordSpecial').style.color = 'red';
    // if(passwordValue.length>=6)
    // document.getElementById('passwordLength').style.color = 'green';
    // else
    // document.getElementById('passwordLength').style.color = 'red';
    
    const passwordRequirements = [/[A-Z]/, /[0-9]/, /[@,#,$,&]/, /.{6}/];
    const passwordRqLables = ['passwordCapital','passwordNumber','passwordSpecial','passwordLength'];
    
    passwordRequirements.forEach((ele,index)=>{
        const isValid = ele.test(passwordValue);
        const element = document.getElementById(passwordRqLables[index]);
        element.style.color = isValid? 'green':'red';
    })
};

getPassword.addEventListener("input", validatePassword);