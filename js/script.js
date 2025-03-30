document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll(".tab_btn");
    const contents = document.querySelectorAll(".content");
  
    tabs.forEach(tab => {
      tab.addEventListener("click", function () {
        // Quitar la clase 'active' de todos los botones
        tabs.forEach(btn => btn.classList.remove("active"));
        // Agregar 'active' al botón clicado
        this.classList.add("active");
  
        // Ocultar todo el contenido
        contents.forEach(content => content.classList.remove("active"));
  
        // Mostrar el contenido correspondiente
        const target = this.getAttribute("data-target");
        document.getElementById(target).classList.add("active");
      });
    });
  });
  