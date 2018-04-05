// SO article on making API calls https://stackoverflow.com/questions/44511333/connect-botkit-to-my-service-restful-api

var debug = require('debug')('botkit:remote triggers');
// var axios = require('axios')


// /* receive and respond to remote script triggers */
// module.exports = function(controller) {

//   controller.on('trigger', function(bot, event) {
//     debug('Trigger Received: ', event);

//     controller.studio.run(bot, event.script, event.user, event.channel, event).then(function(convo) {
//       if (convo) {
//         if (event.thread && convo.hasThread(event.thread)) {
//           convo.gotoThread(event.thread);
//         }
//       } else {
//         bot.reply(event, 'I was unable to load a script from Botkit Studio called `' + event.script +'`');
//       }
//     }).catch(function(err) {

//       console.log('Error triggering script: ', err);
//       bot.reply(event, 'I was unable to load a script from Botkit Studio called `' + event.script +'`');

//     })

//   });
  
// }
  
var request = require("request");

module.exports = function(controller) {
  
  controller.hears(['book query'], 'message_received', function(bot, message) {
    
    function handleResponse(response) {
      for (var i = 0; i < response.items.length; i++) {
        var item = response.items[i];
        // in production code, item.text should have the HTML entities escaped.
        document.getElementById("content").innerHTML += "<br>" + item.volumeInfo.title;
      }
    }
        var url = 'https://www.googleapis.com/books/v1/volumes?q=subject:dystopian&key=&callback=handleResponse';
        request(url, function (err, response, body) {
            console.log(response[0]);
            // console.log('error: ', err); // Handle the error if one occurred
            // console.log('statusCode: ', response && response.statusCode); // Check 200 or such
            

            bot.reply(message, 'Search completed');

        });
    });

}

// FOR QUERIES 

// convo.extractResponses()
// Returns an object containing all of the responses a user sent during the course of a conversation.

// var values = convo.extractResponses();
// var value = values.key;
// convo.extractResponse()
// Return one specific user response, identified by its key.

// var value  = convo.extractResponse('key');


