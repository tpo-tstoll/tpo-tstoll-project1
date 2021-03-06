/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

/*** 
 * Below is an array containing quote objects
 * Each object contains at minumum a quote and source
 * Below find the decription of properties utilized:
 *  quote: The quote itself
 *  source: The author of the quote 
 *  citation: The work in which the quote originated (optional)
 *  year: The year the quote was created (optional)
 *  tag: A keyword that describes the content of the quote
***/

const quotes = [
  {
    quote: "It does no harm to the romance of the sunset to know a little about it.",
    source: "Carl Sagan",
    citation: "Pale Blue Dot: A Vision of the Human Future in Space",
    year: 1994
  },
  {
    quote: "Fairy tales are more than true: not because they tell us that dragons exist, but because they tell us that dragons can be beaten.",
    source: "Neil Gaiman",
    citation: "Coraline", 
    year: 2002
  },
  {
    quote: "Talent hits a target no one else can hit. Genius hits a target no one else can see.",
    source: "Arthur Schopenhauer",
    tag: "Philosophy"
  },
  {
    quote: "You never fail until you stop trying.",
    source: "Albert Einstein" ,
    tag: "Success"
  },
  {
    quote: "Live as if you were to die tomorrow. Learn as if you were to live forever",
    source: "Mahatma Gandhi" 
  }
]

/*Below is are fuctions that generate a random color that will be utilized later in the script to change the background color */

const randomColorValue = () => Math.floor(Math.random() * 256);

const colorChange = (value) => {
  const color = `rgb(${value()}, ${value()}, ${value()})`
  return color;
}

/*Below is a function that generates a random number which returns a quote based upon the index value of the quotes array */

const getRandomQuote = () => {
  const randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber];
}

/***
 * The printQuote function prints and structures the random quote that was generated by the getRandomQuote function
 * The printQuote function utilizes an if statement to ensure all included properties and values will print to the html doc if available
 * The random background color function is then called upon so the background will change when the printQuote function runs
***/

const printQuote = () => {
  const randomQuote = getRandomQuote();
  let html = 
    `<p class="quote">${randomQuote.quote}</p>
    <p class="source">${randomQuote.source}`
  if (randomQuote.citation) {
    html += `<span class="citation">${randomQuote.citation}</span>`
  } 
  if (randomQuote.year) {
    html += `<span class="year">${randomQuote.year}</span>`
  } 
  if (randomQuote.tag) {
    html += `<span class="year">${randomQuote.tag}</span>`
  } 
  html += `</p>`;
  document.body.style.backgroundColor = colorChange(randomColorValue);
  return document.getElementById('quote-box').innerHTML = html;
}

/*This generates a new quote from the array to be printed if the refresh button is not clicked in 10 seconds*/

window.setInterval('printQuote()', 10000);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);