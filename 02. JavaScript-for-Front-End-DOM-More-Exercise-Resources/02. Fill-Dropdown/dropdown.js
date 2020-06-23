function addItem() {
    
    let element = document.createElement("option");
    let val = document.getElementById("newItemValue");
    let text = document.getElementById("newItemText");
    element.value = val.value;
    element.textContent = text.value;
    let temp = document.getElementById('menu');
    temp.appendChild(element);
    document.getElementById("newItemValue").value = "";
    document.getElementById("newItemText").value = "";

}