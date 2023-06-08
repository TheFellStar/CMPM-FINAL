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
        this.start = this.add.text(-300, 500, "Start").setFontSize(50);
        this.resume = this.add.text(-375, 575, "Resume").setFontSize(50);
        this.options = this.add.text(-450, 650, "Options").setFontSize(50);
        this.exit = this.add.text(-525, 725, "Exit").setFontSize(50);

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
    scene: [ Logo, Menu],
}

let game = new Phaser.Game(config);