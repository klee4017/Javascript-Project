 // JavaScript File
 var theChanger = document.getElementById("theChanger");
 var backgroundColor = document.getElementById("background");
 var buttonOne = document.getElementById("buttonOne");
 var buttonTwo = document.getElementById("buttonTwo");
 var buttonThree = document.getElementById("buttonThree");
 var buttonFour = document.getElementById("buttonFour");
 var buttonFive = document.getElementById("buttonFive");
 var buttonSix = document.getElementById("buttonSix");
 var buttonSeven = document.getElementById("buttonSeven");
 var buttonEight = document.getElementById("buttonEight");
 var buttonNine = document.getElementById("buttonNine");
 var buttonTen = document.getElementById("buttonTen");
 var noChange1 = document.getElementById("nochange1");
 var noChange2 = document.getElementById("change2");
 
 
 noChange1.addEventListener("click", function(){
  theChanger.style.color = "";
  });
  noChange2.addEventListener("click", function(){
  theChanger.style.border = "";
  });
  
buttonOne.addEventListener("click", function(){
 theChanger.style.color = "red" ;
});
buttonTwo.addEventListener("click", function(){
 theChanger.style.color = "blue" ;
});
buttonThree.addEventListener("click", function(){
 theChanger.style.color = "#7FFF00" ;
});
buttonFour.addEventListener("click", function(){
 theChanger.style.color = "magenta" ;
});
buttonFive.addEventListener("click", function(){
 theChanger.style.color = "green" ;
});


buttonSix.addEventListener("click", function(){
 theChanger.style.border = "solid yellow 10px";
});
buttonSeven.addEventListener("click", function(){
 theChanger.style.border = "dashed #FA8072 15px" ;
});
buttonEight.addEventListener("click", function(){
 theChanger.style.border = "dotted #1E90FF 15px" ;
});
buttonNine.addEventListener("click", function(){
 theChanger.style.border = "double #2E8B57 12.5px" ;
});
buttonTen.addEventListener("click", function(){
 theChanger.style.border = "ridge gray 30px" ;
});
