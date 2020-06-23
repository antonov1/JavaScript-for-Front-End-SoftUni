function deleteByEmail() {
    let mail = document.getElementsByName("email")[0].value;
    let mailList = document.querySelectorAll('tbody tr td:nth-child(2)');
    let found = false;
    let tableList = document.querySelectorAll('tbody tr');
    let newElement = document.getElementById("result");
    for (let e in mailList) {
        if (mailList[e].textContent===mail) {
            found = true;
            tableList[e].parentNode.remove();
            newElement.textContent="Deleted.";
            return;
           
        }
    }

        newElement.textContent="Not found.";


}