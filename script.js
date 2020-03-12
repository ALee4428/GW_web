var quotes = [
  '"The clearest way into the Universe is through a forest wilderness." - John Muir',
  '"The mountains are calling and I must go." - John Muir'
]

function newQuote(){
  var currentQuote = (Math.floor(Math.random() * quotes.length));
  document.getElementById("quoteBox").innerHTML = quotes[currentQuote];
}

document.addEventListener('DOMContentLoaded', function() {
    newQuote();
}, false);
