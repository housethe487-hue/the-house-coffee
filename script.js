const menuItems = [
  {
    name: "Espresso",
    ar: "إسبريسو",
    category: "coffee",
    price: "1.50"
  },
  {
    name: "Americano",
    ar: "أمريكانو",
    category: "coffee",
    price: "2.00"
  },
  {
    name: "Black",
    ar: "بلاك",
    category: "coffee",
    price: "2.00"
  },
  {
    name: "V60",
    ar: "V60",
    category: "coffee",
    price: "3.50"
  },
  {
    name: "V60 — Hula",
    ar: "V60 — هولا",
    category: "coffee",
    price: "4.00"
  },
  {
    name: "V60 — Raspberry",
    ar: "V60 — راسبيري",
    category: "coffee",
    price: "5.00"
  },
  {
    name: "Cortado",
    ar: "كورتادو",
    category: "coffee",
    price: "2.00"
  },
  {
    name: "Flat White",
    ar: "فلات وايت",
    category: "coffee",
    price: "2.00"
  },
  {
    name: "Cold Brew",
    ar: "كولد برو",
    category: "coffee",
    price: "3.00"
  },
  {
    name: "Latte",
    ar: "لاتيه",
    category: "coffee",
    price: "3.00"
  },
  {
    name: "Cappuccino",
    ar: "كابتشينو",
    category: "coffee",
    price: "3.00"
  },

  {
    name: "House Latte",
    ar: "هاوس لاتيه",
    category: "signature",
    price: "3.50"
  },
  {
    name: "Berries Latte",
    ar: "بيريز لاتيه",
    category: "signature",
    price: "3.50"
  },
  {
    name: "Sal-Scot Latte",
    ar: "سال-سكوت لاتيه",
    category: "signature",
    price: "3.50"
  },
  {
    name: "Baked Latte",
    ar: "بيكد لاتيه",
    category: "signature",
    price: "3.50"
  },
  {
    name: "Arabian Latte",
    ar: "أرابيان لاتيه",
    category: "signature",
    price: "4.00"
  },

  {
    name: "Arabian Night",
    ar: "أرابيان نايت",
    category: "frappe",
    price: "3.50"
  },
  {
    name: "Toxic",
    ar: "توكسيك",
    category: "frappe",
    price: "3.50"
  },
  {
    name: "Choco Blossom",
    ar: "شوكو بلوسوم",
    category: "frappe",
    price: "3.50"
  },
  {
    name: "Silk Road",
    ar: "سيلك رود",
    category: "frappe",
    price: "3.50"
  },
  {
    name: "Nutz",
    ar: "نتز",
    category: "frappe",
    price: "3.50"
  },

  {
    name: "Mad",
    ar: "ماد",
    category: "matcha",
    price: "4.00"
  },
  {
    name: "Glad",
    ar: "غلاد",
    category: "matcha",
    price: "4.00"
  },
  {
    name: "Meeeh",
    ar: "مييه",
    category: "matcha",
    price: "4.00"
  },
  {
    name: "Cozy",
    ar: "كوزي",
    category: "matcha",
    price: "4.00"
  },
  {
    name: "Frozy",
    ar: "فروزي",
    category: "matcha",
    price: "4.00"
  },

  {
    name: "Wall-Nuts",
    ar: "وول-نتس",
    category: "shake",
    price: "5.00"
  },
  {
    name: "Zesty",
    ar: "زيستي",
    category: "shake",
    price: "5.00"
  },
  {
    name: "Mera-Mieh",
    ar: "ميرا-ميه",
    category: "shake",
    price: "5.00"
  },
  {
    name: "Player",
    ar: "بلاير",
    category: "shake",
    price: "5.00"
  },
  {
    name: "Surprise Me",
    ar: "فاجئني",
    category: "shake",
    price: "5.00"
  },

  {
    name: "Extra Shot",
    ar: "شوت إضافي",
    category: "extras",
    price: "0.50"
  },
  {
    name: "Syrup",
    ar: "سيرب",
    category: "extras",
    price: "0.50"
  },
  {
    name: "Whipped Cream",
    ar: "كريمة مخفوقة",
    category: "extras",
    price: "0.50"
  },
  {
    name: "Still Water",
    ar: "مياه عادية",
    category: "extras",
    price: "0.50"
  },
  {
    name: "Sparkling Water",
    ar: "مياه غازية",
    category: "extras",
    price: "0.50"
  },
  {
    name: "Coconut Milk",
    ar: "حليب جوز الهند",
    category: "extras",
    price: "0.75"
  },
  {
    name: "Almond Milk",
    ar: "حليب اللوز",
    category: "extras",
    price: "0.75"
  },
  {
    name: "Lactose Free",
    ar: "خالي من اللاكتوز",
    category: "extras",
    price: "0.50"
  }
];

