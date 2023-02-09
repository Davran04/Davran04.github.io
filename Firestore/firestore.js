// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  serverTimestamp,
  query,
  orderBy,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBM_Ey_JtDxZNa-CCyz24NQ7bF2k05nnY",
  authDomain: "tempprosjekt12102022-9a0bd.firebaseapp.com",
  projectId: "tempprosjekt12102022-9a0bd",
  storageBucket: "tempprosjekt12102022-9a0bd.appspot.com",
  messagingSenderId: "109304422757",
  appId: "1:109304422757:web:b5f84ab3e3a237be1ac18c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app); //En referanse til databasen vår

//Endrer farge på navEl når du klikker på Gaming eller Sport
let header = document.getElementById("nav");
let btns = header.getElementsByClassName("navEl");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

async function getMessagesSport() {
  let olEl = document.querySelector("#messageContainer");
  olEl.innerHTML = "";

  let messagesCol = collection(db, "sportMessages");
  let sort = query(messagesCol, orderBy("timestamp", "desc"));
  let documents = await getDocs(sort);

  documents.forEach((doc) => {
    let divEl = document.createElement("div");
    divEl.className = "messageEl";

    divEl.innerHTML =
      " From: " +
      doc.data().from +
      "<br>" +
      "Message: " +
      doc.data().message +
      "<br>" +
      "Posted: " +
      doc.data().timestamp;
    olEl.appendChild(divEl);
  });
}

async function getMessagesGaming() {
  let olEl = document.querySelector("#messageContainer");
  olEl.innerHTML = "";

  let messagesCol = collection(db, "gamingMessages");
  let sort = query(messagesCol, orderBy("timestamp", "desc"));
  let documents = await getDocs(sort);

  documents.forEach((doc) => {
    let divEl = document.createElement("div");
    divEl.className = "messageEl";

    divEl.innerHTML =
      " From: " +
      doc.data().from +
      "<br>" +
      "Message: " +
      doc.data().message +
      "<br>" +
      "Posted: " +
      doc.data().timestamp;
    olEl.appendChild(divEl);
  });
}

let forum_valg = "sport";

let sport = document.getElementById("sport");
sport.addEventListener("click", changeToSport);
let gaming = document.getElementById("gaming");
gaming.addEventListener("click", changeToGaming);

function changeToSport() {
  forum_valg = "sport";
  console.log("sport");
  getMessagesSport();
}

function changeToGaming() {
  console.log("gaming");
  forum_valg = "gaming";
  getMessagesGaming();
}

document.querySelector("#add").addEventListener("click", forum_choice);

function forum_choice() {
  if (forum_valg == "sport") {
    addNewRowSport();
  } else {
    addNewRowGaming();
  }
}

function addNewRowSport() {
  const now = new Date();
  const dateString = now.toLocaleDateString();
  const timeString = now.toLocaleTimeString();
  const dateTimeString = dateString + " " + timeString;

  let from = document.getElementById("from").value;
  let message = document.getElementById("message").value;

  let messagesCol = collection(db, "sportMessages");
  addDoc(messagesCol, {
    from: from,
    message: message,
    timestamp: dateTimeString,
  });

  getMessagesSport();
}

function addNewRowGaming() {
  const now = new Date();
  const dateString = now.toLocaleDateString();
  const timeString = now.toLocaleTimeString();
  const dateTimeString = dateString + " " + timeString;

  let from = document.getElementById("from").value;
  let message = document.getElementById("message").value;

  let messagesCol = collection(db, "gamingMessages");
  addDoc(messagesCol, {
    from: from,
    message: message,
    timestamp: dateTimeString,
  });

  getMessagesGaming();
}

let logOutEl = document.getElementById("logOut");
logOutEl.addEventListener("click", signOut);

function signOut() {
  location.href = "logIn.html";
}
getMessagesSport();

function slettHuskepunkt(e) {
  let id = e.target.getAttribute("data-id");
  deleteDoc(doc(db, "huskeliste", id));
  oppdaterHuskeliste();
}
