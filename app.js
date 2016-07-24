
window.onload = function() {

    var keyboard = document.getElementById("keyboard");
    keyboard.style.borderRadius = "3px";

    var monitor = document.getElementById("screen");
    var beacon = "Hello world";
    var beaconLink = beacon.link("http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_str_link");

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

    var keyboardSlider = document.getElementById("typingSpeed");

    var keyNodes = [];

    // init all of this stuff into memory and into the dom.
    function init() {
        while (i <= 26) {
            i++;
            //spawn creates each key and add's on event listener and styling ref.

            spawn = document.createElement("div");
            //spawn.onclick = expand.bind(this, (i-1));
            spawn.classList.add('spawn');
            keyNodes.push(spawn);

            if (i < 11) {
                //create and append spawns to row 1.
                row1.appendChild(spawn);
                keyboard.appendChild(row1);
                spawn.innerHTML = alphabet[i - 1].toUpperCase();

            } else if (i < 20) {
                //create and append spawns to row 2.
                row2.appendChild(spawn);
                keyboard.appendChild(row2);
                spawn.innerHTML = alphabet[i - 1].toUpperCase();

            } else if (i < 27) {
                //create and append spawns to row 3.
                row3.appendChild(spawn);
                keyboard.appendChild(row3);
                spawn.innerHTML = alphabet[i - 1].toUpperCase();
            }
            else {
                //create and appends the spacebar.
                row4.appendChild(spawn);
                keyboard.appendChild(row4);
                spawn.style.width = "150px";
                spawn.innerHTML = alphabet[i - 1].toUpperCase();
            }
        }
    }


    function textRoll(texToRoll) {

        var humanTyping = 50; // 105 is optimal starting speed

        var work = function(){
            clearTimeout(anim1);
            console.log("func ran");
            anim1 = setTimeout(work, keyboardSlider.value);
            message(texToRoll);
        }

        var anim1 = setTimeout(work, keyboardSlider.value);

        function message(screenText) {
            // dynamically alter typing speed for realistic human effect at each interval.
            letterSpace++;
            keyPress(screenText.substring(letterSpace - 1, letterSpace));

            var character = document.createElement("p");

            character.innerHTML = screenText.substring(letterSpace - 1, letterSpace).link("http://eloquentjavascript.net/");//.toUpperCase();
            //character.link("http://eloquentjavascript.net/");
            monitor.appendChild(character);
            character.classList.add('characters');

            if (letterSpace === screenText.length) {
                // alert('freeze and clear');
                clearTimeout(anim1);
                console.log(anim1);
                console.log("WAITING FOR REWIND TO BE POPPED OFF STACK");
                letterSpace = 0;

                // recursive
                // could be a delay of x time before calling. as setTimeout is asynchronous and non-blocking
                var delay = rewind();
                window.setTimeout(function(){
                    textRoll(myProjects[linkIndex])
                }, delay);

                if(linkIndex === myProjects.length - 1){
                    linkIndex = 0;
                }else{
                    linkIndex++;
                }

                console.log("message function scanned and cleared");
            }
        }

    }; //end of textRoll


// side effects of func keyPress
    var prevLetterPos;
    var toggleOff = false;

    function keyPress(key) {
        // soundEffect..
        var soundEffect = new Audio("keyboard_key.mp3");
        soundEffect.play();

        var letterPos = alphabet.indexOf(key.toLowerCase());

        if (toggleOff) {
            keyNodes[prevLetterPos].classList.remove("keypress");
        }
        keyNodes[letterPos].classList.add("keypress");
        prevLetterPos = letterPos;
        if (!toggleOff)
            toggleOff = true;
    }


    function rewind(response, speed) {
        //remove children/letters from the computer monitor.
        var letterSpace = monitor.children.length;
        //alert(letterSpace);

        var calls = function () {
            clearTimeout(anim2);
            anim2 = setTimeout(calls, 30);
            message();
        }

        var anim2 = setTimeout(calls, 30);

        function message() {
            letterSpace--;
            monitor.removeChild(monitor.lastElementChild);

            if (letterSpace === 0) {
                clearInterval(anim2);
                console.log("CLEARED");
            }
        }
        console.log("but wait");
        return letterSpace * 30 + 190; // the 190
    }

    init();
    // change to link onclick
    document.body.addEventListener("onload", function(){
        textRoll(myProjects[0]);
    });
}

