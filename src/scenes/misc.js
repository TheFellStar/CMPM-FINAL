class Logo extends Phaser.Scene{
    constructor() {
        super('logo');
    }
    preload(){
        this.load.path = './assets/';
        this.load.image('logo', 'studio_logo_TEMP-min.png');
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
        this.load.image('futureDiary', 'diary_future.png');
        this.load.image('letter', 'letter.png');
        this.load.image('shopping', 'shopping_list.png');
        this.load.audio('paper', 'paper sound.mp3');
    }
    create(){
        this.caption = this.add.text(900, 1000, "[Paper turning]").setFontSize(30);
        this.tweens.add({
            targets: this.caption,
            alpha: {from: 1, to: 0},
            duration: 2000,
            ease: 'Linear',
        })
        let papsound = this.sound.add('paper');
        papsound.play();
        if(display == 1){
            this.add.image(1000, 500, 'notecard').setScale(1.5);
            this.add.text(700, 300, "I go now, forward...\n\nI'll finally leave this all behind me", {color: "#000000"}).setFontSize(30);
            this.input.on('pointerdown', () => {
                this.scene.stop('pickup');
                this.scene.resume('level1');
            })
        }
        if(display == 2){
            this.add.image(1000, 500, 'contacts').setScale(1);
            this.add.text(700, 300, "The owner left years ago,\n\nleft me in charge of this whole\n\nmansion.\n\nJust one groundskeeper for this\n\nwhole place.", {color: "#000000"}).setFontSize(30);
            this.input.on('pointerdown', () => {
                this.scene.stop('pickup');
                this.scene.resume('level1');
            })
        }
        if(display == 3){
            this.add.image(1000, 500, 'notecard').setScale(1.5);
            this.add.text(650, 500, "Press '⏱️' to travel to the past", {color: "#000000"}).setFontSize(40);
            this.input.on('pointerdown', () => {
                this.scene.stop('pickup');
                this.scene.resume('level1');
            })
        }
        if(display == 4){
            this.add.image(1000, 500, 'notecard').setScale(1.5);
            this.add.text(700, 300, "I keep losing my key, maybe\n\nI'll keep a spare behind the tv", {color: "#000000"}).setFontSize(30);
            this.input.on('pointerdown', () => {
                this.scene.stop('pickup');
                this.scene.resume('level1alt');
            })
        }
        if(display == 5){
            this.add.image(1000, 500, 'contacts').setScale(1);
            this.add.text(700, 400, "Time... It's a curious thing.\n\nI can't stop looking up at the\n\nclock and wondering...\n\nWhat if", {color: "#000000"}).setFontSize(30);
            this.input.on('pointerdown', () => {
                this.scene.stop('pickup');
                this.scene.resume('level1alt');
            })
        }
        if(display == 6){
            this.add.image(1000, 500, 'letter').setScale(1);
            this.add.text(720, 400, "This place is great, this is\n\nthe Third time I've lived\n\nthis day", {color: "#ff00ff"}).setFontSize(30);
            this.input.on('pointerdown', () => {
                this.scene.stop('pickup');
                this.scene.resume('level2future');
            })
        }
        if(display == 7){
            this.add.image(1000, 500, 'shopping').setScale(1);
            this.add.text(650, 400, "I finally did it! I'm finally here.\n\nNow what's the First thing I should do", {color: "#0000ff"}).setFontSize(30);
            this.input.on('pointerdown', () => {
                this.scene.stop('pickup');
                this.scene.resume('level2future');
            })
        }
        if(display == 8){
            this.add.image(1000, 500, 'shopping').setScale(1);
            this.add.text(650, 400, "I don't understand, I shouldn't be here.\n\nI shut the machine off when I was in\n\nthe future. Why am I living this\n\nhellish present for the Second time?", {color: "#ffff00"}).setFontSize(30);
            this.input.on('pointerdown', () => {
                this.scene.stop('pickup');
                this.scene.resume('level2');
            })
        }
        if(display == 9){
            this.add.image(1000, 500, 'diary').setScale(1);
            this.add.text(700, 400, "I've been cleaning this place for\n\nFour days now.\n\nThis place feels familiar, why am I\n\nin my old home?", {color: "#00ffff"}).setFontSize(30);
            this.input.on('pointerdown', () => {
                this.scene.stop('pickup');
                this.scene.resume('level2');
            })
        }
        if(display == 10){
            this.add.image(1000, 500, 'diary').setScale(1);
            this.add.text(700, 400, "I think I'm losing it.\n\nI read my diary from the other day,\n\nI thought I was the groundskeeper of\n\nthis place. I don't know how\n\nlong I've been here anymore...", {color: "#000000"}).setFontSize(30);
            this.input.on('pointerdown', () => {
                this.scene.stop('pickup');
                this.scene.resume('level3');
            })
        }
        if(display == 11){
            this.add.image(1000, 500, 'futureDiary').setScale(1);
            this.add.text(700, 400, "The days blur, I wish I had never\n\nmessed with time. I wish someone\n\nwould come save me now... \n\nmaybe a time detective.", {color: "#000000"}).setFontSize(30);
            this.input.on('pointerdown', () => {
                this.scene.stop('pickup');
                this.scene.resume('level3future');
            })
        }
        if(display == 12){
            this.add.image(1000, 500, 'letter').setScale(1);
            this.add.text(720, 400, "I've figured it out, I'm in a\n\nloop. I'm stuck living the same\n\n3 days over and over. I can\n\ntravel between them but I can't\n\nescape them. My time machine\n\nmust've gone wrong...", {color: "#000000"}).setFontSize(30);
            this.input.on('pointerdown', () => {
                this.scene.stop('pickup');
                this.scene.resume('level3past');
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
        //this.load.image('tunnelTexture', 'textures/time_travel_texture.png');
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
                if(level == 3){
                    this.scene.start('level2future');
                }
                if(level == 4){
                    this.scene.start('level2');
                }
                if(level == 5){
                    this.scene.start('level3past');
                }
                if(level == 6){
                    this.scene.start('level3future');
                }
                if(level == 7){
                    this.scene.start('level3');
                }
                if(level == 8){
                    this.scene.start('level3');
                }
            })
        })
    }
}

