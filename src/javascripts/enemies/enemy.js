class Enemy {
    constructor(game) {
        this.game = game;
        this.markedForDeletion = false;
        // this.frame = 0;
        // this.maxFrame = 5;
        this.frameInterval = 100;
        this.frameTimer = 0;
    }

    update(deltaTime){
        this.x-=this.velocityX * deltaTime;
        if(this.x < 0 - this.width) this.markedForDeletion = true;
        if (this.frameInterval < this.frameTimer){
            if (this.frame < this.maxFrame) this.frame++;
            else this.frame = 0;
            this.frameTimer = 0;
        } else {
            this.frameTimer += deltaTime;
        }
    }

    draw(context){
        // context.fillRect(this.x, this.y, this.width, this.height);
        context.drawImage(this.image, this.spriteWidth * this.frame, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height);
    }
}
