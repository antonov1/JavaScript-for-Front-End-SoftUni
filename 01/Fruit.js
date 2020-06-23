function Fruit (FruitType, weight, price) {
    weight/=1000;
    let temp = weight*price;
    temp=(temp).toFixed(2);
    weight=weight.toFixed(2);
    console.log(`I need $${temp} to buy ${weight} kilograms ${FruitType}.`);
}
Fruit('apple', 1563, 2.35);