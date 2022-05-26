class MummyExplosion extends Explosion{
    constructor(x,y,size){
        super(x,y,size);
        this.image = mummyExplode
        this.spriteWidth = 256;
        this.spriteHeight = 256;
        this.explosionFrame = 0;
        this.maxFrame = 9;
    }
}