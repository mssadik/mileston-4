document.getElementById('add-btn').addEventListener('click', function(){
    const nameInput = document.getElementById('name')
    const gmailInput = document.getElementById('gmail')
    nameInput.value = " ";
    gmailInput.value = " ";
    showData(nameInput, gmailInput);
})

const showData = (nameInput, gmailInput) =>{
    const ul = document.getElementById('ul');
    const li = document.createElement('li');
    li.innerText = `${nameInput}: ${gmailInput}`;
    ul.appendChild(li);
}