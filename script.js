const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const expanded = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!expanded));
    navLinks.classList.toggle("open");
  });
}

const revealItems = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("visible"));
}

document.querySelectorAll("form[data-lead-form]").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const status = form.querySelector("[data-form-status]");
    const data = new FormData(form);
    const body = new URLSearchParams(data).toString();
    const isGitHubPages = window.location.hostname.endsWith("github.io");

    const sendToWhatsApp = () => {
      const fields = Array.from(data.entries())
        .filter(([key, value]) => key !== "form-name" && key !== "bot-field" && String(value).trim())
        .map(([key, value]) => `${key}: ${value}`)
        .join("\n");
      const message = encodeURIComponent(`New website inquiry\n${fields}`);
      window.location.href = `https://wa.me/919951515132?text=${message}`;
    };

    if (status) {
      status.textContent = "Sending...";
    }

    if (window.location.protocol === "file:" || isGitHubPages) {
      if (status) {
        status.textContent = "Opening WhatsApp to complete your inquiry.";
      }
      sendToWhatsApp();
      return;
    }

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Form submission failed");
        }
        if (status) {
          status.textContent = "Thank you. Your message has been received.";
        }
        form.reset();
      })
      .catch(() => {
        if (status) {
          status.textContent = "Opening WhatsApp to complete your inquiry.";
        }
        sendToWhatsApp();
      });
  });
});
