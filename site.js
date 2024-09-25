//EL SIGUIENTE CODIGO CORRESPONDE A : Profile dropdown
const userMenu = document.getElementById("user-menu");
const userMenuButton = document.getElementById("user-menu-button");
// Función para mostrar el menú
function showMenu() {
  userMenu.classList.remove("hidden");
}
// Función para ocultar el menú
function hideMenu() {
  userMenu.classList.add("hidden");
}
// Mostrar el menú al hacer clic en el botón
userMenuButton.addEventListener("click", showMenu);
// Ocultar el menú al hacer clic fuera del menú
document.addEventListener("click", function (event) {
  if (!userMenu.contains(event.target) && !userMenuButton.contains(event.target)) {
    hideMenu();
  }
});


// EL SIGUIENTE CODIGO CORRESPONDE AL MENU MOVIL
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenuContent = document.getElementById('mobile-menu-content');

mobileMenuButton.addEventListener('click', () => {
  mobileMenuContent.classList.toggle('hidden');

  // Actualizar el atributo aria-expanded del botón
  mobileMenuButton.setAttribute('aria-expanded', mobileMenuContent.classList.contains('hidden') ? 'false' : 'true');

  // Cambiar el ícono del botón
  const openIcon = mobileMenuButton.querySelector('svg.block');
  const closeIcon = mobileMenuButton.querySelector('svg.hidden');
  openIcon.classList.toggle('hidden');
  closeIcon.classList.toggle('hidden');
});
