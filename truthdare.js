// JavaScript File
var truth = "truth";
var dare = "dare";



var displayTruth = document.getElementById('displayTruth');
var displayDare = document.getElementById('displayDare');



function generateTruth (){
    var truthArray = [
    "How many people have you dated?" ,
    "Would you rather spend a whole day with your favorite singer or a week with your crush?",
  ];
    var truthResult = truthArray[Math.floor(Math.random() * truth.length)];
    displayTruth.innerHTML = truthResult;
    generateTruth();
}

function generateDare (){
    var dareArray = [
    "Tim" ,
    "John",
    "Sam"
  ];
    var dareResult = dareArray[Math.floor(Math.random() * dareArray.length)];
    displayDare.innerHTML = dareResult;
    generateDare();
}






