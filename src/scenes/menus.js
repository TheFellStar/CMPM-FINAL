class Menu extends Phaser.Scene{
    constructor(){
        super('menu');
    }
    preload(){
        this.load.path = './assets/';
        this.load.image('time', 'Clock.jpg');
        this.load.image('paper', 'paper_TEMP.png');
        this.load.image('clock', 'clock_TEMP.png');
        this.load.audio('background', 'Blue-Dot-Sessions-Tangle.mp3');
    }
    create(){
        let interact = true;
        backgroundMusic = this.sound.add('background');
        backgroundMusic.loop = true;

        if(playing == false && mopp == true){
            backgroundMusic.play();
            playing = true;
        }

        if(mopp == true){
            this.caption = this.add.text(900, 1000, "[Music]").setFontSize(30);
        }

        this.tweens.add({
            targets: this.caption,
            alpha: {from: 1, to: 0},
            duration: 5000,
            ease: 'Linear',
        })

        this.title = this.add.text(-500, 50, "Tale of Time").setFontSize(100);
        this.start = this.add.text(-300, 500, "Start", {color: '#ffffff'}).setFontSize(50);
        this.start.setInteractive();
        this.resume = this.add.text(-375, 575, "How to play").setFontSize(50);
        this.resume.setInteractive();
        this.options = this.add.text(-450, 650, "Options").setFontSize(50);
        this.options.setInteractive();
        this.credits = this.add.text(-525, 725, "Credits").setFontSize(50);
        this.credits.setInteractive();

        this.clock = this.add.image(1500, 700, 'clock').setScale(1);
        this.clock.setOrigin(0.5, 0.5);
        this.clock.angle = 25;
        this.paper = this.add.image(1825, 300, 'paper').setScale(0.3);
        this.paper.setOrigin(0.5,0.5);
        this.paper.angle = 300;
        this.paper = this.add.image(1300, 250, 'paper').setScale(0.3);
        this.paper.angle = 270;
        this.add.image(1100, 400, 'paper').setScale(0.3);
        this.paper = this.add.image(1600, 700, 'paper').setScale(0.3);
        this.paper.angle = 25;
        this.paper = this.add.image(1100, 750, 'paper').setScale(0.3);
        this.paper.flipX = true;
        this.paper = this.add. image(1700, 950, 'paper').setScale(0.3);
        this.paper.flipX = true;
        this.paper.angle = 350

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
                targets: this.credits,
                x:525,
                y:725,
                duration:200,
                ease: 'Linear',
            })
        })

        this.c1 = this.add.image(-500, 0, 'time').setScale(.2);


        this.start.on('pointerover', () =>{
            if(interact == true){
                this.c1.destroy();
                this.c1 = this.add.image(250, 525, 'time').setScale(.05);
                this.resume.setColor('#ffffff');
                this.start.setColor('#86c5da');
                this.options.setColor('#ffffff');
                this.credits.setColor('#ffffff');
            }
        })
        this.resume.on('pointerover', () => {
            if(interact == true){
                this.c1.destroy();
                this.c1 = this.add.image(325, 600, 'time').setScale(.05);
                this.resume.setColor('#86c5da');
                this.start.setColor('#ffffff');
                this.options.setColor('#ffffff');
                this.credits.setColor('#ffffff');
            }
        })
        this.options.on('pointerover', () => {
            if(interact == true){
                this.c1.destroy();
                this.c1 = this.add.image(400, 675, 'time').setScale(.05);
                this.resume.setColor('#ffffff');
                this.start.setColor('#ffffff');
                this.options.setColor('#86c5da');
                this.credits.setColor('#ffffff');
            }
        })
        this.credits.on('pointerover', () => {
            if(interact == true){
                this.c1.destroy();
                this.c1 = this.add.image(475, 750, 'time').setScale(.05);
                this.resume.setColor('#ffffff');
                this.start.setColor('#ffffff');
                this.options.setColor('#ffffff');
                this.credits.setColor('#86c5da');
            }
        })

        this.credits.on('pointerdown', () => {
            if(interact == true){
                this.scene.start('credits');
            }
        })
        this.options.on('pointerdown', () => {
            if(interact == true){
                level = 0;
                this.scene.start('options');
            }
        })
        this.resume.on('pointerdown', () => {
            if(interact == true){
                this.scene.start('howplay');
            }
        })
        this.start.on('pointerdown', () => {
            if(interact == true){
                interact = false;
                this.c2 = this.add.image(-960, 540, 'time').setScale(1);
                const timeline = this.add.timeline([
                    {
                        at: 0,
                        tween: {
                            targets: this.c2,
                            x: 2880,
                            duration: 2000
                        }
                    },
                    {
                        at: 1000,
                        run: () => {
                            this.cameras.main.fadeOut(1000,0,0,0);
                            this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) =>{
                                this.scene.start('intro');
                            })
                        }
                    }
                ]);
                
                timeline.play();
            }
        })
    }
}

