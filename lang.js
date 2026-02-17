const translations = {
  en: {
    nav_home: "Home",
    nav_about: "About",
    nav_contact: "Contact",
    nav_courier: "Courier",
    nav_roadmap: "Roadmap",
    nav_serbia: "Serbia",
    nav_vision: "Vision"
  },
  tr: {
    nav_home: "Ana Sayfa",
    nav_about: "Hakkımızda",
    nav_contact: "İletişim",
    nav_courier: "Kurye",
    nav_roadmap: "Yol Haritası",
    nav_serbia: "Sırbistan",
    nav_vision: "Vizyon"
  },
  sr: {
    nav_home: "Početna",
    nav_about: "O nama",
    nav_contact: "Kontakt",
    nav_courier: "Kurir",
    nav_roadmap: "Plan puta",
    nav_serbia: "Srbija",
    nav_vision: "Vizija"
  }
};

function setLang(lang) {
  localStorage.setItem("siteLang", lang);
  applyLang(lang);
}

function applyLang(lang) {
  document.querySelectorAll("[data-lang]").forEach(el => {
    const key = el.getAttribute("data-lang");
    if (translations[lang][key]) {
      el.innerText = translations[lang][key];
    }
  });

  document.querySelectorAll(".lang-switch a").forEach(a => a.classList.remove("active"));
  const btn = document.getElementById("btn-" + lang);
  if (btn) btn.classList.add("active");
}

document.addEventListener("DOMContentLoaded", () => {
  const defaultLang = localStorage.getItem("siteLang") || "en";
  applyLang(defaultLang);
});