class FutureLock extends Phaser.Scene {
    constructor(){
        super('futurelock');
    }
    preload(){
        this.load.path = './assets/';
        this.load.image('futureLock', 'lock_future.png');
    }
    create(){
        this.exitButton = this.add.text(50, 50, "X").setFontSize(50);
        this.exitButton.setInteractive();
        this.exitButton.on('pointerdown', () => {
            this.scene.stop('futurelock');
            this.scene.resume('level2future');
        })
        this.add.image(960, 500, 'futureLock').setScale(1);
        this.s1 = this.add.rectangle(810, 540, 100, 100, 0xffffff);
        this.s1.setInteractive();
        this.s2 = this.add.rectangle(910, 540, 100, 100, 0xffffff);
        this.s2.setInteractive();
        this.s3 = this.add.rectangle(1010, 540, 100, 100, 0xffffff);
        this.s3.setInteractive();
        this.s4 = this.add.rectangle(1110, 540, 100, 100, 0xffffff);
        this.s4.setInteractive();

        this.s1c = 0;
        this.s2c = 0;
        this.s3c = 0;
        this.s4c = 0;

        this.s1.on('pointerdown', () => {
            if(this.s1c == 0){
                this.s1.setFillStyle(0xff00ff);
                this.s1c = 1;
            }else if(this.s1c == 1){
                this.s1.setFillStyle(0xffff00);
                this.s1c = 2;
            }else if(this.s1c == 2){
                this.s1.setFillStyle(0x0000ff);
                this.s1c = 3;
            }else if(this.s1c == 3){
                this.s1.setFillStyle(0x00ffff);
                this.s1c = 4;
            }else {
                this.s1.setFillStyle(0xffffff);
                this.s1c = 0;
            }
        })
        this.s2.on('pointerdown', () => {
            if(this.s2c == 0){
                this.s2.setFillStyle(0xff00ff);
                this.s2c = 1;
            }else if(this.s2c == 1){
                this.s2.setFillStyle(0xffff00);
                this.s2c = 2;
            }else if(this.s2c == 2){
                this.s2.setFillStyle(0x0000ff);
                this.s2c = 3;
            }else if(this.s2c == 3){
                this.s2.setFillStyle(0x00ffff);
                this.s2c = 4;
            }else {
                this.s2.setFillStyle(0xffffff);
                this.s2c = 0;
            }
        })
        this.s3.on('pointerdown', () => {
            if(this.s3c == 0){
                this.s3.setFillStyle(0xff00ff);
                this.s3c = 1;
            }else if(this.s3c == 1){
                this.s3.setFillStyle(0xffff00);
                this.s3c = 2;
            }else if(this.s3c == 2){
                this.s3.setFillStyle(0x0000ff);
                this.s3c = 3;
            }else if(this.s3c == 3){
                this.s3.setFillStyle(0x00ffff);
                this.s3c = 4;
            }else {
                this.s3.setFillStyle(0xffffff);
                this.s3c = 0;
            }
        })
        this.s4.on('pointerdown', () => {
            if(this.s4c == 0){
                this.s4.setFillStyle(0xff00ff);
                this.s4c = 1;
            }else if(this.s4c == 1){
                this.s4.setFillStyle(0xffff00);
                this.s4c = 2;
            }else if(this.s4c == 2){
                this.s4.setFillStyle(0x0000ff);
                this.s4c = 3;
            }else if(this.s4c == 3){
                this.s4.setFillStyle(0x00ffff);
                this.s4c = 4;
            }else {
                this.s4.setFillStyle(0xffffff);
                this.s4c = 0;
            }
        })
    }
    update(){
        if(this.s1c == 3 && this.s2c == 2 && this.s3c == 1 && this.s4c == 4){
            this.scene.stop('Futurelock');
            this.scene.stop('level2future');
            this.scene.start('level3');
        }
    }
}

