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
        //add audio later 
    }

    create(){
        this.menuscreen = this.add.tileSprite(0, 0, 640, 480, 'menuscreen').setOrigin(0, 0);
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE); 
    } 

    update(){
        if(Phaser.Input.Keyboard.JustDown(keySPACE)){
            this.scene.start('playScene'); 
        }
    }

} 