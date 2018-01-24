// contains the main functions setup() and draw()

const NUM_STARS = 50;
const PROP_SHINE_STAR = 0.1; // proportion of shining stars on the canvas

var stars = []; // arr containing all Stars on the canvas


function setup()
{
   var width = windowWidth;
   var height =  windowHeight;

   var cnv = createCanvas(width, height);
   cnv.position(0, 0);
   cnv.style("z-index", "-1");

   for(var i = 0; i < NUM_STARS; i++)
   {
      stars.push(new Star
      (
         randInt(0, width),
         randInt(0, height),
         10,
         10
      ));
   }

   for(star of stars)
      console.log(star.pos.x, "|", star.pos.y);
}

function draw()
{
   background(0);
   //noStroke();
   fill(255, 255, 255);

   for(var i = 0; i < stars.length; i++)
      stars[i].render();

   ellipse(width / 2, height / 2, 10);
}

function randInt(min, max)
{
   return Math.floor(Math.random() * (max - min + 1) + min);
}
