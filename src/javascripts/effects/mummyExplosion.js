class MummyExplosion extends Explosion{
    constructor(){
        super(x,y,size);
        this.image = mummyExplode
        this.spriteWidth = 256;
        this.spriteHeight = 256;
        this.frame = 0;
        this.maxFrame = 9;
    }
}