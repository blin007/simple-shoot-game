class Mummy extends Enemy {
    constructor(game){
        super(game);
        this.type = 'mummy';
        this.spriteWidth = 48;
        this.spriteHeight = 48;
        this.sizeModifier = Math.random() * 0.5 + 1.5;
        this.width = this.spriteWidth * this.sizeModifier;
        this.height = this.spriteHeight * this.sizeModifier;
        this.x = this.game.width;
        //they walk so only have them appear in bottom part of screen
        this.y = Math.random() * (this.game.height* 0.25) + (this.game.height * 0.65) - this.height;

        //the column of the sprite sheet and max number of rows
        this.frame = 0;
        this.maxFrame = 5;

        //get image from the id of the img tag (id's are put in javascript global object on load)
        this.image = mummyWalk;
        //change speed as game level increases
        this.velocityX = Math.random() * 0.1 + 0.008;
    }
}