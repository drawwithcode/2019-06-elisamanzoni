let radio;
let radio2;
let radio3;
let radio4;

var allMyBalls = [];
var amountOfBalls = 40;





function preload() {
  // put preload code here
}

function setup() {
  createCanvas(windowWidth / 2, windowHeight);

  //create balls
  for (var i = 0; i < amountOfBalls; i++) {
    var tempx = random() * windowWidth;
    var tempy = random() * windowHeight;
    var tempr = random() * 50 + 10; //da 10 a 60

    var tempBall = new Ball(tempx, tempy, tempr);

    allMyBalls.push(tempBall); //si azzerano ogni volta gli imput
  }


  //crate radio
  radio = createRadio();
  radio.option('Aquiver');
  radio.option('Sonorous');
  radio.option('Ineffable');
  radio.option('Nefarious');
  radio.style('width', '85px');
  radio.position(windowWidth / 2, 0);
  textAlign(CENTER);

  radio2 = createRadio();
  radio2.option('black');
  radio2.option('purple');
  radio2.option('orange');
  radio2.option('green');
  radio2.position(windowWidth / 2, 100);
  radio2.style('width', '70px');

  radio3 = createRadio();
  radio3.option('yellow');
  radio3.option('blue');
  radio3.option('white');
  radio3.option('red');
  radio3.position(3 * (windowWidth / 4), 100);
  radio3.style('width', '65px');

  radio4 = createRadio();
  radio4.option('aquamarine');
  radio4.option('lightGreen');
  radio4.option('lightGray');
  radio4.option('darkRed');
  radio4.position(3 * (windowWidth / 4), 0);
  radio4.style('width', '100px');

  textSize(60);
  textFont('Staatliches');
  fill(255, 0, 0);

  //title
  var title = selectAll('h1');
  console.log(title);

  title.forEach(function(t) {
    t.style('font-size:50px');
    t.style('font-family:Staatliches');
    t.position((windowWidth / 2) + 20, windowHeight / 2);
  })

  //link
  button = createButton('click me to discover the meanings of the words');
  button.position((windowWidth / 2) + 20, 3*(windowHeight / 4);
  button.mousePressed(changeLink);
  button.style('background:white');
  button.style('border:1px solid black')
  button.style('font-size:20px');

}

function draw() {
  let val = radio.value();
  let val2 = radio2.value();
  let val3 = radio3.value();
  let val4 = radio4.value();

  noStroke();
  background(val2);
  fill(val3);

  //balls
  for (var i = 0; i < allMyBalls.length; i++) { //va da 0 alla lunghezza delle mie balls
    var tempBall = allMyBalls[i];
    tempBall.move();
    tempBall.display();
  }

  fill(val4);
  text(val, width / 2, height / 2);





  // put drawing code here
}

function Ball(_x, _y, _diameter) {
  //inner properties
  this.size = _diameter;
  this.x = _x;
  this.y = _y;
  this.speed = random() * 3 + 1;
  this.stroke = 'aquamarine';

  var xIncrease = 1;
  var yIncrease = 2.3;

  //methods
  this.move = function() {
    this.x += xIncrease * this.speed;
    this.y += yIncrease * this.speed;

    //bounce
    if (this.y > height || this.y < 0) {
      yIncrease = -yIncrease;
    }

    if (this.x > width || this.x < 0) {
      xIncrease = -xIncrease;
    }

  }


  //display method
  this.display = function() {

    ellipse(this.x, this.y, this.size);
  }
}

//link
function changeLink() {
  window.open('https://www.buzzfeed.com/danieldalton/bob-ombinate')
}
