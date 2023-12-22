document.addEventListener("DOMContentLoaded", function () {
  const showMoreBtn = document.querySelector(".button__light-faqs");
  const faqItems = document.querySelectorAll(".faqs__container_items");
  let visibleCount = 6;

  function showMoreItems() {
    for (let i = 0; i < faqItems.length; i++) {
      if (i < visibleCount) {
        faqItems[i].style.display = "";
      } else {
        faqItems[i].style.display = "none";
      }
    }

    if (visibleCount === faqItems.length) {
      showMoreBtn.style.display = "none";
      document
        .querySelector(".faqs__container_question")
        .classList.add("no-gradient");
    }

    visibleCount += 5;
  }

  showMoreBtn.addEventListener("click", function () {
    showMoreItems();
  });

  showMoreItems();
});
