function subtract() {
    let num1=+document.getElementById("firstNumber").value;
    let num2=+document.getElementById("secondNumber").value;
    let num3=num1-num2;
    document.getElementById("result").textContent=num3;
}
