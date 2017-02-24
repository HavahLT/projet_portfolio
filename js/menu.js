// ici tous les scripts qui gèrent le menu de la version mobile :
var btnMenu = document.getElementById('btn-menu'),
    btnMenuClose = document.getElementById('btn-menu-close'),
    btnProjets = document.getElementById('btn-projets'),
    btnProjetsUp = document.getElementById('btn-projets-up'),
    menuPrincipal = document.getElementById('menu-principal'),
    sousMenuProjets = document.getElementById('sous-menu');

btnMenuClose.style.display = "none";
menuPrincipal.style.display = "none";
sousMenuProjets.style.display = "none";
btnProjets.style.cursor = "pointer";
btnProjetsUp.style.cursor = "pointer";
btnProjetsUp.style.display = "none";

//clic sur icone menu
btnMenu.addEventListener('click', function(){
  menuPrincipal.style.display = "block";
  btnMenu.style.display = "none";
  btnMenuClose.style.display = "block";
});

//clic sur icone croix
btnMenuClose.addEventListener('click', function(){
  menuPrincipal.style.display = "none";
  btnMenu.style.display = "block";
  btnMenuClose.style.display = "none";
  sousMenuProjets.style.display = "none";
});

//clic sur partie projet fleche bas
btnProjets.addEventListener('click', function(){
  sousMenuProjets.style.display = "block";
  btnProjets.style.display = "none";
  btnProjetsUp.style.display = "block";
});

//clic sur partie projet fleche haut
btnProjetsUp.addEventListener('click', function(){
  sousMenuProjets.style.display = "none";
  btnProjets.style.display = "block";
  btnProjetsUp.style.display = "none";
});
