const galleryimages = document.querySelectorAll(".gallery img");
const lightbox = document.querySelector(".lightbox");
const lightboximage = document.querySelector(".lightbox-image");
const closebtn = document.querySelector(".close");
const nextbtn = document.querySelector(".next");
const prevbtn = document.querySelector(".prev");
let Cindex = 0;

galleryimages.forEach((image, index) => {
    image.addEventListener("click", () => {
        Cindex = index;
        lightboximage.src = image.src;
        lightbox.style.display = "flex";
        lightboximage.src = image.src;
    });
});

closebtn.addEventListener("click",()=>{
    lightbox.style.display = "none";
});

nextbtn.addEventListener("click",()=>{
    Cindex++;
    if(Cindex >= galleryimages.length){
        Cindex = 0;
    }
    lightboximage.src = galleryimages[Cindex].src;
});

prevbtn.addEventListener("click",()=>{
    Cindex--;
    if(Cindex < 0){
        Cindex = galleryimages.length-1;
    }
    lightboximage.src = galleryimages[Cindex].src;
});