module.exports = function(controller) {

    // handle nonfiction requests
    controller.hears(['nonfiction', 'biography', 'memoirs', 'memoir', 'folk tales', 'fairy tales', 'mythology'] , 'message_received', function(bot, message) {
        bot.startConversation(message, function(err,convo) {
            convo.say('Sorry. I\'m not equipped to handle nonfiction at this time.\nIf you know of a library ' +
            'with a public API, please let me know!')
        });
    });

//     controller.hears(['fiction', 'fiction book'], 'message_received', function(bot, message) {
//         bot.startConversation(message, function(err, convo) {
//             convo.say('If you tell me a specific genre of fiction, I can make some suggestions.')
//         });
//     });
  
  
    controller.hears(['fiction','fiction book'], ['message_received'], function(bot,message) {
        bot.replyWithTyping(message,"If you tell me a specific genre of fiction, I can make some suggestions.");
    });

    // if user expresses interest in horror genre
    controller.hears(['horror', 'scary books', 'scary'], 'message_received', function(bot, message) {
        bot.startConversation(message, function(err,convo) {
             convo.say('Here is a list of recommended horror books: \n\nIt by Stephen King\n\n' +
                'Deep and Dark and Dangerous\n\nPet Semetary\n\nThe Night Gardener');
             convo.say('I wish I could find out the availability of these books, but ' + 
                'I\'m not equipped to handle that at this time.')
        });
    });

    // fantasy
    controller.hears(['fantasy', 'books about fantasy', 'books with magic'], 'message_received', function(bot, message) {
        bot.startConversation(message, function(err,convo) {
            convo.say('Here is a list of fantasy books:\n\nThe Darkest Part of the Forest\n\n'+
                'Septimus Heap Series\n\nHarry Potter Series\n\nPercy Jackson Series\n\n' +
                'Magin Under Stone\n')
            convo.say('At this point, I would ask whether you would like me to check for availability '+
                'of one or more of these recommended books. Unfortunately, I don\'t have access to a library\'s API.')
        });
    });

    // romance
    controller.hears(['romance', 'romantic', 'romatic books', 'romance books'], 'message_received', function(bot, message) {
        bot.startConversation(message, function(err,convo) {
            convo.say('We have many wonderful romance books:\n\nPride and Prejudice and Zombies\n\n' +
                'The Scarlet Letter\n\nGirlfriend Material\n\nEverything, Everything\n\n' +
                'All Our Pretty Songs')
        });
    });

    // steampunk
    controller.hears('steampunk', 'message_received', function(bot, message) {
        bot.startConversation(message, function(err,convo) {
            convo.say('If you like steampunk, then I really think you\'ll like these books:\n\n'+
                'Leviathan (series)\n\nSteampunk Poe\n\nInfernal Devices (series)\n\n'+
                'The Mortal Instruments\n\nFever Crumb')
            convo.say('I would love to see whether these books are available for check out, ' +
                'but I don\'t have access to your library\'s card catalog at this time. Ask your librarian '+
                'how you can use the card catalog to search for books.')
        });
    });

    // humor
    controller.hears(['humor', 'funny'], 'message_received', function(bot, message) {
        bot.startConversation(message, function(err,convo) {
            convo.say('I found a couple of humorous fiction books for you:\n\n' +
                'Bucking the Sarge\n\nCures for Heartbreak\n\n')
            convo.say('Search for these titles and more on your library\'s card catalog.') 
        });
    });

    // vampires/vampire
    controller.hears(['vampire', 'vampires'], 'message_received', function(bot, message) {
        bot.startConversation(message, function(err,convo) {
            convo.say('I do have some recommendations for books with vampires:\n\n' +
                'Twilight\n\nA House of Night\n\nThe Vampire Diaries\n\n'+
                'Vampirates\n\nThe Coldest Girl in ColdTown\n\nSoulless\n\nFever Crumb') 
            convo.say('Search for these titles and more on your library\'s card catalog.')   
        });
    });

    // dystopian
    controller.hears('dystopian', 'message_received', function(bot, message) {
        bot.startConversation(message, function(err,convo) {
            convo.say('Here is a list of recommended dystopian books:\n\n'+
                'MaddAddam\n\nThe Handmaid\'s Tale\n\nThe Hunger Games Series\n\n'+
                'Divergent Series\n\nThe Maze Runner Series\n\n1984\n\nMatched Series\n\n'+
                'The Mortal Instruments Series\n\nBlack Helicopters\n\nEnder\'s Game\n\n'+
                'Legend\n\nAcross the Universe\n\n')
            convo.say('Search for these titles and more on the card catalog at your school library.')   
        });
    });

    // time travel
    controller.hears('time travel', 'message_received', function(bot, message) {
        bot.startConversation(message, function(err,convo) {
            convo.say('I have a few suggestions for time travel:\n\nArtemis Fowl: The Time Paradox\n\n'+
                'A Wrinkle in Time\n\nThe Time Machine\n\nRuby Read\n\nIn the Forests of the Night\n\n'+
                'Found\n\nPrisoner of Time\n\nDaniel X: Demons and Druids\n\nAn Acceptable Time\n\n'+
                'The Reluctant Assassin\n\nAre You Experienced?\n\nA Well-Timed Enchantment\n')
            convo.say('Search for these titles and more on the card catalog at your school library.')
        });
    });

    // zombie/zombies
    controller.hears(['zombie', 'zombies'], 'message_received', function(bot, message) {
        bot.startConversation(message, function(err,convo) {
            convo.say('I have some great books with zombies:\n\nPride and Prejudice and Zombies\n\n'+
                'Zombies vs. Unicorns\n\nZombies and Calculus\n\nNever Slow Dance with a Zombie\n\n'+
                'I Kissed a Zombie and I Liked It\n\nWorld War Z\n\nThe Zombie Survival Guide') 
        });
    });

    // realistic fiction
    controller.hears(['realistic', 'realistic fiction'], 'message_received', function(bot, message) {
        bot.startConversation(message, function(err,convo) {
            convo.say('Here are some recommended realistic fiction books:\n\nThe Hate U Give\n\n'+
                'A Monster Calls\n\nThe Kite Runner\n\nCurveball: The Year I Lost My Grip\n\n'+
                'The Fault in Our Stars\n\nDon\'t Breath a Word\n\nUnder the Mesquite\n\n'+
                'After ever After\n\nHalf Brother\n\nAnything but Typical\n\nDope Sick')
        });
    });

    // historical fiction
    controller.hears(['historical fiction', 'historical'], 'message_received', function(bot, message) {
        bot.startConversation(message, function(err,convo) {
            convo.say('Here are a few of the historical fiction books I have:\n\n'+
                'Among the Red Starts\n\nThe Gentleman\'s Guide to Vice and Virtue\n\n'+
                'Girl in the Blue Coat\n\nShadow of the Wolf\n\nThese Shallow Graves\n\n'+
                'Prisoner of Night and Fog\n\nCode Name Verity\n\nNever Fall Down\n\n'+
                'The Virgin Cure\n\nThe Diviners\n\nRuby Red\n\nThis Dark Endeavor\n\n'+
                'In the Path of Falling Objects\n\nThe Last of the Mohicans\n\nLady Macbeth\'s Daughter')
        });
    });

    // science fiction
    controller.hears(['sci fi', 'scifi', 'science fiction'], 'message_received', function(bot, message) {
        bot.startConversation(message, function(err,convo) {
            convo.say('Here are some titles for general science fiction:\n\nCan\'t Look Away\n\n'+
                'Cell: A Novel\n\nPirate Cinema\n\nFor the Win\n\nYou can also search for more sci fi '+
                'books by sub-genre, such as "time travel" or "dystopian."')   
        });
    });

    // lqbtq
    controller.hears(['lgbtq', 'lgbt', 'sexual orientation', 'gay', 'lesbian'], 'message_received', function(bot, message) {
        bot.startConversation(message, function(err,convo) {
            convo.say('I found a few books with LGBTQ-related themese:\n\n7 Days at the Hot Corner\n\n'+
                'Another Kind of Cowboy\n\nMore Happy Than Not\n\nTips on Having a Gay (ex) Boyfriend\n\n'+
                'Search for these books and more on your school library\'s card catalog.')  
        });
    });

    // transgender
    controller.hears(['transgender', 'transsexual', 'gender identity', 'trans'], 'message_received', function(bot, message) {
        bot.startConversation(message, function(err,convo) {
            convo.say(' I have some recommended titles for transgender/gender identity include:\n\n'+
                'Almost Perfect\n\nCrooked Letter I\n\nI am J\n\nLuna: A Novel') 
        });
    });

    // coming out
    controller.hears('coming out', 'message_received', function(bot, message) {
        bot.startConversation(message, function(err,convo) {
            convo.say('Here are a few titles for coming out:\n\nRainbow Boys\n\n'+
                'Talk\n\nMaria\n\nMikala') 
        });
    });

    // adventure
    controller.hears('adventure', 'message_received', function(bot, message) {
        bot.startConversation(message, function(err,convo) {
            convo.say('Here are a few of the books from the adenture genre:\n\n'+
                'The Adventures of Tom Sawyer\n\nFang: A Maximum Ride novel\n\n'+
                'The Count of Monte Cristo\n\nDead Man\'s Walk')   
        });
    });


    // spies
    controller.hears(['spies', 'spy', 'espionage'], 'message_received', function(bot, message) {
        bot.startConversation(message, function(err,convo) {
            convo.say('Here are some with spies and espionage:\n\nThe Tiger\'s Watch\n\n'+
                'Warcross\n\nThe Darkest Hour\n\nDon\'t Judge a Girl by Her\n\n'+
                'Only the Good Spy Young\n\nUglies\n\nThe Boxer and The Spy\n\n'+
                'Chains\n\nI\'d Tell You I Love You, but Then I\'d Have to Kill You\n')
            convo.say('Search for these titles and more on your school library\'s card catalog.')
        });
    });


    // supernatural
    controller.hears('supernatural', 'message_received', function(bot, message) {
        bot.startConversation(message, function(err,convo) {
            convo.say('Here are a few supernatural books:\n\nAnother Faust\n\n'+
                'Better Late Than Never\n\nBeing Dead\n\nBetrayals')
            convo.say('Search for these titles and more on your school library\'s card catalog.')
        });
    });

    // werewolves
    controller.hears(['werewolf','werewolves', 'lupine'], 'message_received', function(bot, message) {
        bot.startConversation(message, function(err,convo) {
            convo.say('Here are some recommendations for books with werewolves:\n\n'+
                'Bad Moon Rising\n\nBetrayals\n\nDead is a State of Mind\n\n'+
                'Forever\n\nTwilight\n\nFrostbite\n\nHold Me Closer, Necromancer\n\n'+
                'Full Moon\n\nMoonlight\n\nJealousy')
            convo.say('Search for these titles and more on the card catalog.')  
        });
    });


    // fae
    controller.hears(['faerie', 'fae', 'fairies'], 'message_received', function(bot, message) {
        bot.startConversation(message, function(err,convo) {
            convo.say('Here area few fiction books with fae/faeries:\n\n'+
                'The Darkest Part of the Forest\n\nBurn Mark\n\nEndlessly\n\n'+
                'The Good Neighbors\n\nPretty Monsters\n\nIronside\n\n'+
                'Valiant\n\nTithe\n\nNevernever')
            convo.say('Search for these titles and more on the card catalog.') 
        });
    });


    // mystery
    controller.hears('mystery', 'message_received', function(bot, message) {
        bot.startConversation(message, function(err,convo) {
            convo.say('I do have some titles to recommend in the mystery genre:\n\n'+
                'A Fierce and Subtle Poison\n\nGirl in the Blue Coat/La Chica del Abrigo Azul\n\n'+
                'Hollow City: The Graphic Novel\n\nPaper Girls\n\nReplica\n\nBlack Ice\n\n'+
                'House of Secrets\n\nCoraline\n\nThe Emperor of Any Place\n\n'+
                'All Our Pretty Songs\n\nThe Water Castle')
            convo.say('Search for these titles and more on the card catalog.') 
        });
    });

    // suspense
    controller.hears('suspense', 'message_received', function(bot, message) {
        bot.startConversation(message, function(err,convo) {
            convo.say('Right now I don\'t have any specific titles for this genre. But you can always\n' +
                'search your card catalog. If you would like to see mystery books, type "mystery"')   
        });
    });


    // thriller
    controller.hears('thriller', 'message_received', function(bot, message) {
        bot.startConversation(message, function(err,convo) {
            convo.say('Right now I don\'t have any specific titles for this genre. But you can always\n' +
                'search your card catalog. If you would like to see mystery books, type "mystery"')
        });
    });


    // graphic novels
    controller.hears(['graphic novels', 'manga'], 'message_received', function(bot, message) {
        bot.startConversation(message, function(err,convo) {
            convo.say('Right now I\'m not able to search this genre. But all '+
                'graphic novels and manga books are located in 741.5 in the nonfiction section.')   
        });
    });



}