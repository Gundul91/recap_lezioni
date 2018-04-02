document.addEventListener('DOMContentLoaded', function () {
  document.querySelector(".skip-link").addEventListener("focus", function () {
  let desk_skip_link = document.querySelector(".desc-skip-link");
  desk_skip_link.textContent = "--------------------------------- Per permettere di saltare la tabulazione del menu ed andare diretti al contenuto della pagina";
});
});
