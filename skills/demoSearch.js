var axios = require("axios");


/********************************************
 * 
 * TO DO:
 * HANDLE BOOKS WITH MISSING INFORMATION
 * FIND WAY TO DEAL WITH STARTING NEW SEARCH
 * W/O REPEATING PREVIOUS SEARCH
 * 
 ********************************************/

module.exports = function(controller) {
    var query = '';

    var utterances = ['looking for a book', 'something to read', 'need a book', 'search for a book', +
                    'recommend a book', 'get a book', 'begin search', 'yes'];
    
    controller.hears(utterances,  'message_received', function(bot, message) {
        bot.startConversation(message, function(err, convo) {
             // capture response for json call and pass to query variable
            convo.addQuestion('What kind of book are you looking for?', function(response, convo){
            convo.say({text: 'Just a moment while I search for young adult ' + response.text + ' books...', delay: 2000});

            query = response.text;
            convo.next();
        // trigger API call 
        controller.trigger('demoSearch', [bot, message]);
    }); 
          
     // make call to Google Books
    controller.on('demoSearch', function(bot, message) {

        // DO NOT USE createConversation -- it doesn't pass variables!
        bot.startConversation(message, function(err, convo) {

            axios.get('https://www.googleapis.com/books/v1/volumes?q=' + query + '+young+adult&filter=free-ebooks')
            .then(function(results) {
                
        // loop through first five results
        for (var i = 0; i < 4; i++) {
            var linkToBook = results.data.items[i].link;
            var bookTitle = results.data.items[i]["volumeInfo"]["title"];
            var thumbnail = results.data.items[i]["volumeInfo"]["imageLinks"]["thumbnail"];
            var author = results.data.items[i]["volumeInfo"]["authors"];
            var snippet = results.data.items[i]["searchInfo"]["textSnippet"];
            // var categories = results.data.items[i]["volumeInfo"]["categories"] 

                convo.sayFirst(
                    "<image src=' " + thumbnail + "'>'" + 
                    '\n\n<strong>Title: </strong><a href=" ' + linkToBook + '" target="_blank">' + bookTitle +'</a>' +
                    "\n\n<strong> Author(s): </strong>" + author +
                    "\n\n<strong>Snippet: </strong>" + snippet/*,'next_step'*/);
                }      
            })     
            
            .catch(function(error) {
               // pass
               convo.addMessage('Sorry. An error occurred: ' + error + 
                '\n\nPlease help improve YARA by filling out <a href="https://docs.google.com/forms/d/e/1FAIpQLScCJIjCMcQebNBEnuJmJoSvgIWR8FqkpLKcz7BGBGtnKIFg3A/viewform?usp=sf_link" target="_blank">this form</a>');
              //  console.log(error);  
                })
               
                });
                convo.addMessage({
                    text: 'You can check the availability any book by clicking on its title.',
                    /*action: 'next_step',*/
                    delay: 10000
                }); 
                // reset query
                query = '';
                convo.addQuestion('Would you like to start another search?');
                  // if user says yes, it needs to start a brand new search in order to avoid looping through results
                  // right now, it's throwing errors and messing up some searches 
            });
            convo.next(); 
        });   
    });

    controller.hears(['no', 'no thank you', 'no thanks', 'done', 'finished', 'quit', 'stop', 'exit'], 
        ['message_received'], function(bot, message) {
            bot.reply(message, 'OK. Thank you for visiting YARA. I\'ll be here if you need me.');
        })

}