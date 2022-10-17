import hamburgerMenu from "./scripts/hamburger_menu.js";
import scrollBar from "./scripts/scroll.js";
import contactFormValidations from "./scripts/validacion_formulario.js";

const w = window;

document.addEventListener("DOMContentLoaded", (e) => {
  if (w.innerWidth < 1024) {
    hamburgerMenu(".navbar", ".hamburger");
  }

  if (w.innerWidth > 1023) {
    scrollBar(".navbar");
  }

  contactFormValidations();
});
