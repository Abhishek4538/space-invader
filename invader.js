class Invader{
    constructor(){
        this.rowcount=8
        this.y=50
        this.aliens=[]
        this.columncount=6
        this.totalnumberofaliens=this.rowcount*this.columncount
    }
    initialiseAliens(){
        var x=50
        var y=this.y
        for(var i=0;i<this.rowcount;i++){
            y=y+50;
            x=50;

            for(var j=0;j<this.columns;j++){
                var alien=new Alien(x,y)
                this.aliens.push(alien)
                x=x+40
            }
        }
        console.log(this.aliens)
    }
    drawAliens(){
        for(var i=0;i<this.totalnumberofaliens;i++){
            this.aliens[i].display();
        }
    }
};