const order = [
  "coffee",
  "signature",
  "frappe",
  "matcha",
  "shake",
  "extras"
];

const meta = {
  en: {
    coffee: [
      "Coffee Classics",
      "Espresso, pour-over and milk-based essentials."
    ],
    signature: [
      "House Signatures",
      "Our distinctive latte collection."
    ],
    frappe: [
      "Frappe",
      "Cold, blended House creations."
    ],
    matcha: [
      "Matcha Moods",
      "Five different shades of green."
    ],
    shake: [
      "Milkshakes",
      "Rich, playful and made to linger."
    ],
    extras: [
      "Extras",
      "Shots, syrups, water and milk alternatives."
    ]
  },

  ar: {
    coffee: [
      "كلاسيكيات القهوة",
      "إسبريسو، قهوة مقطرة ومشروبات الحليب."
    ],
    signature: [
      "مشروبات ذا هاوس",
      "مجموعة اللاتيه المميزة لدينا."
    ],
    frappe: [
      "فرابيه",
      "خلطات ذا هاوس الباردة."
    ],
    matcha: [
      "مزاج الماتشا",
      "خمس نكهات ماتشا مختلفة."
    ],
    shake: [
      "ميلك شيك",
      "غني، ممتع ومصمم للاستمتاع."
    ],
    extras: [
      "الإضافات",
      "شوتات، سيرب، مياه وبدائل الحليب."
    ]
  }
};

const $ = selector => document.querySelector(selector);

const $$ = selector => [
  ...document.querySelectorAll(selector)
];

const body = document.body;
const topbar = $("#topbar");
const progress = $(".progress span");
const loader = $(".loader");
const menuButton = $(".menu-button");
const mobilePanel = $(".mobile-panel");
const langButton = $(".lang");
const menuList = $("#menu-list");
const search = $("#menu-search");
const resultCount = $("#result-count");
const clearSearch = $("#clear-search");
const film = $(".house-film");
const filmFrame = $(".film-frame");
const filmPlay = $(".film-play");
const soundToggle = $(".sound-toggle");
const pointerLight = $(".pointer-light");

let language =
  localStorage.getItem("house-flagship-language") === "ar"
    ? "ar"
    : "en";

let activeCategory = "all";
let query = "";

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function setLanguage(lang) {
  language = lang;

  localStorage.setItem(
    "house-flagship-language",
    lang
  );

  document.documentElement.lang = lang;

  document.documentElement.dir =
    lang === "ar" ? "rtl" : "ltr";

  body.classList.toggle(
    "is-ar",
    lang === "ar"
  );

  if (langButton) {
    langButton.textContent =
      lang === "ar" ? "EN" : "AR";
  }

  $$("[data-en]").forEach(element => {
    element.textContent =
      element.dataset[lang];
  });

  if (search) {
    search.placeholder =
      search.dataset[
        lang === "ar"
          ? "placeholderAr"
          : "placeholderEn"
      ];
  }

  renderMenu();

  const currentMood =
    document
      .querySelector(".mood.active")
      ?.dataset.mood ||
    getJordanMood();

  updateMoodText(currentMood);
}

