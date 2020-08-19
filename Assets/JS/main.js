
var user = document.getElementById("myName");
var email = document.getElementById("myEmail");
var phone = document.getElementById("myPhone");
var error_message = document.querySelector(".error_message");
var succes_message = document.querySelector(".welcome_message");
var pattern = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{2})[-. ]?([0-9]{2})$/;
var ePattern = /\S+@\S+\.\S+/;


document.querySelector(".btn").addEventListener("click", () => {

    if (user.value.length > 2) {
        if (email.value.match(ePattern)) {
            if (phone.value.match(pattern)) {
                succes_message.classList.add("welcome");
                succes_message.innerText = "You are welcome"
                error_message.innerText = "";
            } else {
                succes_message.innerText = ""
                error_message.classList.add("error");
                error_message.innerText = "Example:OXXXXXXXXX";
            }
        } else {
            error_message.classList.add("error");
            succes_message.innerText = ""
            error_message.innerText = "Add mail  Example: yourmail@yoursite.com";
        }
    } else {
        succes_message.innerText = ""
        error_message.classList.add("error");
        error_message.innerText = "Username length very low";
    }


})

