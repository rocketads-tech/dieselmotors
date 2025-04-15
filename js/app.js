
const body = document.querySelector('body')

const nav = document.querySelector(".nav"),
  navBtn = nav.querySelector(".nav__mob-btn"),
  navList = nav.querySelector(".nav__list"),
  sidebarToggleBtn = document.querySelector(".sidebar__toggle-btn"),
  sidebarClose = document.querySelector(".sidebar__close"),
  sidebar = document.querySelector(".sidebar");

function showBlock(btn, block, parent) {
  if (btn && block) {
    btn.addEventListener("click", () => {
      block.classList.toggle("active");
      parent ? parent.classList.toggle("active") : false;
    });
  } else false
}
window.addEventListener("DOMContentLoaded", () => {
  showBlock(navBtn, navList, nav);
  showBlock(sidebarToggleBtn, sidebar);
  showBlock(sidebarClose, sidebar);
});
