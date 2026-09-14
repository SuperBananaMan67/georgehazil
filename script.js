function updateReleaseTimestamp() {
  const now = new Date();
  const rounded = new Date(now);

  // Round to the nearest half hour.
  rounded.setMinutes(Math.round(now.getMinutes() / 30) * 30, 0, 0);

  document.querySelector("#today").textContent =
    new Intl.DateTimeFormat("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "2-digit"
    }).format(now);

  document.querySelector("#rounded-time").textContent =
    new Intl.DateTimeFormat("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false
    }).format(rounded);
}

updateReleaseTimestamp();
setInterval(updateReleaseTimestamp, 30000);
