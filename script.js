const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");
const contactForm = document.getElementById("contactForm");

navToggle.addEventListener("click", () => {
  const expanded = navToggle.getAttribute("aria-expanded") === "true";
  navToggle.setAttribute("aria-expanded", String(!expanded));
  siteNav.style.display = siteNav.style.display === "flex" ? "none" : "flex";
});
const revealElements = document.querySelectorAll(".animate");

const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.85;
  revealElements.forEach((elem) => {
    const rect = elem.getBoundingClientRect();
    if (rect.top < triggerBottom) {
      elem.classList.add("visible");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const phone = document.getElementById("phone");
  const message = document.getElementById("message");

  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const phoneError = document.getElementById("phoneError");
  const messageError = document.getElementById("messageError");
  const formSuccess = document.getElementById("formSuccess");

  let hasError = false;
  formSuccess.textContent = "";

  if (name.value.trim() === "") {
    nameError.textContent = "Please enter your name.";
    hasError = true;
  } else {
    nameError.textContent = "";
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email.value.trim() === "") {
    emailError.textContent = "Please enter your email.";
    hasError = true;
  } else if (!emailPattern.test(email.value.trim())) {
    emailError.textContent = "Please enter a valid email address.";
    hasError = true;
  } else {
    emailError.textContent = "";
  }

  if (phone.value.trim() === "") {
    phoneError.textContent = "Please enter your phone number.";
    hasError = true;
  } else {
    phoneError.textContent = "";
  }

  if (message.value.trim() === "") {
    messageError.textContent = "Please enter a message.";
    hasError = true;
  } else {
    messageError.textContent = "";
  }

  if (!hasError) {
    formSuccess.textContent =
      "Thank you! Your inquiry has been sent successfully.";
    contactForm.reset();
  }
});
