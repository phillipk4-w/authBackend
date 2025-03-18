function checkEmail(){
    userEmail = document.getElementById('email').value;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let isValid = true;

    
    if(!emailPattern.test(userEmail) && userEmail != ''){
        document.getElementById('emailEr').textContent = 'please enter valid email';
        isValid = false;
    }else {
        document.getElementById('emailEr').textContent = ''; // Clear the error when valid
    }
    return isValid;
}

function checkPass(){
    userPass = document.getElementById('password').value;
    let regexUL = /(?=.*[a-z])(?=.*[A-Z])/;  // At least one lowercase and one uppercase letter
    let regexNum = /(?=.*\d)/;  // At least one digit
    let regexLen = /^.{8,15}$/;  // Password length between 8 and 15 characters
    let regexChar = /[@$!%*?&]/;  // At least one special character
    let isValid = true;
    
    if(!regexUL.test(userPass) && userPass != ''){
        document.getElementById('passUpLowEr').textContent = 'Password must have upper and lowercase letters';
        isValid = false;
    }else {
        document.getElementById('passUpLowEr').textContent = ''; // Clear the error when valid
    }

    if(!regexNum.test(userPass) && userPass != ''){
        document.getElementById('passNumEr').textContent = 'Password must have at least one number';
        isValid = false;
    }else {
        document.getElementById('passNumEr').textContent = ''; // Clear the error when valid
    }

    if(!regexLen.test(userPass) && userPass != ''){
        document.getElementById('passLengthEr').textContent = 'Password must be 8 to 15 characters';
        isValid = false;
    }else {
        document.getElementById('passLengthEr').textContent = ''; // Clear the error when valid
    }

    if(!regexChar.test(userPass) && userPass != ''){
        document.getElementById('passCharEr').textContent = 'Password must have at least one of @$!%*?&';
        isValid = false;
    }else {
        document.getElementById('passCharEr').textContent = ''; // Clear the error when valid
    }
    return isValid;
}

function confirmPass(){
    userPass = document.getElementById('password').value;
    passCheck = document.getElementById('confirm-password').value;

    if(passCheck != userPass && passCheck != ''){
        document.getElementById('confirmEr').textContent = 'Passwords must match';
    }else{
        document.getElementById('confirmEr').textContent = '';
    }
}


let testUser = {
    email: "phillipk4@gmail.com",
    password: "Program@34"
}

function login(event) {
    event.preventDefault();  // This should be the first line inside the function

    userPass = document.getElementById('password').value;
    userEmail = document.getElementById('email').value;

    // Get validation results in variables
    let emailValid = checkEmail();
    let passValid = checkPass();

    if (!emailValid && !passValid) {
        alert("Email is not in a valid format and Password is not strong enough.");
        return;
    } else if (!emailValid) {
        alert("Email is not in a valid format.");
        return;
    } else if (!passValid) {
        alert("Password is not strong enough.");
        return;
    } else {
        if(userPass == testUser.password && userEmail == testUser.email){
            console.log("success")
        }else{
            console.log("failed")
        }
        // Proceed with backend logic here
    }
}

function register(event){
    event.preventDefault();

    userPass = document.getElementById('password').value;
    userEmail = document.getElementById('email').value;

    // Get validation results in variables
    let emailValid = checkEmail();
    let passValid = checkPass();

    if (!emailValid && !passValid) {
        alert("Email is not in a valid format and Password is not strong enough.");
        return;
    } else if (!emailValid) {
        alert("Email is not in a valid format.");
        return;
    } else if (!passValid) {
        alert("Password is not strong enough.");
        return;
    } else {
        if(userPass != testUser.password && userEmail != testUser.email){
            console.log("success")
        }else{
            console.log("failed")
        }
        // Proceed with backend logic here
    }
}
