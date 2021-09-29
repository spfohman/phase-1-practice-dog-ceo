console.log('%c HI', 'color: firebrick')
function fetchDogs(){
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    fetch(imgUrl)
    .then((response)=>{
        return response.json()
    })
    .then((json)=>addImages(json))
    
}

function addImages(images){
    const added = document.getElementById('dog-image-container')
    images.value.forEach(Image =>{
        const img= document.createElement('img');
        img.src = Image;
        added.appendChild(img)
    });
}
document.addEventListener('DOMContentLoaded', ()=>{
    fetchDogs()
})