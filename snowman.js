let grid = undefined; 
let hatcolor = prompt("choose a basic color for the snowman's hat", "black")
let snowman = prompt("enter another basic color for the snowman's body", "orange")
let trees = prompt("what color would you like the trees to be?", "green");
function setup() {
    createCanvas(1000, 800);
    background("#ccc");
    grid = loadImage("images/100px_grid.png");
}

function draw() {
    //scene
    //background(grid);
    background("#7fb7f4");
    fill("#ffffff");
    ellipse(200, 600, 600);
    ellipse(800, 500, 800, 750);
    //trees
    stroke(2);
    fill(trees);
    triangle(50, 500, 110, 120, 150, 500);
    triangle(125, 520, 185, 320, 275, 520);
    //snowman body fill&stroke
    fill(snowman);
    strokeWeight(8);
    stroke("#f7f7f7");
    //lower body
    ellipse(500, 650, 350);
    //middle body
    ellipse(500, 425, 275);
    //head
    ellipse (500, 250, 190);
    //hat brim
    stroke(hatcolor);
    strokeWeight(10);
    line(400, 160, 600, 160);
    //hat
    fill(hatcolor);
    quad(425, 160, 575, 160, 575, 75, 425, 75);
    //eyes outline
    stroke(1, 1, 1)
    strokeWeight(3)
    fill("#ffffff");
    ellipse(480, 250, 30, 50);
    ellipse(515, 250, 30, 50);
    //eyes iris
    strokeWeight(0)
    fill("#579ed9")
    ellipse(513, 253, 20, 35);
    ellipse(482, 253, 20, 35);
    //eyes pupils
    strokeWeight(2)
    fill(1, 1, 1)
    ellipse(513, 256, 12, 22);
    ellipse(482, 256, 12, 22);
    //eyes white dots
    stroke("#ffffff");
    strokeWeight(3);
    point(515, 252);
    point(485, 252);
    //nose
    stroke("#ffffff");
    strokeWeight(30);
    point(498, 280);
    //smile
    noFill(0);
    strokeWeight(2);
    stroke(1, 1, 1);
    arc(450, 280, 150, 100, 0, QUARTER_PI);
    //left arm
    strokeWeight(2);
    line(375, 400, 200, 300);
    line(200, 300, 450, 100);
    //right arm
    line(610, 400, 800, 500);
    line(800, 500, 610, 600);
}