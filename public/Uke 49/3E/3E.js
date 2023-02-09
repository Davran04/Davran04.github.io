// personer = [
//     {navn: "Trinh", etternavn: "Le"},
//     {navn: "Atas", etternavn: "Lied-Herdeland"},
//     {navn: "Bob", eternavn: "Marley"},
//     {navn: "Truls", etternavn: "Truls"},
//     {navn: "Wenche", etternavn: "Myhre"},
//     {navn: "Britt", etternavn: "Bruheim"},
//     {navn: "Kristian", etternavn: "Marley"},
//     {navn: "Yazan", etternavn: "Haaland"},
// ],

// function sammenliknEtternavn(a, b){
//     if (a.etternavn > b.etternavn){
//         return 1;
//     } else if (a.etternavn < b.etternavn){
//         return -1
//     } else{
//         return 0
//     }
// }

// console.log(personer);
// console.log([...personer.sort(sammenliknEtternavn)]);

let innlegg = [];

function getInfo(){
    let username = "Bob";
    let melding = "Hei, dette er en test";
    let time = Date.now;

    let tempInnlegg = {
        username: username,
        message: melding,
        time: time
    }
    localStorage.info += tempInnlegg;
}

getInfo();

console.log(new Date)