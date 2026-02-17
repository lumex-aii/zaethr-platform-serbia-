// ==========================
// ZÆTHR GLOBAL LANGUAGE SYSTEM
// EN / TR / SR AUTO SITE TRANSLATION
// ==========================

// DEFAULT LANGUAGE
let currentLang = localStorage.getItem("lang") || "en";

// TEXT DATABASE
const texts = {
  en: {
    nav_home: "Home",
    nav_about: "About",
    nav_vision: "Vision",
    nav_serbia: "Serbia",
    nav_courier: "Courier",
    nav_roadmap: "Roadmap",
    nav_contact: "Contact",

    hero_title: "ZÆTHR PLATFORM",
    hero_sub: "Global Delivery & AI Business System",
    hero_founder: "Serbia Launch Phase — Founder: Murat EFE",

    about_title: "About ZÆTHR",
    about_text: "ZÆTHR is a global AI-powered logistics and infrastructure startup building the next decentralized delivery empire.",

    vision_title: "Our Vision",
    vision_text: "To build a borderless AI-driven delivery infrastructure beyond corporations and governments.",

    serbia_title: "Serbia Expansion",
    serbia_text: "Serbia is our European launch hub for legal, operational, and AI-driven logistics expansion.",

    courier_title: "Courier Network",
    courier_text: "We build a decentralized courier workforce powered by AI optimization and smart routing.",

    roadmap_title: "Roadmap",
    roadmap_text: "Phase 1: Serbia | Phase 2: Balkans | Phase 3: Europe | Phase 4: Global AI Network",

    contact_title: "Contact & Join",
    contact_text: "Join ZÆTHR or contact founder directly:",
  },

  tr: {
    nav_home: "Ana Sayfa",
    nav_about: "Hakkımızda",
    nav_vision: "Vizyon",
    nav_serbia: "Sırbistan",
    nav_courier: "Kurye",
    nav_roadmap: "Yol Haritası",
    nav_contact: "İletişim",

    hero_title: "ZÆTHR PLATFORMU",
    hero_sub: "Küresel Teslimat & Yapay Zeka İş Sistemi",
    hero_founder: "Sırbistan Lansman Aşaması — Kurucu: Murat EFE",

    about_title: "ZÆTHR Hakkında",
    about_text: "ZÆTHR, yapay zeka destekli küresel lojistik ve altyapı startup'ıdır. Yeni nesil merkeziyetsiz teslimat imparatorluğu kuruyoruz.",

    vision_title: "Vizyonumuz",
    vision_text: "Şirketler ve hükümetler ötesinde sınır tanımayan yapay zeka destekli teslimat altyapısı kurmak.",

    serbia_title: "Sırbistan Genişleme",
    serbia_text: "Sırbistan Avrupa lansman merkezimizdir. Hukuki, operasyonel ve AI lojistik merkezi olarak seçildi.",

    courier_title: "Kurye Ağı",
    courier_text: "Yapay zeka optimizasyonlu merkeziyetsiz kurye iş gücü ağı kuruyoruz.",

    roadmap_title: "Yol Haritası",
    roadmap_text: "Faz 1: Sırbistan | Faz 2: Balkanlar | Faz 3: Avrupa | Faz 4: Küresel AI Ağı",

    contact_title: "İletişim & Katılım",
    contact_text: "ZÆTHR ekibine katıl veya kurucu ile doğrudan iletişime geç:",
  },

  sr: {
    nav_home: "Početna",
    nav_about: "O nama",
    nav_vision: "Vizija",
    nav_serbia: "Srbija",
    nav_courier: "Kurir",
    nav_roadmap: "Plan",
    nav_contact: "Kontakt",

    hero_title: "ZÆTHR PLATFORMA",
    hero_sub: "Globalni sistem dostave i veštačke inteligencije",
    hero_founder: "Faza lansiranja Srbija — Osnivač: Murat EFE",

    about_title: "O ZÆTHR-u",
    about_text: "ZÆTHR je globalni startup za logistiku i AI infrastrukturu koji gradi decentralizovanu imperiju dostave.",

    vision_title: "Naša Vizija",
    vision_text: "Izgraditi globalnu AI infrastrukturu dostave bez granica i korporacija.",

    serbia_title: "Ekspanzija u Srbiji",
    serbia_text: "Srbija je naš evropski lansirni centar za pravnu i operativnu AI logistiku.",

    courier_title: "Kurirska Mreža",
    courier_text: "Gradimo decentralizovanu kurirsku mrežu uz AI optimizaciju ruta.",

    roadmap_title: "Plan Razvoja",
    roadmap_text: "Faza 1: Srbija | Faza 2: Balkan | Faza 3: Evropa | Faza 4: Globalna AI Mreža",

    contact_title: "Kontakt & Pridruži se",
    contact_text: "Pridruži se ZÆTHR timu ili kontaktiraj osnivača direktno:",
  }
};

// APPLY LANGUAGE TO PAGE
function applyLang() {
  document.querySelectorAll("[data-lang]").forEach(el => {
    const key = el.getAttribute("data-lang");
    if (texts[currentLang][key]) {
      el.innerHTML = texts[currentLang][key];
    }
  });

  // Highlight active language button
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.classList.remove("active");
  });
  const activeBtn = document.getElementById("btn-" + currentLang);
  if (activeBtn) activeBtn.classList.add("active");
}

// CHANGE LANGUAGE
function setLang(lang) {
  currentLang = lang;
  localStorage.setItem("lang", lang);
  applyLang();
}

// INIT ON LOAD
document.addEventListener("DOMContentLoaded", applyLang);
