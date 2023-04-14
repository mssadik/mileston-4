const loadPhoneData = async (searchInput) =>{
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchInput}`;
    const res = await fetch(url);
    const data = await res.json();
    displayPhoneData(data.data);
}



const displayPhoneData = phones =>{
    // see all button function call here 
    seeAll(phones)
    console.log(phones);
    // console.log(phones.slice(0, 3))
    const phoneContainer = document.getElementById('phone-container')
    phoneContainer.innerHTML = '';
    const hiddenMessage = document.getElementById('hidder-message');
        if(phones.length === 0){
            hiddenMessage.classList.remove('d-none')
        }else{
            hiddenMessage.classList.add('d-none')
        }
        // see all button function call here
        seeAll(phones)
        spinner(false);
        phones.slice(0, 9).forEach(phone => {
        const {brand, image, phone_name, slug} = phone;
        const makeDiv = document.createElement('div');
        makeDiv.classList.add('col');
        makeDiv.innerHTML = `
        <div class="card h-70 p-4 text-center">
            <img src="${image}" class="card-img-top w-50 mx-auto" alt="...">
            <div class="card-body">
                <h5 class="card-title">${phone_name}</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <button type="button" onclick="loadDetails('${slug}')" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Phone Details</button>
            </div>
        </div>
        `
        phoneContainer.appendChild(makeDiv)
        // spiiner loding end 
        spinner(false);
    });
}





document.getElementById('search-btn').addEventListener('click', function(){
    // spinner function 
    spinner(true);
    // console.log('hello')
    const searchInput = document.getElementById('search-input').value;
    console.log(searchInput);
    loadPhoneData(searchInput)
    
})



// spinner code here 
const spinner = isLoding =>{
    if(isLoding){
        document.getElementById('spinner').classList.remove('d-none')
    }else{
        document.getElementById('spinner').classList.add('d-none')
    }
}


// see all button function declear here 
const seeAll = (arr) =>{
    if(arr.length > 10){
        document.getElementById('see-all-div').classList.remove('d-none')
        
    }else{
        document.getElementById('see-all-div').classList.add('d-none')
    }
}



loadPhoneData('iphone');


// const loadDetails = id =>{
//     const url = `https://openapi.programming-hero.com/api/phone/${id}`
//     fetch(url)
//     .then(res => res.json())
//     .then(data => displayDetails(data.data))
// }

// const displayDetails = phoneDetails => {
//     console.log(phoneDetails);
// };


const loadDetails = async id => {
    const url = `https://openapi.programming-hero.com/api/phone/${id}`;
    const res = await fetch (url);
    const data = await res.json();
    displayDetails(data.data)
};

const displayDetails = phoneDetails => {
    console.log(phoneDetails);
    const {name, image, releaseDate } = phoneDetails;
    
    const modelName = document.getElementById('model-name');
    modelName.innerText = `${name}`

    const modelBody = document.getElementById('model-body');
    modelBody.innerHTML = `
    <p>${releaseDate}</p>
    `

    
};













