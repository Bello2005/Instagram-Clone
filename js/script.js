document.addEventListener('DOMContentLoaded', function() {
  // Seleccionar elementos
  const sectionsMenu = document.querySelectorAll('.section-menu-item');
  const contentSections = {
      publicaciones: document.querySelector('.grid-content'),
      guardados: document.querySelector('.saved-content'),
      etiquetadas: document.querySelector('.tagged-content') // Asegúrate de que esta clase exista en el HTML
  };

  // Función para cambiar de sección
  function switchSection(selectedSection) {
      // Remover clases activas
      sectionsMenu.forEach(menuItem => {
          menuItem.classList.remove('active');
      });
      
      Object.values(contentSections).forEach(section => {
          section.classList.remove('active-section');
      });

      // Añadir clases activas
      selectedSection.classList.add('active');
      const target = selectedSection.getAttribute('data-target');
      contentSections[target].classList.add('active-section');
  }

  // Configurar evento click para cada ítem del menú
  sectionsMenu.forEach(menuItem => {
      menuItem.addEventListener('click', function() {
          switchSection(this);
      });
  });

  // Activar sección inicial (Publicaciones)
  switchSection(sectionsMenu[0]);
});