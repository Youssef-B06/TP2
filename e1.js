const bt = document.getElementById("bt");
const dv = document.getElementById("dv");
bt.addEventListener("click",function(){
   if( dv.style.backgroundColor==="black"){
    dv.style.backgroundColor="white";
   }
   else{dv.style.backgroundColor="black";}

});
