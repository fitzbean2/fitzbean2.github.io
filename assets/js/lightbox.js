function openModal(modalID) {
  document.getElementById(modalID).style.display = "block";
}

function closeModal(modalID) {
  document.getElementById(modalID).style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n,cap,low) {
  showSlides(slideIndex += n,cap,low);
}

function currentSlide(n,cap,low) {
  showSlides(slideIndex = n,cap,low);
}

function showSlides(n,cap,low) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("thumbnail");
  var captionText = document.getElementById("caption");
  if (n > cap) {slideIndex = low}
  if (n < low) {slideIndex = cap}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}



