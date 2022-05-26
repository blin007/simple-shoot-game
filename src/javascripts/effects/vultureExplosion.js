class VultureExplosion extends Explosion {
    constructor(){
        super(x,y,size);
        this.image = vultureExplode;
        this.spriteWidth = 550;
        this.spriteHeight = 550;
        this.frame = 0;
        this.maxFrame = 9;
    }
}