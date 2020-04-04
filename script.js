var quotes = [
  '"The mountains are calling and I must go." - John Muir',
  '"I like this place and could willingly waste my time in it." -William Shakespeare',
  '"Adopt the pace of nature: her secret is patience." -Ralph Waldo Emerson',
  '"Live in each season as it passes; breathe the air, drink the drink, taste the fruit, and resign yourself to the influence of the earth." -Henry David Thoreau, Walden',
  '"The creation of a thousand forests is in one acorn" -Ralph Waldo Emerson',
  '"A man doesn\'t plant a tree for himself. He plants it for posterity." -Alexander Smith',
  '"The best time to plant a tree was 20 years ago. The next best time is now." -Chinese Proverb',
  '"He will be like a tree firmly planted by streams of water, which yields its fruit in its season its leaf does not wither; and in whatever he does, he prospers." -Psalms 1:3',
  '"A man watches his pear tree day after day, impatient for the ripening of the fruit. Let him attempt to force the process, and he may spoil both fruit and tree. But let him patiently wait, and the ripe pear at length falls into his lap." -Abraham Lincoln'
]

function newQuote(){
  var currentQuote = (Math.floor(Math.random() * quotes.length));
  document.getElementById("quoteBox").innerHTML = quotes[currentQuote];
}

document.addEventListener('DOMContentLoaded', function() {
    newQuote();
}, false);


//slide show//

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName('slideshow');
  var dots = document.getElementsByClassName('dot');
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(' active', '');
  }
  slides[slideIndex-1].style.display = 'block';
  dots[slideIndex-1].className += ' active';
}
