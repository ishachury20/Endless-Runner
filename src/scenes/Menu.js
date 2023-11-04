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
        this.load.image('menuscreen', './assets/pixil-frame-menu.png'); 
        this.load.image('background', './assets/pixilart-drawing-background.png'); 
        this.load.atlas('character', './assets/bird-spritesheet.png','./assets/sprites.json'); 
        this.load.image('clouds', './assets/pixilart-drawing-clouds.png'); 
        this.load.image('stars', './assets/pixil-frame-stars.png'); 

        //add audio later 
    }

    create(){
        this.menuscreen = this.add.tileSprite(0, 0, 640, 480, 'menuscreen').setOrigin(0, 0);
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE); 

        this.anims.create({ 
            key: 'right walk',
            frameRate: 5,
            repeat: -1, //infinately 
            frames: this.anims.generateFrameNames('character', {
                prefix: 'sprite', 
                start: '2', //standing frame 
                end: '3' //static 
            })
        })

        this.anims.create({
            key: 'left walk',
            frameRate: 5,
            repeat: -1, //infinately 
            frames: this.anims.generateFrameNames('character', {
                prefix: 'sprite', 
                start: '8', //standing frame 
                end: '17' //static 
            })
        })
    } 

    update(){
        if(Phaser.Input.Keyboard.JustDown(keySPACE)){
            this.scene.start('playScene'); 
        }
    }

} 