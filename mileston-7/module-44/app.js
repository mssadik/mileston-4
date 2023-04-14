

const loadData = () =>{
    const productValue = document.getElementById("product").value;
    const quentityValue = document.getElementById("quentity").value;
    document.getElementById("product").value = " ";
    document.getElementById("quentity").value = " ";
    console.log(productValue, quentityValue);
    container(productValue, quentityValue);
}

const container = (productValue, quentityValue) =>{
    const ul = document.getElementById('container');
    const makeLi = document.createElement('li');
    makeLi.innerText = `${productValue} ${quentityValue}`; 
    ul.appendChild(makeLi);
}


const getStoreedShoppingCard =() =>{
    
}

const saveProductToLocalStorage = (product, quentity) =>{

}