function renderMenu() {
  const categories =
    activeCategory === "all"
      ? order
      : [activeCategory];

  let visible = 0;

  const html = categories
    .map((category, categoryIndex) => {
      const items = menuItems.filter(
        item =>
          item.category === category &&
          `${item.name} ${item.ar}`
            .toLowerCase()
            .includes(query.toLowerCase())
      );

      if (!items.length) {
        return "";
      }

      visible += items.length;

      const categoryMeta =
        meta[language][category];

      return `
        <section
          class="category-block"
          style="--c:${categoryIndex}"
        >
          <header class="category-header">
            <span>
              ${String(
                order.indexOf(category) + 1
              ).padStart(2, "0")}
            </span>

            <div>
              <h3>
                ${escapeHtml(categoryMeta[0])}
              </h3>

              <p>
                ${escapeHtml(categoryMeta[1])}
              </p>
            </div>
          </header>

          ${items
            .map(
              (item, itemIndex) => `
                <article
                  class="menu-item"
                  style="--i:${itemIndex}"
                >
                  <span>
                    ${String(
                      itemIndex + 1
                    ).padStart(2, "0")}
                  </span>

                  <h4>
                    ${escapeHtml(
                      language === "ar"
                        ? item.ar
                        : item.name
                    )}
                  </h4>

                  <span class="leader"></span>

                  <strong class="price">
                    ${item.price}
                    <small>JD</small>
                  </strong>
                </article>
              `
            )
            .join("")}
        </section>
      `;
    })
    .join("");

  if (menuList) {
    menuList.innerHTML =
      html ||
      `
        <div class="menu-empty">
          <strong>0</strong>

          <h3>
            ${
              language === "ar"
                ? "لا توجد نتائج"
                : "No menu matches"
            }
          </h3>

          <p>
            ${
              language === "ar"
                ? "جرّب اسماً آخر أو امسح البحث."
                : "Try another name or clear the search."
            }
          </p>
        </div>
      `;
  }

  if (resultCount) {
    resultCount.textContent =
      language === "ar"
        ? `${visible} عنصر`
        : `${visible} ${
            visible === 1
              ? "item"
              : "items"
          }`;
  }

  if (clearSearch) {
    clearSearch.hidden = !query;
  }
}

$$(".tab").forEach(tab => {
  tab.addEventListener("click", () => {
    $$(".tab").forEach(item => {
      item.classList.remove("active");

      item.setAttribute(
        "aria-selected",
        "false"
      );
    });

    tab.classList.add("active");

    tab.setAttribute(
      "aria-selected",
      "true"
    );

    activeCategory =
      tab.dataset.category;

    renderMenu();
  });
});

if (search) {
  search.addEventListener("input", () => {
    query = search.value.trim();
    renderMenu();
  });
}

if (clearSearch) {
  clearSearch.addEventListener(
    "click",
    () => {
      search.value = "";
      query = "";

      renderMenu();
      search.focus();
    }
  );
}

function toggleNav(force) {
  const open =
    typeof force === "boolean"
      ? force
      : !body.classList.contains(
          "nav-open"
        );

  body.classList.toggle(
    "nav-open",
    open
  );

  if (menuButton) {
    menuButton.classList.toggle(
      "active",
      open
    );

    menuButton.setAttribute(
      "aria-expanded",
      String(open)
    );
  }

  if (mobilePanel) {
    mobilePanel.classList.toggle(
      "open",
      open
    );

    mobilePanel.setAttribute(
      "aria-hidden",
      String(!open)
    );
  }
}

if (menuButton) {
  menuButton.addEventListener(
    "click",
    () => toggleNav()
  );
}

$$(".mobile-panel a").forEach(link => {
  link.addEventListener("click", () => {
    toggleNav(false);
  });
});

document.addEventListener(
  "keydown",
  event => {
    if (event.key === "Escape") {
      toggleNav(false);
    }
  }
);

if (langButton) {
  langButton.addEventListener(
    "click",
    () => {
      setLanguage(
        language === "en"
          ? "ar"
          : "en"
      );
    }
  );
}

/* مودات الموقع */

const moods = {
  en: {
    morning:
      "Quiet light. First pour. Clear mind.",

    focus:
      "A table, steady energy and room to think.",

    night:
      "Warm lights. Slow time. One more conversation."
  },

  ar: {
    morning:
      "ضوء هادئ، أول كوب، وذهن صافٍ.",

    focus:
      "طاولة، طاقة ثابتة، ومساحة للتفكير.",

    night:
      "إضاءة دافئة، وقت أبطأ، وحوار إضافي."
  }
};

