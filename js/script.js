document.addEventListener("DOMContentLoaded", function () {
  let tabs = document.querySelectorAll(".tab_btn");
  let contents = document.querySelectorAll(".content");

  tabs.forEach(tab => {
      tab.addEventListener("click", function () {
          let target = this.getAttribute("data-target");

          // Remover la clase 'active' de todos los tabs y contenidos
          tabs.forEach(t => t.classList.remove("active"));
          contents.forEach(c => c.style.display = "none"); // Ocultar todos

          // Activar solo la sección correspondiente
          this.classList.add("active");
          document.getElementById(target).style.display = "block";
      });
  });
});