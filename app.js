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

  spawn = document.createElement("div");
  spawn.onclick = expand.bind(this, (i-1));
  spawn.classList.add('spawn');



  if(i<11){
    //create and append spawns to a new row.

    row1.appendChild(spawn)
   // row1.childNodes[i].onclick = expand(i);
     keyboard.appendChild(row1);
   spawn.innerHTML = alphabet[i-1].toUpperCase();

  }
  else if(i<20){
       row2.appendChild(spawn)
       //row2.childNodes[i].onclick = expand(i);
     keyboard.appendChild(row2);
   spawn.innerHTML = alphabet[i-1].toUpperCase();

  }
  else if(i<27){
      row3.appendChild(spawn)
      //row3.childNodes[i].onclick = expand(i);
     keyboard.appendChild(row3);
   spawn.innerHTML = alphabet[i-1].toUpperCase();
  }
  else{
    row4.appendChild(spawn)
    //row4.childNodes[i].onclick = expand(i);
     keyboard.appendChild(row4);
    spawn.style.width="150px";
   spawn.innerHTML = alphabet[i-1].toUpperCase();

  }

   //keyboard.childNodes[i].onmouseover = expand(i);



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



var buzzword = [];


function expand(x){
  /*document.getElementById("screen").innerHTML = alphabet[x];
  alert(letterSpace+" "+"presses");
  letterSpace++;
  */
  var character = document.createElement("p");
  character.innerHTML = alphabet[x];
  screen.appendChild(character);
  character.classList.add('characters');

  buzzword.push(alphabet[x]);
  heed(buzzword[0]);
};

function heed(arg){
  //screen.appendChild(beacon.substring(i));

  switch(arg){
    case arg === "y":
      alert("You typed y");
      break;

    case "no":
       //aww, your kidding right?
      break;

    default:
       alert("Not detected.");
       //alert(buzzword[1]);
      break;

  }

}
