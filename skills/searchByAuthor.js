var books = require('google-books-search');

// if user selects 'search by author'
module.exports = function(controller) {
 
// controller.hears('search by author', 'message_received', function(bot, message) {
//     bot.startConversation(message, function(err, convo) {
//         convo.addQuestion('What is the author\'s name?', function(response,convo) {

//         // capture response to make json call
//             convo.say('OK. Searching for books by ' + response.text); // return response.text with proper capitalization
//             // API call goes here ???
//             convo.next();
//             });
//         });
//     })

}

       

//     var query = 'dystopian juvenile fiction';
        
//         books.search(query, function(error, results) {
//             if ( ! error ) {
//                 console.log(results[0]);  
                
//                 var hits = results.slice(0, 5);
                
//                   bot.reply(message, 'Here are the results of your search for ' + query + ':\n\n');
//                 for (var i = 0; i < hits.length; i++) {
                  
                
//                 // this would be better as a list of items
//                   bot.reply(message, '<strong>Title: </strong><a href="' + hits[i].link + '" target="_blank" >' + hits[i].title + '</a>' + '\n\n<strong>Author: </strong>' + hits[i].authors 
//                             + '\n\n<img src='+ hits[i].thumbnail + '>');
                  
//                 }
//                   // bot.reply(message, 'Title: ' + results[0].title);
//                   // bot.reply(message, 'Author: ' + results[0].authors);
//                   // bot.reply(message, '<img src='+ results[0].thumbnail + '>');
//             } 
//             else 
//             {
//                 console.log(error);
//             }
//     });

