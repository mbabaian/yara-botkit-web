var books = require('google-books-search');

module.exports = function(controller) {
 // if user selects 'title'
//  controller.hears('search by title', 'message_received', function(bot, message) {
//     bot.startConversation(message, function(err, convo) {
//         convo.addQuestion('What is the title of the book?', function(response, convo) {
//             // capture response for API call
//             convo.say('Searching for ' + response.text); // response.text with proper capitalization
//             convo.next();

           
            


//         });
//     });
// })

// // be sure to pass response.text to query variable
// var query = response.text;
        
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
//         });
    }