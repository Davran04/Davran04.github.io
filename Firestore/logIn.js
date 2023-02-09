import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  serverTimestamp,
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

// let toggleVisibility = document.getElementById("passwordToggle");
// let passwordVisible = document.getElementById("passwordVisibility");
// passwordVisible.addEventListener("check", passwordToggle);
// function passwordToggle() {
//   if (toggleVisibility.type === "password") {
//     toggleVisibility.type = "text";
//   } else {
//     toggleVisibility.type = "password";
//   }
// }

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app); //En referanse til databasen vår

//Det som skjer når man trykker login
let text_login = document.getElementById("login");
let text_register = document.getElementById("register");
let text_btn = document.getElementById("btn");

let loginbtnEl = document.getElementById("loginButton");
loginbtnEl.addEventListener("click", login);

function login() {
  text_login.style.left = "50px";
  text_register.style.left = "450px";
  text_btn.style.left = "0px";
}

let registerBtnEl = document.getElementById("registerButton");
registerBtnEl.addEventListener("click", register);

function register() {
  text_login.style.left = "-400px";
  text_register.style.left = "50px";
  text_btn.style.left = "110px";
}

let registerUserEl = document.getElementById("registerUser");
registerUserEl.addEventListener("click", registerUser);

function registerUser() {
  let passwordInput = document.querySelector("#passwordInput").value;
  let emailInput = document.querySelector("#emailInput").value;
  createAccount(emailInput, passwordInput);
}

function createAccount(email, password) {
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in

      const user = userCredential.user;
      location.href = "firestore.html";
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
}

let loginUserEl = document.getElementById("loginUser");
loginUserEl.addEventListener("click", loginUser);

function loginUser() {
  let emailInput = document.querySelector("#emailInputLogin").value;
  let passwordInput = document.querySelector("#passwordToggle").value;
  loginAccount(emailInput, passwordInput);
}

function loginAccount(email, password) {
  const auth = getAuth();

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      location.replace("firestore.html");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
    });
}
