// Mobile nav toggle
const toggle = document.querySelector(".nav-toggle");
const links = document.getElementById("navLinks");

toggle?.addEventListener("click", () => {
  const isOpen = links.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(isOpen));
});

// Close menu after clicking a link (mobile)
links?.querySelectorAll("a").forEach(a => {
  a.addEventListener("click", () => links.classList.remove("open"));
});

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Contact form (placeholder - shows success message)
// Swap this later with EmailJS, Formspree, or your backend.
const form = document.getElementById("contact-form");
const statusEl = document.getElementById("formStatus");

form?.addEventListener("submit", (e) => {
  e.preventDefault();
  statusEl.textContent = "Thanks! Your message is ready to send — connect EmailJS to deliver it.";
  form.reset();
});
