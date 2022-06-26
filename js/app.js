//https://www.quotes.net/quotes_api.php

// random background images from unsplash
let i = 0;
function getRandomBg() {
    $("#container").css('background-image', `url("https://source.unsplash.com/random/700x500?space,ocean=${i}")`);
    i++;
}

// quotes from freeCodeCamp API
async function loadQuotesData() {
    try {
        const response = await fetch("https://type.fit/api/quotes");
        if(!response.ok) throw Error('Did not receive expected data');
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(err.message);
    }
}

async function getQuote() {
    const quotes = await loadQuotesData();
    let randomIndex = Math.floor(Math.random() * quotes.length);
    $("#text").text(quotes[randomIndex].text);
    $("#author").text(quotes[randomIndex].author);
    $('#tweet-quote').attr(
        'href',
        `https://twitter.com/intent/tweet?text="${quotes[randomIndex].text}" By ${quotes[randomIndex].author}`
        );
};
    
$(document).ready(function() {
    getRandomBg();
    getQuote();
    $('#new-quote').on('click', () => {
        getRandomBg();
        getQuote();
    })
});
