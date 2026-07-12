const menuItems = [
  { name: "Espresso", ar: "إسبريسو", category: "coffee", price: "1.50", desc: "Concentrated, bold and clean.", arDesc: "مركز، قوي ومتوازن." },
  { name: "Americano", ar: "أمريكانو", category: "coffee", price: "2.00", desc: "Espresso lengthened with hot water.", arDesc: "إسبريسو مع ماء ساخن بطعم ناعم." },
  { name: "Cortado", ar: "كورتادو", category: "coffee", price: "2.00", desc: "Balanced espresso and silky milk.", arDesc: "توازن بين الإسبريسو والحليب الناعم." },
  { name: "Flat White", ar: "فلات وايت", category: "coffee", price: "2.00", desc: "Velvety microfoam, strong coffee character.", arDesc: "رغوة مخملية ونكهة قهوة واضحة." },
  { name: "V60", ar: "V60", category: "coffee", price: "3.50", desc: "Hand-poured to reveal delicate notes.", arDesc: "تحضير يدوي يُظهر تفاصيل النكهة." },
  { name: "Cold Brew", ar: "كولد برو", category: "coffee", price: "3.00", desc: "Slow-steeped, smooth and refreshing.", arDesc: "منقوع ببطء، ناعم ومنعش." },
  { name: "Spanish Latte", ar: "سبانش لاتيه", category: "signature", price: "3.50", desc: "Creamy sweetness with a bold espresso base.", arDesc: "حلاوة كريمية مع قاعدة إسبريسو قوية.", badge: "POPULAR" },
  { name: "Arabian Latte", ar: "أرابيان لاتيه", category: "signature", price: "4.00", desc: "Aromatic house blend with a regional twist.", arDesc: "خلطة عطرية بلمسة عربية خاصة.", badge: "HOUSE PICK" },
  { name: "Berries Latte", ar: "بيري لاتيه", category: "signature", price: "3.50", desc: "Bright berry notes meet smooth milk.", arDesc: "نكهة توت منعشة مع حليب ناعم." },
  { name: "Arabian Night", ar: "أرابيان نايت", category: "signature", price: "3.50", desc: "A rich, chilled signature made for late nights.", arDesc: "مشروب بارد غني صُمم للسهرات." },
  { name: "Silk Road", ar: "سيلك رود", category: "signature", price: "3.50", desc: "Smooth, layered and delicately spiced.", arDesc: "ناعم، متعدد الطبقات وبتوابل خفيفة." },
  { name: "Mad Matcha", ar: "ماد ماتشا", category: "matcha", price: "4.00", desc: "Earthy matcha with a confident finish.", arDesc: "ماتشا غنية بنهاية قوية." },
  { name: "Cozy Matcha", ar: "كوزي ماتشا", category: "matcha", price: "4.00", desc: "Soft, creamy and comfortingly smooth.", arDesc: "ناعمة، كريمية ومريحة." },
  { name: "Frozy Matcha", ar: "فروزي ماتشا", category: "matcha", price: "4.00", desc: "A frozen matcha made for warmer days.", arDesc: "ماتشا مثلجة مثالية للأيام الدافئة." },
  { name: "Wall-Nuts", ar: "وول نتس", category: "shake", price: "5.00", desc: "Nutty, creamy and deeply satisfying.", arDesc: "نكهة مكسرات كريمية وغنية." },
  { name: "Zesty", ar: "زيستي", category: "shake", price: "5.00", desc: "Fresh citrus energy in a creamy shake.", arDesc: "انتعاش حمضيات داخل ميلك شيك كريمي." },
  { name: "Surprise Me", ar: "فاجئني", category: "shake", price: "5.00", desc: "Let the barista choose your next favorite.", arDesc: "دع الباريستا يختار مشروبك المفضل القادم.", badge: "ADVENTUROUS" }
];

const body = document.body;
const root = document.documentElement;
const header = document.getElementById("site-header");
const menuList = document.getElementById("menu-list");
const tabs = document.querySelectorAll(".menu-tab");
const langButton = document.querySelector(".lang-toggle");
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".site-nav");
const videoShell = document.querySelector(".video-shell");
const video = document.querySelector(".experience-video");
const videoButton = document.querySelector(".video-toggle");
const progressBar = document.querySelector(".scroll-progress span");
const glow = document.querySelector(".cursor-glow");
const coarsePointer = window.matchMedia("(hover: none) and (pointer: coarse)");
const mobileViewport = window.matchMedia("(max-width: 720px)");
let language = "en";
let scrollTicking = false;

