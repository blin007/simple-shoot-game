class Explosion {
    constructor(x, y, size){
        this.size = size;
        this.x = x;
        this.y = y;
        this.timeSinceLastFrame = 0;
        this.frameInterval = 100;
        this.markedForDeletion = false;
    }
    update(deltaTime){
        this.timeSinceLastFrame += deltaTime;
        if(this.timeSinceLastFrame > this.frameInterval){
            this.explosionFrame++;
            this.timeSinceLastFrame = 0;
            if(this.explosionFrame > this.maxFrame) this.markedForDeletion = true;
        }
    }
    draw(context){
        context.drawImage(this.image, this.explosionFrame * this.spriteWidth, 0, 
        this.spriteWidth, this.spriteHeight, this.x - this.size * 0.5, this.y - this.size * 0.5, this.size*2, this.size*2);
    }
}