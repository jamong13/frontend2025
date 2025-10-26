$(function () {
  const container = $("#carouselContainer");
  const prevBtn = $("#prevBtn");
  const nextBtn = $("#nextBtn");
  const indicators = $("#indicators");
  const carousel = $("#teamCarousel");
  const cards = $(".team-card");

  const cardCount = cards.length;
  const visibleCount = 4;
  const moveStep = 100 / visibleCount;
  let currentIndex = 0;
  let autoSlideInterval;

  for (let i = 0; i < cardCount; i++) {
    const dot = $("<span></span>");
    if (i === 0) dot.addClass("active");
    dot.on("click", function () {
      moveTo(i);
    });
    indicators.append(dot);
  }

  const dots = indicators.find("span");

  function updateIndicators() {
    dots.removeClass("active").eq(currentIndex).addClass("active");
  }

  function moveTo(index) {
    currentIndex = index;
    container.css("transform", `translateX(-${currentIndex * moveStep}%)`);
    updateIndicators();
  }

  nextBtn.on("click", function () {
    currentIndex++;
    if (currentIndex > cardCount - 1) currentIndex = 0;
    moveTo(currentIndex);
  });

  prevBtn.on("click", function () {
    currentIndex--;
    if (currentIndex < 0) currentIndex = cardCount - 1;
    moveTo(currentIndex);
  });

  function startAutoSlide() {
    autoSlideInterval = setInterval(function () {
      currentIndex++;
      if (currentIndex > cardCount - 1) currentIndex = 0;
      moveTo(currentIndex);
    }, 3000);
  }

  function stopAutoSlide() {
    clearInterval(autoSlideInterval);
  }

  startAutoSlide();

  carousel.on("mouseenter", stopAutoSlide).on("mouseleave", startAutoSlide);
});
