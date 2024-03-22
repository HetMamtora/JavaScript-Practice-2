console.log("36) Write the JavaScript code to implement the quote-changing feature.");

const quotes=[
    "The only place where success comes before work is in the dictionary",
    "Strive not to be a success, but rather to be of value",
    "Try not to become a man of success, Rather become a man of value",
    "Success is stumbling from failure to failure with no loss of enthusiasm",
    "Don't spend time beating on a wall, hoping to transform it into a door.",
    "It is hard to fail, but it is worse never to have tried to succeed.",
    "If you want to live a happy life, tie it to a goal, not to people or things"
];

function displayRandomQuotes(){
    const quoteDisplay = document.getElementById("quoteDisplay");
    const randomIndex = Math.floor(Math.random()*quotes.length);
    quoteDisplay.textContent = quotes[randomIndex];
}

displayRandomQuotes();

function changeQuotePeriodically(){
    displayRandomQuotes();
    setTimeout(changeQuotePeriodically, 3000);
}

changeQuotePeriodically();