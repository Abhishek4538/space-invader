class Alien{
    constructor(x,y){
        this.image=loadImage("images/invader.png")
        this.x=x
        this.y=y
    }
    display(){
        image(this.image,this.x,this.y,this.image.width,this.image.height)
    }
};