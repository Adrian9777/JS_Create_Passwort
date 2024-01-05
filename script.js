var form = document.getElementById('meinFormular');

// Das submit-Ereignis wird abgefangen
form.addEventListener('submit', function (event) {
    // Standardverhalten des Formulars verhindern (Seitenneuladung)
    event.preventDefault();

    // Die Werte aus den Formularfeldern abrufen
    let email = document.querySelector('#mail');
    let emailValue = document.querySelector('#mail').value;
    var passwort1 = document.querySelector('#password1').value;
    var passwort2 = document.querySelector('#password2').value;




    // Die Daten verwenden (hier wird einfach ein Konsolenprotokoll erstellt)
    console.log('E-Mail:', email);
    console.log('Password:', passwort1);
    emailVorhanden(email, emailValue);
    //passwoerterGleich(passwort1, passwort2)
    //sonderZeichenimPasswort(passwort1);


});

function errorHendeling(email, errMsg){
 console.log("Das ist der Fehler:" + elm);
 // p element wird erstellt
 let errorMessage = document.createElement('p');
 //gib p Tag eine Klasse im diem fall fehler
 errorMessage.classList.add("fehler");
 //contend von p tag
 errorMessage.textContent = errMsg;
 let parentElement = email.parentNode;
//position element
//
 parentElement.insertBefore(errorMessage, email.nextSibling)
}


function emailVorhanden(email, emailValue) {

    //bereitsregistrierteMails
    const mails = new Array("anna.scheele@yahoo.com", "adrian.scheele@yahoo.com");
    mailvorhanden = false
    for (i = 0; i < mails.length; i++) {
        mail = mails[i];
        if (mail.localeCompare(emailValue) == 0) {
            mailvorhanden = true
        }
    }
    if (mailvorhanden) {
        errorHendeling(email, "E-mail ist bereits vorhanden");
    }
};

function sonderZeichenimPasswort(passwort1) {
    const sonderZeichen = new Array("!", "§", "$", "%", "&", "/", "=", "?")
    sonderzeichenVorhanden = false;
    for (i = 0; i < sonderZeichen.length; i++) {
        if (passwort1.includes(sonderZeichen[i])) {
            sonderzeichenVorhanden = true;
        }
    }
    if (sonderzeichenVorhanden == true) {
        console.log("Sonderzeichen vorhanden")
    }
    else {
        console.log("Sonderzeichen nicht vorhanden")
    }
}

function passwoerterGleich(passwort1, passwort2) {
    gleich = passwort1.localeCompare(passwort2);
    if (gleich == 0) {
        console.log("passwörter gleich")
    }
    else {
        alert("Passwörter verschieden!")
    }
};

