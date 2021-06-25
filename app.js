const imgs = [
    {
        id: 1,
        img: "img/tea.png",
        title: "greentea"
    },
    {
        id: 2,
        img: "img/ac.PNG",
        title: "ac"
    },
    {
        id: 3,
        img: "img/acne.PNG",
        title: "acne"
    },
    {
        id: 4,
        img: "img/arare.PNG",
        title: "arare"
    },
    {
        id: 5,
        img: "img/bikini.PNG",
        title: "bikini"
    },
    {
        id: 6,
        img: "img/blackgirl.PNG", 
        title: "blackgirl"
    },
    {
        id: 7,
        img: "img/boxing.PNG",
        title: "boxing"
    },
    {
        id: 8,
        img: "img/cat_hat.PNG",
        title: "cat hat"
    },
    {
        id: 9,
        img: "img/cat_newyear.PNG",
        title: "cat newyear"
    },
    {
        id: 10,
        img: "img/cat_paint.JPG",
        title: "cat paint"
    },
    {
        id: 11,
        img: "img/cat_skate.PNG",
        title: "cat skate"
    },
    {
        id: 12,
        img: "img/kapoera.PNG", 
        title: "kapoera"
    },
    {
        id: 13,
        img: "img/makeup.PNG",
        title: "makeup"
    },
    {
        id: 14,
        img: "img/me.PNG",
        title: "me"
    },
    {
        id: 15,
        img: "img/meowsJPG.JPG",
        title: "meows"
    },
    {
        id: 16,
        img: "img/skate1.JPG",
        title: "skate1"
    },
    {
        id: 17,
        img: "img/skate2.JPG",
        title: "skate2"
    },
    {
        id: 18,
        img: "img/smash.PNG",
        title: "smash"
    },
    {
        id: 19,
        img: "img/spl_nintendo.PNG",
        title: "spl nintendo"
    },
    {
        id: 20,
        img: "img/spl_paint.JPG",
        title: "spl paing"
    },
    {
        id: 21,
        img: "img/traveling.PNG",
        title: "traveing"
    },
    {
        id: 22,
        img: "img/utadasheena.jpg",
        title: "utadasheena"
    },
    {
        id: 23,
        img: "img/spl_water.PNG",
        title: "spl water"
    },
    {
        id: 24,
        img: "img/la.png",
        title: "LA"
    },
    {
        id: 25,
        img: "img/1stdrawing.PNG",
        title: "1stdrawing"
    }
];

const firstRowImgs = [];
for(let i = 0; i < 8; i++){
    firstRowImgs.push(imgs[i]);
};

const secondRowImgs = [];
for(let i = 8; i < 16; i++){
    secondRowImgs.push(imgs[i]);
};

const thirdRowImgs = [];
for(let i = 16; i < imgs.length; i++){
    thirdRowImgs.push(imgs[i]);
};

let firstRow = document.querySelector(".img-row1");
let secondRow = document.querySelector(".img-row2");
let thirdRow = document.querySelector(".img-row3");

// display 1st row
let display1 = firstRowImgs.map(function(item){
    return `<img class="img image${item.id}" src=${item.img} alt=${item.title}>`
});
firstRow.innerHTML = display1.join("");

// display 2st row
let display2 = secondRowImgs.map(function(item){
    return `<img class="img image${item.id}" src=${item.img} alt=${item.title}>`
});
secondRow.innerHTML = display2.join("");

// display 3rd row
let display3 = thirdRowImgs.map(function(item){
    return `<img class="img image${item.id}" src=${item.img} alt=${item.title}>`
});
thirdRow.innerHTML = display3.join("");


// side menu for mobile
const menuBtn = document.querySelector(".menu-btn");
const sideBar = document.querySelector(".aside");
const closeBtn = document.querySelector(".menu-close-btn");

menuBtn.addEventListener("click", function(){
    sideBar.classList.toggle("aside-show");
});

closeBtn.addEventListener("click", function(){
    sideBar.classList.remove("aside-show");
});



// popup
const popup = document.querySelector(".popup");
const popupBtn = document.querySelector(".popup-close-btn");
const popupImg = document.querySelector(".popup-img");
const images = document.querySelectorAll(".img");

images.forEach(function(image){
    image.addEventListener("click", function(e){
        let selectedImage = e.currentTarget.src;
        popupImg.setAttribute("src", selectedImage);
        popup.classList.add("popup-show");
    });
});

popupBtn.addEventListener("click", function(){
    popup.classList.remove("popup-show");
});
