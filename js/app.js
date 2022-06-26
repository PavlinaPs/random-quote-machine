//https://www.quotes.net/quotes_api.php

async function getQuotesData() {
    const response = await $.get("https://type.fit/api/quotes");
    const data = JSON.parse(response);
    console.log(data[1]);
    $("#text").text(data[0].text);
    $("#author").text(data[0].author);
}   

function getRandomBg() {
    document.getElementById('container').style.backgroundImage = 'url("https://source.unsplash.com/random/700x500?space,ocean")';
}

function getQuote() {
    return console.log('clicked');
}
    
$(document).ready(function() {
    getQuotesData();
    getRandomBg();

    $('#new-quote').on('click', getQuote);
});
