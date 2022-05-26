class Vulture extends Enemy {
    constructor(game){
        super(game)
        this.type = 'vulture';
        //the width and height of one frame in the sprite sheet 
        this.spriteWidth = 48;
        this.spriteHeight = 48;
        this.sizeModifier = Math.random() * 0.5 + 1.5;
        this.width = this.spriteWidth * this.sizeModifier;
        this.height = this.spriteHeight * this.sizeModifier;
        this.x = this.game.width;
        //they fly so only have them appear in upper part of screen
        this.y = Math.random() * (this.game.height*0.5);

        //the column of the sprite sheet and max number of rows
        this.frame = 0;
        this.maxFrame = 3;

        //get image from the id of the img tag (id's are put in javascript global object on load)
        this.image = vultureFly;
        //change speed as game level increases
        this.velocityX = Math.random() * 0.1 + 0.01;
        //sine wave movement
        this.angle = 0;
        this.amplitude = Math.random() * 3;
    }

    update(deltaTime){
        super.update(deltaTime)
        this.y += Math.sin(this.angle) * this.amplitude 
        this.angle+=0.05;
    }
}