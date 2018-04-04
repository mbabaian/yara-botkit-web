// Google Books API https://www.googleapis.com/books/v1/volumes?q=



module.exports = function(controller) {

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
}
