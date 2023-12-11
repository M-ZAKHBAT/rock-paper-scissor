const choixOrdinateur = document.getElementById('choix-Ordinateur');
const choixUtilisateur = document.getElementById('choix-utilisateur');
const choixResultat = document.getElementById('Resultat');

const choixPossibles = document.querySelectorAll('button');
let choixUtil = '';
let choixOrdina = "";
let resultat = "";
let tabImg = ["fist.png","hand-paper.png","scissors.png"];

choixPossibles.forEach(choixPossible => choixPossible.addEventListener('click',(e)=>{
    choixUtil=e.target.id;
    // on ajoute l'image qui correspond au choix
    // choixUtilisateur.innerHTML = `<img src="${choixUtil}.png">`
    choixUtilisateur.innerHTML = `<img src="${choixUtil}.png">`;
    generer_choix_ordinateur()
}));

// fonction pour generer le choix de l'ordinateur
function generer_choix_ordinateur(){
    random = Math.floor(Math.random()*3)+ 1 // générer des nombres compris entre 1 et 3
    if(random ===1){
        // choixOrdina="pierre"
        // choixOrdina = tabImg[0];
    choixOrdinateur.innerHTML = `<img src="${tabImg[0]}.png">`;
        //choixOrdina = "fist.png";
    }
    if(random === 2){
        choixOrdina = "papier";
    }
    if(random === 3){
        choixOrdina = "ciseau";
    }
    choixOrdinateur.innerHTML = `<img src="${choixOrdina}.png">`;
}

// fonction pour vérifié si le joueur à gagné ou non
function verification(){
    if(choixUtil===choixOrdina){
        resultat="Egalité"
    }
    if(choixUtil=="pierre" && choixOrdina == "papier"){
        resultat="Perdu"
    }
      if (choixUtil == "papier" && choixOrdina == "ciseau") {
        resultat = "Perdu";
      }
       if (choixUtil == "ciseau" && choixOrdina == "pierre") {
         resultat = "Perdu";
       }
         if (choixUtil == "pierre" && choixOrdina == "ciseau") {
           resultat = "Gagné";
         }
         if (choixUtil == "ciseau" && choixOrdina == "papier") {
           resultat = "Gagné";
         }
         if (choixUtil == "pierre" && choixOrdina == "ciseau") {
           resultat = "Gagné";
         }
}
