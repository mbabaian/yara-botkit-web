module.exports = function(controller) {

    // generate random responses to questions about well being
    var questions = ['how are you', 'how r u', 'hru', 'how\'s it going'];
    var responses = ['Fine, thanks. How are you?', 'I\'m doing well. And yourself?', 'Not bad. You?'];

    controller.hears(questions, ['message_received'], function(bot, message) {
        var randomResponse = responses[Math.floor(Math.random()*responses.length)];
        bot.reply(message, randomResponse);
    })

    controller.hears(['what\'s up', 'what up'], ['message_received'], function(bot, message) {
        bot.reply(message, 'Nothing much. You?');
    })

    // listen for greetings and generate random response
    var greetings = ['hi', 'hello', 'howdy', 'hey', 'good morning', 'good day'];
    var responsesToGreetings = ['Hi there!', 'Hey there!', 'Hello there!'];

    controller.hears(greetings, ['message_received'], function(bot, message) {
        var randomResponseToGreeting = responsesToGreetings[Math.floor(Math.random()*responsesToGreetings.length)];
        bot.replyWithTyping(message, randomResponseToGreeting + ' How can I help you?');
    })

    // address questions about the bot
    /*  who made you
    */

    controller.hears(['about', 'info', 'help'], ['message_received'], function(bot, message) {
        bot.startConversation(message, function(err, convo) {
            convo.say('Think of me as your personal reader advisory. My job is to search Google Books for free ' +
                'ebooks based on your reading interests. Unlike card catalogs, I can understand requests in natural language.' + 
                '\n\nIf you need help getting started, here is a list of phrases I listen for: ' +
                '\n\n<kbd>I need a book.</kbd>\n\n<kbd>I\'d like something to read.</kbd>\n\n<kbd>I want to search for a book.</kbd>' +
                '\n\n<kbd>Can you recommend a book?</kbd>\n\n<kbd>Will you find books for me to read?</kbd>');
            convo.say('And if you\'re <em>really</em> bored, I can also engage in some small talk with you.');
            // convo.say('If you would like to help me improve my responses, please fill out this ' +
            //     'user experience survey.');
            convo.say('If you are a librarian or library management system developer who would like to integrate ' +
                'YARA, please email <a href="mailto:monica.babaian@gmail.com?Subject=YARA">monica.babaian@gmail.com</a>.');
        });

    });



}
