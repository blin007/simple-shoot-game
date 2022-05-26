class Explosion {
    constructor(x, y, size){
        this.size = size;
        this.x = x;
        this.y = y;

        this.sound = new Audio();
        this.sound.src = '../../assets/effects/boom.wav';
        this.timeSinceLastFrame = 0;
        this.frameInterval = 200;
        this.markedForDeletion = false;
    }
    update(deltaTime){
        this.explosions = this.explosions.filter((explosions) => !explosions.markedForDeletion)
        if(this.frame === 0) this.sound.play();
        this.timeSinceLastFrame += deltaTime;
        if(this.timeSinceLastFrame > this.frameInterval){
            this.frame++;
            this.timeSinceLastFrame = 0;
            if(this.frame > 5) this.markedForDeletion = true;
        }
    }
    draw(){
        context.drawImage(this.image, this.frame * this.spriteWidth, 0, 
        this.spriteWidth, this.spriteHeight, this.x, this.y - this.size * 0.25, this.size, this.size);
    }
}