const photo = document.getElementById("photo");
const suivant = document.getElementById("suivant");
const precedent = document.getElementById("precedent");

const images = ["image/image1.jpg","image/image2.avif" , "image/image3.jpg"];

let index = 0;

suivant.onclick = function() {
    index++;

    if (index === images.length) {
        index = 0;
    }

    photo.src = images[index];
};

precedent.onclick = function() {
    index--;

    if (index < 0) {
        index = images.length - 1;
    }

    photo.src = images[index];
};