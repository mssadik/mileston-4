const arro = (num1, num2) =>{
    const sum = num1 + num2;
    const divetion = sum / 2;
    if(divetion % 2 === 0){
        return true;
    }else{
        return false;
    }
}
const arroCall = arro(200, 120);
console.log(arroCall)