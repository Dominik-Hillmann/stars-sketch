// contains all classes that directly have to do with the stars appearing onscreen

class Position
{
   constructor(x, y)
   {
      this.x = x;
      this.y = y;
   }
}

// star without a halo
class Star
{
   constructor(x, y, minSize, maxSize, twinkleStep, twinkleChance)
   {
      this.size = randInt(minSize, maxSize);
      this.pos = new Position(x, y);

      this.twinkling = false;
      this.dimming = false; // indicates whether star is currently getting darker or brighter
      this.brightness = 255; // full color for "star that is currently not twinkling"
      this.twinkleStep = twinkleStep; // === 51, so it takes 10 frames to get fully dark and then bright again
      this.twinkleChance = twinkleChance;
   }

   twinkle()
   {
      if(this.twinkling)
      {
         if(this.dimming)
         {
            if((this.brightness - this.twinkleStep) > 0)
               this.brightness -= this.twinkleStep;
            else
            {
               this.dimming = false;
               this.brightness += this.twinkleStep;
            }
         }
         else // so currently star is brightening instead of getting darker
         {
            if((this.brightness + this.twinkleStep) <= 255)
               this.brightness += this.twinkleStep;
            else
               this.twinkling = false; // so star got dark, reached full brightness again --> done twinkling
         }
      }
      else // NOT IN THE PROCESS OF TWINKLING --> chance of twinkling
      {
         if(Math.random() <= this.twinkleChance) // 1% chance that star starts to twinkle this frame
         {
            this.twinkling = true;
            this.dimming = true; // star starts twinkling by getting darker
         }
      }
   }

   render()
   {
      this.twinkle();
      fill(255, 255, 255, this.brightness);
      ellipse(this.pos.x, this.pos.y, this.size);
   }

   randInt(min, max){ return Math.floor(Math.random() * (max - min + 1) + min); }
}
/*
// star with a halo
class ShiningStar extends Star
{
   constructor(x, y, minSize, maxSize)
   {
      super(x, y, minSize, maxSize);
   }
}
*/
