// Menu button functionality
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

// ScrollReveal animations
const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// header container
ScrollReveal().reveal(".header__container p", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".header__container h1", {
  ...scrollRevealOption,
  delay: 500,
});

// about container
ScrollReveal().reveal(".about__image img", {
  ...scrollRevealOption,
  origin: "left",
});

ScrollReveal().reveal(".about_content .section_subheader", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".about_content .section_header", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".about_content .section_description", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".about__btn", {
  ...scrollRevealOption,
  delay: 2000,
});

// room container
ScrollReveal().reveal(".room__card", {
  ...scrollRevealOption,
  interval: 500,
});

// service container
ScrollReveal().reveal(".service__list li", {
  ...scrollRevealOption,
  interval: 500,
  origin: "right",
});

// Number counting animation
document.addEventListener('DOMContentLoaded', () => {
  const counters = document.querySelectorAll('.count');
  const speed = 200; // Speed of counting (larger number = slower)

  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute('data-target'); // Convert string to number
      const count = +counter.innerText; // Current number in the element

      const increment = target / speed; // Define the increment

      if (count < target) {
        counter.innerText = Math.ceil(count + increment); // Update the number
        setTimeout(updateCount, 20); // Repeat the update
      } else {
        counter.innerText = target; // Ensure the target number is reached
      }
    };

    updateCount();
  });
});