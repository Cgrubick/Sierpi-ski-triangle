let ax, ay;
let bx, by;
let cx, cy;
let x, y;
let amount;
let width, height;

function setup() {
  width = 800;
  height = 800;
  createCanvas(width,height);
  ax = width/2;
  ay = height/4;

  bx = width/2 - 200;
  by = height/1.5;

  cx = width/2 + 200;
  cy = height/1.5;

  x = random(width);
  y = random(height);
  //sets the background color
  background(0);

  stroke(255);
  strokeWeight(8);
  //creates the three set points for the fractal
  point(ax,ay);
  point(bx,by);
  point(cx,cy);
}

function draw() {
  //changing the amount results in the sierpinski fractal 
  //being made quicker and with more points
  amount = 50;
  for(let i = 0; i < amount; i++){
    strokeWeight(2);
    stroke(255,150,100);
    point(x,y);
    //selecting a point between the 3 white points
    let r = floor(random(3));
    if(r == 0){
      //lerp is a command in p5 which stands for linear interpolation 
      //from one point or vector to another
      // by some amount lerp(x,y,z amount)
      //this then picks a point at the halfway mark between the random white point and
      //the orange point and makes a new point
      //the white points are also known as seed points
      x = lerp(x,ax,0.5);
      y = lerp(y,ay,0.5);
    }
    else if(r == 1){
      x = lerp(x,bx,0.5);
      y = lerp(y,by,0.5);
    }
    else{
      x = lerp(x,cx,0.5);
      y = lerp(y,cy,0.5);
    }
  }
}
