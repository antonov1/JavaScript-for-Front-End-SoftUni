function focus() {
    let check = false;
    let inputs = document.getElementsByTagName("input");
    for (let i = 0; i<inputs.length; i++) {
        inputs[i].addEventListener("focus",  colorise); 
        
    }
    function colorise (e){
        if (check==true) {
            let el = document.getElementsByClassName("focused")[0];
            el.removeAttribute("class");
            
        } 
        e.target.parentElement.setAttribute("class", "focused");
        check=true;



    }
}