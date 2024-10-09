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

// FUNCIONES PARA ALBUM

function handleAlbumHover(albumContainerId) {
  const albumContainer = document.getElementById(albumContainerId);
  const albumImage = document.getElementById(`albumImage${albumContainerId.slice(-1)}`);
  const hoverText = document.getElementById(`hoverText${albumContainerId.slice(-1)}`);

  albumContainer.addEventListener('mouseover', () => {
      albumImage.style.filter = 'blur(3px)';
      hoverText.classList.toggle('hidden');
      hoverText.classList.add('block');
  });

  albumContainer.addEventListener('mouseout', () => {
      albumImage.style.filter = 'blur(0px)';
      hoverText.classList.remove('block');
      hoverText.classList.add('hidden');
  });

  hoverText.addEventListener('click', () => {
      // Mapeo de IDs de contenedores con URLs
      const urls = {
          'albumContainer1': 'album1.html',
          'albumContainer2': 'album2.html',
          'albumContainer3': 'album3.html'
      };
      window.location.href = urls[albumContainerId]; // Redirige a la URL correspondiente
  });
}

const albumContainers = ['albumContainer1', 'albumContainer2', 'albumContainer3'];

for (const albumContainerId of albumContainers) {
  handleAlbumHover(albumContainerId);
}


//ME GUSTA ALBUM

const favoriteIcons = document.querySelectorAll('.favorite-icon');

favoriteIcons.forEach(favoriteIcon => {
  const favoriteSvg = favoriteIcon.querySelector('svg');

  favoriteIcon.addEventListener('click', () => {
      favoriteSvg.classList.toggle('text-red-500');
      favoriteSvg.classList.toggle('text-gray-400');
  });
});