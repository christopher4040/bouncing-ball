//Set global variable that would contain the position, velocity and the html element "ball"
var positionX = 0;
var positionY = 0;
var velocity = 2;
var reverseX = false;
var reverseY = false;
var ball = document.getElementById("ball");

//write a function that can change the position of the html element "ball"
function moveBall() {
  // two x-axis coordinates
  var Xmin = 0;
  var Xmax = window.innerWidth - parseInt(ball.style.width);

  // two y-axis coordinates
  var Ymin = 0;
  var Ymax = window.innerHeight - parseInt(ball.style.height);

  if (reverseX && reverseY) {
    positionX = positionX - velocity;
    positionY = positionY - velocity;
  } else if (!reverseX && !reverseY){
    positionX = positionX + velocity;
    positionY = positionY + velocity;
  } else if (reverseX) {
    positionX = positionX - velocity;
    positionY = positionY + velocity;
  } else {
    positionX = positionX + velocity;
    positionY = positionY - velocity;
  }

  ball.style.left = positionX + "px";
  ball.style.top = positionY + "px";
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  if (
    positionX > Xmax ||
    positionX === Xmin
    ) {
    reverseX = !reverseX;
    ball.style.background = '#' + randomColor;
  }
  if (
    positionY > Ymax ||
    positionY === Ymin
  ) {
    reverseY = !reverseY;
    ball.style.background = '#' + randomColor;
  }
}

setInterval(moveBall, 5);