class Pause extends Phaser.Scene {
    constructor(){
        super('pause');
    }
    create(){
        if(mopp == true){
            this.caption = this.add.text(900, 1000, "[Music]").setFontSize(30);
        }

        this.tweens.add({
            targets: this.caption,
            alpha: {from: 1, to: 0},
            duration: 5000,
            ease: 'Linear',
        })

        this.add.text(700, 50, "Game Paused").setFontSize(100);
        this.cont = this.add.text(900, 300, "Continue").setFontSize(50);
        this.cont.setInteractive();
        this.options = this.add.text(900, 500, "Options").setFontSize(50);
        this.options.setInteractive();
        this.exit = this.add.text(900, 700, "Exit").setFontSize(50);
        this.exit.setInteractive();

        this.cont.on('pointerdown', () => {
            if(level == 1){
                this.scene.start('level1');
            }
            if(level == 2){
                this.scene.start('level1alt');
            }
            if(level == 3){
                this.scene.start('level2');
            }
            if(level == 4){
                this.scene.start('level2future');
            }
            if(level == 5){
                this.scene.start('level3');
            }
            if(level == 7){
                this.scene.start('level3future');
            }
            if(level == 8){
                this.scene.start('level3past');
            }
        })
        this.options.on('pointerdown', () => {
            this.scene.start('options');
        })
        this.exit.on('pointerdown', () => {
            this.scene.start('logo');
        })
    }
}

class Options extends Phaser.Scene {
    constructor(){
        super('options');
    }
    create(){
        if(mopp == true){
            this.caption = this.add.text(900, 1000, "[Music]").setFontSize(30);
        }

        this.tweens.add({
            targets: this.caption,
            alpha: {from: 1, to: 0},
            duration: 5000,
            ease: 'Linear',
        })

        this.add.text(750, 100, "Options").setFontSize(100);
        this.add.text(750, 300, "Music").setFontSize(50);
        this.add.text(750, 500, "Fullscreen").setFontSize(50);
        this.back = this.add.text(750, 900, "Back").setFontSize(50);
        this.back.setInteractive();
        
        if(full == false){
            this.fullscreen = this.add.text(1100, 500, "Off").setFontSize(50);
            this.fullscreen.setColor("#ff0000");
        }else{
            this.fullscreen = this.add.text(1100, 500, "On").setFontSize(50);
            this.fullscreen.setColor("#00ff00");
        }
        this.fullscreen.setInteractive();
        this.fullscreen.on('pointerdown', () => {
            if(full == false){
                full = true;
                this.fullscreen.setColor("#00ff00");
                this.fullscreen.setText("On");
                this.scale.startFullscreen();
            }else{
                full = false;
                this.fullscreen.setColor("#ff0000");
                this.fullscreen.setText("Off");
                this.scale.stopFullscreen();
            }
        })

        if(mopp == false){
            this.music = this.add.text(1100, 300, "Off").setFontSize(50);
            this.music.setColor("#ff0000");
        }else{
            this.music = this.add.text(1100, 300, "On").setFontSize(50);
            this.music.setColor("#00ff00");
        }
        this.music.setInteractive();
        this.music.on('pointerdown', () => {
            if(mopp == false){
                mopp = true;
                this.music.setColor("#00ff00");
                this.music.setText("On");
                playing = true;
                backgroundMusic.play();
                this.caption = this.add.text(900, 1000, "[Music]").setFontSize(30);
                this.tweens.add({
                    targets: this.caption,
                    alpha: {from: 1, to: 0},
                    duration: 5000,
                    ease: 'Linear',
                })
            }else{
                mopp = false;
                this.music.setColor("#ff0000");
                this.music.setText("Off");
                playing = false;
                backgroundMusic.stop();
                this.caption.destroy();
            }
        })

        if(level == 0){
            this.back.on('pointerdown', () => {
                this.scene.start('menu');
            })
        }else{
            this.back.on('pointerdown', () => {
                this.scene.start('pause');
            })
        }
    }
}

