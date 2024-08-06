// Toole class active
const navbar = document.querySelector(".navbar-nav");
document.querySelector("#menu").onclick = () => {
  navbar.classList.toggle("active");
};

const tutupmenu = document.querySelector("#menu");

document.addEventListener("click", function (e) {
  if (!tutupmenu.contains(e.target) && !navbar.contains(e.target)) {
    navbar.classList.remove("active");
  }
});
