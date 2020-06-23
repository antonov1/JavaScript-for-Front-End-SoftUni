/*let walk = name => {
    console.log(`${name} is walking`);
};
walk("Peter");
*/
let a = new Array;
a = ["Volvo", "BMW", "Mercedes"];
for (let i in a) {
    console.log(i);
}
for (let i of a) {
    console.log(i);
}