const bt = document.getElementById("bt");
const nme = document.getElementById("nme");
const mail = document.getElementById("mail");
const txt = document.getElementById("txt");
bt.onclick=function(){
    if(nme.value==="" ||  mail.value===""){
        window.alert("enter your data ");
        txt.textContent="your data is invalid";

    }
    else{
        txt.textContent="your data is valid";
    }
}