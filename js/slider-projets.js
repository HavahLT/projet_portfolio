var containerSlide = document.getElementById('container-slide'),
    i = 0,
    btnSlide = document.querySelector('.btn-slide');

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
var imgProjet = document.createElement('img'),
    nomProjet = document.createElement('h3'),
    descriptionProjet = document.createElement('p'),
    boutonProjet = document.createElement('button'),
    lienProjet = document.createElement('a');

// styliser elements
  nomProjet.classList.add('titre-projet');
  imgProjet.classList.add('image-projet');
  boutonProjet.classList.add('bouton-projet');
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
  containerSlide.appendChild(imgProjet);
  containerSlide.appendChild(nomProjet);
  containerSlide.appendChild(lienProjet);
  lienProjet.appendChild(boutonProjet);
  containerSlide.appendChild(descriptionProjet);
}
