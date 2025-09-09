document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  form.addEventListener("submit", () => {
    alert("✅ Thank you! Your response has been recorded.");
    form.reset();
  });
});
