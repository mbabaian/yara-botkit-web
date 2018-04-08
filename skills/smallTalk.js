module.exports = function(controller) {

    // generate random responses to questions about well being
    var questions = ['how are you', 'how r u', 'hru', 'how\'s it going'];
    var responses = ['Fine, thanks. How are you?', 'I\'m doing well. And yourself?', 'Not bad. You?'];

    controller.hears(questions, 'message_received', function(bot, message) {
        var randomResponse = responses[Math.floor(Math.random()*responses.length)];
        bot.reply(message, randomResponse);
    })

    controller.hears(['what\'s up', 'what up'], 'message_received', function(bot, message) {
        bot.reply(message, 'Nothing much. You?');
    })

    // listen for greetings and generate random response
    var greetings = ['hi', 'hello', 'howdy', 'hey', 'yo', 'good morning', 'good day'];
    var responsesToGreetings = ['Hi there!', 'Hey there!', 'Hello there!'];

    controller.hears(greetings, 'message_received', function(bot, message) {
        var randomResponseToGreeting = responsesToGreetings[Math.floor(Math.random()*responsesToGreetings.length)];
        bot.replyWithTyping(message, randomResponseToGreeting + ' How can I help you?');
    })

    // address questions about the bot
    /*  who are you
        who made you
        what do you do
        what is your purpose
        what is your job 
    */




}