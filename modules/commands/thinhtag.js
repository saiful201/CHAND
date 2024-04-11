
module.exports.config = {
    name: "thính",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "Leo",
    description: "Give love",
    commandCategory: "Lover",
    usages: "[tag]",
    cooldowns: 5
};

module.exports.run = async ({ api, event}) => {
   const { threadID, messageID, senderID } = event;
     async function getUserInfo(userID) {
            const userInfo = await api.getUserInfo(userID);
            return {gender: userInfo[userID].gender };
     }
    const gai = ["Can I follow you? Because I was always told by my parents to follow my dreams.",

        "Blue sky, white clouds. Do you love the sun or do you love me?",

        "Thanks to the sun, we can see the rainbow. Thanks to you, we can see the color of happiness.",

        "Honey, oh dear. Where are you?.",

        "The handsome man belongs to the love language. And you are only mine.",

        "In the middle of life, there are thousands of temptations. I just need to stop at you.",

        "Dandals fly when the wind blows. I only laugh because you are there.",

        "As long as you say I love you, I will follow you for life. The girl is trying to turn on the green light. She wants to suggest that she is very faithful. You should try confessing.",

        "Thirty is not Tet. Not being friends is not the end, you can still be lovers.",

        "Someone lend me an avatar so I don't feel lonely.",

        "The sun has a hat, the rain has an umbrella, who will you have?",

        "My future husband, I've been waiting for you for a long time.",

        "It's raining, why haven't you poured me yet?",

        "Have you been feeling tired lately? Why keep walking in my heart forever.",

        "Brother, is it hot? My heart is on fire.",

        "What are you! I lost this lover.",

        "Why do you keep smiling. My skin is black.",

        "It's night, but why is my heart still so full of sunshine?",

        "Is there still room in your heart? I want to move but I can't find a place yet.",

        "Drink with the wrong eyes, drunkenness for a lifetime!",

        "I like you more than salt in the sea..."

        "I've read all of .Ten Thousand Questions. Why but still don't understand why I like you so much.",

        "The road is long, my legs are short. How far must I go before I can find you.",

        "You're beautiful, but you don't belong to anyone yet.",

        "I'm tired of listening, someone let me dump it once.",

        "Is life so busy that you still haven't found me?.",

        "If possible, let me love you for once, okay?",

        "Age doesn't matter to me, the problem is do you have a driver's license?",

        "Moon to the top of the mountain, the moon is set. Do you really love me or do you love playing?",

        "If there's a lot of storms out there, come here with me.",

        "I don't want to sleep late, just waiting for someone to say good night.",

        "Banyan tree, water well. When will I be alone?.",

        "Everybody in this world loves each other, only you alone in a corner.",

        "It takes someone to care to feel loved.",

        "Brother, can I borrow a flashlight? It's too dark, I can't find my way into your heart.",

        "What do you do when you're drunk and drunk? You get drunk on me.",

        "Dare someone to say they love me.",

        "I'm eating BAO and I want to burst my stomach.

        "It's been a long time, I don't know how it feels to go out to eat, go to the movies, too much homework. Is anyone free today?.",

        "Does anyone want to hang out with me when I'm free ...",

        "Hey brother, I'll see for you to see what's in my eyes. See, it's all your silhouette!.",

        "Do you know a lot about Anesthesia? And I sum it up as you.",

        "Have you noticed that my skin is black these days? Because I'm busy looking at your Sunshine smile.",

        "I'm sorry, what are you doing and falling into my heart!.",

        "Do you know how to install Win? Install for me any operating system that has the main interface as you!.",

        "I think we have something in common. That's you love yourself, and I love you too!",

        "Brother, can I borrow a flashlight. It's so dark I don't know the way to your heart.",

        "Do you know how to fix TV. Why are all channels showing nostalgia for you like this!.",

        "Brother, do you understand the way back and forth here. Show me which way to get rid of my nostalgia!.",

        "Hey brother, do you have a brother or a brother? I don't believe there are two angels in this world!",

        "Who dares to say that the happiest place is heaven. That person must not know the moment when you smile!",

        "If nothing is forever, can you be my 'nothing'?",

        "Can you lend me a kiss? I promise to return it in full."
    ];
    const trai = ["Do you want your children to have my DNA in the future?",

        "I allow you to stay in my heart forever.",

        "What's in your eyes? Looks like me.",

        "The fate is destined, not in your heart, I will definitely be empty.",

        "Does your house sell alcohol, but why does talking to you make me dizzy? This guy is so cool. A way of flirting with a strong impression.",

        "There are many ways to be happy. The fastest is to see you.",

        "Let me love you for once.",

        "Today is March 14, why hasn't anyone given you a gift yet?",

        "Is there a place in your heart for me?",

        "Is the speed of your heart fast? Let me calculate the distance to your heart..",

        "Clouds are heaven, you are mine (tag the owner's name) Claim your sovereignty. If you can tag your name in, from now on, it's forbidden to hang out.",

        "There's a great wedding out there. When will it be my turn?",

        "My hand is very warm, do you want to try it?",

        "1, 2, 3, 5 did you miss any beat?.",

        "You are beautiful, will you be my mother's daughter-in-law?",

        "Need a rainy sister!",

        "If only I had a lover to explore the world with.",

        "I'm handsome too, why doesn't anyone notice?.",

        "My hand is very cold in winter, but I am still willing to warm your hand.",

        "Everybody loves beauty, so I love you.",

        "Big storm, fallen tree. Why haven't you fallen for me yet?",

        "Is your father a jeweler? Why do you look like a diamond?",

        "To the world, you are only one person. To me, you are the whole world.",

        "Is your father a thief? How can you steal a star and stick it in your eyes like that?.",

        "I'm like this, are you qualified to be my boyfriend?.",

        "Do you want to be my only Sun?",

        "Hey baby, my mother is calling her daughter-in-law.",

        "Now if there's a girl willing to be with me, I'll make her happy forever.",

        "As long as you love me, the whole world will let me take care of it.",

        "This life is definitely not what you want, so I will be what you want.",

        "Can you take me to the bakery? Because I want a Cutie just like you.",

        "Can I ask you a question?… You look familiar….I think? Do we know each other? (If you kill a strange girl, you'll definitely say no)…That's it. You look like me. very similar to your future lover. ?.",

        "I'm…. What's your name? (My name's Quynh Anh) Quynh Anh The name is beautiful, but in the future I won't name my daughter Quynh Anh because I have to be on the board all day.",

        "I want to ask you a question…actually it's not a question. I just wanted to say... If you were CocaCola, I'd be Pepsi! (Meaning we make a nice drink pairing) ).",

        "I'm tired of listening, someone cut it so I can try it once.",

        "I bet you you're a professional thief. Because I just saw you here and in a flash you stole my heart.",
    
        "It rained heavily that day, I met you, you didn't see me, I didn't see the rain.",

        "How many kilograms does a polar bear weigh? (Usually the girls will answer no) A: I don't know either but I know the polar bear is heavy enough to break the ice between us.",

        "If every time I think of you, I get 500 dong, I'm far ahead of Bill Gates by now."

        "Do you know that I miss you so much? I don't eat well but sleep like crazy, I forget to wear my shoes, forget to brush my teeth at breakfast, I use gasoline to wash rice, I'm stupid just because I love you. ",

        "Honey! What job are you….? Why do you appear in my dreams every night? I don't know what to do anymore. Be my lover!.",

        "Baby! When you read this message, you owe me a date. Delete this message, I owe you love. Save the message that you owe me a kiss. Answer me, I owe you everything. And if If you don't answer, I'll love you!!! hihi.",

        "The only thing your eyes haven't told me is your name."
                  
        "I'd rather smell your hair once. I'd rather squeeze your hand once, I'd rather taste the sweetness of your kiss, than live an immortal life without control. there.",
                  
        "The addiction to staying up at night with nostalgia for you, I tried but couldn't fix it.",
                  
        "I wanted to send this message to you today because I feel unusually in love with you today.",
        
        "I hate you so much you know? Because all day long you keep hovering in my head, making me unable to think of anything...huhu."

    ];
  var mention = Object.keys(event.mentions);
   const data = await getUserInfo(senderID);
  if (Object.keys(event.mentions).length == 1) {
    if (data.gender == 2 ) {
        api.sendMessage(`Send a message to ${event.mentions[mention].replace("@", "")}:\n${trai[Math.floor(Math.random() * trai.length)]}`,threadID, messageID);
    }
    if (data.gender == 1 ) {
        api.sendMessage(`Send a message to ${event.mentions[mention].replace("@", "")}:\n${gai[Math.floor(Math.random() * gai.length)]}`, threadID, messageID);
    }
  }
  else {
    if (data.gender == 2) {
     api.sendMessage(`${trai[Math.floor(Math.random() * trai.length)]}`,threadID, messageID); 
    }
    if (data.gender == 1 ) {
     api.sendMessage(`${gai[Math.floor(Math.random() * gai.length)]}`, threadID, messageID);
    }
  }
  
}