function updateMoodText(mood) {
  const caption =
    $("#mood-caption");

  if (
    caption &&
    moods[language] &&
    moods[language][mood]
  ) {
    caption.textContent =
      moods[language][mood];
  }
}

function activateMood(mood) {
  $$(".mood").forEach(button => {
    const active =
      button.dataset.mood === mood;

    button.classList.toggle(
      "active",
      active
    );

    button.setAttribute(
      "aria-selected",
      active ? "true" : "false"
    );
  });

  body.dataset.mood = mood;

  updateMoodText(mood);
}

/* تحديد المود حسب توقيت الأردن */

function getJordanHour() {
  const parts =
    new Intl.DateTimeFormat(
      "en-US",
      {
        timeZone: "Asia/Amman",
        hour: "2-digit",
        hourCycle: "h23"
      }
    ).formatToParts(new Date());

  const hourPart =
    parts.find(
      part => part.type === "hour"
    );

  return Number(
    hourPart?.value ?? 0
  );
}

function getJordanMood() {
  const hour = getJordanHour();

  // من 8 صباحًا إلى قبل 2 ظهرًا
  if (hour >= 8 && hour < 14) {
    return "morning";
  }

  // من 2 ظهرًا إلى قبل 10 مساءً
  if (hour >= 14 && hour < 22) {
    return "focus";
  }

  // من 10 مساءً إلى قبل 8 صباحًا
  return "night";
}

function applyJordanMood() {
  const jordanMood =
    getJordanMood();

  const activeMood =
    document
      .querySelector(".mood.active")
      ?.dataset.mood;

  if (activeMood !== jordanMood) {
    activateMood(jordanMood);
  }
}

/* الضغط اليدوي على أزرار المود */

$$(".mood").forEach(button => {
  button.addEventListener(
    "click",
    () => {
      activateMood(
        button.dataset.mood
      );
    }
  );
});

/* تشغيل المود تلقائيًا */

applyJordanMood();

/* إعادة فحص توقيت الأردن كل دقيقة */

setInterval(
  applyJordanMood,
  60 * 1000
);

/* إعادة ضبط المود عند الرجوع إلى الصفحة */

document.addEventListener(
  "visibilitychange",
  () => {
    if (!document.hidden) {
      applyJordanMood();
    }
  }
);

/* الفيديو */

if (film && filmFrame) {
  film.addEventListener(
    "loadeddata",
    () => {
      filmFrame.classList.add(
        "ready"
      );
    }
  );

  film.addEventListener(
    "canplay",
    () => {
      filmFrame.classList.add(
        "ready"
      );
    }
  );
}

if (
  filmPlay &&
  film &&
  filmFrame
) {
  filmPlay.addEventListener(
    "click",
    async () => {
      try {
        if (film.paused) {
          await film.play();

          filmFrame.classList.add(
            "playing"
          );
        } else {
          film.pause();

          filmFrame.classList.remove(
            "playing"
          );
        }
      } catch {
        filmFrame.classList.remove(
          "playing"
        );
      }
    }
  );
}

if (film && filmFrame) {
  film.addEventListener(
    "click",
    () => {
      if (!film.paused) {
        film.pause();

        filmFrame.classList.remove(
          "playing"
        );
      }
    }
  );
}

if (soundToggle && film) {
  soundToggle.addEventListener(
    "click",
    () => {
      film.muted = !film.muted;

      soundToggle.classList.toggle(
        "on",
        !film.muted
      );

      const soundText =
        soundToggle.querySelector("b");

      if (soundText) {
        soundText.textContent =
          language === "ar"
            ? film.muted
              ? "الصوت مغلق"
              : "الصوت يعمل"
            : film.muted
              ? "Sound off"
              : "Sound on";
      }
    }
  );
}

/* تأثير ظهور العناصر */

if (
  "IntersectionObserver" in window
) {
  const revealObserver =
    new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (
            entry.isIntersecting
          ) {
            entry.target.classList.add(
              "visible"
            );

            revealObserver.unobserve(
              entry.target
            );
          }
        });
      },
      {
        threshold: 0.12
      }
    );

  $$(".reveal").forEach(element => {
    revealObserver.observe(element);
  });
} else {
  $$(".reveal").forEach(element => {
    element.classList.add("visible");
  });
}

