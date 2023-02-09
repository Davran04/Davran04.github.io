const loginLink = document.querySelector("#login-link");
const loginModal = document.querySelector("#login-modal");
const closeLoginModalButton = document.querySelector("#close-login-modal");
const loginForm = document.querySelector("#login-form");
const registerLink = document.querySelector("#register-link");
const registerModal = document.querySelector("#register-modal");
const closeRegisterModalButton = document.querySelector(
  "#close-register-modal"
);
const registerForm = document.querySelector("#register-form");

// Vis logg inn-modal når logg inn-lenken klikkes på
loginLink.addEventListener("click", (event) => {
  event.preventDefault();
  loginModal.style.display = "block";
});

// Skjul logg inn-modal når lukk-knappen klikkes på
closeLoginModalButton.addEventListener("click", (event) => {
  loginModal.style.display = "none";
});

// Vis registrer-modal når registrer-lenken klikkes på
registerLink.addEventListener("click", (event) => {
  event.preventDefault();
  registerModal.style.display = "block";
});

// Skjul registrer-modal når lukk-knappen klikkes på
closeRegisterModalButton.addEventListener("click", (event) => {
  registerModal.style.display = "none";
});

// Lagre brukerinformasjon når logg inn-formen sendes
loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const username = loginForm.querySelector("#username").value;
  const password = loginForm.querySelector("#password").value;

  // Lagre brukernavn og passord i localStorage
  localStorage.setItem("username", username);
  localStorage.setItem("password", password);

  // Omdiriger brukeren til hjemmesiden
  window.location.replace("index.html");
});

// Validere og lagre brukerinformasjon når registrer-formen sendes
registerForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const username = registerForm.querySelector("#username").value;
  const email = registerForm.querySelector("#email").value;
  const password = registerForm.querySelector("#password").value;
  const passwordConfirm = registerForm.querySelector("#password-confirm").value;

  // Sjekk om passordene samsvarer
  if (password !== passwordConfirm) {
    alert("Passordene samsvarer ikke");
  }

  // Validere e-postadressen
  if (!email.includes("@")) {
    alert("E-postadressen er ugyldig");
    return;
  }

  // Lagre brukernavn, e-post og passord i localStorage
  localStorage.setItem("username", username);
  localStorage.setItem("email", email);
  localStorage.setItem("password", password);

  // Omdiriger brukeren til hjemmesiden
  window.location.replace("index.html");
});

// Sjekk om brukeren er logget inn ved lasting av hjemmesiden
window.addEventListener("load", (event) => {
  const loggedInUsername = localStorage.getItem("username");
  if (loggedInUsername) {
    // Brukeren er logget inn, skjul logg inn- og registrer-lenkene og vis en velkommen-melding
    loginLink.style.display = "none";
    registerLink.style.display = "none";
    const welcomeMessage = document.createElement("p");
    welcomeMessage.textContent = `Velkommen, ${loggedInUsername}!`;
    welcomeMessage.style.color = "green";
    welcomeMessage.style.fontSize = "16px";
    welcomeMessage.style.marginTop = "20px";
    loginModal.parentNode.insertBefore(welcomeMessage, loginModal);
  }
});

// Skjul logg inn-modal når brukeren klikker utenfor modalen
window.addEventListener("click", (event) => {
  if (event.target === loginModal) {
    loginModal.style.display = "none";
  }
});

// Skjul registrer-modal når brukeren klikker utenfor modalen
window.addEventListener("click", (event) => {
  if (event.target === registerModal) {
    registerModal.style.display = "none";
  }
});

// Logg ut brukeren når logg ut-lenken klikkes på
const logoutLink = document.querySelector("#logout-link");
logoutLink.addEventListener("click", (event) => {
  event.preventDefault();

  // Fjern brukerinformasjon fra localStorage
  localStorage.removeItem("username");
  localStorage.removeItem("email");
  localStorage.removeItem("password");

  // Vis logg inn- og registrer-lenkene igjen og fjern velkommen-meldingen
  loginLink.style.display = "block";
  registerLink.style.display = "block";
  welcomeMessage.remove();
});