class Credits extends Phaser.Scene{
    constructor(){
        super('credits');
    }
    create(){
        if(mopp == true){
            this.caption = this.add.text(900, 1000, "[Music]").setFontSize(30);
        }

        this.tweens.add({
            targets: this.caption,
            alpha: {from: 1, to: 0},
            duration: 5000,
            ease: 'Linear',
        })


        this.add.text(200, 300, "Time travel tunnel texture aquired at: https://clipground.com/24-bit-png-image.html").setFontSize(30);
        this.add.text(200, 400, "Main menu paper assets aquired from: https://www.pixilart.com/art/pixel-paper-2e29f43a603936d").setFontSize(30);
        this.add.text(200, 500, "Grandfather clock aquired from: https://www.pixilart.com/art/grandfather-clock-d658d81399dd7f9").setFontSize(30);
        this.add.text(200, 600, "Royalty free audio assets aquired from Pixabay").setFontSize(30);
        this.add.text(200, 700, "Logo asset created by Harry Chou").setFontSize(30);
        this.add.text(200, 800, "Other assets created by Aidan Andreasen").setFontSize(30);
        this.back = this.add.text(50, 50, "Go back").setFontSize(30);
        this.back.setInteractive();
        this.back.on('pointerdown', () => {
            this.cameras.main.fadeOut(1000,0,0,0);
            this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) =>{
                this.scene.start('menu');
            })
        })
    }
}

class TravelSelect extends Phaser.Scene {
    constructor(){
        super('travelselect');
    }
    create(){
        this.add.rectangle(700, 500, 300, 100, 0xff0000);
        this.past = this.add.text(640, 475, "Past", {color: "#0000000"}).setFontSize(50);
        this.past.setInteractive();
        this.add.rectangle(1300, 500, 300, 100, 0x00ff00);
        this.future = this.add.text(1220, 475, "Future", {color: "#000000"}).setFontSize(50);
        this.future.setInteractive();

        this.past.on('pointerdown', () => {
            level = 5;
            this.cameras.main.fadeOut(1000, 0, 0,0);
            this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) =>{
                this.scene.stop('level3');
                this.scene.stop('travelselect');
                this.scene.start('timetravel');
            })
        })
        this.future.on('pointerdown', () => {
            level = 6;
            this.cameras.main.fadeOut(1000, 0, 0,0);
            this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) =>{
                this.scene.stop('level3');
                this.scene.stop('travelselect');
                this.scene.start('timetravel');
            })
        })
    }
}

class HowPlay extends Phaser.Scene{
    constructor(){
        super('howplay');
    }
    create(){
        this.back = this.add.text(50, 50, "Back").setFontSize(30);
        this.back.setInteractive();
        this.back.on('pointerdown', () => {
            this.scene.start('menu');
        })
        this.add.text(100, 400, "Click on objects to move around.").setFontSize(50);
        this.add.text(100, 500, "When in doubt, try clicking on something to see what it does.").setFontSize(50);
        this.add.text(100, 600, "There will be a puzzle in each room to open a door.").setFontSize(50);
    }
}