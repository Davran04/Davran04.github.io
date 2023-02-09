//Definerer variabler vi skal bruke

let old_time;

let new_time;

let delta_tid;

//Denne variablen viser om spillet kjører eller ikke. Blir true når du klikker på start

let game_aktiv = false;

//Alle tidene legges til i dette arrayet

let resultater_array = [];


//Funksjon for å regne ut hvor lang tid som har gått mellom to tidspunkter

function delta_time() {

  return new_time - old_time;

}


//Når du klikker på startknappen kjøres denne

function start_spill() {

  //Tilfeldig tall fra 0-5000. Dette er millisekunder

  let tilfeldig_tall = Math.random() * 5000;


  /*Vi venter mellom 2-7 sekunder (timeout) for å skifte til grønn bakgrunn.

  Den kjører funksjonen skift_farge mellom 2-7 sekunder*/

  let delay = setTimeout(skift_farge, tilfeldig_tall + 2000);

}


function skift_farge() {

  //Vi henter ut tidspunktet når bakgrunnen blir grønn (i millisekunder)

  old_time = new Date().getTime();


  //Skifter bakgrunnen til grønn

  document.getElementById("body").style.backgroundColor = "#82c930";


  //Nå sier vi at spillet kjører.

  game_aktiv = true;

}

/*Legger til en lytter til vinduet.

Den kjører funksjonen kalt "s" hver gang brukeren trykker på en knapp */

window.addEventListener("keydown", s, false);



/*Den sender inn det du trykket på som en parameter i funksjonen*/

function s(key) {

  //83 er keyCode for bokstaven "s"

  if (key.keyCode == "83") {

    /*Knappen s skal ikke gjøre noe hvis du ikke har startet spillet.

Hvis game_aktiv==true, så utføres koden nedenfor*/



    if (game_aktiv == true) {

      //Nytt tidspunkt (i ms som sammenlignes med det forrige tidspunktet old_time)

      new_time = new Date().getTime();

  //Tidsforskjell

      delta_tid = delta_time();

      //Hvis du bruker over 3 sekunder, så kjøres if'en

      //Ny tid minus gammel tid gir oss hvor lang tid du har brukt på å trykke s.

      //Under 3 sek, legger tiden til i arrayet "resultater"

      if ((delta_tid) / 1000 > 3) {

        //Legger til tid + en hyggelig melding inn i arrayet "resultater"



        resultater_array.push((delta_tid) / 1000 + " (Du suger)");

        //Henter lydfil

        var audio = new Audio("audio_file.mp3");

        //Spiller av lydfil

        audio.play();

      } else {

        //Legger til tid i arrayet resultater

        resultater_array.push((delta_tid) / 1000);

      }

      //Vi gjør arrayet vårt om til en string og legger til tidene i resultat-div'en

      document.getElementById("resultater").innerHTML =

        resultater_array.join(", ");

      //Endrer fargen tilbake til rød etter du har klikket s

      document.getElementById("body").style.backgroundColor = "#931515";

      game_aktiv = false;

    }

  }

}


