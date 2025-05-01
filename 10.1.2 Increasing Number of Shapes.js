/*There are two versions to this code, the first one should work. Please use the second code chunk provided if it does not meet all the requirements.*/
let turn = 0;
let number = 1;
let color = Randomizer.nextColor();

function start() {
    setTimer(doTurn, 1000);
}

function doTurn() {
    if (turn == 0) {
        for (let i = 0; i < number; i++) {
        let shape = new Circle(25);
        shape.setColor(color);
        shape.setPosition(Randomizer.nextInt(0, getWidth()), Randomizer.nextInt(0, getHeight()));
        add(shape);
    }
    } else {
        for (let i = 0; i < number; i++) {
        let shape = new Rectangle(50, 50);
        shape.setColor(color);
        shape.setPosition(Randomizer.nextInt(0, getWidth()), Randomizer.nextInt(0, getHeight()));
        add(shape);
    }
}
turn = Math.abs(turn - 1);
number *= 2;
color = Randomizer.nextColor();
}




/*THIS IS THE SECOND CODE SEGMENT*/

/* <-- REMOVE THIS LINE TO USE THE CODE
//NOTE: I don't know why it says "Maximum call stack size exceeded..."

//global vars
var NUM_SHAPES = 1;
var DELAY = 1000;
var RADIUS = 25;
var SIDE_LENGTH = 50;
var BUFFER=50;

//start function
function start() {
    setTimer(Circle, 1000);
    setTimer(Square, 1000);
}

//function which creates new circles
function Circle(){
    var circle = new Circle(25);
    circle.setPosition(Randomizer.nextInt(getWidth()/2),Randomizer.nextInt(getHeight()/2));
    for(var i=0; i<50; i++){
        drawCircle(25);
        circle.setColor(Randomizer.nextColor());
        add(circle);
    }
}

//function which draws the circles
function drawCircle(color, num, x, y){
    var create= new Circle (25);
    create.setColor(Randomizer.nextColor());
    create.setPosition(Randomizer.nextInt(getWidth()/2),Randomizer.nextInt(getHeight()/2))
    add(create)
}

//function which creates new squares
function Square(){
    var square = new Square(50)
    square.setPosition(Randomizer.nextInt(getWidth()*BUFFER()),Randomizer.nextInt(getHeight()/2))
    for(var i=0; i<50; i++){
        drawSquare(50,50);
        square.setColor(Randomizer.nextColor());
        add(circle);
    }
}

//function which draws the squares
function drawSquare(length,width,x,y,color){
    var yes= new Square(50,50);
    yes.setPosition(Randomizer.nextInt(getWidth()/5),Randomizer.nextInt(getHeight()/5))
    yes.setColor(Randomizer.nextColor());
    add(yes);
}
DELETE THIS LINE TO USE THE CODE*/ 
