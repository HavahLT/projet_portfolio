// ici tous les scripts qui gèrent le menu de la version mobile :
var btnMenu = document.getElementById('btn-menu'),
    btnMenuClose = document.getElementById('btn-menu-close'),
    btnProjets = document.getElementById('btn-projets'),
    menuPrincipal = document.getElementById('menu-principal'),
    sousMenuProjets = document.getElementById('sous-menu');

btnMenuClose.style.display = "none";
menuPrincipal.style.display = "none";
sousMenuProjets.style.display = "none";
btnProjets.style.cursor = "pointer";

btnMenu.addEventListener('click', function(){
  menuPrincipal.style.display = "block";
  btnMenu.style.display = "none";
  btnMenuClose.style.display = "block";
});

btnMenuClose.addEventListener('click', function(){
  menuPrincipal.style.display = "none";
  btnMenu.style.display = "block";
  btnMenuClose.style.display = "none";
});

btnProjets.addEventListener('click', function(){
  sousMenuProjets.style.display = "block";
});
