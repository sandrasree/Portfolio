    let slideIndex = 0;
    let timer;

    function showSlides(n) {
      const slides = document.querySelectorAll(".mySlides");
      const dots = document.querySelectorAll(".demo");
      const caption = document.getElementById("caption");

      slides.forEach(slide => slide.style.display = "none");
      dots.forEach(dot => dot.classList.remove("active"));

      slideIndex = (n + slides.length) % slides.length;
      slides[slideIndex].style.display = "block";
      dots[slideIndex].classList.add("active");
      caption.innerHTML = dots[slideIndex].alt;
    }

    function plusSlides(n) {
      clearInterval(timer);
      showSlides(slideIndex + n);
      startTimer();
    }

    function currentSlide(n) {
      clearInterval(timer);
      showSlides(n - 1);
      startTimer();
    }

    function startTimer() {
      timer = setInterval(() => showSlides(slideIndex + 1), 1000);
    }

    showSlides(slideIndex);
    startTimer();

   function openModal(id) {
    document.getElementById(id).style.display = "block";
  }

  function closeModal(id) {
    document.getElementById(id).style.display = "none";
  }

  window.onclick = function(event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  };