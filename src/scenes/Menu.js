//create animation for colliding with cloud 
//create cloud group that adds more clouds - created timer that adds more clouds 
//increase speed -- HUGE for increasing difficulty 
//create coin asset and collision 
//create speedbost asset, collision, and functionality 
//add music (relatively easy) - sfx + looping background music 
//create tutorial scene (relatively easy)
//create clouds scene - check if necessary 

class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene"); 
    }

    preload() {
        this.load.image('menuscreen', './assets/background-pixilart.png'); 
        this.load.image('tutorial', './assets/tutorial.png'); 
        this.load.image('background', './assets/pixilart-drawing-background.png'); 
        this.load.atlas('character', './assets/bird-spritesheet.png','./assets/sprites.json'); 
        this.load.image('clouds', './assets/pixilart-drawing-clouds.png'); 
        this.load.image('stars', './assets/pixil-frame-stars.png'); 
        this.load.spritesheet('explosion', './assets/bird-explosion.png', {frameWidth: 64, frameHeight: 64, startFrame: 0, endFrame: 8});

        
        
        //add audio later 
    }

    create(){
        
        this.menuscreen = this.add.tileSprite(0, 0, 640, 480, 'menuscreen').setOrigin(0, 0);
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE); 
        keyT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.T); 


        this.anims.create({ 
            key: 'right walk',
            frameRate: 5,
            repeat: -1, //infinately 
            frames: this.anims.generateFrameNames('character', {
                prefix: 'sprite', 
                start: '2', //standing frame 
                end: '9', //static 
                zeroPad: 1 
            })
        })

        this.anims.create({
            key: 'left walk',
            frameRate: 5,
            repeat: -1, //infinately 
            frames: this.anims.generateFrameNames('character', {
                prefix: 'sprite', 
                start: '11', //standing frame 
                end: '17', //static 
                zeroPad: 1 
            })
        })

        this.anims.create({ 
            key: 'up walk',
            frameRate: 5,
            repeat: -1, //infinately 
            frames: this.anims.generateFrameNames('character', {
                prefix: 'sprite', 
                start: '2', //standing frame 
                end: '9', //static 
                zeroPad: 1 
            })
        })

        this.anims.create({ 
            key: 'down walk',
            frameRate: 5,
            repeat: -1, //infinately 
            frames: this.anims.generateFrameNames('character', {
                prefix: 'sprite', 
                start: '2', //standing frame 
                end: '9', //static 
                zeroPad: 1 
            })
        })

        this.anims.create({ 
            key: 'down walk',
            frameRate: 5,
            repeat: -1, //infinately 
            frames: this.anims.generateFrameNames('character', {
                prefix: 'sprite', 
                start: '2', //standing frame 
                end: '9', //static 
                zeroPad: 1 
            })
        })

        this.anims.create({ 
            key: 'leftup walk',
            frameRate: 5,
            repeat: -1, //infinately 
            frames: this.anims.generateFrameNames('character', {
                prefix: 'sprite', 
                start: '11', //standing frame 
                end: '17', //static 
                zeroPad: 1 
            })
        })

        this.anims.create({ 
            key: 'leftdown walk',
            frameRate: 5,
            repeat: -1, //infinately 
            frames: this.anims.generateFrameNames('character', {
                prefix: 'sprite', 
                start: '11', //standing frame 
                end: '17', //static 
                zeroPad: 1 
            })
        })

        this.anims.create({
            key: 'explode', 
            frameRate: 10, 
            frames: this.anims.generateFrameNumbers('explosion', { 
                start: 0, 
                end: 8, 
            }),
            
        }); 
    } 

    update(){
        
        if(Phaser.Input.Keyboard.JustDown(keySPACE)){
            this.scene.start('playScene'); 
        }

    
        if(Phaser.Input.Keyboard.JustDown(keyT)) {
            this.scene.start('tutorialScene');   
        } 
        
    }

} 