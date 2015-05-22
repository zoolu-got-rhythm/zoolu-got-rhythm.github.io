var keyboard = document.getElementById("keyboard");
keyboard.style.borderRadius="3px";

var monitor = document.getElementById("screen");
var beacon = "Hello world, I am currently seeking work experience, would you like to see my portfolio? ";
var myProjects = ["My Neo-Cortex", "3 Laws Of Robotics", "3 Hour Layout", "Paremeter Patroller"]
var alphabet = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d",
 "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m", " "];

var i = 0;
var letterSpace = 0;

var spawn;

var row1 = document.createElement("div");
 row1.classList.add('row1');
var row2 = document.createElement("div");
 row2.classList.add('row2');
var row3 = document.createElement("div");
 row3.classList.add('row3');
var row4 = document.createElement("div");
 row4.classList.add('row4');


while( i <= 26 ){

  i++;
  //spawn creates each key and add's on event listener and styling ref.

  spawn = document.createElement("div");
  spawn.onclick = expand.bind(this, (i-1));
  spawn.classList.add('spawn');



  if( i < 11 ){
       //create and append spawns to row 1.

       row1.appendChild(spawn);
       keyboard.appendChild(row1);
       spawn.innerHTML = alphabet[i-1].toUpperCase();

  }
  else if( i < 20 ){
       //create and append spawns to row 2.

       row2.appendChild(spawn);
       keyboard.appendChild(row2);
       spawn.innerHTML = alphabet[i-1].toUpperCase();

  }
  else if( i < 27 ){
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

var anim1 = setInterval( function(){ message(texToRoll) }, 100 );

function message(screenText){
  console.log("message function started and iterating");

  letterSpace++;

  var character = document.createElement("p");

  character.innerHTML = screenText.substring(letterSpace-1, letterSpace);//.toUpperCase();
  monitor.appendChild(character);
  character.classList.add('characters');


  if( letterSpace === screenText.length+1 ){
    clearInterval(anim1);
    letterSpace = 0;
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












//this function checks for matches that the user has typed.

function heed(){

if( buzzword[0] === "y" && buzzword[1] === "e" && buzzword[2] === "s" ){
//alert("you said YES! OH MY GOSH, you want to see my work!");
rewind();
//loader();
}

if( buzzword[0] === "n" && buzzword[1] === "o" ){
alert("ohh, fine! well you know the magic word if you change your mind.");
}

};




function rewind(){
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
        textRoll(beacon);
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
