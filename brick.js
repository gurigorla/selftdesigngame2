class Brick{
    constructor(_x,_y, _w, _h){
      this.x=_x * _w;
      this.y=_y * _h;
      this.w=_w;
      this.h=_h;
      this.fill= [47,78,89];
      this.show = true;
    
    }
    display(){
      if (this.show) {
          stroke(255);
          strokeWeight(6);
          fill.apply(fill, this.fill);
            rect(this.x,this.y,this.w,this.h);
      }
      }
  }
    
  