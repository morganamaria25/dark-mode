// ***********************
// Show and Hide Passsword
// ***********************

var show = false;

function toggle() {
    if (show == true) {
        document.querySelector("#pass").type = "password";
        document.querySelector("#icon").className = "fa fa-eye";
        show = false;
    } else {
        document.querySelector("#pass").type = "text";
        document.querySelector("#icon").className = "fa fa-eye-slash";
        show = true;
    }
}

// ********************
// Here is to dark mode
// ********************

const body = document.querySelector("#containdarkmode");
const mode = document.querySelector("#night");
const color1 = document.querySelector("#pass");
const color2 = document.querySelector("#cpf");

mode.addEventListener("change", () => {
    body.classList.toggle("nightMode");
    color1.className += "inputnight";
    color2.className += "inputnight";
});
