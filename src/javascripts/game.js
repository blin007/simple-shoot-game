class Game {
    constructor(context, width, height){
        this.context = context;
        this.width = width;
        this.height = height;
        this.enemies=[];
        this.enemyInterval = 1000;
        this.enemyTimer = 0;
        this.gameLevel = 0;
        this.enemyTypes = ['vulture', 'mummy']
    }

    update(deltaTime){
        this.enemies = this.enemies.filter((enemy) => !enemy.markedForDeletion)
        if(this.enemyInterval < this.enemyTimer){
            this.#addNewEnemy();
            this.enemyTimer = 0
            // console.log(this.enemies)
        } else {
            this.enemyTimer+=deltaTime;
        }
        this.enemies.forEach((enemy) => enemy.update(deltaTime));
    }

    draw(){
        this.enemies.forEach((enemy) => enemy.draw(this.context));
    }

    #addNewEnemy(){
        const randomEnemy = this.enemyTypes[Math.floor(Math.random()*this.enemyTypes.length)];
        if(randomEnemy === 'vulture') this.enemies.push(new Vulture(this));
        else if (randomEnemy === 'mummy') this.enemies.push(new Mummy(this));
        this.enemies.sort(function(a,b){
            return a.y - b.y;
        })
    }
}
