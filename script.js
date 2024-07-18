function validatePassword() {
    let password = document.getElementById("user_password").value;
    let passwordConfirm = document.getElementById("user_confirm_password").value;
    if (password != passwordConfirm) {
        document.getElementById("wrong_password").style.color = "red";
        document.getElementById("wrong_password").innerHTML = "* Passwords do not match";
        return false;
    } else {
        document.getElementById("wrong_password").style.color = "green";
        document.getElementById("wrong_password").innerHTML = "* Passwords match";
        return true;
    }
}

let button = document.querySelector("button");

button.addEventListener("click", function(event) {
    if (!validatePassword()) {
        event.preventDefault();
    }
})