// Keep this site fully functional even when JavaScript is disabled.
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();
