/* ================================
   GOOGLE SHEETS PUBLIC JSON ENGINE
   LOCKED – NO API KEY REQUIRED
================================ */

"use strict";

/* 🔁 CHANGE ONLY THIS */
const SPREADSHEET_ID = "18SRybikhfGgj9BQVEtUgIktbANDgwCmfKOda-e2Ok7w";

/* ---------- FETCH SHEET BY NAME ---------- */
async function fetchSheet(sheetName) {
  const url = `https://opensheet.elk.sh/${SPREADSHEET_ID}/${encodeURIComponent(sheetName)}`;

  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error("Failed to fetch sheet");

    return await res.json();
  } catch (error) {
    console.error("Sheets fetch error:", error);
    return [];
  }
}

/* ---------- EXPORT ---------- */
window.SheetsAPI = { fetchSheet };
