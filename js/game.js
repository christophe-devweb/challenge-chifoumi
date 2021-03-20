'use strict';

var choixjoueur;
var choixpc;
var choix = ['paper','rock','scissors']
var resultat;
var vic=0;
var per=0;
var ega=0;

function choixdujoueur(){
    choixjoueur=this.className;
    choixdupc();
}

function choixdupc(){
    choixpc=choix[Math.floor(Math.random()*choix.length)];
    jeu();
}

function jeu(){
    if (choixjoueur == choixpc) {
        resultat = 'Egalite';
        ega++;
    }
    else {
        switch (choixjoueur) {
            case "rock":
                if (choixpc == "paper") {
                    resultat='Perdu';
                    per++;
                }
                else  {
                    resultat='Gagner';
                    vic++;
                }
                break;
            case "paper":
                if (choixpc == "rock" ) {
                    resultat='Gagner';
                    vic++;
                }
                else  {
                    resultat='Perdu';
                    per++;
                }
                break;
            case "scissors":
                if (choixpc == "paper") {
                    resultat='Gagner';
                    vic++;
                }
                 else {
                    resultat='Perdu';
                    per++;
                }
                break;
        }
    }

    affichscore();
    changepage();
}

function changepage(){
    var textresult=document.querySelector(".resultat");
    var debutpartie=document.querySelector(".game");
    var finpartie=document.querySelector(".result");
    var casechoixjoueur=document.querySelector("#choixjoueur");
    var imgchoixjoueur=document.querySelector("#choixjoueur img");
    var casechoixpc=document.querySelector("#choixadverse");
    var imgchoixpc=document.querySelector("#choixadverse img");
    textresult.textContent=resultat;
    if (choixjoueur == "paper") {
        imgchoixjoueur.setAttribute("src","images/icon-paper.svg")
        casechoixjoueur.setAttribute("class","paper")
    }
    else if(choixjoueur == "rock"){
        imgchoixjoueur.setAttribute("src","images/icon-rock.svg")
        casechoixjoueur.setAttribute("class","rock")
    }
    else {
        imgchoixjoueur.setAttribute("src","images/icon-scissors.svg")
        casechoixjoueur.setAttribute("class","scissors")
    }

    if (choixpc == "paper") {
        imgchoixpc.setAttribute("src","images/icon-paper.svg")
        casechoixpc.setAttribute("class","paper")
    }
    else if(choixpc == "rock"){
        imgchoixpc.setAttribute("src","images/icon-rock.svg")
        casechoixpc.setAttribute("class","rock")
    }
    else {
        imgchoixpc.setAttribute("src","images/icon-scissors.svg")
        casechoixpc.setAttribute("class","scissors")
    }
    debutpartie.classList.toggle('hide');
    finpartie.classList.toggle('hide');
}

function rejouer(){
    var debutpartie=document.querySelector(".game");
    var finpartie=document.querySelector(".result");
    debutpartie.classList.toggle('hide');
    finpartie.classList.toggle('hide');
}

function affichscore(){
    var affichvic=document.querySelector("#vic");
    var affichegal=document.querySelector("#egal");
    var affichdef=document.querySelector("#def");
    affichvic.textContent=vic;
    affichegal.textContent=ega;
    affichdef.textContent=per;
}


document.addEventListener('DOMContentLoaded',function(){
    var butpapier=document.querySelector(".paper");
    var butciseaux=document.querySelector(".scissors");
    var butpierre=document.querySelector(".rock");
    var butreload=document.querySelector(".reload");
    butpapier.addEventListener('click',choixdujoueur); 
    butciseaux.addEventListener('click',choixdujoueur); 
    butpierre.addEventListener('click',choixdujoueur); 
    butreload.addEventListener('click',rejouer); 
    affichscore();
});