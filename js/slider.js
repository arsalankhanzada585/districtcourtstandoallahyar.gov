// Home page image slider - vanilla JS, no external libraries
document.addEventListener("DOMContentLoaded", function () {
  var track = document.querySelector(".slider-track");
  var slides = document.querySelectorAll(".slide");
  var dotsWrap = document.querySelector(".slider-dots");
  var prevBtn = document.querySelector(".slider-prev");
  var nextBtn = document.querySelector(".slider-next");
  var current = 0;
  var total = slides.length;
  var timer;

  if (!track || total === 0) { return; }

  for (var i = 0; i < total; i++) {
    var dot = document.createElement("span");
    if (i === 0) { dot.className = "active"; }
    dot.setAttribute("data-index", i);
    dot.addEventListener("click", function () {
      goTo(parseInt(this.getAttribute("data-index"), 10));
    });
    dotsWrap.appendChild(dot);
  }
  var dots = document.querySelectorAll(".slider-dots span");

  function update() {
    track.style.transform = "translateX(" + (-current * 100) + "%)";
    for (var d = 0; d < dots.length; d++) {
      dots[d].className = (d === current) ? "active" : "";
    }
  }

  function goTo(index) {
    current = (index + total) % total;
    update();
    resetTimer();
  }

  function next() { goTo(current + 1); }
  function prev() { goTo(current - 1); }

  if (nextBtn) { nextBtn.addEventListener("click", next); }
  if (prevBtn) { prevBtn.addEventListener("click", prev); }

  function resetTimer() {
    clearInterval(timer);
    timer = setInterval(next, 5000);
  }

  resetTimer();
});
