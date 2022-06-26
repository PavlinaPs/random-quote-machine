//https://www.quotes.net/quotes_api.php

//let background = document.getElementById('container');

async function loadQuotesData() {
    const response = await fetch("https://type.fit/api/quotes");
    const data = await response.json();
    return data;

    // try {
    //     const response = await fetch("https://type.fit/api/quotes");
    //     console.log(response)
    //     if(!response.ok) throw Error('Did not receive expected data');
    //     const data = await response.json();
    //     quoteData = data;
    //     console.log(quoteData)
    //     return quoteData;
        //console.log(quoteData);
    //     setItems(listItems);
    //     setFetchError(null);
      // } catch (err) {
     //  console.log(err.message);
    //   } finally {
    //     setIsLoading(false)
    //   }
//}
}

let i = 0;
function getRandomBg() {
    $("#container").css('background-image', `url("https://source.unsplash.com/random/700x500?space,ocean=${i}")`);
    i++;
}

async function getQuote() {
    let quotes = {};
    try {
        quotes = await loadQuotesData();
        console.log(quotes)
        let randomIndex = Math.floor(Math.random() * quotes.length);
        $("#text").text(quotes[randomIndex].text);
        $("#author").text(quotes[randomIndex].author);
    } catch {
        console.log('Error!')
    }
 }
    
$(document).ready(function() {
    getRandomBg();
    getQuote();
    $('#new-quote').on('click', () => {
        getRandomBg();
        getQuote();
    })
});
