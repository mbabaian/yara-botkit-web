// DON'T WORRY ABOUT THIS RIGHT NOW

module.exports = function(controller) {
    controller.hears('catalog', 'message_received', function(bot, message) {
        bot.startConversation(message, function(err, convo) {
            convo.say({
                text: 'The card catalog tracks which books are checked in and checked out.' +
                'You can search for your favorite books by title, author name, or subject.',
                quick_replies: [
                    {
                        title: 'Continue',
                        payload: 'continue',
                    },
                    {
                        title: 'Got it!',
                        payload: 'Got it!',
                    }
                ]
            });
        });
    });

    // if user selects Continue
    controller.hears('continue', 'message_received', function(bot, message) {
        bot.startConversation(message, function(err, convo) {
            convo.say('Good deal');

        });
    });



    // if user selects Got it
    controller.hears('Got it!', 'message_received', function(bot, message) {
        bot.startConversation(message, function(err, convo) {
            convo.say('OK. If you decide you need help, just let me know. ');
        });
    });



}