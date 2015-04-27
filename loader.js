


function loader(){
  //remember: every function has it's own execution context, and the functions
  //down a level have a reference to functions and variables 1 level above.
  //I think var's keey climbing that ladder all the way to global scope untill they
  //find a match.







  var cWidth = document.getElementById("container").offsetWidth;

  var cHeight = document.getElementById("container").offsetHeight;

  //alert(cWidth);

  function Kid(height, width){
    this.height = height;
    this.width = width;
    this.diam = function(){
      return this.width * 2 + this.height * 2;
    };

  }

  var child1 = new Kid(cHeight, cWidth);



  var i = 0;

  var anim = setInterval(function(){patrol()}, 1);

  function patrol(){
    i++;



  var box1 = document.getElementById("child");
  box1.style.height = "20px";
  box1.style.width = "20px";
  box1.style.background = "#00FF00";
  box1.style.position = "absolute";

     var cube = box1.style.height;
  //alert(cube);




    if(i <= child1.width+20){ //replace 20px in if/else statement with cube size.
      box1.style.top = "-20px";
  box1.style.left = i-20 + "px";

  }else if(i <= child1.height + child1.height+40){

  box1.style.top = i-child1.height-40 + "px";

  }else if(i <= child1.width + child1.width + child1.width+20*3){
    //alert(i);
  box1.style.left = child1.width*3-i+40 + "px";

  }else{
    box1.style.left = "-20px";
  box1.style.top = child1.height*4-i+60 + "px";
   if(i===child1.diam()+20*4){
    i=0;
     //cWidth = document.getElementById("container").style.width = "50px";
     //cHeight = document.getElementById("container").style.height = "50px";
   }

  }





  document.getElementById("container").appendChild(box1);

  } //end of patrol



















}
