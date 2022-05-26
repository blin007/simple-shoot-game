class Game {
    constructor(context, collisionContext, width, height){
        this.context = context;
        this.collisionContext = collisionContext;
        this.width = width;
        this.height = height;
        this.enemies= [];
        this.explosions = [];
        this.enemyInterval = 5000;
        this.enemyTimer = 0;
        //as game level increases, decrease the enemy interval
        this.gameLevel = 0;
        this.enemyTypes = ['vulture', 'mummy']
        
    }

    update(deltaTime){
        //update enemy
        this.enemies = this.enemies.filter((enemy) => !enemy.markedForDeletion)
        if(this.enemyInterval < this.enemyTimer){
            this.#addNewEnemy();
            this.enemyTimer = 0
            console.log(this.enemies)
        } else {
            this.enemyTimer+=deltaTime;
        }
        this.enemies.forEach((enemy) => enemy.update(deltaTime));
    }

    draw(){
        this.enemies.forEach((enemy) => {
            // console.log(this.collisionContext)
            enemy.draw(this.context, this.collisionContext)
        });
    }

    #addNewEnemy(){
        const randomEnemy = this.enemyTypes[Math.floor(Math.random() * this.enemyTypes.length)];
        if(randomEnemy === 'vulture') this.enemies.push(new Vulture(this));
        else if (randomEnemy === 'mummy') this.enemies.push(new Mummy(this));
        this.enemies.sort(function(a,b){
            return a.y - b.y;
        })
    }
}
