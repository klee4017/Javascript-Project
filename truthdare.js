// JavaScript File
var truth = "truth";
var dare = "dare";



var displayTruth = document.getElementById('displayTruth');
var displayDare = document.getElementById('displayDare');



function generateTruth (){
    var truthArray = [
    "How many people have you dated?",
    "Would you rather spend a whole day with your favorite singer or a week with your crush?",
    "Who is your current crush?",
    "Who was the last person you texted?" ,
    "What do you do when you are alone in your bedroom?",
    "If you had to lick peanut butter off of any person in this room, who would it be?",
    "Would you rather get a small loan of a million dollars for going on a 3 day date with Justin Bieber or for giving Donald Trump a foot rub?",
    "If you had to have a bright light come from any part of your body, where would you let your light shine from",
    "When was the last time you peed your pants. Explain why in great detail.",
    "Who do you hate the most in the room? DO NOT EXPLAIN WHY!!!",
    "Who you you marry, fuck, and kill, in this room. You cannot use a person twice.",
    
  ];
    var truthResult = truthArray[Math.floor(Math.random() * truthArray.length)];
    displayTruth.innerHTML = truthResult;
    // generateTruth();
}

function generateDare (){
    var dareArray = [
    "Do 50 pushups" ,
    "Squirt 3 condiments (chosen by other players) into your mouth and don't spit it out. (wasabi, ketchup, soy sauce, etc)",
    "Every person you are playing with gets to hit your butt in any way they like (slapping, with a towel, etc)",
    "Lick a spread (like Nutella or mayo) off the floor. Recommended amount= bigger than a quarter.",
    "Make a smoothie from the first 4 things you find and drink it.",
    "Dip a piece of food (such as a banana or a chocolate bar) in the toilet and eat it.", 
    "run into a door",
    "Kiss the person to your right on the ear." ,
    "Sit on the lap of the person to your left",
    "Jump onto a pile of lego",
    "Give the person to your left a piggy back ride for the next 15 minutes. If you let them go, you will lose.",
    "Drink soup from the dirtiest shoe you can find.",
    "Find all of the used erasers in the building and keep them in your mouth for five minutes.",
    "Get a toilet brush and scrub your face for 30 seconds with it.",
    "Step outside of the house and scream, \'I LOVE DONALD TRUMP.\'",
    "You don;t have to do anything. FREE PASS",
    "EVERYONE HAS TO GIVE YOU TEN DOLLARS NO QUESTIONS ASKED",
    "Destroy your headphones (Cut them in half, rip them, stomp on them, etc).",
    "Go to a sneaker head (someone who loves his/her shoes) and lick one of their shoes.",
    "Dip a hat in vinager (or in the toilet if there is no vinegar) and wear the hat for 3 minutes.",
    "Tape your mouth for the rest of the game. have someone pull it off you at the end.",
    "Click the truth button. Then do as it says."
  ];
    var dareResult = dareArray[Math.floor(Math.random() * dareArray.length)];
    displayDare.innerHTML = dareResult;
    // generateDare();
}






