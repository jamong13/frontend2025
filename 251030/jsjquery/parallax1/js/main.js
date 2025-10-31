document.addEventListener("DOMContentLoaded", function () {
  var item1 = document.getElementById("item1");
  var item2 = document.getElementById("item2");
  var item3 = document.getElementById("item3");
  var item4 = document.getElementById("item4");
  var item5 = document.getElementById("item5");
  var valueEl = document.getElementById("value");

  //   #item1의 모든 정보를 가지고 있음
  var item1Rect = item1.getBoundingClientRect();
  var item2Rect = item2.getBoundingClientRect();
  var item3Rect = item3.getBoundingClientRect();
  var item4Rect = item4.getBoundingClientRect();
  var item5Rect = item5.getBoundingClientRect();

  // 현재 화면 기준 top 위치 + 세로스크롤 위치
  var top1 = item1Rect.top + window.scrollY;
  // 현재 화면 기준 left 위치 + 가로스크롤 위치
  var left1 = item1Rect.left + window.scrollX;
  var left2 = item2Rect.left + window.scrollX;
  var left3 = item3Rect.left + window.scrollX;
  var left4 = item4Rect.left + window.scrollX;
  var left5 = item5Rect.left + window.scrollX;

  function onscroll() {
    var sct = window.scrollY || document.documentElement.scrollTop || document;
    // var sct = $(window).scrollTop();
    // window.scrollY 이후 내용은 옛날 브러우저때문에 넣음
    valueEl.textContent = sct;
    // 화면에 스크롤값 보임

    item1.style.top = top1 + sct / 4 + "px";
    item2.style.top = top1 + sct / 5 + "px";
    item2.style.left = left2 + sct / 5 + "px";
    item3.style.top = top1 + sct / 6 + "px";
    item3.style.left = left3 + sct / 6 + "px";

    item4.style.top = top1 + sct / 8 + "px";
    item4.style.left = left4 + sct / 5 + "px";

    item5.style.left = left5 + sct / 4 + "px";
  }

  window.addEventListener("scroll", onscroll, { passive: true });
});
