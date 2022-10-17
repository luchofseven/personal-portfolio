const d = document;

export default function scrollBar(navBar) {
  const $navBar = d.querySelector(navBar);

  onscroll = (e) => {
    if (scrollY > 200) {
      $navBar.style.visibility = "visible";
      $navBar.style.opacity = "1";
      $navBar.style.transform = "translate(0, 0)";
    } else if (scrollY <= 200) {
      $navBar.style.visibility = "hidden";
      $navBar.style.opacity = "0";
      $navBar.style.transform = "translate(0, -100%)";
    }
  };
}
