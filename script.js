var form = document.getElementById('meinFormular');

    // Das submit-Ereignis wird abgefangen
    form.addEventListener('submit', function(event) {
      // Standardverhalten des Formulars verhindern (Seitenneuladung)
      event.preventDefault();

      // Die Werte aus den Formularfeldern abrufen
      let email = document.getElementById('mail').value;
      var passwort1 = document.getElementById('password1').value;
      var passwort2 = document.getElementById('password2').value;

      // Die Daten verwenden (hier wird einfach ein Konsolenprotokoll erstellt)
      console.log('E-Mail:', email);
      console.log('Password:', passwort1);
      emailVorhanden(email);
      passwoerterGleich(passwort1, passwort2)
      sonderZeichenimPasswort(passwort1)

    });


    function emailVorhanden(mailZuVegleichen){
        //bereitsregistrierteMails
        const mails = new Array("anna.scheele@yahoo.com", "adrian.scheele@yahoo.com");
        mailvorhanden = false
        for(i = 0; i < mails.length; i++){
            mail = mails[i];
            if(mail.localeCompare(mailZuVegleichen) == 0){
                mailvorhanden = true
            }
        } 
        if(mailvorhanden){
            alert("e-mail bereits vorhanden!")
        }
    };

    function sonderZeichenimPasswort(passwort1){
        const sonderZeichen = new Array("!", "§", "$", "%", "&", "/", "=", "?")
        sonderzeichenVorhanden = false;
        for(i = 0; i < sonderZeichen.length; i++){
            if(passwort1.includes(sonderZeichen[i])){
                sonderzeichenVorhanden = true;
            }
        }
        if (sonderzeichenVorhanden == true){
            console.log("Sonderzeichen vorhanden")
        }
        else {
            alert("Du brauchst sondezeichen in deinem Passwort!")
        }
    }

    function passwoerterGleich(passwort1, passwort2){
        gleich = passwort1.localeCompare(passwort2);
        if(gleich == 0){
            console.log("passwörter gleich")
        }
        else{
            alert("Passwörter verschieden!")
        }
    };

    