/* شريط التمرير */

window.addEventListener(
  "scroll",
  () => {
    if (topbar) {
      topbar.classList.toggle(
        "scrolled",
        window.scrollY > 30
      );
    }

    const max =
      document.documentElement
        .scrollHeight -
      window.innerHeight;

    if (progress) {
      progress.style.width =
        `${
          max
            ? (window.scrollY / max) *
              100
            : 0
        }%`;
    }
  },
  {
    passive: true
  }
);

/* تأثيرات الماوس */

if (
  window
    .matchMedia(
      "(hover:hover) and (pointer:fine)"
    )
    .matches
) {
  window.addEventListener(
    "pointermove",
    event => {
      if (!pointerLight) return;

      pointerLight.style.left =
        `${event.clientX}px`;

      pointerLight.style.top =
        `${event.clientY}px`;

      pointerLight.style.opacity =
        "1";
    }
  );

  const tilt =
    $("[data-tilt]");

  if (tilt) {
    tilt.addEventListener(
      "pointermove",
      event => {
        const rect =
          tilt.getBoundingClientRect();

        const x =
          (event.clientX -
            rect.left) /
            rect.width -
          0.5;

        const y =
          (event.clientY -
            rect.top) /
            rect.height -
          0.5;

        tilt.style.transform =
          `rotateY(${x * 7}deg) ` +
          `rotateX(${-y * 6}deg)`;
      }
    );

    tilt.addEventListener(
      "pointerleave",
      () => {
        tilt.style.transform = "";
      }
    );
  }

  $$(".magnetic").forEach(
    element => {
      element.addEventListener(
        "pointermove",
        event => {
          const rect =
            element.getBoundingClientRect();

          element.style.transform =
            `translate(` +
            `${
              (
                event.clientX -
                rect.left -
                rect.width / 2
              ) * 0.08
            }px,` +
            `${
              (
                event.clientY -
                rect.top -
                rect.height / 2
              ) * 0.12
            }px)`;
        }
      );

      element.addEventListener(
        "pointerleave",
        () => {
          element.style.transform =
            "";
        }
      );
    }
  );
}

/* إخفاء شاشة التحميل */

window.addEventListener(
  "load",
  () => {
    setTimeout(() => {
      if (loader) {
        loader.classList.add(
          "hide"
        );
      }
    }, 700);
  }
);

setTimeout(() => {
  if (loader) {
    loader.classList.add("hide");
  }
}, 2500);

/* السنة الحالية */

const yearElement = $("#year");

if (yearElement) {
  yearElement.textContent =
    new Date().getFullYear();
}

/* تشغيل الموقع */

setLanguage(language);
applyJordanMood();
/* =========================================
   BOTTOM NAVIGATION
========================================= */

(() => {
  const bottomNav = document.querySelector(".mobile-bottom-nav");

  if (!bottomNav) return;

  const navItems = bottomNav.querySelectorAll(".bottom-nav-item");

  const sections = [
    document.getElementById("home"),
    document.getElementById("menu"),
    document.getElementById("visit")
  ].filter(Boolean);

  function setActiveSection(sectionId) {
    navItems.forEach((item) => {
      const isActive = item.dataset.section === sectionId;

      item.classList.toggle("active", isActive);

      if (isActive) {
        item.setAttribute("aria-current", "page");
      } else {
        item.removeAttribute("aria-current");
      }
    });
  }

  function updateActiveSection() {
    const scrollPosition =
      window.scrollY + window.innerHeight * 0.45;

    let currentSection = "home";

    sections.forEach((section) => {
      if (scrollPosition >= section.offsetTop) {
        currentSection = section.id;
      }
    });

    setActiveSection(currentSection);
  }

  navItems.forEach((item) => {
    item.addEventListener("click", () => {
      setActiveSection(item.dataset.section);
    });
  });

  window.addEventListener("scroll", updateActiveSection, {
    passive: true
  });

  window.addEventListener("resize", updateActiveSection);

  updateActiveSection();
})();
