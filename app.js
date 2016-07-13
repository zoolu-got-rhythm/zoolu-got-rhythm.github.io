// loads function when window is ready
window.onload = function() {

    var keyboard = document.getElementById("keyboard");
    keyboard.style.borderRadius = "3px";

    var monitor = document.getElementById("screen");
    var beacon = "Hello world";
    var beaconLink = beacon.link("http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_str_link");
    var myProjects = [
        "i am a program deployed with the goal of telling future prospects about university life ",
        "at some point in time i was written by a student studying applied software engineering at cardiff university ",
        "his name was christopher but that doesnt matter for now ",
        "he wrote me using the skills learnt from his course to speak on his behalf about his experiences at university after one year ",
        "at the national software academy students are being taught what it means to write software in the twenty first century ",
        "they learn to write software as individuals but more importantly in teams ",
        "what my master likes most about software engineering is the ability to always change and update your creations in a costless manner ",
        "he believes this grants you a freedom not many other disciplines do ",
        "if any ",
        "theres a society for everyone at cardiff university ",
        "my master enjoyed the circus and photography societies during his time ",
        "his advice is you get involved in a couple and meet some like minded people ",
        "butttttttt ",
        "dont over do it ",
        "take your first steps towards a life changing journey as my master did ",
        "the ucas code in numerical and alphabetic digits issssssssss ",
        "fourr ",
        "jayyy ",
        "veeee ",
        "deeee ",
        "did you get that ",
        "good luck user ",
        "relaying message ",
    ];

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


    document.body.addEventListener("onload", textRoll(beacon));

    function textRoll(texToRoll) {

        var humanTyping = 50; // 105 is default speed
        var anim1 = setInterval(function () {
            message(texToRoll)
        }, 10);

        function message(screenText) {
            // dynamically alter typing speed for realistic human effect at each interval.
            // humanTyping = Math.round(Math.random() * 500);
            console.log(humanTyping);
            console.log("message function started and iterating");

            letterSpace++;
            keyPress(screenText.substring(letterSpace - 1, letterSpace));


            var character = document.createElement("p");

            character.innerHTML = screenText.substring(letterSpace - 1, letterSpace).link("http://eloquentjavascript.net/");//.toUpperCase();
            //character.link("http://eloquentjavascript.net/");
            monitor.appendChild(character);
            character.classList.add('characters');

            // console.log(letterSpace);
            // console.log(screenText.length);

            if (letterSpace === screenText.length) {
                clearInterval(anim1);
                letterSpace = 0;
                //rewind("bye bye");

                siteLinks = true;

                console.log("looping through array index" + i);

                switch (linkIndex) {
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
                    case 5:
                        rewind(myProjects[linkIndex]);
                        break;
                    case 6:
                        rewind(myProjects[linkIndex]);
                        break;
                    case 7:
                        rewind(myProjects[linkIndex]);
                        break;
                    case 8:
                        rewind(myProjects[linkIndex]);
                        break;
                    case 9:
                        rewind(myProjects[linkIndex]);
                        break;
                    case 10:
                        rewind(myProjects[linkIndex]);
                        break;
                    case 11:
                        rewind(myProjects[linkIndex]);
                        break;
                    case 12:
                        rewind(myProjects[linkIndex]);
                        break;
                    case 13:
                        rewind(myProjects[linkIndex]);
                        break;
                    case 14:
                        rewind(myProjects[linkIndex]);
                        break;
                    case 15:
                        rewind(myProjects[linkIndex]);
                        break;
                    case 16:
                        rewind(myProjects[linkIndex]);
                        break;
                    case 17:
                        rewind(myProjects[linkIndex]);
                        break;
                    case 18:
                        rewind(myProjects[linkIndex]);
                        break;
                    case 19:
                        rewind(myProjects[linkIndex]);
                        break;
                    case 20:
                        rewind(myProjects[linkIndex]);
                        break;
                    case 21:
                        rewind(myProjects[linkIndex]);
                        break;
                    default:
                        rewind(myProjects[linkIndex]);
                        siteLinks = false;
                        // clearInterval(anim1);
                        break;
                }

                if (siteLinks === true) {
                    linkIndex++;
                }else{
                    linkIndex = 0;
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
        // if(toggleOff) soundEffect.pause();
        soundEffect.play();
        var letterPos = alphabet.indexOf(key.toLowerCase());
        //console.log(key);
        //console.log(letterPos);

        if (toggleOff) {
            keyNodes[prevLetterPos].classList.remove("keypress");
        }
        keyNodes[letterPos].classList.add("keypress");
        prevLetterPos = letterPos;
        if (!toggleOff)
            toggleOff = true;
    }


    function rewind(response) {
        //remove children/letters from the computer monitor.
        var letterSpace = monitor.children.length;
        //alert(letterSpace);

        var anim2 = setInterval(function () {
            message()
        }, 30);

        function message() {
            letterSpace--;

            monitor.removeChild(monitor.childNodes[letterSpace + 5]);
            //monitor.childNodes[letterSpace].style.borderBottom = "2px solid #00ff00";

            if (letterSpace === 0) {
                clearInterval(anim2);
                //console.log(beacon);
                textRoll(response);  //beacon
            }
        };
    };
}