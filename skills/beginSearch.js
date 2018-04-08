// Google Books API https://www.googleapis.com/books/v1/volumes?q=

module.exports = function(controller) {
    // controller.hears('begin search', 'message_received', function(bot, message) {

    //     bot.startConversation(message, function(err,convo) {
    //          // if user wants to initiate book search
    //         convo.addQuestion({text: 'OK. I\'ll find a book for you. How would you like to search?',
    //             quick_replies: [
    //                 {
    //                     title: 'Author',
    //                     payload: 'search by author',
    //                 },
    //                 {
    //                     title: 'Title',
    //                     payload: 'search by title',
    //                 },
    //                 {
    //                     title: 'Subject',
    //                     payload: 'search by subject',
    //                 },
    //                 {
    //                     title: 'Genre',
    //                     payload: 'search by genre',
    //                 }
    //             ]
    //         });
    //     });
    // })


    // // testing regex
    // controller.hears(/historical fiction/i, 'message_received', function(bot, message) {
    //     bot.startConversation(message, function(err, convo) {
    //         convo.say('Do you like to read historical fiction?')
    //     });
    // });
}


//     var books = require('google-books-search');
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
//         });
//     });
// }