class button{
    constructor(x,y,w,h){
        this.x = x
        this.y = y
        this.w = w
        this.h = h
    }
    isclicked(x,y){
        return x>=this.x && x<=this.x+this.w && y>=this.y && y<=this.y+this.h
    }
    show(){
        fill("#333333");
        noStroke();
        rect(this.x,this.y,this.w,this.h);
    }
}