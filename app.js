
var terminal = (function(data) {

    // global state

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
    var anim1, anim2;


    return {

        read: (function(){
            // internal state
            var active = true;
            var closureScope;
            return {
                test: console.log("in read object this refers too: " + this),
                // init all of this stuff into memory and into the dom.

                // setter
                toggleActiveStatus:function(){
                    active = !active;
                },

                getActiveStatus: function(){
                    return active;
                },

                // observer method
                update: function() {
                    // work it needs to do
                    clearTimeout(anim1);
                    clearTimeout(anim2);
                    //console.log(this);
                    //closureScope.rewind();
                },

                init: function () {
                    // locks in a reference to the original 'this' context after first closure execution. (should change this hack)
                    closureScope = this;

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

                    // start program
                    console.log(this);
                    console.log(keyNodes);
                    this.textRoll(data[0]);
                },


                textRoll: function (texToRoll) {

                    var self = this;
                    var humanTyping = 50; // 105 is optimal starting speed

                    var work = function () {
                        clearTimeout(anim1);
                        console.log("func ran");
                        anim1 = setTimeout(work, keyboardSlider.value);
                        message(texToRoll);
                    }

                    anim1 = setTimeout(work, keyboardSlider.value);

                    function message(screenText) {
                        // dynamically alter typing speed for realistic human effect at each interval.
                        letterSpace++;
                        self.keyPress(screenText.substring(letterSpace - 1, letterSpace));

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
                            var delay = self.rewind();
                            window.setTimeout(function () {
                                self.textRoll(data[linkIndex])
                            }, delay);

                            if (linkIndex === data.length - 1) {
                                linkIndex = 0;
                            } else {
                                linkIndex++;
                            }

                            console.log("message function scanned and cleared");
                        }
                    }

                }, //end of textRoll


                keyPress: (function () {
                    // side effects of func keyPress
                    console.log("keypress ran and made closure");
                    var prevLetterPos;
                    var toggleOff = false;

                    return function keyPress(key) {
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
                })(),

                rewind: function (response, speed) {
                    //remove children/letters from the computer monitor.
                    var letterSpace = monitor.children.length;
                    //alert(letterSpace);

                    var calls = function () {
                        clearTimeout(anim2);
                        anim2 = setTimeout(calls, 30);
                        message();
                    }

                    anim2 = setTimeout(calls, 30);

                    function message() {
                        letterSpace--;
                        monitor.removeChild(monitor.lastElementChild);

                        if (letterSpace === 0) {
                            clearInterval(anim2);
                            console.log("CLEARED");
                        }
                    }

                    console.log("but wait");
                    return letterSpace * 30 + 190; // the 190 is to add an extra time delay
                }
            }
        })(),

        write: (function () {
            // local state
            var messageData = "";
            var asciiKeys = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
            var self = this;
            var subscribers = [];

            return {

                test: console.log("in write object this refers too: " + this),

                subscribe: function(fn){
                    subscribers.push(fn);
                },

                unsubscribe: function(){
                    subscribers.pop();
                    //delete subscribers[subscribers.indexOf(obj.nameValue)];
                },

                notify: function(funcName, params){
                    // check all subscribers and see if method is on there
                    // subscribers.forEach(fn => fn.call());
                    subscribers.forEach(function(fn){
                        //var funcName = String(funcName);
                        console.log(typeof fn.name === funcName);
                        if(fn.name === funcName) {
                            if(params){
                                console.log("notifying func with params");
                                fn(params);
                            }else{
                                console.log("notifying func without params");
                                fn();
                            }
                        }
                    })
                },

                init: function () {
                    var self = this;
                    console.log(this);
                    console.log(subscribers);
                    this.notify("update"); // uses other modules function to do work
                    this.notify("rewind");
                    // clearTimeout(anim1);
                    // clearTimeout(anim2);


                    // maybe map and make it pure instead?
                       // console.log(DOMKey);
                        // need keypress and keyup event listeners i think
                        document.addEventListener("keydown", function (event) {
                            keyNodes.forEach(function (DOMKey) {
                                var key = event.keyCode - 65;
                                var qwertyKey = alphabet.indexOf(asciiKeys[key]);
                                console.log(alphabet[qwertyKey]);
                                console.log("event listener called");
                                self.userInput(alphabet[qwertyKey]); // might have to use bind
                                // event.stopPropagation();
                            });
                        }, true);

                },

                // user types message input
                // hit enter: send post request to db.
                userInput: function (key) {
                    var character = document.createElement("p");
                    character.innerHTML = key;
                    character.classList.add('characters');

                    this.notify("keyPress", key);
                    monitor.appendChild(character);
                },



            }
        })()
    }

})(myProjects); // parse in an array or json object containing all posted messages and play from back to front.

// interface
terminal.read.test;
terminal.write.test;


window.onload = terminal.read.init();


    
    
    
    

    
    // controller
    var button1 = document.getElementById("button1");
    button1.addEventListener("click", function(event){
        // implement
        if(terminal.read.getActiveStatus())
            return;
        terminal.read.toggleActiveStatus();
        terminal.write.unsubscribe(terminal.read.update); // free up space again
        terminal.write.unsubscribe(terminal.read.rewind);
        terminal.write.unsubscribe(terminal.read.keyPress);
        terminal.read.init();
        alert("clicked button 1");
    });

    var button2 = document.getElementById("button2");
    button2.addEventListener("click", function(event){
        // implement
        terminal.write.test;
        if(!terminal.read.getActiveStatus())
            return;
        // stop what actions are happening, clear timeouts etc.
        terminal.read.toggleActiveStatus();
        terminal.write.subscribe(terminal.read.update);
        terminal.write.subscribe(terminal.read.rewind);
        terminal.write.subscribe(terminal.read.keyPress);
        terminal.write.init();
        alert("clicked button 2");
    });
    // add pressed down looking styling to button, using border-bottom illusion.


    //document.body.addEventListener("onload", terminal.read.textRoll(myProjects[0]));








    // user input

    

    // send, via carriage return/enter key
    // window.addEventListener("keydown", function(event){
    //     if(event.keyCode === 13) { // enter key
    //         ajaxRequest("sendMessage/", "post", messageData);
    //         rewind();
    //         textRoll("thank you");
    //         messageData = "";
    //     }
    // });

