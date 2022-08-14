/* ================ SHOW MENU ================= */
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

// /*=============== HOME SWIPER ===============*/
// /*=============== NEW SWIPER ===============*/
// let newSwiper = new Swiper(".new-swiper", {
//   spaceBetween: 6,
//   centeredSlides: true,
//   loop: true,
//   slidesPerView: "auto",
//   //   grabCursor: true,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
// });
