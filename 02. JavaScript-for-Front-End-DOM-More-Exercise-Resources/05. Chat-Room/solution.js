function solve() {
   let button = document.getElementsByTagName("button")[0];
   button.addEventListener("click", function () {
      let messageNode = document.getElementById("chat_input");
      let message = messageNode.value;
      document.getElementById("chat_input").value="";
      let newElement = document.createElement("div");
      newElement.setAttribute("class", "message my-message");
      newElement.textContent=message;
      console.log(newElement);
      let getDiv = document.getElementById("chat_messages");
      getDiv.appendChild(newElement);
   })

}


