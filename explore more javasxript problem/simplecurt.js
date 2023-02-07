const shopingCurt = [
    { name: " shoe", price: 2000, quantity: 1 },
    { name: " shirt", price: 1500, quantity: 2 },
    { name: "pant", price: 3000, quantity: 4 },
    { name: "belt", price: 700, quantity: 2 }

];
function totalCost(products) {
    let sum = 0;
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        // console.log(product);
        const totalProduct = product.price * product.quantity;
        sum = sum + totalProduct;

    }
    return sum;
}
const expense = totalCost(shopingCurt);
console.log(expense);