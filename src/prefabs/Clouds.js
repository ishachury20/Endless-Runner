class Clouds extends Phaser.Physics.Arcade.Sprite{
    //constructor(scene, x, y, texture, frame){
        //super(scene, x, y, texture, frame); 
        //scene.add.existing(this); 

        //this.clouds = this.scene.physics.add.sprite(x, y, 'clouds')
    //}

    constructor(scene, velocity) {
        // call Phaser Physics Sprite constructor
        super(scene, game.config.width + 16, Phaser.Math.Between(8, game.config.height - 8), 'character'); 
        
        this.parentScene = scene;               // maintain scene context

        // set up physics sprite
        this.parentScene.add.existing(this);    // add to existing scene, displayList, updateList
        this.parentScene.physics.add.existing(this);    // add to physics system
        this.setVelocityX(velocity);            // make it go!
        this.setImmovable();                    
        this.tint = Math.random() * 0xFFFFFF;   // randomize tint
        this.clouds = true;                 // custom property to control barrier spawning
    }

    update() {
        // add new barrier when existing barrier hits center X
        if(this.clouds && this.x < centerX) {
            // (recursively) call parent scene method from this context
            this.parentScene.cloudsr(this.parent, this.velocity);
            this.clouds = false;
        }

        // destroy paddle if it reaches the left edge of the screen
        if(this.x < -this.width) {
            this.destroy();
        }
    }
} 