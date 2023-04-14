const rendomUser = () => {
    fetch('https://randomuser.me/api/?gender=female')
    .then(res => res.json())
    .then(data => displayUserData(data))
}

const displayUserData = data => {
    const name = document.getElementById('name').innerHTML = data.results[0].name.title + ' ' + data.results[0].name.first + ' ' + data.results[0].name.last;
    const gender = document.getElementById('gender').innerHTML = data.results[0].gender;
    const location = document.getElementById('Location').innerHTML = data.results[0].location.city;
    const img = document.getElementById('img').src = data.results[0].picture.large;
    console.log( data.results[0].location.city);

}

