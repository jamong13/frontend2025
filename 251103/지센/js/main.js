document.addEventListener("DOMContentLoaded", () => {
  function mobileBtn() {
    const Btn = document.querySelector(".mobile_tab > a");
    const mobileTab = document.querySelector(".mobile_nav");
    Btn.addEventListener("click", (e) => {
      e.preventDefault();
      mobileTab.classList.toggle("active");
    });
  }
  mobileBtn();
});
