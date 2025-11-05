<<<<<<< HEAD
// ======= MENU MOBILE =======
=======
>>>>>>> 084ff3c6c091d94dd00e11a4e3512d6419ff3b49
const navToggle = document.getElementById("nav-toggle");
const navMenu = document.getElementById("nav-menu");

navToggle.addEventListener("click", () => {
<<<<<<< HEAD
  const expanded = navToggle.getAttribute("aria-expanded") === "true" || false;
  navToggle.setAttribute("aria-expanded", !expanded);
  navMenu.classList.toggle("active");
  navToggle.classList.toggle("active");
});
 
// Fechar o menu ao clicar em um link
document.querySelectorAll(".nav-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    navToggle.classList.remove("active");
    navToggle.setAttribute("aria-expanded", false);
  });
});

// ======= SCROLL SUAVE =======
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href");
    if (targetId.length > 1) {
      e.preventDefault();
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80, // compensar o header
          behavior: "smooth",
        });
      }
    }
  });
});

// ======= ANIMAÇÃO DE SCROLL (FADE IN) =======
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.2 }
=======
    const expanded = navToggle.getAttribute("aria-expanded") === "true" || false;
    navToggle.setAttribute("aria-expanded", !expanded);
    navMenu.classList.toggle("active");
    navToggle.classList.toggle("active");
});

document.querySelectorAll(".nav-menu a").forEach((link) => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
        navToggle.classList.remove("active");
        navToggle.setAttribute("aria-expanded", false);
    });
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        const targetId = this.getAttribute("href");
        if (targetId.length > 1) {
            e.preventDefault();
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, //compensar o header
                    behavior: "smooth",
                });
            }
        }
    });
});

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, {
        threshold: 0.2
    }
>>>>>>> 084ff3c6c091d94dd00e11a4e3512d6419ff3b49
);

document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));

<<<<<<< HEAD
// ======= BOTÃO WHATSAPP ANIMAÇÃO =======
const whatsappButton = document.querySelector(".whatsapp-float");

if (whatsappButton) {
  setInterval(() => {
    whatsappButton.classList.toggle("pulse");
  }, 3000);
}

// ======= CABEÇALHO FIXO AO ROLAR =======
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
=======
const whatsappButton = document.querySelector(".whatsapp-float");

if (whatsappButton) {
    setInterval(() => {
        whatsappButton.classList.toggle("pulse");
    }, 3000);
}

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});
>>>>>>> 084ff3c6c091d94dd00e11a4e3512d6419ff3b49
