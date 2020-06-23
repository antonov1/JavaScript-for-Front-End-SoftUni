let obj1 = {
    firstName: "Ivan",
    lastName: "Ivanov",
    age: 18
}
console.log(obj1);
obj1['address'] = 'Sofia';
obj1.age +=3;
console.log(obj1);
let str2 = JSON.stringify(obj1);
console.log(str2);
let obj2 = JSON.parse(str2);
obj2.age+=(5/2)**2;
console.log(obj2);
delete(obj2.address);
console.log(obj2);
