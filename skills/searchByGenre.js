var axios = require("axios");
var query = '';

/********************************************
 * 
 * TO DO:
 * HANDLE BOOKS WITH MISSING INFORMATION
 * CREATE LOOP FOR EACH RESPONSE
 * ADD "WHAT WOULD YOU LIKE TO DO NEXT?"
 * 
 ********************************************/

module.exports = function(controller) {
    // controller.hears('search by genre', 'message_received', function(bot, message) {
    //     bot.startConversation(message, function(err, convo) {
    //          // capture response for json call and pass to query variable
    //         convo.addQuestion('What genre would you like for me to search?', function(response, convo){
    //         convo.say({text: 'I think you might be interested in these young adult ' + response.text + ' books...', delay: 2000});

    //         query = response.text;
    //         convo.next();
    //     // trigger API call 
    //     controller.trigger('genreSearch', [bot, message]);
    // }); 
          
    //  // make call to Google Books
    // controller.on('genreSearch', function(bot, message) {
    //     axios.get('https://www.googleapis.com/books/v1/volumes?q=' + query + '+juvenile+fiction')
    //         .then(function(results) {
    //         //console.log(response);

    //     // loop through results
    // //   var results = results.slice(0, 5);

    // //     for (var i = 0; i < results.length; i++) {

    // //         bot.reply(message, '<strong>Title: </strong><a href=" ' + results.data.items[i].link + '" target="_blank">' + results.data.items[i]["volumeInfo"]["title"] +'</a>' +
    // //             "\n\n<image src=' " + results.data.items[i]["volumeInfo"]["imageLinks"]["thumbnail"]+ "'>'" + 
    // //             "\n\n<strong> Author(s): </strong>" + results.data.items[i]["volumeInfo"]["authors"] +
    // //            /* "\n\n<strong>Categories: </strong>" + results.data.items[i]["volumeInfo"]["categories"] +*/
    // //             "\n\n<strong>Snippet: </strong>" + results.data.items[i]["searchInfo"]["textSnippet"]);
                
    // //         }

    //         bot.reply(message, '<strong>Title: </strong><a href=" ' + results.data.items[0].link + '" target="_blank">' + results.data.items[0]["volumeInfo"]["title"] +'</a>' +
    //             "\n\n<image src=' " + results.data.items[0]["volumeInfo"]["imageLinks"]["thumbnail"]+ "'>'" + 
    //             "\n\n<strong> Author(s): </strong>" + results.data.items[0]["volumeInfo"]["authors"] +
    //            /* "\n\n<strong>Categories: </strong>" + results.data.items[0]["volumeInfo"]["categories"] +*/
    //             "\n\n<strong>Snippet: </strong>" + results.data.items[0]["searchInfo"]["textSnippet"]);
                
       
    //         })
    //             .catch(function(error) {
    //                 console.log(error);
    //             })
    //         });
    //     });   
    // });


       
            
              
          
}