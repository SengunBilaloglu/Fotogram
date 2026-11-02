const images = ['./assets/img/Alaska.jpg',
    './assets/img/Anime.jpg'
    , './assets/img/Atmosphere.png'
    , './assets/img/Blue-tit.jpg'
    , './assets/img/Hurricane.jpg'
    , './assets/img/Lake.jpg'
    , './assets/img/Moorente.jpg'
    , './assets/img/Sea.jpg'
    , './assets/img/Snow-bunting.jpg'
    , './assets/img/Snow-leopard.jpg'
    , './assets/img/Travel.jpg'
    , './assets/img/Winter.jpg'];

const galleryRef = document.getElementById("gallery");

renderImages();

function renderImages() {
    for (let i = 0; i < images.length; i++) {
        galleryRef.innerHTML+=`<img src="${images[i]}" alt="${images[i]}" class="component">`;
        
    }
} 