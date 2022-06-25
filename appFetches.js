//https://www.quotes.net/quotes_api.php

$(document).ready(async function() {
    const response = await $.get("https://type.fit/api/quotes");
    const data = JSON.parse(response);
    console.log(data[1]);
    $('#text').text(data[0].text);
    $('#author').text(data[0].author);
})


/*
$(document).ready(function() {
    $.get("https://type.fit/api/quotes", (response) => {
        const data = JSON.parse(response);
        console.log(data[0]);
    })
})
*/
/*
$(document).ready(function() {
    $.ajax({
        method: 'GET',
        url: 'https://type.fit/api/quotes',
        dataType: 'JSON',
    }).done(function(data) {
        console.log(data)
    })
});
*/

// $(document).ready(function() {
//     $.ajax({
//     type: "GET",
//     url: 'https://type.fit/api/quotes',
//     contentType: 'application/json', 
//     datatype: 'json',
//     data: { ctgData: JSON.stringify(relvalue)}
//      success:  function(result) {
//       let data=result.data; // data = ["Food & Drink","Sport & Fitness",..]
//      }
//     });
// });


// $(document).ready(function() {
//     const settings = {
//         "url": "https://type.fit/api/quotes",
//         "async": true,
//         "crossDomain": true,
//         "method": "GET",
//         "dataType": "JSON"
//     }

//     $.ajax(settings).done(function(response) {
//     //const data = JSON.parse(response);
//     console.log(response);
//     const data = response.data;
//     });
// });

// console.log(data[0]);





// function transferEmp(postData)  {
// $.ajax({
//     url: url,
//     type: 'POST',
//     data: postData,
//     success: function(msg){
//            //alert(msg);
//     }
// });

// }

// $('#arrow img').click(function()    {
//     transferEmp('test');
// });

// const settings = {
//     "async": true,
//     "crossDomain": true,
//     "url": "https://type.fit/api/quotes",
//     "method": "GET"
//   }
  
//   $.ajax(settings).done(function (response) {
//     const data = JSON.parse(response);
//     console.log(data);
//   });