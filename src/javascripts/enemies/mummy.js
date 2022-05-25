class Mummy extends Enemy {
    constructor(game){
        super(game);
        this.spriteWidth = 48;
        this.spriteHeight = 48;
        this.sizeModifier = Math.random() * 1.5 + 1;
        this.width = this.spriteWidth * this.sizeModifier;
        this.height = this.spriteHeight * this.sizeModifier;
        this.x = this.game.width;
        //they fly so only have them appear in bottom part of screen
        this.y = Math.random() * (this.game.height* 0.25) + (this.game.height * 0.65) - this.height;

        //get image from the id of the img tag (id's are put in javascript global object on load)
        this.image = mummy_walk;
        //change speed as game level increases
        this.velocityX = Math.random() * 0.1 + 0.008;
    }
}