class Play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }

    preload(){
        this.load.image('background', './assets/pixilart-drawing-background.png'); 
        this.load.image('character', './assets/pixilart-drawing-character.png'); 
        this.load.image('clouds', './assets/pixilart-drawing-clouds.png'); 
        this.load.image('stars', './assets/pixil-frame-stars.png'); 
    }

    create(){

        console.log('hi')
        this.background = this.add.tileSprite(0, 0, 640, 480, 'background').setOrigin(0,0); 
        this.stars = this.add.tileSprite(0, 0, 640, 480, 'stars').setOrigin(0,0); 

        //https://www.html5gamedevs.com/topic/47283-cannot-use-physics-on-a-class-that-extends-phaserphysicsarcadesprite/
        //code for setting arcade physics in character class 
        this.player = new Character(this, game.config.width/10, game.config.height/2, 'character'); //.setOrigin(0.5, 0); 
        this.player.setSize(23,23); 
        this.player.setOffset(17, 9); 
        this.player.body.setCollideWorldBounds(true); 
        this.player.body.setImmovable(true); 
        this.player.setGravityY(1); 
        
        rectangle3 = this.add.rectangle(0, 0, borderUISize/2, game.config.height, 0xFFFFFF).setOrigin(0 ,0);
        this.physics.add.existing(rectangle3); 
        rectangle3.body.setCollideWorldBounds(true); 
        rectangle3.body.setImmovable(true); 
        rectangle3.body.setBounce(0.5); 

        //collider works (?) - how to repel the two objects? 
        this.physics.add.collider(this.player, rectangle3, (player, rectangle3) => {
            console.log('huh????'); 
        });
        
       
        //hard mode (???)
        //colliders are not working :/ 
        /*rectangle1 = this.add.rectangle(0, 0, game.config.width, borderUISize/2, 0xFFFFFF).setOrigin(0 ,0); 
        this.physics.add.existing(rectangle1); 
        rectangle1.body.setImmovable(true); 
        
        rectangle2 = this.add.rectangle(0, game.config.height - borderUISize/2, game.config.width, borderUISize, 0xFFFFFF).setOrigin(0 ,0);
        this.physics.add.existing(rectangle2); 
        rectangle2.body.setImmovable(true); 

        rectangle3 = this.add.rectangle(0, 0, borderUISize/2, game.config.height, 0xFFFFFF).setOrigin(0 ,0);
        this.physics.add.existing(rectangle3); 
        rectangle3.body.setImmovable(true); 

        rectangle4 = this.add.rectangle(game.config.width - borderUISize/2, 0, borderUISize, game.config.height, 0xFFFFFF).setOrigin(0 ,0);
        this.physics.add.existing(rectangle4); 
        rectangle4.body.setImmovable(true); 
        //this.rectangle.body.setCollideWorldBounds(true); 
        //this.rectangle.body.setImmovable(true); 
        
        this.physics.add.collider(this.player, rectangle1); 
        this.physics.add.collider(this.player, rectangle2); 
        this.physics.add.collider(this.player, rectangle3);
        this.physics.add.collider(this.player, rectangle4);  
        */ 

        const {x, y, width, height } = this.physics.world.bounds; 

        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT); 
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT); 
        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP); 
        keyDOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN); 

        //bouncing back and forth :D 
        let cloud1 = this.physics.add.sprite(600, game.config.height / 4, 'clouds'); 
        cloud1.setVelocityX(100)
        cloud1.body.setCollideWorldBounds(true); 
        cloud1.body.setBounce(1); 
        cloud1.body.setImmovable(true); 
        //cloud1.setX(Phaser.Math.Between(0 + cloud1.width /2, game.config.width - cloud1.width/ 2)); 

        this.physics.add.collider(cloud1, rectangle3, (cloud, rectangle) => {
            cloud1.setX(game.config.width-10); 
            cloud1.setY(Phaser.Math.Between(0, game.config.height)); 
            //cloud1.setRandomPosition(x, y, width, height); 
        })


        let cloud2 = this.physics.add.sprite(600, game.config.height / 2, 'clouds'); 
        cloud2.setVelocityX(100)
        cloud2.body.setCollideWorldBounds(true); 
        cloud2.body.setBounce(1); 
        cloud2.setX(Phaser.Math.Between(0 + cloud2.width /2, game.config.width - cloud2.width/ 2)); 
        cloud2.body.setImmovable(true); 
        
    }

    update(){
        this.background.tilePositionX += 0.5; 
        this.stars.tilePositionX += 1; 

        if(gameOver == false){
            this.player.update(); 
        }

    }
 
} 