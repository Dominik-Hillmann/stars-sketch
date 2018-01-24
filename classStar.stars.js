class Star
{
   constructor(x, y, minSize, maxSize)
   {
      this.size = 10;//randInt(minSize, maxSize);
      this.pos = new Position(x, y);

      console.log(size, " ", this.pos);
   }

   render()
   {
      ellipse(this.pos.x, this.pos.y, size);
   }

   randInt(min, max){ return Math.floor(Math.random() * (max - min + 1) + min); }
}

class ShiningStar extends Star
{
   constructor(x, y, minSize, maxSize)
   {
      super(x, y, minSize, maxSize);
   }
}

class Position
{
   constructor(x, y)
   {
      this.x = x;
      this.y = y;
   }
}
