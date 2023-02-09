let wishlist = [
  { name: "Morad", wish: "Legosett", price: 599 },
  { name: "Elton", wish: "Piano", price: 43000 },
  { name: "Albert", wish: "Fotball", price: 290 },
  { name: "Beatrice", wish: "Microphone", price: 1999 },
  { name: "Katrine", wish: "mx518", price: 499 },
  { name: "Mona", wish: "En bok", price: 200 },
];

function drawWishlist() {
  let taskEl = document.querySelector("#task1");
  taskEl.innerHTML = "";

  let tableEl = document.createElement("table");
  taskEl.appendChild(tableEl);
  let tableRowEl = document.createElement("tr");
  tableEl.appendChild(tableRowEl);

  // For ønske:
  let tableHeaderWishEl = document.createElement("th");
  tableHeaderWishEl.innerHTML = "Ønske";
  tableRowEl.appendChild(tableHeaderWishEl);

  //For navn:
  let tableHeaderNameEl = document.createElement("th");
  tableHeaderNameEl.innerHTML = "Navn";
  tableRowEl.appendChild(tableHeaderNameEl); //For pris:

  let tableHeaderPriceEl = document.createElement("th");
  tableHeaderPriceEl.innerHTML = "Pris";
  tableRowEl.appendChild(tableHeaderPriceEl);

  for (let i = 0; i < wishlist.length; i++) {
    let rowEl = document.createElement("tr");
    tableEl.appendChild(rowEl);

    let wishEl = document.createElement("td");
    wishEl.innerHTML = wishlist[i].wish; //Propertien til Legosett som er wish
    rowEl.appendChild(wishEl);

    let nameEl = document.createElement("td");
    nameEl.innerHTML = wishlist[i].name; //Propertien til Eirik som er name
    rowEl.appendChild(nameEl);

    let priceEl = document.createElement("td");
    priceEl.innerHTML = wishlist[i].price; //Propertien til 599 som er price
    rowEl.appendChild(priceEl);
  }
}

drawWishlist();

function addNewRow() {
  let ønske = document.getElementById("ønske").value;
  let navn = document.getElementById("navn").value;
  let pris = document.getElementById("pris").value;
  wishlist[wishlist.length] = { name: navn, wish: ønske, price: pris };
  drawWishlist();
}

function sortWish() {
  users.sort(function (a, b) {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });

  console.log(users);
}

function createAccount(email, password) {
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in

      const user = userCredential.user;
      updateUser(usernameEl, "username");
      location.href = "firestore.html";
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
}

function updateUser(input, type) {
  const auth = getAuth();
  if ((type = "username"))
    updateProfile(auth.currentUser, {
      displayName: input,
      photoURL: "https://example.com/jane-q-user/profile.jpg",
    })
      .then(() => {
        // Profile updated!
        // ...
      })
      .catch((error) => {
        // An error occurred
        // ...
      });
}
