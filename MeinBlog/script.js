// Darkmode
// Funktion zum Umschalten
function toggleDarkMode() {
    const isDark = document.body.classList.toggle("darkmode");
  
    // Speichern im localStorage
    localStorage.setItem("darkmode", isDark ? "on" : "off");
  }
  
  // Beim Laden der Seite prüfen
  window.addEventListener("DOMContentLoaded", () => {
    const savedMode = localStorage.getItem("darkmode");
    if (savedMode === "on") {
      document.body.classList.add("darkmode");
    }
  });
  