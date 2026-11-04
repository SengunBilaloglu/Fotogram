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
const imgRef=document.getElementById("dialogImage");
const imgHeaderRef=document.getElementById("headerId");
const imgNumberRef=document.getElementById("imgNumber");

renderImages();

let imageIndex=0;

function renderImages() {
    for (let i = 0; i < images.length; i++) {
        galleryRef.innerHTML += `<img src="${images[i]}" alt="${images[i]}" class="component" onclick="openDialog(this)">`;
        //     galleryRef.innerHTML+=`<img src="${images[i]}" alt="${images[i]}" class="component">`;
        // }
    }
}

const dialogRef=document.getElementById("dialogId");

let indexNo=0;
let index=0;
let imgName="";

function openDialog(element) {
    dialogRef.showModal();
    // console.log(element);
    const a=element.getAttribute('src');
    console.log(a);

    imgName = a.split('/').pop().split('.').shift();

    imgRef.setAttribute('src', a);
    imgHeaderRef.innerText=imgName;

    indexNo=images.indexOf(a);
    console.log(indexNo);

    imgNumberRef.innerText=(indexNo+1) + "/" + images.length;
    
}

function nextImg() {
    if (indexNo<11) {
        indexNo++;
    }
    else 
        indexNo=0;
    

    imgRef.setAttribute('src',images[indexNo]);
    imgNumberRef.innerText=(indexNo+1) + "/" + images.length;

    imgName=images[indexNo].split('/').pop().split('.').shift();
    imgHeaderRef.innerText=imgName;
}

function prevImg() {
    if (indexNo>0) {
        indexNo--;
    }
    else 
        indexNo=11;
    

    imgRef.setAttribute('src',images[indexNo]);
    imgNumberRef.innerText=(indexNo+1) + "/" + images.length;

    imgName=images[indexNo].split('/').pop().split('.').shift();
    imgHeaderRef.innerText=imgName;
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