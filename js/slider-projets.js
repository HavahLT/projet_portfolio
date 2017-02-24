var containerSlide = document.getElementById('container-slide'),
    i = 0,
    btnSlide = document.querySelector('.btn-slide');

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
