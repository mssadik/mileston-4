const laodeData = (searchText) =>{
    const url = `https://themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayMeals(data.meals));
}

const displayMeals = (meals) =>{
    const mealsContainer = document.getElementById('meals-container')
    mealsContainer.innerHTML = '';
    meals.forEach(meal => {
        // console.log(meal)
        const mealsDiv = document.createElement('div');
        mealsDiv.classList.add('col')
        mealsDiv.innerHTML = `
        <div class="card h-100">
         <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
         <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
         </div>
         <!-- Button trigger modal -->
          <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#mealsDetails">
           Details
          </button>
        </div>
        `
        mealsContainer.appendChild(mealsDiv)
    });

    
}



const searchMeals = () =>{
    const searchInput = document.getElementById('search-input').value;
    // console.log(searchInput);
    laodeData(searchInput)
}

laodeData('rice')