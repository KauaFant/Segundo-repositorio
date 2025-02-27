let gasPrice = 5.50;
let distance = 1000;
let consuption = 10;

function calcFuel(num1, num2, num3)
{
    return (num2 / num3) * num1;
}

console.log("O preço da gasolina é", calcFuel(gasPrice, distance, consuption));