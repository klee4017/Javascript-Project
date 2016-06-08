// JavaScript File
//* this variable is linked in the html page for my truth or dare page as it determins which truth or dare shows up for the person to do/answer.
var display = document.getElementById('display');


//*these 2 functions are used to randomize the possible outcomes a user could get. 

function generateTruth (){
    var truthArray = [
    "How many people have you dated?",
    "Would you rather spend a whole day with your favorite singer or a week with your crush?",
    "Who is your current crush? If you have more than one, only name one",
    "Who was the last person you texted and what was the conversation about?" ,
    "What do you do when you are alone in your bedroom?",
    "If you had to lick a spread or sauce (peanut butter, Nutella, Ketchup, etc) off of any person in this room, who would it be?",
    "Would you rather get a small loan of a million dollars for going on a 3 day date with Justin Bieber or for giving Donald Trump a foot rub?",
    "If you had to have a bright light shine from any part of your body, where would you let it shine?",
    "When was the last time you peed your pants. Explain why in great detail.",
    "Who do you hate the most in the room? DO NOT EXPLAIN WHY!!! YOU MUST ANSWER THIS QUESTION",
    "Who you you marry, fuck, and kill, in this room. You cannot use a person more than once.",
    "Who do you see yourself with in the future (spouse, boy/girlfriend, single, etc)",
    "You don't have to say anything. FREE PASS",
    
  ];
    var truthResult = truthArray[Math.floor(Math.random() * truthArray.length)];
    display.innerHTML = truthResult;
    // generateTruth();
}

function generateDare (){
    var dareArray = [
    "Do 50 pushups" ,
    "Squirt 3 condiments (chosen by other players) into your mouth and don't spit it out. (wasabi, ketchup, soy sauce, etc)",
    "Every person you are playing with gets to hit your butt in any way they like (slapping, with a towel, with a pen, etc)",
    "Lick a spread (like Nutella or mayo) off the floor. Recommended amount= size of a quarter.",
    "Make a smoothie from the first 4 things you find (edible only, things you would not think of as food would not be included) and drink it. Must have either some sort of milk, juice, or water as a base. ",
    "Dip a piece of food (such as a banana or a chocolate bar) in the toilet and eat it.", 
    "Run into a door",
    "Give everyone in the room $5. No questions asked",
    "Kiss the person to your right. The people you are playing with decide where. The person you are kissing must be okay with where you are kissing them." ,
    "Sit on the lap of the person to your left",
    "Jump onto legos (must be more than one lego and must make physical contact)",
    "Give the person to your left a piggy back ride for the next 5 minutes. If you let them go, you will lose. If they have to do a dare, you are allowed to put them down, but your time stops until you pick them back up.",
    "Find a used eraser keep it in your mouth for two minutes. Game can continue if the grouop decides to.",
    "Get a toilet brush (or toothbrush or washcloth if a toilet brush is not present) and scrub your face for 30 seconds with it.",
    "Go outside and yell, \'I LOVE DONALD TRUMP.\'",
    "You don't have to do anything. FREE PASS",
    "EVERYONE HAS TO GIVE YOU TEN DOLLARS NO QUESTIONS ASKED",
    "Destroy your headphones (Cut them in half, rip them, stomp on them, etc).",
    "Go to a sneaker head (someone who loves his/her shoes) and lick one of their shoes.",
    "Dip a hat in vinager (or in the toilet if there is no vinegar) and wear the hat for 3 minutes.",
    "Tape your mouth for the rest of the game then have someone pull it off you at the end. If you click true or there is one involving eating or your mouth, you must take the tape off then replace it when you have finished.",
    "Click the truth button. Then do as it says."
  ];
    var dareResult = dareArray[Math.floor(Math.random() * dareArray.length)];
    display.innerHTML = dareResult;
    // generateDare();
}






