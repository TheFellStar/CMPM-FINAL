class Logo extends Phaser.Scene{
    constructor() {
        super('logo');
    }
    preload(){

    }
    create(){
        this.add.text(800, 500, "Logo goes here").setFontSize(50);

        this.time.delayedCall(1000, () => {
            this.cameras.main.fadeOut(1000,0,0,0);
            this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) => {
                this.scene.start('menu')
            })
        })
    }
}

class Menu extends Phaser.Scene{
    constructor(){
        super('menu');
    }
    preload(){

    }
    create(){
        this.title = this.add.text(-500, 50, "Game Title").setFontSize(100);
        this.start = this.add.text(-300, 500, "Start", {color: '#ffffff'}).setFontSize(50);
        this.start.setInteractive();
        this.resume = this.add.text(-375, 575, "Resume").setFontSize(50);
        this.resume.setInteractive();
        this.options = this.add.text(-450, 650, "Options").setFontSize(50);
        this.options.setInteractive();
        this.exit = this.add.text(-525, 725, "Exit").setFontSize(50);
        this.exit.setInteractive();

        this.tweens.add({
            targets: this.title,
            x:50,
            y:50,
            duration:200,
            ease: 'Linear',
        })

        this.time.delayedCall(200, () => {
            this.tweens.add({
                targets: this.start,
                x:300,
                y:500,
                duration:200,
                ease: 'Linear',
            })
            this.tweens.add({
                targets: this.resume,
                x:375,
                y:575,
                duration:200,
                ease: 'Linear',
            })
            this.tweens.add({
                targets: this.options,
                x:450,
                y:650,
                duration:200,
                ease: 'Linear',
            })
            this.tweens.add({
                targets: this.exit,
                x:525,
                y:725,
                duration:200,
                ease: 'Linear',
            })
        })

        this.start.on('pointerover', () =>{
            this.resume.setColor('#ffffff');
            this.start.setColor('#0000ff');
            this.options.setColor('#ffffff');
            this.exit.setColor('#ffffff');
        })
        this.resume.on('pointerover', () => {
            this.resume.setColor('#0000ff');
            this.start.setColor('#ffffff');
            this.options.setColor('#ffffff');
            this.exit.setColor('#ffffff');
        })
        this.options.on('pointerover', () => {
            this.resume.setColor('#ffffff');
            this.start.setColor('#ffffff');
            this.options.setColor('#0000ff');
            this.exit.setColor('#ffffff');
        })
        this.exit.on('pointerover', () => {
            this.resume.setColor('#ffffff');
            this.start.setColor('#ffffff');
            this.options.setColor('#ffffff');
            this.exit.setColor('#0000ff');
        })
        this.start.on('pointerdown', () => {
            this.cameras.main.fadeOut(1000,0,0,0);
            this.camersa.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) =>{
                this.scene.start('scene1');
            })
        })
    }
}

class Scene1 extends Phaser.Scene {
    constructor(){
        super('scene1');
    }
    preload(){

    }
    create(){

    }
}

class Scene2 extends Phaser.Scene {
    constructor(){
        super('scene2');
    }
    preload(){

    }
    create(){

    }
}

let config = {
    type: Phaser.AUTO,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1920,
        height: 1080
    },
    backgroundColor: '#301934',
    scene: [ Logo, Menu, Scene1, Scene2],
}

let game = new Phaser.Game(config);