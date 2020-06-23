function validate() {
    var el = document.getElementsByTagName("input")[0];
    el.addEventListener("mouseleave", check);
    el.addEventListener("mouseenter", clear);
    function clear () {
        el.removeAttribute("class");

    }
    function check () {
        let string = el.value;
        let format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        debugger;
        if (string.match(format))
            {
                continue;

            }
        else {
            el.setAttribute("class", "error");
        } 
    }
    /*    
    let invalid = false;
    let string = el.value;
    let dotcheck = false;
    let atcheck = false;
    for (let i=0; i<string.length; i++) {
        let temp = 50000;
        if (string[i]=="@") {
        atcheck = true;
        temp=i;
    }
        if (atcheck[i]=="." && i>temp) dotcheck = true;
    }
    if (dotcheck == false || atcheck == false) {

    }

    let temp = string.split("@");
    let ext = temp[1];
    let main = temp[0];
    let temp2 = ext.split(".");
    let domain = temp2[1];
    ext = temp2[1];
    if(domain.length>2) {
        for (let i in domain) {
            if (domain[i].charCodeAt(0)<97) {
                invalid=true;
                break;
            }
        }
    }
    if (ext.length>2) {
        for (let i in domain) {
            if (ext[i].charCodeAt(0)<97) {
                invalid=true;
                break;
            }
        }
    }
    for (let i in main) {
        if (main[i].charCodeAt(0)<97) {
            invalid=true;
            break;
        }

if (invalid==true) {
    el.setAttribute("class", "error");
    }

    }
    }
}*/
}