const searchBar = document.getElementById("searchBar");
const filterButtons = document.querySelectorAll(".filter-btn");
const items = document.querySelectorAll(".item");
const galleryimages = document.querySelectorAll(".gallery img");
const lightbox = document.querySelector(".lightbox");
const lightboximage = document.querySelector(".lightbox-image");
const closebtn = document.querySelector(".close");
const nextbtn = document.querySelector(".next");
const prevbtn = document.querySelector(".prev");
let Cindex = 0;


searchBar.addEventListener("keyup", () => {
    const searchText = searchBar.value.toLowerCase();

    items.forEach(item => {
        const title = item.querySelector("h3").textContent.toLowerCase();

        if(title.includes(searchText)){
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
});

filterButtons.forEach(button => {
    button.addEventListener("click", () => {

        filterButtons.forEach(btn =>
            btn.classList.remove("active")
        );

        button.classList.add("active");

        const category = button.dataset.category;

        items.forEach(item => {

            if(
                category === "all" ||
                item.dataset.category === category
            ){
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }

        });
    });
});

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