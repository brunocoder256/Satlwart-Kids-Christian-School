"use strict";

document.addEventListener("DOMContentLoaded", () => {

  /* FOOTER YEAR */
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  /* ABOUT PREVIEW */
 SheetsAPI.fetchSheet("About").then(data => {
  if (!data.length) return;

  const aboutEl = document.getElementById("aboutPreview");
  if (!aboutEl) return;

  const text = data[0].who || "";
  aboutEl.textContent = text.slice(0, 220) + "...";
});

  /* ACADEMICS PREVIEW (FIRST 3) */
  SheetsAPI.fetchSheet("Academics").then(data => {
    const container = document.getElementById("academicsPreview");
    if (!container) return;

    container.innerHTML = "";

    data.slice(0, 3).forEach(item => {
      const card = document.createElement("div");
      card.className = "preview-card";
      card.innerHTML = `
        <h3>${item.title || ""}</h3>
        <p>${item.description || ""}</p>
      `;
      container.appendChild(card);
    });
  });

  /* EVENTS PREVIEW (FIRST 3 WITH IMAGES) */
  SheetsAPI.fetchSheet("Events").then(data => {
    const container = document.getElementById("eventsPreview");
    if (!container) return;

    container.innerHTML = "";

    data.slice(0, 3).forEach(event => {
      const card = document.createElement("article");
      card.className = "event-mini";
      card.innerHTML = `
        <img src="${event.image || ""}" alt="${event.title || ""}">
        <div>
          <strong>${event.date || ""}</strong>
          <h4>${event.title || ""}</h4>
        </div>
      `;
      container.appendChild(card);
    });
  });

});
