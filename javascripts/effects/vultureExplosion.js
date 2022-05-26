class VultureExplosion extends Explosion {
    constructor(x,y,size){
        super(x,y,size);
        this.image = vultureExplode;
        this.spriteWidth = 550;
        this.spriteHeight = 550;
        this.explosionFrame = 0;
        this.maxFrame = 9;
    }
}