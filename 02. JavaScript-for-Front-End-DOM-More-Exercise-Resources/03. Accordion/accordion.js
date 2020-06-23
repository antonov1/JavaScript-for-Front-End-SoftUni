function toggle() {
    let newElement = document.getElementsByTagName("div")[2];
    let button = document.getElementsByClassName("button")[0];
    if(button.textContent=="More") {
       button.innerHTML="Less";
       newElement.style.display = "block";
    }
    else {
        button.textContent="More";
        newElement.style.display="none";
       
    }
    
}