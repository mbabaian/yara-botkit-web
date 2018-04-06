// Google Books API https://www.googleapis.com/books/v1/volumes?q=

var books = require("google-books-search");


// module.exports = function(controller) {

// NOT GOING TO USE THIS FOR NOW
//     controller.hears('book', 'message_received', function(bot, message) {

//         bot.startConversation(message, function(err,convo) {
//              // if user wants to initiate book search
//             convo.addQuestion({text: 'OK. I\'ll find a book for you. How would you like to search?',
//                 quick_replies: [
//                     {
//                         title: 'Author',
//                         payload: 'author',
//                     },
//                     {
//                         title: 'Title',
//                         payload: 'title',
//                     },
//                     {
//                         title: 'Subject',
//                         payload: 'subject',
//                     }
//                 ]
//             });
//         });
//     })

//     // if user selects 'author'
//     controller.hears('author', 'message_received', function(bot, message) {
//         bot.startConversation(message, function(err, convo) {
//             convo.addQuestion('What is the author\'s name?', function(response,convo) {
//                 convo.say('OK. Searching for books by ' + response.text); // return response.text with proper capitalization
//                 // API call goes here ???
//                 convo.next();

//                  // capture response to make json call

//             });
//         });
//     })


//     // if user selects 'title'
//     controller.hears('title', 'message_received', function(bot, message) {
//         bot.startConversation(message, function(err, convo) {
//             convo.addQuestion('What is the title of the book?', function(response, convo) {
//                 convo.say('Searching for ' + response.text); // response.text with proper capitalization
//                 convo.next();

               
//                 // capture response for API call


//             });
//         });
//     })


//     // if user selects 'subject'
//     controller.hears('subject', 'message_received', function(bot, message) {
//         bot.startConversation(message, function(err, convo) {
//             convo.addQuestion('What subject would you like?', function(response, convo){
//                 convo.say('Searching for books about ' + response.text);
//                 convo.next();

//                 // capture response for json call


//             });
//         });
//     })
       

//     // testing regex
//     controller.hears(/historical fiction/i, 'message_received', function(bot, message) {
//         bot.startConversation(message, function(err, convo) {
//             convo.say('Do you like to read historical fiction?')
//         });
//     });

var request = require("request");
var axios = require("axios")

module.exports = function(controller) {
    controller.hears(['book search'], 'message_received', function(bot, message) {
        // sample API call https://www.googleapis.com/books/v1/volumes?q=dystopian

//         axios.get('https://www.googleapis.com/books/v1/volumes?q=dystopian%20juvenile%20fiction')
//             .then(function(response) {
              
//               bot.reply(message, "<strong>Title:</strong> " + response.data.items[0]["volumeInfo"]["title"] +
//                 "\n\n<strong>Cover:<strong><image src=' " + response.data.items[0]["volumeInfo"]["imageLinks"]["thumbnail"]+ "'>'" + 
//                 "\n\n<strong> Author(s): </strong>" + response.data.items[0]["volumeInfo"]["authors"] +
//                 "\n\n<strong>Categories: </strong>" + response.data.items[0]["volumeInfo"]["categories"] +
//                 "\n\n<strong>Snippet: </strong>" + response.data.items[0]["searchInfo"]["textSnippet"]);
//             })
//             .catch(function(error) {
//                 console.log(error);
//             })
//     });
// }         
           
    var books = require('google-books-search');
    var query = 'dystopian juvenile fiction';
        
        books.search(query, function(error, results) {
            if ( ! error ) {
                console.log(results[0]);  
                
                var hits = results.slice(0, 5);
                
                  bot.reply(message, 'Here are the results of your search for ' + query + ':\n\n');
                for (var i = 0; i < hits.length; i++) {
                  
                
                // this would be better as a list of items
                  bot.reply(message, '<strong>Title: </strong><a href="' + hits[i].link + '" target="_blank" >' + hits[i].title + '</a>' + '\n\n<strong>Author: </strong>' + hits[i].authors 
                            + '\n\n<img src='+ hits[i].thumbnail + '>');
                  
                }
                  // bot.reply(message, 'Title: ' + results[0].title);
                  // bot.reply(message, 'Author: ' + results[0].authors);
                  // bot.reply(message, '<img src='+ results[0].thumbnail + '>');
            } 
            else 
            {
                console.log(error);
            }
        });
    });
}