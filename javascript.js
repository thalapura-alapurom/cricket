jQuery("document").ready(function ($) { var flakes = '', randomColor; for (var i = 0, len = 400; i < len; i++) { randomColor = Math.floor(Math.random() * 16777215).toString(16); flakes += '<div class="ball" style="background: #' + randomColor; flakes += '; animation-duration: ' + (Math.random() * 9 + 2) + 's; animation-delay: '; flakes += (Math.random() * 2 + 0) + 's;"></div>'; } document.getElementById('confetti').innerHTML = flakes; });

document.body.addEventListener("mouseover", function () {
    document.getElementById('SongEle').play()
})

let slideIndex = 0;
showSlides();

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides() {
  let i;
  const slides = document.getElementsByClassName("slide");
  if (slideIndex >= slides.length) { 
    slideIndex = 0;
  }
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slides[slideIndex].style.display = "block";  
}
