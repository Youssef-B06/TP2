const bt = document.getElementById("bt");
let txt =document.getElementById("txt");
bt.addEventListener("click",function(){
    if(txt.style.display==="none"){
        txt.style.display="block";
        bt.textContent = " masquer";
    }else{
        txt.style.display="none";
        bt.textContent="afficher";
    }
})