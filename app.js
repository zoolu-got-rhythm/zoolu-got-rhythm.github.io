var keyboard = document.getElementById("keyboard");
keyboard.style.borderRadius="3px";

var monitor = document.getElementById("screen");
var beacon = "Hello world";
var beaconLink = beacon.link("http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_str_link");
var myProjects = ["i am a student studying applied software engineering at cardiff university ", "ive written this program using skills learnt from my first year to speak on my behalf about my univeristy experience thus far ",
    "at the national software academy we are being taught what it means to write software in the twenty first century ", "we learn to write software as individuals but more importantly in teams ", "give my course a google and take your first step towards a life changing journey as i have ",
"good luck "];
var alphabet = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d",
 "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m", " "];

var i = 0;
var letterSpace = 0;
var linkIndex = 0;
var siteLinks;

var spawn;

var row1 = document.createElement("div");
 row1.classList.add('row1');
var row2 = document.createElement("div");
 row2.classList.add('row2');
var row3 = document.createElement("div");
 row3.classList.add('row3');
var row4 = document.createElement("div");
 row4.classList.add('row4');

var keyNodes = [];

while( i <= 26 ){

    i++;
    //spawn creates each key and add's on event listener and styling ref.

    spawn = document.createElement("div");
    spawn.onclick = expand.bind(this, (i-1));
    spawn.classList.add('spawn');
    keyNodes.push(spawn);

    if( i < 11 ){
        //create and append spawns to row 1.
        row1.appendChild(spawn);
        keyboard.appendChild(row1);
        spawn.innerHTML = alphabet[i-1].toUpperCase();

    } else if( i < 20 ){
        //create and append spawns to row 2.
        row2.appendChild(spawn);
        keyboard.appendChild(row2);
        spawn.innerHTML = alphabet[i-1].toUpperCase();

    } else if( i < 27 ){
        //create and append spawns to row 3.
        row3.appendChild(spawn);
        keyboard.appendChild(row3);
        spawn.innerHTML = alphabet[i-1].toUpperCase();
    }
    else{
        //create and appends the spacebar.
        row4.appendChild(spawn);
        keyboard.appendChild(row4);
        spawn.style.width="150px";
        spawn.innerHTML = alphabet[i-1].toUpperCase();
    }
}





document.body.addEventListener("onload", textRoll(beacon));

function textRoll(texToRoll){

    var humanTyping = 50;
    var anim1 = setInterval( function(){ message(texToRoll) }, humanTyping );

    function message(screenText){
        // dynamically alter typing speed for realistic human effect at each interval.
        // humanTyping = Math.round(Math.random() * 500);
        console.log(humanTyping);
        console.log("message function started and iterating");

        letterSpace++;
        keyPress(screenText.substring(letterSpace-1, letterSpace));


        var character = document.createElement("p");

        character.innerHTML = screenText.substring(letterSpace-1, letterSpace).link("http://eloquentjavascript.net/");//.toUpperCase();
        //character.link("http://eloquentjavascript.net/");
        monitor.appendChild(character);
        character.classList.add('characters');

        console.log(letterSpace);
        console.log(screenText.length);

        if(letterSpace === screenText.length){
            clearInterval(anim1);
            letterSpace = 0;
            //rewind("bye bye");

            siteLinks = true;

            console.log("looping through array index" + i);

            switch(linkIndex){
                case 0:
                    rewind(myProjects[linkIndex]); //message to be rolled out after the text is deleted. beacon string or?
                    break;
                case 1:
                    rewind(myProjects[linkIndex]);
                    break;
                case 2:
                    rewind(myProjects[linkIndex]);
                    break;
                case 3:
                    rewind(myProjects[linkIndex]);
                    break;
                case 4:
                    rewind(myProjects[linkIndex]);
                    break;
                default:
                    rewind(myProjects[linkIndex])
                    break;
            }


            if(siteLinks === true){
                linkIndex++;
                heed();
            }
            console.log("message function scanned and cleared");
        }
    }

}; //end of textRoll






//buzzword collects specific key'd input.
var buzzword = [];


//this function will key in input to the monitor when the keys are clicked.

function expand(x){

    var character = document.createElement("p");
    character.innerHTML = alphabet[x];
    monitor.appendChild(character);
    character.classList.add('characters');


    //checks for certain letters that eventualy equate to "yes" or "no".
    if( alphabet[x] === "y" || alphabet[x] === "e" || alphabet[x] === "s" ){
        //alert("hah you typed y.");
        buzzword.push(alphabet[x]);
        //alert(alphabet[x]+ " " + "recognized.");
    }else if( alphabet[x] === "n" || alphabet[x] === "o" ){
        buzzword.push(alphabet[x]);
        //alert(alphabet[x]+ " " + "recognized.");
    }else{
        buzzword.length = 0;

    }
    /*this function is invoked and references up a level to the
    global execution context for the heed function.*/
    heed();
};



// side effects of func keyPress
var prevLetterPos;
var toggleOff = false;

function keyPress(key){
    // soundEffect..
    var soundEffect = new Audio("keyboard_key.mp3");
    // if(toggleOff) soundEffect.pause();
    soundEffect.play();
    var letterPos = alphabet.indexOf(key.toLowerCase());
    //console.log(key);
    //console.log(letterPos);

    if(toggleOff){
        keyNodes[prevLetterPos].classList.remove("keypress");
    }
    keyNodes[letterPos].classList.add("keypress");
    prevLetterPos = letterPos;
    if(!toggleOff)
        toggleOff = true;
}












//this function checks for matches that the user has typed.

function heed(){
    if( buzzword[0] === "y" && buzzword[1] === "e" && buzzword[2] === "s" ){
    //alert("you said YES! OH MY GOSH, you want to see my work!");
          siteLinks = true;

          console.log("looping through array index" + i);

          if(linkIndex === 0){
            rewind(myProjects[linkIndex]); //message to be rolled out after the text is deleted. beacon string or?
          }
          else if(linkIndex === 1){
            rewind(myProjects[linkIndex]);
          }
          else if(linkIndex === 2){
            rewind(myProjects[linkIndex]);
          }
          else if(linkIndex === 3){
            rewind(myProjects[linkIndex]);
          }
          else{
            rewind("what do you wish too see next? 'skills', 'sites', 'langs'. Press the spacebar if you makea a mistake. ");
            siteLinks = false; //turn off the switch.
            linkIndex = 0; //reset the iterator.
          }
    }

    //loader();
    if( buzzword[0] === "n" && buzzword[1] === "o" ){
        //alert("ohh, fine! well you know the magic word if you change your mind.");
        rewind("fine then!, Hell I'll show you anyway...."); //message to be rolled out after the text is deleted.
    }
}




function rewind(response){
    //remove children/letters from the computer monitor.
    var letterSpace = monitor.children.length;
    //alert(letterSpace);

    var anim2 = setInterval( function(){ message() }, 30 );

    function message(){
        letterSpace--;

        monitor.removeChild(monitor.childNodes[letterSpace + 5]);
        //monitor.childNodes[letterSpace].style.borderBottom = "2px solid #00ff00";

        if( letterSpace === 0 ){
            clearInterval(anim2);
            //console.log(beacon);
            textRoll(response);  //beacon
        }
    };
};



/*

var change = true;

document.getElementById("instruction").addEventListener("click", function(){



  //alert("works!");
  if ( change === true){
    document.getElementById("manual").style.visibility = "visible";
    change = false;
  } else {
    document.getElementById("manual").style.visibility = "hidden";
    change = true;
  }

   //document.getElementById("manual").style.background = "#555";


});

*/
