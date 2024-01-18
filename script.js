const title = document.getElementById('title');
const nameField = document.getElementById('nameField');
const signinBtn = document.getElementById('signinBtn');
const singnupBtn = document.getElementById('signupBtn');

singnupBtn.onclick = function(){
    title.innerHTML = "Sign up";
    nameField.style.display = "block";
}
signinBtn.onclick = function(){
    title.innerHTML = "Login";
    nameField.style.display = "none";
}
