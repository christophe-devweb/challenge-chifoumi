'use strict';

function affichregle(){
    var rules=document.querySelector(".regles");
    rules.classList.toggle('hide');  
}

document.addEventListener('DOMContentLoaded',function(){
    var button=document.querySelector(".brul");
    var close=document.querySelector(".close");
    button.addEventListener('click',affichregle); 
    close.addEventListener('click',affichregle);     
});