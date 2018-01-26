// contains the main functions setup() and draw()

const NUM_STARS = 70;
const PROB_SHINE_STAR = 0.1; // proportion of shining stars on the canvas

var stars = []; // arr containing all Stars on the canvas
var shiningStars = [];


function setup()
{
   var width = windowWidth;
   var height =  windowHeight;

   var cnv = createCanvas(width, height);
   cnv.position(0, 0);
   cnv.style("z-index", "-1");

   for(var i = 0; i < Math.floor((1 - PROB_SHINE_STAR) * NUM_STARS); i++)
   {
      stars.push(new Star
      (
         randInt(0, width),
         randInt(0, height),
         2,
         5,
         255 / 15,
         0.0005
      ));
   }

   for(var i = 0; i < Math.floor(PROB_SHINE_STAR * NUM_STARS); i++)
   {
      //shiningStars.push();
   }
   var test = new ShiningStar(randInt(0, width), randInt(0, height), 2, 5, 255 / 15, 0.0005);
   test.twinkle();
   //for(star of stars)
      //console.log(star.pos.x, "|", star.pos.y);
}

function draw()
{
   background(0);
   //noStroke();
   fill(255, 255, 255);

   for(var i = 0; i < stars.length; i++)
      stars[i].render();
}

function randInt(min, max)
{
   return Math.floor(Math.random() * (max - min + 1) + min);
}


/*
TODO:
- Halos around the shining stars
- background: color gradient
*/
