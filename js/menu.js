var btnMenu = document.getElementById('btn-menu');
var btnMenuClose = document.getElementById('btn-menu-close');
var menuPrincipal = document.getElementById('menu-principal');

btnMenuClose.style.display = "none";
menuPrincipal.style.display = "none";

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
