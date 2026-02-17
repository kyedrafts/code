function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    if (sidebar.style.width === "400px") {
      sidebar.style.width = "0";
    } else {
      sidebar.style.width = "400px";
    }
  }
document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("contactBtn");
  const box = document.getElementById("contactInfo");

  btn.addEventListener("click", function () {
    box.classList.toggle("show");
  });
});
