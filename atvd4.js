let stok = 100
let products = 80

function calculate(num1, num2)
{
    return num1 - num2
}

if (calculate(stok, products) < 0)
{
    console.log("não há stoque suficiente")
}
else
{
    console.log("Há estoque para a empresa")    
}
