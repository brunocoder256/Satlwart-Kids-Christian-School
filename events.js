/* ===============================
   EVENTS PAGE LOGIC
================================ */

"use strict";

document.addEventListener("DOMContentLoaded", async () => {
  const container = document.getElementById("eventsContainer");

  const events = await SheetsAPI.fetchSheet("Events");

  if (!events.length) {
    container.innerHTML = "<p>No events available at the moment.</p>";
    return;
  }

  container.innerHTML = events.map((event, index) => `
    <article class="event-card" style="animation-delay:${index * 0.1}s">
      <img src="${event.image}" alt="${event.title}">
      <div class="event-content">
        <div class="event-date">${event.date}</div>
        <h3 class="event-title">${event.title}</h3>
        <p class="event-description">${event.description}</p>
      </div>
    </article>
  `).join("");
});
