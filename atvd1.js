let price1 = 50.99;
let price2 = 20.00;
let price3 = 19.99;

//função para somar o preço dos produtos
function sum(num1, num2, num3)
{
    return Math.floor(num1 + num2 + num3); 
}

console.log("soma dos seus produtos são", sum(price1, price2, price3));