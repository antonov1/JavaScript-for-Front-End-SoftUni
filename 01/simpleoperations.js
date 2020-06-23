function main (a, b, operationType) {
    return operationType(a, b);
}
function add (a, b) {
    return a+b;
}
function multiply (a, b) {
    return a*b;
}
function substraction (a, b) {
    return a-b;
}
function division (a, b) {
    return a/b;
}
function times (a, b) {
    return a**b;
}
console.log (main (10, 2, times));
