const ul = document.querySelector(".navbar-nav");
const li = ul.getElementsByClassName("nav-item");

const arrayLi = Array.from(li);
const URL = window.location.pathname;

Array.from(li).forEach((element) => {
  const a = element.childNodes[1];
  if (URL === a.getAttribute("href")) {
    a.className += " active";
  }
});
