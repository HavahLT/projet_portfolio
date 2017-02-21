var containerImgTitre = document.getElementById('container-img-titre'),
 containerDescBtn = document.getElementById('container-description-bouton'),
    i = 0,
    btnLeft = document.getElementById('btn-left'),
    btnRight = document.getElementById('btn-right');

var listeProjets = [
  {
    id: 1,
    nom: "projet1",
    visuel: "https://images.unsplash.com/photo-1459445364195-16475050193c?dpr=1&auto=compress,format&fit=crop&w=1199&h=930&q=80&cs=tinysrgb&crop=",
    description: "incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla p",
    lien: "http://lienbidoooooon.com"
  },
  {
    id: 2,
    nom: "projet2",
    visuel: "https://images.unsplash.com/photo-1459445364195-16475050193c?dpr=1&auto=compress,format&fit=crop&w=1199&h=930&q=80&cs=tinysrgb&crop=",
    description: "incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla p",
    lien: "http://lienbidoooooon222.com"
  },
  {
    id: 3,
    nom: "projet3",
    visuel: "https://images.unsplash.com/photo-1459445364195-16475050193c?dpr=1&auto=compress,format&fit=crop&w=1199&h=930&q=80&cs=tinysrgb&crop=",
    description: "incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla p",
    lien: "http://lienbidoooooon333.com"
  }

]
//creer elements
//var imgProjet = document.createElement('div');
var nomProjet = document.createElement('h3'),
    descriptionProjet = document.createElement('p'),
    boutonProjet = document.createElement('button'),
    lienProjet = document.createElement('a');

// styliser elements

boutonProjet.classList.add('bouton-projet');
boutonProjet.classList.add('center-block');
nomProjet.classList.add('titre-projet');

// initialiser la fonction
injecterJsDansHtml();

function injecterJsDansHtml(){
  // recup element
  containerImgTitre.style.background = "url(" + listeProjets[i].visuel + ")";
  lienProjet.setAttribute("href", listeProjets[i].lien);
  nomProjet.textContent = listeProjets[i].nom;
  descriptionProjet.textContent = listeProjets[i].description;
  boutonProjet.textContent = "Plus d'infos";
  // placer element
  containerImgTitre.appendChild(nomProjet);
  containerDescBtn.appendChild(descriptionProjet);
  containerDescBtn.appendChild(lienProjet);
  lienProjet.appendChild(boutonProjet);
}

// les boutons du slide partie projets
btnLeft.style.fontSize = "4em";
btnLeft.style.cursor = "pointer";
//btnLeft.classList.add('center-block');
btnRight.style.fontSize = "4em";
btnRight.style.cursor = "pointer";
//btnRight.classList.add('center-block');

btnLeft.addEventListener("click", function(){
  i = i - 1;
  injecterJsDansHtml();

});

btnRight.addEventListener("click", function(){
  i = i + 1;
  injecterJsDansHtml();
});
