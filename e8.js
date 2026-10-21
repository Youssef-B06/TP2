const carre = document.getElementById("carre");

carre.addEventListener("mouseover", function() {
    carre.style.backgroundColor = "blue";
});

carre.addEventListener("mouseout", function() {
    carre.style.backgroundColor = "red";
});