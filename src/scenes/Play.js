class Play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }

    preload(){
        this.load.image('background', './assets/pixilart-drawing-background.png'); 
        this.load.atlas('character', './assets/bird-spritesheet.png','./assets/sprites.json'); 
        this.load.image('clouds', './assets/pixilart-drawing-clouds.png'); 
        this.load.image('stars', './assets/pixil-frame-stars.png'); 
        this.load.spritesheet('explosion', './assets/bird-explosion.png', {frameWidth: 64, frameHeight: 64, startFrame: 0, endFrame: 8});

    }

    create(){

        //this.player = this.physics.add.sprite(game.config.width/2, game.config.height/2, 'character', 'sprite3'); 
        this.background = this.add.tileSprite(0, 0, 640, 480, 'background').setOrigin(0,0); 
        this.stars = this.add.tileSprite(0, 0, 640, 480, 'stars').setOrigin(0,0); 
        this.player = new Character(this, game.config.width/10, game.config.height/2, 'character', 'sprite2'); 
        this.player.setSize(45,45); 
        this.player.setCollideWorldBounds(true); 
        this.player.setImmovable(true);
        
        this.text = this.add.text(32, 32); 

        //https://www.html5gamedevs.com/topic/47283-cannot-use-physics-on-a-class-that-extends-phaserphysicsarcadesprite/
        //code for setting arcade physics in character class 
        /*this.player = new Character(this, game.config.width/10, game.config.height/2, 'character'); //.setOrigin(0.5, 0); 
        this.player.setSize(23,23); 
        this.player.setOffset(17, 9); 
        this.player.body.setCollideWorldBounds(true); 
        this.player.body.setImmovable(true); 
        this.player.setGravityY(0.25); */ 
        
        rectangle3 = this.add.rectangle(0, 0, borderUISize/20, game.config.height, 0xFFFFFF).setOrigin(0 ,0);
        this.physics.add.existing(rectangle3); 
        rectangle3.body.setCollideWorldBounds(true); 
        rectangle3.body.setImmovable(true); 
        rectangle3.body.setBounce(0.5); 

        //collider works (?) - how to repel the two objects? 
        this.physics.add.collider(this.player, rectangle3, (player, rectangle3) => {
            player.setBounce(0.5); 
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

        this.playercount = 0; 

        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT); 
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT); 
        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP); 
        keyDOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN); 

        //this.highScoreText = this.add.text(200, 60, 'High Score:' + this.highScore, { fontSize: '32px', fill: '#fff' });

        //randomize intensity or gradually build it up and lower it 
        
        const group = this.physics.add.group({
            setCollideWorldBounds: true
        }); 
        this.light = this.lights.addPointLight(400, 300, 0xffffff, 4, 0.4); 
        this.light1 = this.lights.addPointLight(100, 400, 0xffffff, 4, 0.4); 
        this.light2 = this.lights.addPointLight(600, 200, 0xffffff, 4, 0.4); 

        this.fancylights = this.add.group([this.light, this.light1, this.light2]); 
        

        


        //console.log(velocityVar); 

        let cloud1 = this.physics.add.sprite(600, game.config.height / 4, 'clouds').setScale(2); 
        cloud1.setVelocityX(200)
        this.physics.moveToObject(cloud1, this.player) //velocityVar); 
        cloud1.body.setCollideWorldBounds(true); 
        cloud1.body.setBounce(1); 
        cloud1.body.setImmovable(true); 
        cloud1.setSize(55, 17); 
        //cloud1.setX(Phaser.Math.Between(0 + cloud1.width /2, game.config.width - cloud1.width/ 2)); 

        this.physics.add.collider(cloud1, rectangle3, (cloud, rectangle) => {
            cloud1.setX(game.config.width-10); 
            cloud1.setY(Phaser.Math.Between(0, game.config.height)); 
                     // play explode animation
            
            //cloud1.setRandomPosition(x, y, width, height); 
        })

        this.physics.add.collider(cloud1, this.player, (cloud, player) => {
            gameOver = true; 
            this.player.destroy(); 
            let boom = this.add.sprite(player.x, player.y, 'explosion'); 
            boom.anims.play('explode');    
            //gameOver = true; 
        })


        let cloud2 = this.physics.add.sprite(600, game.config.height / 2, 'clouds').setScale(2); 
        cloud2.setVelocityX(200)
        this.physics.moveToObject(cloud2, this.player); 
        cloud2.body.setCollideWorldBounds(true); 
        cloud2.body.setBounce(1); 
        cloud2.body.setImmovable(true); 
        cloud2.setSize(55, 17); 

        this.physics.add.collider(cloud2, rectangle3, (cloud, rectangle) => {
            cloud2.setX(game.config.width-10); 
            cloud2.setY(Phaser.Math.Between(0, game.config.height)); 
            //cloud2.setRandomPosition(x, y, width, height); 
        })

        this.physics.add.collider(cloud2, this.player, (cloud2, player) => {
            gameOver = true; 
            this.player.destroy(); 
            let boom = this.add.sprite(player.x, player.y, 'explosion'); 
            boom.anims.play('explode');   
        }) 

        //this.timerText = this.add.text(550, 60, '0', { fontSize: '32px', fill: '#fff' });

        this.timedEvent = this.time.addEvent({
            delay: 5000,  //every 5 seconds 
            loop: true,
            callback: this.addCloud,
            callbackScope: this,
        }) 

        /*this.timedEvent2 = this.time.addEvent({
            delay: 15000, //every 15 seconds 
            loop: true, 
            callback: this.triggerCamFX, 
            callbackScope: this, 
              
        })*/ 

        this.timedEvent3 = this.time.addEvent({
            delay: 1000, 
            loop: true,
            callback: this.countup,
            callbackScope: this,
        }) 
       
        
    }

    update(){
        
        

        this.background.tilePositionX += 0.5; 
        this.stars.tilePositionX += 1; 

        this.fancylights.x += 10; 
        if(this.fancylights.x == 0){
            this.reset(); 
        }
        //Phaser.Math.Wrap(this.light); 


        if(timer % 5 == 0 && timer < 300){
            this.background.tilePositionX += 0.5;
            this.stars.tilePositionX += 0.25; 
            this.player.moveSpeed += 0.005; 
        }

        if(gameOver == false){
            this.player.update(); 
        }

        if(gameOver == true){
            this.scene.start('gameOverScene');
        }

        this.text.setText(`Score: ${this.playercount}`)
        //if(gameOver == true){
        //    this.scene.start("gameOverScene");
        //}

    }

    //https://www.html5gamedevs.com/topic/18414-creating-sprites-inside-a-for-loop-breaks-the-loop/
    //this post inspired my idea of using time intervals to randomly generate clouds :D  
    addCloud(){
        console.log('time'); 
        if(gameOver == false){
            console.log('time', timer); 
            timer += 5; 
           

            console.log(timer); 
            heightvar = Phaser.Math.Between(1, game.config.height); //randomize where cloud appears 
            this.addedCloud = this.physics.add.sprite(640, heightvar, 'clouds').setScale(2); 

            if(timer % 5 == 0 && timer < 300){
                velocityVar += 7; 
            } 

            this.addedCloud.body.setVelocityX(velocityVar); 
            //this.physics.moveToObject(this.addedCloud, this.player);  //velocityVar); 
            this.addedCloud.body.setCollideWorldBounds(true); 
            this.addedCloud.body.setBounce(1); 
            this.addedCloud.body.setImmovable(true); 
            this.addedCloud.setSize(55, 17); 

                
            this.physics.add.collider(this.addedCloud, this.player, (addedCloud, player) => {
                gameOver = true; 
                this.player.destroy(); 
                let boom = this.add.sprite(addedCloud.x, addedCloud.y, 'explosion').setOrigin(0, 0);
                boom.anims.play('explode');   
            })

            this.physics.add.collider(this.addedCloud, rectangle3, (addedcloud, rectangle) => {
                addedcloud.destroy(); 
                this.addCloud();       

                //cloud1.setRandomPosition(x, y, width, height); 
            }); 

        }

    }

    reset(){ //simulates Phaser.Math.Wrap function D:< 
        this.fancylights.x = 640; 
    }

    /*triggerCamFX() {
        this.cameras.main.flash(); 
    } */ 

    countup(){
        console.log('oooooo'); 
        
            this.playercount++; 
            console.log('timer', this.playercount); 
            
        
    } 
} 