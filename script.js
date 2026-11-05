const images = ['./assets/img/Alaska.jpg',
    './assets/img/Anime.jpg',
    './assets/img/Atmosphere.png',
    './assets/img/Blue-tit.jpg',
    './assets/img/Hurricane.jpg',
    './assets/img/Lake.jpg',
    './assets/img/Moorente.jpg',
    './assets/img/Sea.jpg',
    './assets/img/Snow-bunting.jpg',
    './assets/img/Snow-leopard.jpg',
    './assets/img/Travel.jpg',
    './assets/img/Winter.jpg'];

const galleryRef = document.getElementById("gallery");
const imgRef = document.getElementById("dialogImage");
const imgHeaderRef = document.getElementById("headerId");
const imgNumberRef = document.getElementById("imgNumber");
const dialogRef = document.getElementById("dialogId");

let indexNum = 0;
let index = 0;
let imgName = "";

renderImages();

let imageIndex = 0;

function renderImages() {
    // for (let i = 0; i < images.length; i++) {
    //     galleryRef.innerHTML += `<img src="${images[i]}" alt="${images[i]}" 
    //                             class="components" tabindex="0" onclick="openDialog(this)" 
    //                             onkeydown="if(event.key === 'Enter') openDialog(this)"> `;
    // }

    for (let i = 0; i < images.length; i++) {
    galleryRef.innerHTML += `
        <button type="button" class="image-button"
            onclick="openDialog(this.querySelector('img'))">
            <img src="${images[i]}"
                alt="Photo ${i + 1}"
                class="components">
        </button>
    `;
}
}

function openDialog(element) {
    dialogRef.showModal();
    const a = element.getAttribute('src');

    imgName = a.split('/').pop().split('.').shift();

    imgRef.setAttribute('src', a);
    imgHeaderRef.innerText = imgName;

    indexNum = images.indexOf(a);

    imgNumberRef.innerText = (indexNum + 1) + "/" + images.length;

}

function nextImg() {
    if (indexNum < 11) {
        indexNum++;
    }
    else {
        indexNum = 0;
    }

    imgRef.setAttribute('src', images[indexNum]);
    imgNumberRef.innerText = (indexNum + 1) + "/" + images.length;

    imgName = images[indexNum].split('/').pop().split('.').shift();
    imgHeaderRef.innerText = imgName;
}

function prevImg() {
    if (indexNum > 0) {
        indexNum--;
    }
    else {
        indexNum = 11;
    }

    imgRef.setAttribute('src', images[indexNum]);
    imgNumberRef.innerText = (indexNum + 1) + "/" + images.length;

    imgName = images[indexNum].split('/').pop().split('.').shift();
    imgHeaderRef.innerText = imgName;
}

function closeDialog() {
    dialogRef.close();
}

function closeDialogOutside(event) {
    event.stopPropagation();

    if (event.target === dialogRef) {
        closeDialog();
    }
}