class FinalLock extends Phaser.Scene {
    constructor(){
        super('finallock');
    }
    preload(){
        this.load.path = './assets/';
        this.load.image('lock', 'lock_present.png');
    }
    create(){
        this.add.text(50, 50, "Who are you investigating? Two letters").setFontSize(50);
        this.add.image(960, 540, 'lock');

        this.i = 0;
        this.j = 0;
        this.array = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
        this.left = this.add.text(875, 575, this.array[this.i], {color: "#000000"}).setFontSize(100);
        this.left.setInteractive();
        this.right = this.add.text(1020, 575, this.array[this.j], {color: "#000000"}).setFontSize(100);
        this.right.setInteractive();

        this.left.on('pointerdown', () => {
            if(this.i == 25){
                this.i = 0;
            }else{
                this.i++;
            }
            this.left.setText(this.array[this.i]);
        })
        this.right.on('pointerdown', () => {
            if(this.j == 25){
                this.j = 0;
            }else{
                this.j++;
            }
            this.right.setText(this.array[this.j]);
        })

        this.back = this.add.text(1700, 900, "Back").setFontSize(50);
        this.back.setInteractive();
        this.back.on('pointerdown', () => {
            this.scene.resume('level3past');
            this.scene.stop('finallock');
        })
    }
    update(){
        if(this.i == 12 && this.j == 4){
            this.scene.stop('level3past');
            this.scene.stop('finallock');
            this.scene.start('end');
        }
    }
}

class End extends Phaser.Scene {
    constructor(){
        super('end');
    }
    create(){
        this.cameras.main.fadeIn(1000,0,0,0);
        this.label = this.add.text(100, 200, '').setFontSize(40);
        this.typewriteText('As you open the door you once again step into the deralict house.\n\nYou curl into a ball on the floor, wondering why.\n\nWhat could have possibly gone wrong.\n\nMaybe one day you can escape, maybe one day you can be free.\n\nBut for now you are doomed to repeat, over, and over... again.\n\n\n\n\n                                  The End.');
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