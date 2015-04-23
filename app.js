var keyboard = document.getElementById("keyboard");
keyboard.style.borderRadius="3px";

var screen = document.getElementById("screen");
var beacon = "Hello world, I am currently seeking work experience, would you like to see my portfolio? ";

var alphabet = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m", " "];

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


while(i<=26){

  i++;
  //spawn creates each key and add's on event listener and styling ref.

  spawn = document.createElement("div");
  spawn.onclick = expand.bind(this, (i-1));
  spawn.classList.add('spawn');



  if(i<11){
       //create and append spawns to row 1.

       row1.appendChild(spawn)
       keyboard.appendChild(row1);
       spawn.innerHTML = alphabet[i-1].toUpperCase();

  }
  else if(i<20){
       //create and append spawns to row 2.

       row2.appendChild(spawn)
       keyboard.appendChild(row2);
       spawn.innerHTML = alphabet[i-1].toUpperCase();

  }
  else if(i<27){
      //create and append spawns to row 3.

      row3.appendChild(spawn)
      keyboard.appendChild(row3);
      spawn.innerHTML = alphabet[i-1].toUpperCase();
  }
  else{
    //create and appends the spacebar.

      row4.appendChild(spawn)
      keyboard.appendChild(row4);
      spawn.style.width="150px";
      spawn.innerHTML = alphabet[i-1].toUpperCase();

      }

}



var anim = setInterval(function(){message()}, 100);

function message(){

  letterSpace++;
  /*document.getElementById("screen").innerHTML = alphabet[x];
  alert(letterSpace+" "+"presses");
  letterSpace++;
  */
  var character = document.createElement("p");
  //character.innerHTML = "i";
  character.innerHTML = beacon.substring(letterSpace-1, letterSpace)//.toUpperCase();
  screen.appendChild(character);
  character.classList.add('characters');
  //screen.appendChild(beacon.substring(i));

  if(letterSpace === beacon.length+1)clearInterval(anim);
};


//var yes;
//var no;

//buzzword collects specific key'd input.
var buzzword = [];


//this function will key in input to the screen when the keys are clicked.

function expand(x){

  var character = document.createElement("p");
  character.innerHTML = alphabet[x];
  screen.appendChild(character);
  character.classList.add('characters');


  //checks for certain letters that eventualy equate to "yes" or "no".
  if(alphabet[x]==="y" || alphabet[x]==="e" || alphabet[x]==="s"){
      //alert("hah you typed y.");
      buzzword.push(alphabet[x]);
      //alert(alphabet[x]+ " " + "recognized.");
  }
  else if(alphabet[x]==="n" || alphabet[x]==="o"){
      buzzword.push(alphabet[x]);
      //alert(alphabet[x]+ " " + "recognized.");
  }else{
      buzzword.length = 0;

  }

  //buzzword.push(alphabet[x]);
  //heed(buzzword[x]);
  //heed(alphabet[x]);

  /*this function is invoked and references up a level to the
   global execution context for the heed function.*/
  heed();

};












//this function checks for matches that the user has typed.

function heed(){




if( buzzword[0] === "y" && buzzword[1] === "e" && buzzword[2] === "s" ){
alert("you said YES! OH MY GOSH, you want to see my work!");
}

if( buzzword[0] === "n" && buzzword[1] === "o" ){
alert("ohh, fine! well you know the magic word if you change your mind.");
}




/*

  switch(buzzword[0]){
    case "y" && "e" && "s":
      alert("do this crazy stuff..."); //yes.push("y");
      break;

    case "no":
       //aww, your kidding right?
      break;

    default:
       //alert("Not detected.");
       alert(buzzword[1]);
      break;

  }
  */


};
