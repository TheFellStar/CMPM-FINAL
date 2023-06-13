class Logo extends Phaser.Scene{
    constructor() {
        super('logo');
    }
    preload(){
        this.load.path = './assets/';
        this.load.image('logo', 'studio_logo_TEMP.png');
    }
    create(){
        this.logo = this.add.image(1000, 500, 'logo').setScale(.25);
        this.logo.setOrigin(0.5,0.5);
        const timeline = this.add.timeline([
            {
                at: 0,
                run: () => {this.cameras.main.fadeIn(1000,0,0,0);}
            },
            {
                at: 500,
                tween: {
                    targets: this.logo,
                    rotation: 6.28318531,
                    duration: 2000
                }
            },
            {
                at: 2500,
                run: () => {
                    this.cameras.main.fadeOut(1000,0,0,0);
                    this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) => {
                        this.scene.start('menu')
                    })
                }
            }
        ]);
        
        timeline.play();
    }
}

class Intro extends Phaser.Scene {
    constructor(){
        super('intro');
    }
    preload(){

    }
    create(){
        this.cameras.main.fadeIn(1000,0,0,0);
        this.label = this.add.text(100, 200, '').setFontSize(40);
        this.typewriteText('You got the call late at night, some owner of a mansion has gone missing.\n\nThe normal investigator found no trail or trace of his wearabouts...\n\nLooks like it is up to you, the Time Investigation Agency to figure out\n\nwhat happened.');   
        
        this.input.on('pointerdown', () => {
            this.cameras.main.fadeOut(1000,0,0,0);
            this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) =>{
                this.scene.start('level1');
            })
        })
    }
    typewriteText(text){
        const length = text.length
        let i = 0
        this.time.addEvent({
            callback: () => {
                this.label.text += text[i]
                ++i
            },
            repeat: length - 1,
            delay: 100
        })
    }
}

class Pickup extends Phaser.Scene{
    constructor(){
        super('pickup');
    }
    preload(){
        this.load.path = './assets/';
        this.load.image('contacts', 'contacts_list.png');
        this.load.image('diary', 'diary_past.png');
        this.load.image('notecard', 'notecard.png');
        this.load.audio('paper', 'paper sound.mp3');
    }
    create(){
        let papsound = this.sound.add('paper');
        papsound.play();
        if(display == 1){
            this.add.image(1000, 500, 'notecard').setScale(1.5);
            this.add.text(800, 500, "This is a clue", {color: "#000000"}).setFontSize(50);
            this.input.on('pointerdown', () => {
                this.scene.stop('pickup');
                this.scene.resume('level1');
            })
        }
        if(display == 2){
            this.add.image(1000, 500, 'contacts').setScale(1);
            this.add.text(700, 500, "Find all to continue", {color: "#000000"}).setFontSize(50);
            this.input.on('pointerdown', () => {
                this.scene.stop('pickup');
                this.scene.resume('level1');
            })
        }
        if(display == 3){
            this.add.image(1000, 500, 'notecard').setScale(1.5);
            this.add.text(650, 500, "Press 'Z' to travel to the past", {color: "#000000"}).setFontSize(40);
            this.input.on('pointerdown', () => {
                this.scene.stop('pickup');
                this.scene.resume('level1');
            })
        }
        if(display == 4){
            this.add.image(1000, 500, 'notecard').setScale(1.5);
            this.add.text(700, 500, "Try", {color: "#000000"}).setFontSize(50);
            this.input.on('pointerdown', () => {
                this.scene.stop('pickup');
                this.scene.resume('level1alt');
            })
        }
        if(display == 5){
            this.add.image(1000, 500, 'contacts').setScale(1);
            this.add.text(850, 400, "Present", {color: "#000000"}).setFontSize(50);
            this.input.on('pointerdown', () => {
                this.scene.stop('pickup');
                this.scene.resume('level1alt');
            })
        }
        if(display == 6){
            this.add.image(1000, 500, 'diary').setScale(1);
            this.add.text(700, 500, "Door", {color: "#000000"}).setFontSize(50);
            this.input.on('pointerdown', () => {
                this.scene.stop('pickup');
                this.scene.resume('level1alt');
            })
        }
    }
}

class TimeTravel extends Phaser.Scene {
    constructor(){
        super('timetravel');
    }
    preload(){
        this.load.path = './assets/';
        //this.load.image('tunnelclock', 'textures/time_travel_texture.png');
        this.load.image('test', 'textures/test.png');
        this.load.glsl('bundle', 'bundle.glsl.js');
    }
    create(){
        this.cameras.main.fadeIn(1000,0,0,0);
        const shader = this.add.shader('Tunnel', 960, 540, 1920, 1080, [ 'test' ]);
        this.time.delayedCall(3000, () => {
            this.cameras.main.fadeOut(1000,0,0,0);
            this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) =>{
                if(level == 1){
                    this.scene.start('level1alt');
                }
                if(level == 2){
                    this.scene.start('level1');
                }
            })
        })
    }
}