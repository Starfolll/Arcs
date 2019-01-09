var arcs = []

var c;

var off = 150;
var count = 100;

function setup() {
   c = createCanvas(windowWidth, windowHeight);

  angleMode(DEGREES);

  for(var u = 0; u < count; u++){
    arcs[u] = new objArc(
      random(off, width - off),
      random(off, height - off),
      random(25,150),
      random(0),
      random(270),
      random(10),
      int(random(3,8)),
      int(random(1, 10)),
      map(u, 0, count, 50, 225));
  }
}

function draw() {
  background(0);

  for(var i = 0; i < arcs.length; i++){
    arcs[i].show();
  }
}

function objArc(_w, _h, _r, _start, _stop, _speed, _stroke, _adds, _vision){
  this.w = _w;
  this.h = _h;
  this.r = _r;
  this.stop = _stop;
  this.start = _start;
  this.ratio = 0;
  this.speed = _speed;
  this.strok = _stroke;
  this.adds = _adds;
  this.vision = _vision;

  this.show = function(){
    push();
    fill(100,100,100,_vision/3);
    strokeWeight(this.strok);
    translate(this.w, this.h);

    stroke(255, 255, 255, _vision);

    if (dist(this.w, this.h, mouseX, mouseY) < this.r/2){
      stroke(255, 160, 50, _vision + 50);
      fill(255, 160, 50, _vision/3);
      ellipse(0, 0, 10, 10);
    }else{
      stroke(255, 255, 255, _vision);
    }

    rotate(this.ratio);

    for (var m = 0; m < this.adds; m++){
      var ma = sin(this.ratio) * m * this.strok * 3;
      arc(0, 0, this.r + ma, this.r + ma, this.start + ma * PI, this.stop + ma * PI);
    }

    this.ratio += this.speed;
    pop();
  }
}
