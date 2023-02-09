let messages = [];
if(localStorage.messages != null){
    messages = JSON.parse(localStorage.messages);
} 


function getInfo() {

    let username = document.querySelector("#username").value;
    let melding = document.querySelector("#message").value;

    let date = new Date();

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let time = date.getHours() + ":" + date.getMinutes();

    let currentDate = `${day}-${month}-${year} - ${time}`;

    let tempMessage = {
      username: username,
      message: melding,
      time: currentDate,
    };

    messages.push(tempMessage);

    localStorage.message = JSON.stringify(message);

    drawMessages();

}


let buttonEl = document.querySelector("#addInfo")
buttonEl.addEventListener("click", getInfo);

function drawMessages(){
    document.querySelector("#messages").innerHTML = "";
    
    for (let i = 0; i < messages.length; i++) {
        let message = messages[i];

        let divEl = document.createElement("div");
        divEl.classList = "message";
    
        let h3El = document.createElement("h3");
        h3El.classList = "message-username";
        h3El.innerHTML = message.username;
    
        let h4El = document.createElement("h4");
        h4El.classList = "message-time";
        h4El.innerHTML = message.message;

        let pEl = document.createElement("p");
        pEl.classList = "message-message";
        pEl.innerHTML = message.time;
       
        divEl.appendChild(h3El)
        divEl.appendChild(h4El);
        divEl.appendChild(pEl);

        document.querySelector("#messages").appendChild(divEl);
    }
    
}