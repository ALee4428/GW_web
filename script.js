var quotes = [
  '"The clearest way into the Universe is through a forest wilderness." -John Muir',
  '"The mountains are calling and I must go." - John Muir',
  '"In the spring, at the end of the day, you should smell like dirt." -Margaret Atwood, Bluebeard\'s Egg',
  '"I felt my lungs inflate with the onrush of scenery- air, mountains, trees, people. I thought, \'This is what it is to be happy.\'" -Sylvia Plath, The Bell Jar',
  '"I like this place and could willingly waste my time in it." -William Shakespeare',
  '"Adopt the pace of nature: her secret is patience." -Ralph Waldo Emerson',
  '"I am glad I will not be young in a future without wilderness." -Aldo Leopold',
  '"Live in each season as it passes; breathe the air, drink the drink, taste the fruit, and resign yourself to the influence of the earth." -Henry David Thoreau, Walden',
  '"The poetry of the earth is never dead." -John Keats',
  '"The creation of a thousand forests is in one acorn" -Ralph Waldo Emerson'
]

function newQuote(){
  var currentQuote = (Math.floor(Math.random() * quotes.length));
  document.getElementById("quoteBox").innerHTML = quotes[currentQuote];
}

document.addEventListener('DOMContentLoaded', function() {
    newQuote();
}, false);
