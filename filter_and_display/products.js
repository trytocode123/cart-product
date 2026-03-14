const products = [
    {name: "Áo thun", price: 150000},
    {name: "Giày thể thao", price: 850000},
    {name: "Mũ bóng chày", price: 120000},
    {name: "Balo du lịch", price: 450000},
    {name: "Đồng hồ", price: 1200000}
];

const productsLessThan500000VDN = (products => products.filter((product) => product.price < 500000));

console.log(productsLessThan500000VDN(products));

const productSort = products.sort((a, b) => a.price - b.price);

console.log(productSort);

const productsName = [];

for (let i = 0; i < products.length; i++) {
    productsName.push(products[i].name);
}

console.log(productsName);




