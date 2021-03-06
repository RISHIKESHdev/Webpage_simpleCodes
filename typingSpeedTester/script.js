const testWrapper = document.querySelector(".test-wrapper");
const testArea = document.querySelector("#test-area");
const originText = document.querySelector("#origin-text p").innerHTML;
const resetButton = document.querySelector("#reset");
const theTimer = document.querySelector(".timer");

var timer=[0,0,0,0];
var interval;
var timerr=false;
// Add leading zero to numbers 9 or below (purely for aesthetics):
function leadingZero(time){
    if(time<=9){
        time="0"+time;
    }
    return time;
}

// Run a standard minute/second/hundredths timer:
function runTimer(){
    let currentTime=leadingZero(timer[0])+':'+leadingZero(timer[1])+':'+leadingZero(timer[2]);
    theTimer.innerHTML=currentTime;
    timer[3]++;
    timer[0]=Math.floor((timer[3]/100)/60)
    timer[1]=Math.floor((timer[3]/100)-(timer[0]*60))
    timer[2]=Math.floor(timer[3]-(timer[1]*100)-(timer[0]*6000))
}

// Match the text entered with the provided text on the page:
function spellCheck(){
    let textEntered=testArea.value;
    let originTextMatch=originText.substring(0,textEntered.length);
    if(textEntered==originText){
        clearInterval(interval);
        testWrapper.style.borderColor="#429890";
    }
    else{
        if(textEntered==originTextMatch){
            testWrapper.style.borderColor="#65CCf3";
        }
        else{
            testWrapper.style.borderColor="#E95D0F";
        }
    }
}

// Start the timer:
function start(){
    let textEnterLength=testArea.value.length;
    if (textEnterLength===0 && !timerr){
        timerr=true;
        interval=setInterval(runTimer,10);
        console.log(timerr);
    }
    console.log(textEnterLength);
}

// Reset everything:
function reset(){
    clearInterval(interval);
//    This just ensures the browser's not running in interval in the background after we start a new one because that would just waste a lot of resources. 
    interval=null;
//     We do this so that when we reassign set interval the next time we start the app we're not setting up a new interval with a new index number because then again we'll be running multiple processes in the browser simultaneously and waste a lot of resources. 
    timer=[0,0,0,0]
    timerr=false;

    testArea.value="";
    theTimer.innerHTML="00:00:00";
    testWrapper.style.borderColor=grey;
}

// Event listeners for keyboard input and the reset button:
testArea.addEventListener("keypress",start,false);
testArea.addEventListener("keyup",spellCheck,false);
resetButton.addEventListener("click",reset,false);