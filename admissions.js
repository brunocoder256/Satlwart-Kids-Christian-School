"use strict";

/* INFO */
SheetsAPI.fetchSheet("Admissions_Info").then(rows => {
  const container = document.getElementById("admissions-info");
  if (!container) return;

  rows.forEach(row => {
    container.innerHTML += `
      <div>
        <h3>${row.title || ""}</h3>
        <p>${row.description || ""}</p>
      </div>
    `;
  });
});

/* REQUIREMENTS */
SheetsAPI.fetchSheet("Admissions_Requirements").then(rows => {
  const list = document.getElementById("requirements-list");
  if (!list) return;

  rows.forEach(row => {
    list.innerHTML += `<li>${row.requirement || ""}</li>`;
  });
});

/* FEES */
SheetsAPI.fetchSheet("Admissions_Fees").then(rows => {
  const body = document.getElementById("fees-body");
  if (!body) return;

  rows.forEach(row => {
    body.innerHTML += `
      <tr>
        <td>${row.item || ""}</td>
        <td>${row.amount || ""}</td>
      </tr>
    `;
  });
});
