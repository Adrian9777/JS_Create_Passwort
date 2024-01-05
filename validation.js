
//wartet bis dom erstellt und geladen worden ist
document.addEventListener("DOMContentLoaded", () => {
const form = document.getElementById("meinFormular")
const emailInput = document.getElementById("mail");
const passwort1Input = document.getElementById("password1");
const passwort2Input = document.getElementById("password2");

// const können nicht überschrieben werden
form.addEventListener("submit", function(e){

    let isValid = true;

    //validation Email is valid true oder false
    let email = emailInput.value;
    let password1 = passwort1Input.value;
    let password2 = passwort1Input.value;
    if(!validateEmail(email)){
        displayError(emailInput, "eEmail muss @ enthalten");
        isValid = false;
    }
    //validation passwort is valid true oder false
    else if(!validatePasswort(password1)){
        displayError(password1, "Sonderzeichen müssen vorhanden sein");
        isValid = false;
        console.log("If")
    }
    //passwords eqal
    else if(!(password1.localeCompare(password2))){
        displayError(password2, "Passwörter müssen gleich sein");
        console.log("nicht gleich");
    }

    if(!isValid){
        // verhindert dass Formular gesendet wird
        e.preventDefault();
    }

});

function validateEmail(email){
    return email.includes("@")
}

function validatePasswort(password){
    return /[!@#$%^&*(),.?":{}|<>]/.test(password)
}

function displayError(input, message){
    //nächstes input element
    let errorElement = input.nextElementSibling
    if(!errorElement || errorElement.className !== "fehler"){
        errorElement = document.createElement("p");
        errorElement.className = "fehler";
        //nextes element von input
        input.parentNode.insertBefore(errorElement, input.nextElementSibling)
    }
    errorElement.textContent = message
}





})