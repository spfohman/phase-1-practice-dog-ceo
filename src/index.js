
console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', function() {
    fetchImages();
    fetchDogBreeds();
    changeColor();
    chooseLetter();
})

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
function fetchImages() {
    fetch(imgUrl)
    .then(response => response.json())
    .then(data => {data.message.forEach(image => renderImages(image))})

}

function renderImages(data){
    const imageLocal = document.getElementById('dog-image-container');
    const image = document.createElement('img');
    image.src = data;
    console.log(image);
    imageLocal.appendChild(image);
   
}
const breedUrl = 'https://dog.ceo/api/breeds/list/all';
function fetchDogBreeds(){
    fetch(breedUrl)
    .then(response=>response.json())
    .then(data=>renderBreed(data))
}

function renderBreed(data){
    const breedLocation = document.getElementById('dog-breeds');
    for(let i in data.message){
        console.log(i);
        const li = document.createElement('li');
        li.innerText = i;
        breedLocation.appendChild(li);
    }
}

function changeColor(event){
    event.target.style.color= "purple";
}
function chooseLetter(data){
    const letter = document.querySelector('#breed-dropdown');
    letter.addEventListener('change', function(event){
        for(let i in data.event){
            let choice = letter.value;
            if(i.startsWith(choice)){
                console.log(i);
            }
        }
        
    })

}