function renderMenu(category = "all") {
  const isArabic = language === "ar";
  const filtered = category === "all" ? menuItems : menuItems.filter(item => item.category === category);
  const delayStep = mobileViewport.matches ? 22 : 35;

  menuList.innerHTML = filtered.map((item, index) => `
    <article class="menu-item-card" style="animation-delay:${Math.min(index * delayStep, 220)}ms">
      <div>
        <h3>${isArabic ? item.ar : item.name}${item.badge ? `<span class="menu-badge">${item.badge}</span>` : ""}</h3>
        <p>${isArabic ? item.arDesc : item.desc}</p>
      </div>
      <strong>${item.price} <small>JD</small></strong>
    </article>
  `).join("");
}

renderMenu();

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(item => {
      item.classList.remove("active");
      item.setAttribute("aria-selected", "false");
    });
    tab.classList.add("active");
    tab.setAttribute("aria-selected", "true");
    renderMenu(tab.dataset.category);
    tab.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  });
});

function updateLanguage() {
  const isArabic = language === "ar";
  root.lang = language;
  root.dir = isArabic ? "rtl" : "ltr";
  body.classList.toggle("is-arabic", isArabic);
  langButton.textContent = isArabic ? "EN" : "AR";

  document.querySelectorAll("[data-en][data-ar]").forEach(el => {
    el.textContent = el.dataset[language];
  });

  const activeCategory = document.querySelector(".menu-tab.active")?.dataset.category || "all";
  renderMenu(activeCategory);
}

langButton?.addEventListener("click", () => {
  language = language === "en" ? "ar" : "en";
  updateLanguage();
});

function setNavigation(open) {
  menuToggle.classList.toggle("active", open);
  nav.classList.toggle("open", open);
  body.classList.toggle("nav-open", open);
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
}

menuToggle?.addEventListener("click", () => {
  setNavigation(!menuToggle.classList.contains("active"));
});

nav?.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => setNavigation(false));
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape" && body.classList.contains("nav-open")) {
    setNavigation(false);
    menuToggle.focus();
  }
});

function updateScrollUI() {
  const y = window.scrollY;
  header.classList.toggle("scrolled", y > 24);
  const max = root.scrollHeight - root.clientHeight;
  progressBar.style.width = `${max > 0 ? Math.min((y / max) * 100, 100) : 0}%`;
  scrollTicking = false;
}

function handleScroll() {
  if (!scrollTicking) {
    window.requestAnimationFrame(updateScrollUI);
    scrollTicking = true;
  }
}

window.addEventListener("scroll", handleScroll, { passive: true });
updateScrollUI();

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: mobileViewport.matches ? .07 : .12,
  rootMargin: mobileViewport.matches ? "0px 0px -6% 0px" : "0px"
});

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

if (video && videoButton && videoShell) {
  const markVideoReady = () => videoShell.classList.add("video-ready");
  if (video.readyState >= 2) markVideoReady();
  video.addEventListener("loadeddata", markVideoReady, { once: true });
  video.addEventListener("canplay", markVideoReady, { once: true });

  videoButton.addEventListener("click", async () => {
    try {
      if (video.paused) {
        video.muted = false;
        await video.play();
        videoShell.classList.add("playing");
      }
    } catch {
      video.setAttribute("controls", "controls");
    }
  });

  video.addEventListener("pause", () => videoShell.classList.remove("playing"));
  video.addEventListener("ended", () => videoShell.classList.remove("playing"));
  video.addEventListener("click", () => {
    if (!video.paused) video.pause();
  });

  const markVideoUnavailable = () => videoShell.classList.add("video-unavailable");
  video.addEventListener("error", markVideoUnavailable);
  video.querySelector("source")?.addEventListener("error", markVideoUnavailable);
}

if (!coarsePointer.matches && glow) {
  window.addEventListener("pointermove", event => {
    glow.style.left = `${event.clientX}px`;
    glow.style.top = `${event.clientY}px`;
    glow.style.opacity = "1";
  }, { passive: true });
}

function setViewportHeight() {
  const height = window.visualViewport?.height || window.innerHeight;
  root.style.setProperty("--app-height", `${height}px`);
}

setViewportHeight();
window.addEventListener("resize", setViewportHeight, { passive: true });
window.visualViewport?.addEventListener("resize", setViewportHeight, { passive: true });

window.addEventListener("load", () => {
  window.setTimeout(() => document.querySelector(".preloader")?.classList.add("hide"), 360);
});

document.getElementById("year").textContent = new Date().getFullYear();
