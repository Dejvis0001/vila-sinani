//Moving Animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  });
  const hiddenElements = document.querySelectorAll(".hidden");
  hiddenElements.forEach((el) => observer.observe(el));
  const observer2 = new IntersectionObserver((entries2) => {
    entries2.forEach((entry2) => {
      if (entry2.isIntersecting) {
        entry2.target.classList.add("show2");
      }
    });
  });
  const hiddenElements2 = document.querySelectorAll(".hidden2");
  hiddenElements2.forEach((el2) => observer2.observe(el2));
  const observer3 = new IntersectionObserver((entries3) => {
    entries3.forEach((entry3) => {
      if (entry3.isIntersecting) {
        entry3.target.classList.add("show3");
      }
    });
  });
  const hiddenElements3 = document.querySelectorAll(".hidden3");
  hiddenElements3.forEach((el3) => observer3.observe(el3));
  const observer4 = new IntersectionObserver((entries4) => {
    entries4.forEach((entry4) => {
      if (entry4.isIntersecting) {
        entry4.target.classList.add("show4");
      }
    });
  });
  const hiddenElements4 = document.querySelectorAll(".hidden4");
  hiddenElements4.forEach((el4) => observer4.observe(el4));
  const observer5 = new IntersectionObserver((entries5) => {
    entries5.forEach((entry5) => {
      if (entry5.isIntersecting) {
        entry5.target.classList.add("show5");
      }
    });
  });
  const hiddenElements5 = document.querySelectorAll(".hidden5");
  hiddenElements5.forEach((el5) => observer5.observe(el5));
  //The End 
  //Home-Slider
  var swiper = new Swiper(".home-slider", {
    grabCursor:true,
    loop:true,
    centeredSlides:true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
  });