function SetValuesToIndexes(input) {
    let n = +input.shift();
    let arr = new Array(n);
    arr.fill(0);
 
    for (let i in input) {
        let temp = input[i].split(" - ");
        let index = Number(temp[0]);
        let value = Number(temp[1]);
 
        arr[index] = value;
    }
    for (let i in arr) {
        console.log (arr[i]);
    }
}
SetValuesToIndexes([2, "0 - 5", "0 - 6", "0 - 7"]);