let currentLang = "en";

const translations = {
  en: {
    title: "ZÆTHR PLATFORM",
    sub: "Global Delivery & AI Business System",
    founder: "Serbia Launch Phase — Founder: Murat EFE",
    about: "About Us",
    aboutText: "ZÆTHR is a next-generation decentralized logistics and AI-driven global business platform.",
    vision: "Our Vision",
    visionText: "We aim to build the first borderless delivery and AI enterprise infrastructure.",
    serbia: "Serbia Expansion",
    serbiaText: "Serbia is our gateway to the European Union and global expansion strategy.",
    courier: "Courier Network",
    courierText: "A decentralized courier workforce powered by blockchain governance.",
    roadmap: "Roadmap",
    roadmapText: "Phase 1: Serbia launch. Phase 2: EU expansion. Phase 3: Global AI logistics.",
    contact: "Contact",
    contactText: "Contact us at zaethr.io@gmail.com"
  },

  tr: {
    title: "ZÆTHR PLATFORMU",
    sub: "Küresel Teslimat ve Yapay Zeka İş Sistemi",
    founder: "Sırbistan Lansman Aşaması — Kurucu: Murat EFE",
    about: "Hakkımızda",
    aboutText: "ZÆTHR yeni nesil merkeziyetsiz lojistik ve yapay zeka tabanlı küresel iş platformudur.",
    vision: "Vizyonumuz",
    visionText: "Sınırları olmayan teslimat ve yapay zeka altyapısını inşa etmeyi hedefliyoruz.",
    serbia: "Sırbistan Genişleme",
    serbiaText: "Sırbistan Avrupa Birliği ve küresel büyüme stratejimizin kapısıdır.",
    courier: "Kurye Ağı",
    courierText: "Blockchain yönetişimi ile çalışan merkeziyetsiz kurye ağı.",
    roadmap: "Yol Haritası",
    roadmapText: "Faz 1: Sırbistan. Faz 2: AB genişleme. Faz 3: Küresel AI lojistik.",
    contact: "İletişim",
    contactText: "İletişim: zaethr.io@gmail.com"
  },

  sr: {
    title: "ZÆTHR PLATFORMA",
    sub: "Globalni Sistem Dostave i Veštačke Inteligencije",
    founder: "Faza lansiranja u Srbiji — Osnivač: Murat EFE",
    about: "O Nama",
    aboutText: "ZÆTHR je decentralizovana logistička i AI poslovna platforma nove generacije.",
    vision: "Naša Vizija",
    visionText: "Cilj nam je da izgradimo infrastrukturu bez granica za AI i dostavu.",
    serbia: "Ekspanzija Srbija",
    serbiaText: "Srbija je naša kapija ka EU i globalnom rastu.",
    courier: "Kurirska Mreža",
    courierText: "Decentralizovana kurirska mreža upravljana blockchainom.",
    roadmap: "Mapa Puta",
    roadmapText: "Faza 1: Srbija. Faza 2: EU. Faza 3: Globalna AI logistika.",
    contact: "Kontakt",
    contactText: "Kontakt: zaethr.io@gmail.com"
  }
};

function setLang(lang) {
  currentLang = lang;
  document.querySelectorAll("[data-lang]").forEach(el => {
    const key = el.getAttribute("data-lang");
    el.innerText = translations[lang][key];
  });
}
