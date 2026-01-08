"use strict";

/* ================================
   ACADEMICS PAGE LOGIC
================================ */

/* ---------- ACADEMICS OVERVIEW ---------- */
SheetsAPI.fetchSheet("Academics").then(rows => {
  const container = document.getElementById("academics-overview");
  if (!container || !rows.length) return;

  rows.forEach(row => {
    container.innerHTML += `
      <div>
        <h3>${row.title || ""}</h3>
        <p>${row.description || ""}</p>
      </div>
    `;
  });
});

/* ---------- CLASSES OFFERED ---------- */
SheetsAPI.fetchSheet("Classes").then(rows => {
  const container = document.getElementById("classes-list");
  if (!container || !rows.length) return;

  rows.forEach(row => {
    container.innerHTML += `
      <div class="card">
        <h4>${row.class || ""}</h4>
        <p>${row.description || ""}</p>
      </div>
    `;
  });
});

/* ---------- SUBJECTS ---------- */
SheetsAPI.fetchSheet("Subjects").then(rows => {
  const container = document.getElementById("subjects-list");
  if (!container) return;

  rows.forEach(row => {
    container.innerHTML += `<div>${row.subject || ""}</div>`;
  });
});
