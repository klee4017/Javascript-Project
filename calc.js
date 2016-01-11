var button = document.getElementById("submitButton");
var input1 = document.getElementById('input1');
var input2 = document.getElementById('input2');
var answer;
var display = document.getElementById('display');
var dropdown = document.getElementById("dropdown");

button.addEventListener("click", doMath);



function doMath() {
    if (dropdown.value == "+"){
        answer = parseInt(input1.value) + parseInt(input2.value);
        display.innerHTML = answer;
    }
    /*the above function allows the viewer to add numbers in the drop down menu. */
    else if (dropdown.value == "-"){
        answer = parseInt(input1.value) - parseInt(input2.value);
        display.innerHTML = answer;
    
    }
    else if (dropdown.value == "x"){
        answer =parseInt(input1.value) * parseInt(input2.value);
        display.innerHTML = answer;
    
    }
    else if (dropdown.value == "/"){
        answer = parseInt(input1.value) / parseInt(input2.value);
        display.innerHTML = answer;
    
    }
    else if (dropdown.value == "^"){
        answer =  Math.pow(parseInt(input1.value), parseInt(input2.value));
        display.innerHTML = answer;
    }
    else {console.log("Please try again.")
        
    }
}