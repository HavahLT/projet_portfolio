var container = document.getElementById('container-slide'),
    i = 0,
    btnLeft = document.getElementById('btn-left'),
    btnRight = document.getElementById('btn-right');

var listeProjets = [
  {
    id: 1,
    nom: "projet1",
    visuel: "https://images.unsplash.com/photo-1443736935966-458a7520ec6d?dpr=1&auto=compress,format&fit=crop&w=568&h=426&q=80&cs=tinysrgb&crop=",
    description: "incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla p",
    lien: "http://lienbidoooooon.com"
  },
  {
    id: 2,
    nom: "projet2",
    visuel: "https://images.unsplash.com/photo-1472390155757-7704d54b9dc7?dpr=1&auto=compress,format&fit=crop&w=568&h=379&q=80&cs=tinysrgb&crop=",
    description: "incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla p",
    lien: "http://lienbidoooooon.com"
  },
  {
    id: 3,
    nom: "projet3",
    visuel: "http://68.media.tumblr.com/0effaf0edb5309d6fce242055c327321/tumblr_okc11r9Q491ta0hnbo1_1280.jpg",
    description: "incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla p",
    lien: "http://lienbidoooooon.com"
  }

]
//creer elements
var imgProjet = document.createElement('img');
var nomProjet = document.createElement('h3');
var descriptionProjet = document.createElement('p');
var boutonProjet = document.createElement('button');
var lienProjet = document.createElement('a');

// styliser elements
imgProjet.style.width = "250px";
imgProjet.style.height = "150px";
imgProjet.classList.add('center-block');
boutonProjet.classList.add('bouton-projet');
boutonProjet.classList.add('center-block');

// initialiser la fonction
injecterJsDansHtml();

function injecterJsDansHtml(){
  // recup element
  imgProjet.setAttribute("src", listeProjets[i].visuel);
  lienProjet.setAttribute("href", listeProjets[i].lien);
  nomProjet.textContent = listeProjets[i].nom;
  descriptionProjet.textContent = listeProjets[i].description;
  boutonProjet.textContent = "Plus d'infos";
  // placer element
  container.appendChild(imgProjet);
  container.appendChild(nomProjet);
  container.appendChild(descriptionProjet);
  container.appendChild(lienProjet);
  lienProjet.appendChild(boutonProjet);
}

// les boutons du slide partie projets
btnLeft.style.fontSize = "4em";
btnLeft.style.cursor = "pointer";
btnLeft.classList.add('center-block');
btnRight.style.fontSize = "4em";
btnRight.style.cursor = "pointer";
btnRight.classList.add('center-block');

btnLeft.addEventListener("click", function(){
  i = i - 1;
  injecterJsDansHtml();
});
btnRight.addEventListener("click", function(){
  i = i + 1;
  injecterJsDansHtml();
});
