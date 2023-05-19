const d = document;

export default function hamburgerMenu(navBar, btn) {
  const $btn = d.querySelector(btn),
    $navBar = d.querySelector(navBar);

  d.addEventListener("click", (e) => {
    if (e.target.matches(btn) || e.target.matches(`${btn} *`)) {
      $navBar.classList.toggle("is-active");
    }

    if ($navBar.classList.contains("is-active")) {
      $btn.classList.add("is-active");
    } else {
      $btn.classList.remove("is-active");
    }

    if (e.target.matches(".navbar *")) {
      $btn.classList.remove("is-active");
      $navBar.classList.toggle("is-active");
    }

    if (
      $navBar.classList.contains("is-active") &&
      e.target.matches(".header a *")
    ) {
      $navBar.classList.remove("is-active");
    }
  });
}
