/* ================================
   ABOUT PAGE LOGIC
================================ */

"use strict";

document.addEventListener("DOMContentLoaded", loadAbout);

async function loadAbout() {
  const data = await SheetsAPI.fetchSheet("About");
  if (!data.length) return;

  // First row = main content
  const main = data[0];

  setText("about-who", main.who);
  setText("about-mission", main.mission);
  setText("about-vision", main.vision);

  const img = document.getElementById("about-image");
  if (img && main.image) img.src = main.image;

  // Values
  const valuesContainer = document.getElementById("about-values");
  valuesContainer.innerHTML = "";

  data.slice(1).forEach(v => {
    if (!v.value_title) return;

    valuesContainer.innerHTML += `
      <div class="value-item">
        <h4>${v.value_title}</h4>
        <p>${v.value_description || ""}</p>
      </div>
    `;
  });
}

function setText(id, text) {
  const el = document.getElementById(id);
  if (el && text) el.textContent = text;
}
