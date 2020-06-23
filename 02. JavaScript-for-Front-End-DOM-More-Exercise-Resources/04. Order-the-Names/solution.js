function solve() {
    document.getElementsByTagName("button")[0].addEventListener("click", function () {
        let name = document.getElementsByTagName("input")[0].value;
        if (name.length==0) return;
        var num;
        if (name[0].charCodeAt(0)<=90) {
        num = name[0].charCodeAt(0)-65;
        }
        else {
            num = name[0].charCodeAt(0)-97;
        }
        let element = document.getElementsByTagName("li")[num];
        if (element.textContent.length==0) {
            element.textContent += name;
        }
        else {
            element.textContent +=", " + name;
        }
    })
    
}