function getInfo () {
    var bus = document.getElementsByTagName("input")[0].value;
    var stopName = document.getElementById("stopName");
    let url = `https://judgetests.firebaseio.com/businfo/${bus}.json`;
    fetch(url)
    .then((response) => response.json())
    .then(handleSuccess)
    .catch(handleError)
    
   

function handleSuccess(input) {
    let stop = input.name;
    let busContainer = document.getElementById("buses");
    stopName.textContent=stop;
    debugger;
    Object.entries(input.buses).forEach(([busNumber], [busTime]) => {
    let newEl = document.createElement("li")
    newEl.textContent=`Bus ${busNumber} arrives in ${busTime} minutes.`;
    debugger;
    busContainer.appendChild(newEl);
    });
}

function handleError() {
    stopName.textContent="Error!!!";

}
}