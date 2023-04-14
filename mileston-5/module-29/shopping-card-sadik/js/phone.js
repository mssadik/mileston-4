function calculateSubTotal() {
    const phoneQuantity = parseInt(document.getElementById('phone-input').value);
    const caseQuantity = parseInt(document.getElementById('case-input').value);
    const phoneTotal = phoneQuantity * 1219;
    const caseTotal = caseQuantity * 59;
    const subTotal = phoneTotal + caseTotal;
    return subTotal;
  }

  

  function getCaseInputAsFunctionName(getCaseInputPlas){
    let getCaseInputValuePlusAsIntigerNumber = parseInt(document.getElementById('case-input').value);
    if(getCaseInputPlas == true){
        const quantity = document.getElementById('case-input').value = getCaseInputValuePlusAsIntigerNumber + 1;
        const totalPrice = quantity * 59;
        document.getElementById('case-total-as-number').innerText = totalPrice;
    }else{
        const quantity = document.getElementById('case-input').value = getCaseInputValuePlusAsIntigerNumber - 1;
        const totalPrice = quantity * 59;
        document.getElementById('case-total-as-number').innerText = totalPrice;
    }
    const subTotal = calculateSubTotal();
    document.getElementById('sub-total').innerText = subTotal;
}

document.getElementById('case-plus-btn').addEventListener('click', function(){
   getCaseInputAsFunctionName(true);
});

document.getElementById('case-mines-btn').addEventListener('click', function(){
    getCaseInputAsFunctionName(false);
});






function getPhoneInputAsFunctionName(trueOrFalse){
    const preQuantity = parseInt(document.getElementById('phone-input').value);
    if(trueOrFalse === true){
        const preAndAndQuantity = document.getElementById('phone-input').value = preQuantity + 1;
        const phoneTotalPriceAsNumber = document.getElementById('phone-total-as-text').innerText = preAndAndQuantity * 1219;
   }else{
        const preAndNewQuantity = document.getElementById('phone-input').value = preQuantity - 1;
        const phoneTotalAsNumber = document.getElementById('phone-total-as-text').innerText = preAndNewQuantity * 1219;
    }
    const subTotal = calculateSubTotal();
    document.getElementById('sub-total').innerText = subTotal;
}

document.getElementById('phone-plus-btn').addEventListener('click', function(){
    getPhoneInputAsFunctionName(true);
});

document.getElementById('phone-mines-btn').addEventListener('click', function(){
    getPhoneInputAsFunctionName(false);
});















// function getPhoneInputAsFunctionName(trueOrFalse){
//     const preQuantity = parseInt(document.getElementById('phone-input').value);
//     if(trueOrFalse === true){
//         const preAndAndQuantity = document.getElementById('phone-input').value = preQuantity + 1;
//         const phoneTotalPriceAsNumber = document.getElementById('phone-total-as-text').innerText = preAndAndQuantity * 1219;
//    }else{
//         const preAndNewQuantity = document.getElementById('phone-input').value = preQuantity - 1;
//         const phoneTotalAsNumber = document.getElementById('phone-total-as-text').innerText = preAndNewQuantity * 1219;
//     }
// }

// function getSubTotal(a){
    
// }

// document.getElementById('phone-plus-btn').addEventListener('click', function(){
//     getPhoneInputAsFunctionName(true);
//     getSubTotal('sub-total');
// });

// document.getElementById('phone-mines-btn').addEventListener('click', function(){
//     getPhoneInputAsFunctionName(false);
//     getSubTotal('sub-total');
// });