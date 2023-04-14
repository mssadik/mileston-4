const products = [
    {brand: "samsung phone", price: 12000},
    {brand: "I phone", price: 100000},
    {brand: "samsung TV", price: 10000},
    {brand: "wallton Phone", price: 8000}
];

function sameProducs(products, serach){
    let allPhones = [];
    for(const product of products){
        if(product.brand.toLowerCase().includes(serach)){
            allPhones.push(product);
        }
    }
    return allPhones;
}

console.log(sameProducs(products, "phone"));