let currentIndex = 0;

const stage = document.getElementById("slideStage");
const nav = document.getElementById("slideNav");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const currentSlide = document.getElementById("currentSlide");
const totalSlides = document.getElementById("totalSlides");
const progressBar = document.getElementById("progressBar");
const deckTitleSide = document.getElementById("deckTitleSide");
const preparedBy = document.getElementById("preparedBy");
const reportDate = document.getElementById("reportDate");
const toggleSidebar = document.getElementById("toggleSidebar");
const sidebar = document.getElementById("sidebar");

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function badge(status, tone = "neutral") {
  return `<span class="badge ${escapeHtml(tone)}">${escapeHtml(status)}</span>`;
}

function renderList(items = []) {
  return `<ul class="clean-list">${items.map(item => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`;
}

function renderHero(slide) {
  return `
    <article class="slide hero-slide">
      <div class="hero-content">
        <p class="eyebrow">${escapeHtml(slide.eyebrow)}</p>
        <h2>${escapeHtml(slide.title)}</h2>
        <p class="hero-subtitle">${escapeHtml(slide.subtitle)}</p>
        <div class="chip-row">${(slide.chips || []).map(chip => `<span>${escapeHtml(chip)}</span>`).join("")}</div>
      </div>
      <div class="hero-visual">
        <div class="orb orb-one"></div>
        <div class="orb orb-two"></div>
        <div class="signal-card">
          <span class="signal-dot"></span>
          <strong>${escapeHtml(deckData.company || "IT Operations")}</strong>
          <small>${escapeHtml(deckData.reportDate || "")}</small>
        </div>
      </div>
    </article>`;
}

function renderSummary(slide) {
  return `
    <article class="slide">
      ${renderHeader(slide)}
      <div class="stat-grid">
        ${(slide.stats || []).map(stat => `
          <div class="stat-card ${escapeHtml(stat.tone || "neutral")}">
            <strong>${escapeHtml(stat.value)}</strong>
            <span>${escapeHtml(stat.label)}</span>
          </div>`).join("")}
      </div>
      <div class="content-panel">
        <h3>Key Highlights</h3>
        ${renderList(slide.highlights)}
      </div>
    </article>`;
}

function renderCards(slide) {
  return `
    <article class="slide">
      ${renderHeader(slide)}
      <div class="card-grid ${slide.cards?.length === 1 ? "single" : ""}">
        ${(slide.cards || []).map(card => `
          <section class="info-card">
            <div class="card-head">
              <h3>${escapeHtml(card.title)}</h3>
              ${badge(card.status, card.tone)}
            </div>
            ${renderList(card.details)}
          </section>`).join("")}
      </div>
    </article>`;
}

function renderTable(slide) {
  return `
    <article class="slide">
      ${renderHeader(slide)}
      <div class="table-wrap">
        <table>
          <thead><tr>${(slide.columns || []).map(col => `<th>${escapeHtml(col)}</th>`).join("")}</tr></thead>
          <tbody>
            ${(slide.rows || []).map(row => `<tr>${row.map(cell => `<td>${escapeHtml(cell)}</td>`).join("")}</tr>`).join("")}
          </tbody>
        </table>
      </div>
    </article>`;
}

function renderTimeline(slide) {
  return `
    <article class="slide">
      ${renderHeader(slide)}
      <div class="timeline">
        ${(slide.items || []).map(item => `
          <section class="timeline-item">
            <div class="timeline-dot"></div>
            <div>
              <div class="timeline-title-row">
                <h3>${escapeHtml(item.title)}</h3>
                ${badge(item.tag, "info")}
              </div>
              <p>${escapeHtml(item.details)}</p>
            </div>
          </section>`).join("")}
      </div>
    </article>`;
}

function renderNextActions(slide) {
  return `
    <article class="slide">
      ${renderHeader(slide)}
      <div class="action-grid">
        ${(slide.actions || []).map(action => `
          <section class="action-card">
            <div>
              <h3>${escapeHtml(action.title)}</h3>
              <p><strong>Owner:</strong> ${escapeHtml(action.owner)}</p>
              <p><strong>Target:</strong> ${escapeHtml(action.due)}</p>
            </div>
            ${badge(action.status, action.status === "Pending" ? "warning" : action.status === "Monitoring" ? "info" : "success")}
          </section>`).join("")}
      </div>
    </article>`;
}

function renderClosing(slide) {
  return `
    <article class="slide closing-slide">
      <p class="eyebrow">Report Closing</p>
      <h2>${escapeHtml(slide.title)}</h2>
      <p class="hero-subtitle">${escapeHtml(slide.subtitle)}</p>
      <div class="content-panel compact">
        ${renderList(slide.notes)}
      </div>
    </article>`;
}

function renderHeader(slide) {
  return `
    <header class="slide-header">
      <p class="eyebrow">${escapeHtml(slide.label)}</p>
      <h2>${escapeHtml(slide.title)}</h2>
      <p>${escapeHtml(slide.subtitle)}</p>
    </header>`;
}

function renderSlide() {
  const slide = deckData.slides[currentIndex];
  const renderers = {
    hero: renderHero,
    summary: renderSummary,
    cards: renderCards,
    table: renderTable,
    timeline: renderTimeline,
    nextActions: renderNextActions,
    closing: renderClosing
  };

  stage.innerHTML = (renderers[slide.type] || renderCards)(slide);
  currentSlide.textContent = String(currentIndex + 1);
  totalSlides.textContent = String(deckData.slides.length);
  progressBar.style.width = `${((currentIndex + 1) / deckData.slides.length) * 100}%`;
  prevBtn.disabled = currentIndex === 0;
  nextBtn.disabled = currentIndex === deckData.slides.length - 1;

  Array.from(nav.children).forEach((button, index) => {
    button.classList.toggle("active", index === currentIndex);
  });
}

function buildNav() {
  deckTitleSide.textContent = deckData.title;
  preparedBy.textContent = deckData.preparedBy;
  reportDate.textContent = deckData.reportDate;
  totalSlides.textContent = String(deckData.slides.length);

  nav.innerHTML = deckData.slides.map((slide, index) => `
    <button type="button" data-slide="${index}">
      <span>${String(index + 1).padStart(2, "0")}</span>
      ${escapeHtml(slide.label || slide.title)}
    </button>`).join("");

  nav.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-slide]");
    if (!button) return;
    currentIndex = Number(button.dataset.slide);
    renderSlide();
  });
}

prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) currentIndex -= 1;
  renderSlide();
});

nextBtn.addEventListener("click", () => {
  if (currentIndex < deckData.slides.length - 1) currentIndex += 1;
  renderSlide();
});

document.addEventListener("keydown", (event) => {
  if (["ArrowRight", "PageDown", " "].includes(event.key)) {
    if (currentIndex < deckData.slides.length - 1) currentIndex += 1;
    renderSlide();
  }
  if (["ArrowLeft", "PageUp"].includes(event.key)) {
    if (currentIndex > 0) currentIndex -= 1;
    renderSlide();
  }
});

toggleSidebar.addEventListener("click", () => {
  sidebar.classList.toggle("hidden");
});

buildNav();
renderSlide();
