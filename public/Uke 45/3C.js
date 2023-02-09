// Oppgave 1

const guessEl = document.getElementById("guess");
const resultEl = document.getElementById("result");
guessEl.addEventListener("change", Guess);

let tall = Math.ceil(Math.random() * 100);

function Guess(){
    let guess = guessEl.value;
    if(guess > tall){
        resultEl.innerHTML = "For høyt kompis!"; 
    }

    else if(guess < tall){
        resultEl.innerHTML = "For lavt din idiot";
    }

    else{
        resultEl.innerHTML = "Spot on!"
        tall = Math.ceil(Math.random() * 100);
    }
}


// Oppgave 2:

let a = 3;
let b = 7;
let c = "7";

console.log("a er et ", typeof(a), "med verdien", a);
console.log("b er et ", typeof(b), "med verdien", b);
console.log("c er en ", typeof(c), "med verdien", c);


console.log("b == c", b == c); //True
console.log("b === c", b === c); //False 
console.log("a < b", a < b); //True 
console.log("a <= b", a <= b); //True 
console.log("a > b", a > b); //False 
console.log("a != b", a != b); //True 
console.log("b != c", b != c); //False 
console.log("b !== c", b !== c); //True
console.log("(a != 2) && (b < 10)", (a !=2) && (b < 10)); //True
console.log("(a > 3) && (b === 10)", (a > 3) && (b === 10)); //False
console.log("(a > 2) || (b === 8)", (a > 2) || (b === 8)); //True
console.log("(a === 2) || (b > 8)", (a === 2) || (b > 8)); //False
console.log("!(b === 10)", !(b === 10)); //True
console.log("!(b > a)", !(b > a)); //False


// Oppgave 3:

let person = 120;
let minHeight = 100;

if(person < minHeight){
    console.log(" Du er altfor lav ");
}

else{
    console.log(" Du er passelig høy du! ")
}


//Random oppgave (4)

email = ""
if(email){
    console.log("Dette er en valid epost-adresse")
}
else{
    //alert("Du må skrive inn epost-adressen din")
    console.log("Du må skrive inn epost-adressen din")
}


// Oppgave 5

console.log("Her kommer en while løkke! :D");

let teller = 0
while(teller < 1000){
    teller += 1;
    console.log("hei")
    //alert("irriterende")
}

// Oppgave 6

console.log("Here be kvadrattall")

let i = 1;
while(i <= 10){
    console.log(i*i);
    i++;
}

for (let i = 1; i <= 10; i++) {
    console.log(i*i)
}

// Opgave 7

let sitat = "Hello, world!";
let antall = 0;
for (let i = 0; i < sitat.length; i++){
    console.log(sitat[i]);
    if(sitat[i] === "l"){
        antall++
    }
}

console.log(antall, "l'er i teksten ", sitat)

// Oppgave 8

svar = ["nei", "ja", "kanskje", "ok"];

function magic8ball(){
    valgt_svar = Math.floor(Math.random() * svar.length);
    console.log(svar[valgt_svar]);
}
magic8ball()
magic8ball()