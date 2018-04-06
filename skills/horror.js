// if user expresses interest in horror genre

module.exports = function(controller) {

    controller.hears(['horror', 'scary books', 'scary'], 'message_received', function(bot, message) {
        bot.startConversation(message, function(err, convo) {
            convo.say('Here is a list of recommended horror books: \n\nIt by Stephen King\n\n' +
                    'Deep and Dark and Dangerous\n\nPet Semetary\n\nThe Night Gardener');
            convo.say({
                text: 'Would you like me to see whether any of these titles are available?', 
                    quick_replies: [
                        {
                            title: 'Yes',
                            payload: 'yes',
                        },
                        {
                            title: 'No',
                            payload: 'no'
                        }
                    ]
            });    
        });
    });
 
      

        // handle yes and no responses from previous question
    controller.hears('yes', ['message_received'], function(bot, message) {

         // TO DO: API CALL IF USER WANTS LIST OF AVAILABLE BOOKS
        bot.reply(message, 'Sorry. I\'m not able to handle that request at this time.');
    });

 
    controller.hears('no', ['message_reeived'], function(bot, message) {
        bot.reply(message, 'OK. How else can I help you today?');
    });
}