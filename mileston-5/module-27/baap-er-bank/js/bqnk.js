function getAllValuesAsNumber(inputValueIdName,){
    const getInputValueAsNumber = parseFloat(document.getElementById(inputValueIdName).value);
    return getInputValueAsNumber;
}

function getAllTextAsNumber(textIdName){
    const getDepositText = parseFloat(document.getElementById(textIdName).innerText)
    return getDepositText;
}

function getPreAndNewDepositAsResult(getPreDepositIdName, getPreAndNewDepositTotal){
    document.getElementById(getPreDepositIdName).innerText = getPreAndNewDepositTotal;
}

document.getElementById('deposit-btn').addEventListener('click', function(){
    const newDepositInput = getAllValuesAsNumber('new-deposit-input');
    const preDepositText = getAllTextAsNumber('pre-deposit');
    const preAndNewDepositTotal = newDepositInput + preDepositText;
    const preBlanceText = getAllTextAsNumber('pre-blance');
    const preAndNewBlanceTotal = preBlanceText + newDepositInput;
    getPreAndNewDepositAsResult('pre-blance', preAndNewBlanceTotal)
    getPreAndNewDepositAsResult('pre-deposit', preAndNewDepositTotal)
    document.getElementById('new-deposit-input').value = '';
})

document.getElementById('withdrow-btn').addEventListener('click', function(){
    const newWidthdrowInput = getAllValuesAsNumber('new-withdrow-input')
    const preWidthdrow = getAllTextAsNumber('pre-widthdrow');
    const preWidthdrowAndNewWidthrowInput = preWidthdrow + newWidthdrowInput;
    getPreAndNewDepositAsResult('pre-widthdrow', preWidthdrowAndNewWidthrowInput);
    const preBlance = getAllTextAsNumber('pre-blance')
    const getAfterWidthdrowTotalBlance = preBlance - newWidthdrowInput
    getPreAndNewDepositAsResult('pre-blance', getAfterWidthdrowTotalBlance);
    document.getElementById('new-withdrow-input').value = '';
})






























// document.getElementById('deposit-btn').addEventListener('click', function(){
//     const getNewDepositInputValue = parseFloat(document.getElementById('new-deposit-input').value);
//     const getPreDepositTextValue = parseFloat(document.getElementById('pre-deopsit').innerText);
//     document.getElementById('pre-deopsit').innerText = getNewDepositInputValue + getPreDepositTextValue;
//     document.getElementById('new-deposit-input').value = '';
// })



// function getValueInputAsNumber(inputIdName){
//     const getNewDepositInputValue = parseFloat(document.getElementById(inputIdName).value);
//     return getNewDepositInputValue
// }

// function getValueAsNumber(depositTextIdName){
//     const getPreDepositTextValue = parseFloat(document.getElementById(depositTextIdName).innerText);
//     return getPreDepositTextValue;
// }

// function getDepositValueForShow( whereCanSet, whichElementCanSet){
//     const getPreDepositValue = document.getElementById(whereCanSet).innerText = whichElementCanSet;
//     return getPreDepositValue;
// }

// document.getElementById('deposit-btn').addEventListener('click', function(){
//     const getNewDepositInput = getValueInputAsNumber('new-deposit-input') ;
//     const getPreDeposit =  getValueAsNumber('pre-deopsit');
//     const preAndNewDepositTotal = getPreDeposit + getNewDepositInput;
//     getDepositValueForShow('pre-deopsit',preAndNewDepositTotal )

//     const getPreBlanceValue = getValueAsNumber('pre-blance');
//     const getPreAndNewBlanceTotal = getPreBlanceValue + getNewDepositInput;
//     getDepositValueForShow('pre-blance', getPreAndNewBlanceTotal);
//     document.getElementById('new-deposit-input').value = '';
// })



