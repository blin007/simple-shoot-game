class Enemy {
    constructor(game) {
        this.game = game;
        // console.log(this.game)
        this.markedForDeletion = false;
    }
    update(deltaTime){
        this.x-=this.velocityX * deltaTime;
        if(this.x < 0 - this.width) this.markedForDeletion = true;
    }
    draw(context){
        // context.fillRect(this.x, this.y, this.width, this.height);
        context.drawImage(this.image, 0, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height);
    }
}
