

let myButtonEl = document.getElementById("myButton");
myButtonEl.addEventListener("click", RandomFarge);

function RandomFarge(){
    let farger = ["red", "blue", "#3030A0", "#9040A0"]
    const randomElement = farger[Math.floor(Math.random() * farger.length)]
    myButtonEl.style.backgroundColor = randomElement
}

