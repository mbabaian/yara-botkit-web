// Google Books API https://www.googleapis.com/books/v1/volumes?q=
// sample query for dystopian books 


// see this page for API instructions https://developers.google.com/books/docs/v1/using#st_params


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

//                 // capture response an initiate API call
        

//             });
//         });
//     })


//     // if user selects 'subject'
//     controller.hears('subject', 'message_received', function(bot, message) {
      
//       var subject = '';
      
//         bot.startConversation(message, function(err, convo) {
//             convo.addQuestion('What subject would you like?', function(response, convo){
//                 convo.say('Searching for books about ' + response.text);
//                 convo.next();

//                 // capture response for json call
//                // subject = response.text;
             
          
//           // query the card catalog
          
//         });
//     })
       

//     // testing regex
//     controller.hears(/historical fiction/i, 'message_received', function(bot, message) {
//         bot.startConversation(message, function(err, convo) {
//             convo.say('Do you like to read historical fiction?')
//         });
//     });

// }
  
//ANY SEARCH NEEDS TO BE APPENDED WITH "JUVENILE FICTION" SINCE THIS IS FOR YOUNG ADULTS
module.exports = function(controller) {
  controller.hears(['book search'], 'message_received', function(bot, message) {
    var books = require('google-books-search');
    var query = 'dystopian juvenile fiction';
    
    books.search(query, function(error, results) {
          if ( ! error ) {
              console.log(results[0]);  
            
              var hits = results.slice(0,5);
            
            for (var i = 0; i < hits.length; i++) {
              
             // bot.reply(message, 'Title: ' + hits[i].title);
              
              bot.reply(message, '<strong>Title: </strong><a href="' + hits[i].link + '">' + hits[i].title + '</a>' + '\n\n<strong>Author: </strong>' + hits[i].authors 
                        + '\n\n<img src='+ hits[i].thumbnail + '>');
              
            }
              // bot.reply(message, 'Title: ' + results[0].title);
              // bot.reply(message, 'Author: ' + results[0].authors);
              // bot.reply(message, '<img src='+ results[0].thumbnail + '>');
           
                
            // bot.reply(message, '<strong>Title: </strong>' + results[i].title + '\n\n<strong>Author: </strong>' + results[i].authors + '\n\n<img src='+ results[i].thumbnail + '>');
              // bot.reply(message, '<strong>Title: </strong>' + results.title.slice(0,5) + '\n\n<strong>Author: </strong>' + results.authors.slice(0,5) 
              //           + '\n\n<img src='+ results.thumbnail.slice(0,5) + '>');
              
          } else {
              console.log(error);
          }
      });
    });

}


// AIzaSyA7-5YpRPoiCUiWBOERF4njaiPdo3DHXCM