// document.getElementById('deposit-btn').addEventListener('click', function(){
//     const getNewDepositInputValue = document.getElementById('new-deposit-input').value;
//     const getPreDepositValue = document.getElementById('pre-deopsit').innerText;
//     const getPreAndNewDeposit = parseFloat(getNewDepositInputValue) + parseFloat(getPreDepositValue);
//     document.getElementById('pre-deopsit').innerText = getPreAndNewDeposit;
//     const getPreBlanceValue = document.getElementById('pre-blance').innerText;
//     const getPreBlanceAndNewDeposit = parseFloat(getPreBlanceValue) + parseFloat(getNewDepositInputValue)
//     document.getElementById('pre-blance').innerText =getPreBlanceAndNewDeposit;
//     document.getElementById('new-deposit-input').value = '';
// })

// document.getElementById('withdrow-btn').addEventListener('click', function(){
//     const getBlanceWidthdrowInputValue = document.getElementById('blance-withdrow-input').value;
//     const getPreWidthdrowValue = document.getElementById('pre-widthdrow').innerText;
//     const getPreAndNewWedthdrow = parseFloat(getBlanceWidthdrowInputValue) + parseFloat(getPreWidthdrowValue)
//     document.getElementById('pre-widthdrow').innerText = getPreAndNewWedthdrow;
//     const getPreBlanceValue = document.getElementById('pre-blance').innerText - getBlanceWidthdrowInputValue;
//     document.getElementById('pre-blance').innerText = getPreBlanceValue;
//     document.getElementById('blance-withdrow-input').value = '';
// })





















// document.getElementById('deposit-btn').addEventListener('click', function(){
//     const getNewDepositInput = document.getElementById('new-deposit-input');
//     const getNewDepositInputValue = getNewDepositInput.value;

//     const getPreDeosit = document.getElementById('pre-deopsit').innerText

//     const getPreAndNewDeposit = parseFloat(getNewDepositInputValue) + parseFloat(getPreDeosit)
//     document.getElementById('pre-deopsit').innerText = getPreAndNewDeposit;

//     const getPreBalnce = document.getElementById('pre-blance').innerText
//     const getPreAndNewBlance = parseFloat(getNewDepositInputValue) + parseFloat(getPreBalnce)
//     document.getElementById('pre-blance').innerText = getPreAndNewBlance

//     getNewDepositInput.value = '';
// })


// document.getElementById('withdrow-btn').addEventListener('click', function(){
//     const getBlanceWithdrowValue = document.getElementById('blance-withdrow').value;
//     const getPreWidthdrowValue = document.getElementById('pre-widthdrow').innerText;
//     document.getElementById('pre-widthdrow').innerText = getBlanceWithdrowValue
//     const getPreWidthrowAndNewWidthdrow = parseFloat(getBlanceWithdrowValue) + parseFloat(getPreWidthdrowValue)
//     document.getElementById('pre-widthdrow').innerText = getPreWidthrowAndNewWidthdrow;
//     document.getElementById('blance-withdrow').value = '';

//     const getPreBlance = document.getElementById('pre-blance').innerText - getBlanceWithdrowValue;
//     document.getElementById('pre-blance').innerText = getPreBlance;
// })



























// document.getElementById('deposit-btn').addEventListener('click', function(){
//     const getNewDepositInput = document.getElementById('new-deposit-input')
//     const getNewDepositInputValue = getNewDepositInput.value;

//     const getPreDeposit = document.getElementById('pre-deopsit');
//     const getPreDepositValue = getPreDeposit.innerText;

//     const getPreAndNewTotalDeposit = parseFloat(getPreDepositValue) + parseFloat(getNewDepositInputValue);

//     getPreDeposit.innerText = getPreAndNewTotalDeposit;

//     getNewDepositInput.value = '';
// })
















// document.getElementById('deposit-btn').addEventListener('click', function(){
//     const getNewDepositinput = document.getElementById('deposit-input');
//     const getNewDepositinputValue = getNewDepositinput.value;

//     const getPreDeposit = document.getElementById('pre-deopsit');
    
//     const getPreDepositValue = getPreDeposit.innerText;
//     getPreDeposit.innerText = getNewDepositinputValue;

//     const getPreAndNewTotalDeposit = parseFloat(getPreDepositValue)  + parseFloat(getNewDepositinputValue);
//     getPreDeposit.innerText = getPreAndNewTotalDeposit;

//     getNewDepositinput.value = '';
// })

