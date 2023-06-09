class Level1 extends Phaser.Scene {
    constructor(){
        super('level1');
    }
    preload(){
        this.load.path = './assets/';
        this.load.image('bookshelf', 'bookshelf_present.png');
        this.load.image('carpet', 'carpet_present-min.png');
        this.load.image('chair', 'chair_present.png');
        this.load.image('couch', 'couch_present.png');
        this.load.image('door', 'door_present.png');
        this.load.image('tv', 'tv_present-min.png');
        this.load.image('table', 'table_present-min.png');
        this.load.image('player', 'player.png');
    }
    create(){
        this.cameras.main.fadeIn(1000,0,0,0);
        
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

        if(lock == true){
            this.doorText = this.add.text(50, 50, "The door stayed unlocked from the past").setFontSize(30);
        }

        this.bookshelf = this.add.image(1400, 150, 'bookshelf').setScale(.3);
        this.bookshelf.setInteractive();
        this.diningTable = this.add.image(500, 300, 'table').setScale(.35);
        this.diningTable.setInteractive();
        this.carpet = this.add.image(700, 600, 'carpet').setScale(.3);
        this.carpet.setInteractive();
        this.table = this.add.image(500, 1000, 'table').setScale(.35);
        this.table.setInteractive();
        this.sofa = this.add.image(900, 600, 'couch').setScale(.3);
        this.sofa.angle = 90;
        this.sofa.setInteractive();
        this.tv = this.add.image(125, 600, 'tv').setScale(.3);
        this.tv.setInteractive();
        this.chair = this.add.image(1150, 950, 'chair').setScale(.3);
        this.chair.setInteractive();
        this.door = this.add.image(1800, 500, 'door').setScale(.3);
        this.door.setInteractive();
        this.player = this.add.image(1400, 600, 'player').setScale(.3);

        this.travel = this.add.text(1800, 900, "⏱️").setFontSize(100);
        this.travel.setInteractive();

        this.bookshelf.on('pointerdown', () => {
            this.tweens.add({
                targets: this.player,
                x: this.bookshelf.x,
                y: this.bookshelf.y,
                duration: 500,
                ease: 'Linear',
            })
            this.time.delayedCall(500, () => {
                display = 1;
                this.scene.pause('level1');
                this.scene.launch('pickup');
            })
        })
        this.diningTable.on('pointerdown', () => {
            this.tweens.add({
                targets: this.player,
                x: this.diningTable.x,
                y: this.diningTable.y,
                duration: 500,
                ease: 'Linear',
            })
            this.time.delayedCall(500, () => {
                display = 2;
                this.scene.pause('level1');
                this.scene.launch('pickup');
            })
        })
        this.table.on('pointerdown', () => {
            this.tweens.add({
                targets: this.player,
                x: this.table.x,
                y: this.table.y,
                duration: 500,
                ease: 'Linear',
            })
        })
        this.carpet.on('pointerdown', () => {
            this.tweens.add({
                targets: this.player,
                x: this.carpet.x,
                y: this.carpet.y,
                duration: 500,
                ease: 'Linear',
            })
        })
        this.sofa.on('pointerdown', () => {
            this.tweens.add({
                targets: this.player,
                x: this.sofa.x,
                y: this.sofa.y,
                duration: 500,
                ease: 'Linear',
            })
        })
        this.tv.on('pointerdown', () => {
            this.tweens.add({
                targets: this.player,
                x: this.tv.x,
                y: this.tv.y,
                duration: 500,
                ease: 'Linear',
            })
        })
        this.chair.on('pointerdown', () => {
            this.tweens.add({
                targets: this.player,
                x: this.chair.x,
                y: this.chair.y,
                duration: 500,
                ease: 'Linear',
            })
            this.time.delayedCall(500, () => {
                display = 3;
                this.scene.pause('level1');
                this.scene.launch('pickup');
            })
        })

        this.door.on('pointerdown', () => {
            this.tweens.add({
                targets: this.player,
                x: this.door.x,
                y: this.door.y,
                duration: 500,
                ease: 'Linear',
            })
            this.time.delayedCall(500, () => {
                if(lock == false){
                    this.doorText = this.add.text(50, 50, "The lock is rusted shut, can't get it open...").setFontSize(30);
                    this.tweens.add({
                        targets: this.doorText,
                        alpha: {from: 1, to: 0},
                        duration: 2000,
                        ease: 'Linear',
                    })
                }else{
                    this.cameras.main.fadeOut(1000, 0, 0,0);
                    this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) =>{
                        this.scene.start('level2');
                    })
                }
            })
        })

        this.travel.on('pointerdown', () => {
            this.cameras.main.fadeOut(1000, 0, 0,0);
            this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) =>{
                this.scene.start('timetravel');
            })
        })

        this.pmenu = this.add.text(1800, 50, "⚙️").setFontSize(50);
        this.pmenu.setInteractive();
        level = 1;
        this.pmenu.on('pointerdown', () => this.scene.start('pause'));
    }
}

class Level1Alt extends Phaser.Scene {
    constructor(){
        super('level1alt');
    }
    preload(){
        this.load.path = './assets/';
        this.load.image('bookshelfp', 'bookshelf_past.png');
        this.load.image('carpetp', 'carpet_past-min.png');
        this.load.image('chairp', 'chair_past-min.png');
        this.load.image('doorp', 'door_past.png');
        this.load.image('sofa', 'sofa_past.png');
        this.load.image('tablep', 'table_past.png');
        this.load.image('tvp', 'tv_past-min.png');
        this.load.image('player', 'player.png');
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

        this.cameras.main.fadeIn(1000,0,0,0);

        this.bookshelf = this.add.image(1400, 150, 'bookshelfp').setScale(.3);
        this.bookshelf.setInteractive();
        this.diningTable = this.add.image(500, 300, 'tablep').setScale(.35);
        this.diningTable.setInteractive();
        this.carpet = this.add.image(700, 600, 'carpetp').setScale(.3);
        this.carpet.setInteractive();
        this.table = this.add.image(500, 1000, 'tablep').setScale(.35);
        this.table.setInteractive();
        this.sofa = this.add.image(900, 600, 'sofa').setScale(.3);
        this.sofa.setInteractive();
        this.sofa.angle = 90;
        this.tv = this.add.image(125, 600, 'tvp').setScale(.3);
        this.tv.setInteractive();
        this.chair = this.add.image(1150, 950, 'chairp').setScale(.3);
        this.chair.setInteractive();
        this.door = this.add.image(1800, 500, 'doorp').setScale(.3);
        this.door.setInteractive();
        this.player = this.add.image(1400, 600, 'player').setScale(.3);

        this.bookshelf.on('pointerdown', () => {
            this.tweens.add({
                targets: this.player,
                x: this.bookshelf.x,
                y: this.bookshelf.y,
                duration: 500,
                ease: 'Linear',
            })
        })
        this.diningTable.on('pointerdown', () => {
            this.tweens.add({
                targets: this.player,
                x: this.diningTable.x,
                y: this.diningTable.y,
                duration: 500,
                ease: 'Linear',
            })
        })
        this.table.on('pointerdown', () => {
            this.tweens.add({
                targets: this.player,
                x: this.table.x,
                y: this.table.y,
                duration: 500,
                ease: 'Linear',
            })
            this.time.delayedCall(500, () => {
                display = 4;
                this.scene.pause('level1alt');
                this.scene.launch('pickup');
            })
        })
        this.carpet.on('pointerdown', () => {
            this.tweens.add({
                targets: this.player,
                x: this.carpet.x,
                y: this.carpet.y,
                duration: 500,
                ease: 'Linear',
            })
            this.time.delayedCall(500, () => {
                display = 5;
                this.scene.pause('level1alt');
                this.scene.launch('pickup');
            })
        })
        this.sofa.on('pointerdown', () => {
            this.tweens.add({
                targets: this.player,
                x: this.sofa.x,
                y: this.sofa.y,
                duration: 500,
                ease: 'Linear',
            })
        })
        this.tv.on('pointerdown', () => {
            this.tweens.add({
                targets: this.player,
                x: this.tv.x,
                y: this.tv.y,
                duration: 500,
                ease: 'Linear',
            })
            this.time.delayedCall(500, () => {
                this.doorText = this.add.text(50, 50, "You found a key behind the TV!").setFontSize(30);
                this.tweens.add({
                    targets: this.doorText,
                    alpha: {from: 1, to: 0},
                    duration: 2000,
                    ease: 'Linear',
                })
                key = true;
            })
        })
        this.chair.on('pointerdown', () => {
            this.tweens.add({
                targets: this.player,
                x: this.chair.x,
                y: this.chair.y,
                duration: 500,
                ease: 'Linear',
            })
        })
        this.door.on('pointerdown', () => {
            this.tweens.add({
                targets: this.player,
                x: this.door.x,
                y: this.door.y,
                duration: 500,
                ease: 'Linear',
            })
            this.time.delayedCall(500, () => {
                if(key == false){
                    this.doorText = this.add.text(50, 50, "The door is locked, you'll need to find a key").setFontSize(30);
                    this.tweens.add({
                        targets: this.doorText,
                        alpha: {from: 1, to: 0},
                        duration: 2000,
                        ease: 'Linear',
                    })
                }else{
                    this.doorText = this.add.text(50, 50, "You unlocked the door, however boxes block the other side.").setFontSize(30);
                    this.tweens.add({
                        targets: this.doorText,
                        alpha: {from: 1, to: 0},
                        duration: 2000,
                        ease: 'Linear',
                    })
                    lock = true;
                }
            })
        })

        this.travel = this.add.text(1800, 900, "⏱️").setFontSize(100);
        this.travel.setInteractive();

        this.travel.on('pointerdown', () => {
            this.cameras.main.fadeOut(1000, 0, 0,0);
            this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) =>{
                this.scene.start('timetravel');
            })
        })

        this.pmenu = this.add.text(1800, 50, "⚙️").setFontSize(50);
        this.pmenu.setInteractive();
        level = 2;
        this.pmenu.on('pointerdown', () => this.scene.start('pause'));
    }
}

class Level2 extends Phaser.Scene {
    constructor(){
        super('level2');
    }
    preload(){
        this.load.path = './assets/';
        this.load.image('bookshelf', 'bookshelf_present.png');
        this.load.image('carpet', 'carpet_present-min.png');
        this.load.image('chair', 'chair_present.png');
        this.load.image('couch', 'couch_present.png');
        this.load.image('door', 'door_present.png');
        this.load.image('tv', 'tv_present-min.png');
        this.load.image('table', 'table_present-min.png');
        this.load.image('player', 'player.png');
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

        this.cameras.main.fadeIn(1000,0,0,0);

        this.doorText = this.add.text(50, 50, "Strange... it's the same room. Maybe I'll try the future instead.").setFontSize(30);

        this.bookshelf = this.add.image(1400, 150, 'bookshelf').setScale(.3);
        this.bookshelf.setInteractive();
        this.diningTable = this.add.image(500, 300, 'table').setScale(.35);
        this.diningTable.setInteractive();
        this.carpet = this.add.image(700, 600, 'carpet').setScale(.3);
        this.carpet.setInteractive();
        this.table = this.add.image(500, 1000, 'table').setScale(.35);
        this.table.setInteractive();
        this.sofa = this.add.image(900, 600, 'couch').setScale(.3);
        this.sofa.angle = 90;
        this.sofa.setInteractive();
        this.tv = this.add.image(125, 600, 'tv').setScale(.3);
        this.tv.setInteractive();
        this.chair = this.add.image(1150, 950, 'chair').setScale(.3);
        this.chair.setInteractive();
        this.door = this.add.image(1800, 500, 'door').setScale(.3);
        this.door.setInteractive();
        this.player = this.add.image(1400, 600, 'player').setScale(.3);

        this.travel = this.add.text(1800, 900, "⏱️").setFontSize(100);
        this.travel.setInteractive();

        this.bookshelf.on('pointerdown', () => {
            this.tweens.add({
                targets: this.player,
                x: this.bookshelf.x,
                y: this.bookshelf.y,
                duration: 500,
                ease: 'Linear',
            })
        })
        this.diningTable.on('pointerdown', () => {
            this.tweens.add({
                targets: this.player,
                x: this.diningTable.x,
                y: this.diningTable.y,
                duration: 500,
                ease: 'Linear',
            })
            this.time.delayedCall(500, () => {
                display = 9;
                this.scene.pause('level2');
                this.scene.launch('pickup');
            })
        })
        this.table.on('pointerdown', () => {
            this.tweens.add({
                targets: this.player,
                x: this.table.x,
                y: this.table.y,
                duration: 500,
                ease: 'Linear',
            })
        })
        this.carpet.on('pointerdown', () => {
            this.tweens.add({
                targets: this.player,
                x: this.carpet.x,
                y: this.carpet.y,
                duration: 500,
                ease: 'Linear',
            })
        })
        this.sofa.on('pointerdown', () => {
            this.tweens.add({
                targets: this.player,
                x: this.sofa.x,
                y: this.sofa.y,
                duration: 500,
                ease: 'Linear',
            })
            this.time.delayedCall(500, () => {
                display = 8;
                this.scene.pause('level2');
                this.scene.launch('pickup');
            })
        })
        this.tv.on('pointerdown', () => {
            this.tweens.add({
                targets: this.player,
                x: this.tv.x,
                y: this.tv.y,
                duration: 500,
                ease: 'Linear',
            })
        })
        this.chair.on('pointerdown', () => {
            this.tweens.add({
                targets: this.player,
                x: this.chair.x,
                y: this.chair.y,
                duration: 500,
                ease: 'Linear',
            })
        })

        this.door.on('pointerdown', () => {
            this.tweens.add({
                targets: this.player,
                x: this.door.x,
                y: this.door.y,
                duration: 500,
                ease: 'Linear',
            })
            this.time.delayedCall(500, () => {
                this.doorText.destroy();
                this.doorText = this.add.text(50, 50, "The lock is rusted shut, can't get it open...").setFontSize(30);
                this.tweens.add({
                    targets: this.doorText,
                    alpha: {from: 1, to: 0},
                    duration: 2000,
                    ease: 'Linear',
                })
            })
        })

        this.travel.on('pointerdown', () => {
            this.cameras.main.fadeOut(1000, 0, 0,0);
            this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) =>{
                this.scene.start('timetravel');
            })
        })

        this.pmenu = this.add.text(1800, 50, "⚙️").setFontSize(50);
        this.pmenu.setInteractive();
        level = 3;
        this.pmenu.on('pointerdown', () => this.scene.start('pause'));
    }
}

class Level2Future extends Phaser.Scene {
    constructor(){
        super('level2future');
    }
    preload(){
        this.load.path = './assets/';
        this.load.image('bookshelff', 'bookshelf_future.png');
        this.load.image('carpetf', 'carpet_future-min.png');
        this.load.image('chairf', 'chair_future-min.png');
        this.load.image('couchf', 'couch_future.png');
        this.load.image('doorf', 'door_future.png');
        this.load.image('tvf', 'tv_future.png');
        this.load.image('tablef', 'table_future.png');
        this.load.image('player', 'player.png');
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

        level = 4;
        this.cameras.main.fadeIn(1000,0,0,0);

        this.bookshelf = this.add.image(1400, 150, 'bookshelff').setScale(.3);
        this.bookshelf.setInteractive();
        this.diningTable = this.add.image(500, 300, 'tablef').setScale(.35);
        this.diningTable.setInteractive();
        this.carpet = this.add.image(700, 600, 'carpetf').setScale(.3);
        this.carpet.setInteractive();
        this.table = this.add.image(500, 1000, 'tablef').setScale(.35);
        this.table.setInteractive();
        this.sofa = this.add.image(900, 600, 'couchf').setScale(.7);
        this.sofa.angle = 90;
        this.sofa.setInteractive();
        this.tv = this.add.image(125, 600, 'tvf').setScale(.3);
        this.tv.setInteractive();
        this.chair = this.add.image(1150, 950, 'chairf').setScale(.3);
        this.chair.setInteractive();
        this.door = this.add.image(1800, 500, 'doorf').setScale(.3);
        this.door.setInteractive();
        this.player = this.add.image(1400, 600, 'player').setScale(.3);

        this.bookshelf.on('pointerdown', () => {
            this.tweens.add({
                targets: this.player,
                x: this.bookshelf.x,
                y: this.bookshelf.y,
                duration: 500,
                ease: 'Linear',
            })
            this.time.delayedCall(500, () => {
                display = 6;
                this.scene.pause('level2future');
                this.scene.launch('pickup');
            })
        })
        this.diningTable.on('pointerdown', () => {
            this.tweens.add({
                targets: this.player,
                x: this.diningTable.x,
                y: this.diningTable.y,
                duration: 500,
                ease: 'Linear',
            })
        })
        this.table.on('pointerdown', () => {
            this.tweens.add({
                targets: this.player,
                x: this.table.x,
                y: this.table.y,
                duration: 500,
                ease: 'Linear',
            })
        })
        this.carpet.on('pointerdown', () => {
            this.tweens.add({
                targets: this.player,
                x: this.carpet.x,
                y: this.carpet.y,
                duration: 500,
                ease: 'Linear',
            })
        })
        this.sofa.on('pointerdown', () => {
            this.tweens.add({
                targets: this.player,
                x: this.sofa.x,
                y: this.sofa.y,
                duration: 500,
                ease: 'Linear',
            })
            this.time.delayedCall(500, () => {
                display = 7;
                this.scene.pause('level2future');
                this.scene.launch('pickup');
            })
        })
        this.tv.on('pointerdown', () => {
            this.tweens.add({
                targets: this.player,
                x: this.tv.x,
                y: this.tv.y,
                duration: 500,
                ease: 'Linear',
            })
        })
        this.chair.on('pointerdown', () => {
            this.tweens.add({
                targets: this.player,
                x: this.chair.x,
                y: this.chair.y,
                duration: 500,
                ease: 'Linear',
            })
        })

        this.door.on('pointerdown', () => {
            this.tweens.add({
                targets: this.player,
                x: this.door.x,
                y: this.door.y,
                duration: 500,
                ease: 'Linear',
            })
            this.time.delayedCall(500, () => {
                this.scene.pause('level2future');
                this.scene.launch('futurelock');
            })
        })

        this.travel = this.add.text(1800, 900, "⏱️").setFontSize(100);
        this.travel.setInteractive();
        this.travel.on('pointerdown', () => {
            this.cameras.main.fadeOut(1000, 0, 0,0);
            this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) =>{
                this.scene.start('timetravel');
            })
        })

        this.pmenu = this.add.text(1800, 50, "⚙️").setFontSize(50);
        this.pmenu.setInteractive();
        level = 4;
        this.pmenu.on('pointerdown', () => this.scene.start('pause'));
    }
}

class Level3 extends Phaser.Scene {
    constructor(){
        super('level3');
    }
    preload(){
        this.load.path = './assets/';
        this.load.image('bookshelf', 'bookshelf_present.png');
        this.load.image('carpet', 'carpet_present-min.png');
        this.load.image('chair', 'chair_present.png');
        this.load.image('couch', 'couch_present.png');
        this.load.image('door', 'door_present.png');
        this.load.image('tv', 'tv_present-min.png');
        this.load.image('table', 'table_present-min.png');
        this.load.image('player', 'player.png');
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

        this.cameras.main.fadeIn(1000,0,0,0);

        this.doorText = this.add.text(50, 50, "The door unlocked, but here we are again.... this can't be right").setFontSize(30);

        this.bookshelf = this.add.image(1400, 150, 'bookshelf').setScale(.3);
        this.bookshelf.setInteractive();
        this.diningTable = this.add.image(500, 300, 'table').setScale(.35);
        this.diningTable.setInteractive();
        this.carpet = this.add.image(700, 600, 'carpet').setScale(.3);
        this.carpet.setInteractive();
        this.table = this.add.image(500, 1000, 'table').setScale(.35);
        this.table.setInteractive();
        this.sofa = this.add.image(900, 600, 'couch').setScale(.3);
        this.sofa.angle = 90;
        this.sofa.setInteractive();
        this.tv = this.add.image(125, 600, 'tv').setScale(.3);
        this.tv.setInteractive();
        this.chair = this.add.image(1150, 950, 'chair').setScale(.3);
        this.chair.setInteractive();
        this.door = this.add.image(1800, 500, 'door').setScale(.3);
        this.door.setInteractive();
        this.player = this.add.image(1400, 600, 'player').setScale(.3);

        this.travel = this.add.text(1800, 900, "⏱️").setFontSize(100);
        this.travel.setInteractive();

        this.bookshelf.on('pointerdown', () => {
            this.tweens.add({
                targets: this.player,
                x: this.bookshelf.x,
                y: this.bookshelf.y,
                duration: 500,
                ease: 'Linear',
            })
        })
        this.diningTable.on('pointerdown', () => {
            this.tweens.add({
                targets: this.player,
                x: this.diningTable.x,
                y: this.diningTable.y,
                duration: 500,
                ease: 'Linear',
            })
        })
        this.table.on('pointerdown', () => {
            this.tweens.add({
                targets: this.player,
                x: this.table.x,
                y: this.table.y,
                duration: 500,
                ease: 'Linear',
            })
        })
        this.carpet.on('pointerdown', () => {
            this.tweens.add({
                targets: this.player,
                x: this.carpet.x,
                y: this.carpet.y,
                duration: 500,
                ease: 'Linear',
            })
        })
        this.sofa.on('pointerdown', () => {
            this.tweens.add({
                targets: this.player,
                x: this.sofa.x,
                y: this.sofa.y,
                duration: 500,
                ease: 'Linear',
            })
            this.time.delayedCall(500, () => {

            })
        })
        this.tv.on('pointerdown', () => {
            this.tweens.add({
                targets: this.player,
                x: this.tv.x,
                y: this.tv.y,
                duration: 500,
                ease: 'Linear',
            })
            this.time.delayedCall(500, () => {
                display = 10;
                this.scene.pause('level3');
                this.scene.launch('pickup');
            })
        })
        this.chair.on('pointerdown', () => {
            this.tweens.add({
                targets: this.player,
                x: this.chair.x,
                y: this.chair.y,
                duration: 500,
                ease: 'Linear',
            })
        })

        this.door.on('pointerdown', () => {
            this.tweens.add({
                targets: this.player,
                x: this.door.x,
                y: this.door.y,
                duration: 500,
                ease: 'Linear',
            })
            this.time.delayedCall(500, () => {
                this.doorText.destroy();
                this.doorText = this.add.text(50, 50, "The lock is rusted shut, can't get it open...").setFontSize(30);
                this.tweens.add({
                    targets: this.doorText,
                    alpha: {from: 1, to: 0},
                    duration: 2000,
                    ease: 'Linear',
                })
            })
        })

        this.travel.on('pointerdown', () => {
            this.scene.pause('level3');
            this.scene.launch('travelselect');
        })

        this.pmenu = this.add.text(1800, 50, "⚙️").setFontSize(50);
        this.pmenu.setInteractive();
        level = 5;
        this.pmenu.on('pointerdown', () => this.scene.start('pause'));
    }
}

class Level3Future extends Phaser.Scene {
    constructor(){
        super('level3future');
    }
    preload(){
        this.load.path = './assets/';
        this.load.image('bookshelff', 'bookshelf_future.png');
        this.load.image('carpetf', 'carpet_future-min.png');
        this.load.image('chairf', 'chair_future-min.png');
        this.load.image('couchf', 'couch_future.png');
        this.load.image('doorf', 'door_future.png');
        this.load.image('tvf', 'tv_future.png');
        this.load.image('tablef', 'table_future.png');
        this.load.image('player', 'player.png');
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

        this.cameras.main.fadeIn(1000,0,0,0);

        this.bookshelf = this.add.image(1400, 150, 'bookshelff').setScale(.3);
        this.bookshelf.setInteractive();
        this.diningTable = this.add.image(500, 300, 'tablef').setScale(.35);
        this.diningTable.setInteractive();
        this.carpet = this.add.image(700, 600, 'carpetf').setScale(.3);
        this.carpet.setInteractive();
        this.table = this.add.image(500, 1000, 'tablef').setScale(.35);
        this.table.setInteractive();
        this.sofa = this.add.image(900, 600, 'couchf').setScale(.7);
        this.sofa.angle = 90;
        this.sofa.setInteractive();
        this.tv = this.add.image(125, 600, 'tvf').setScale(.3);
        this.tv.setInteractive();
        this.chair = this.add.image(1150, 950, 'chairf').setScale(.3);
        this.chair.setInteractive();
        this.door = this.add.image(1800, 500, 'doorf').setScale(.3);
        this.door.setInteractive();
        this.player = this.add.image(1400, 600, 'player').setScale(.3);

        this.bookshelf.on('pointerdown', () => {
            this.tweens.add({
                targets: this.player,
                x: this.bookshelf.x,
                y: this.bookshelf.y,
                duration: 500,
                ease: 'Linear',
            })
        })
        this.diningTable.on('pointerdown', () => {
            this.tweens.add({
                targets: this.player,
                x: this.diningTable.x,
                y: this.diningTable.y,
                duration: 500,
                ease: 'Linear',
            })
        })
        this.table.on('pointerdown', () => {
            this.tweens.add({
                targets: this.player,
                x: this.table.x,
                y: this.table.y,
                duration: 500,
                ease: 'Linear',
            })
            this.time.delayedCall(500, () => {
                display = 11;
                this.scene.pause('level3future');
                this.scene.launch('pickup');
            })
        })
        this.carpet.on('pointerdown', () => {
            this.tweens.add({
                targets: this.player,
                x: this.carpet.x,
                y: this.carpet.y,
                duration: 500,
                ease: 'Linear',
            })
        })
        this.sofa.on('pointerdown', () => {
            this.tweens.add({
                targets: this.player,
                x: this.sofa.x,
                y: this.sofa.y,
                duration: 500,
                ease: 'Linear',
            })
            this.time.delayedCall(500, () => {
                
            })
        })
        this.tv.on('pointerdown', () => {
            this.tweens.add({
                targets: this.player,
                x: this.tv.x,
                y: this.tv.y,
                duration: 500,
                ease: 'Linear',
            })
        })
        this.chair.on('pointerdown', () => {
            this.tweens.add({
                targets: this.player,
                x: this.chair.x,
                y: this.chair.y,
                duration: 500,
                ease: 'Linear',
            })
        })

        this.door.on('pointerdown', () => {
            this.tweens.add({
                targets: this.player,
                x: this.door.x,
                y: this.door.y,
                duration: 500,
                ease: 'Linear',
            })
            this.time.delayedCall(500, () => {
                this.doorText = this.add.text(50, 50, "The lock changed, this one seems too complicated").setFontSize(30);
                this.tweens.add({
                    targets: this.doorText,
                    alpha: {from: 1, to: 0},
                    duration: 2000,
                    ease: 'Linear',
                })
            })
        })

        level = 7
        this.travel = this.add.text(1800, 900, "⏱️").setFontSize(100);
        this.travel.setInteractive();
        this.travel.on('pointerdown', () => {
            this.cameras.main.fadeOut(1000, 0, 0,0);
            this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) =>{
                this.scene.start('timetravel');
            })
        })

        this.pmenu = this.add.text(1800, 50, "⚙️").setFontSize(50);
        this.pmenu.setInteractive();
        this.pmenu.on('pointerdown', () => this.scene.start('pause'));
    }
}

class Level3Past extends Phaser.Scene{
    constructor(){
        super('level3past');
    }
    preload(){
        this.load.path = './assets/';
        this.load.image('bookshelfp', 'bookshelf_past.png');
        this.load.image('carpetp', 'carpet_past-min.png');
        this.load.image('chairp', 'chair_past-min.png');
        this.load.image('doorp', 'door_past.png');
        this.load.image('sofa', 'sofa_past.png');
        this.load.image('tablep', 'table_past.png');
        this.load.image('tvp', 'tv_past-min.png');
        this.load.image('player', 'player.png');
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

        this.cameras.main.fadeIn(1000,0,0,0);

        this.bookshelf = this.add.image(1400, 150, 'bookshelfp').setScale(.3);
        this.bookshelf.setInteractive();
        this.diningTable = this.add.image(500, 300, 'tablep').setScale(.35);
        this.diningTable.setInteractive();
        this.carpet = this.add.image(700, 600, 'carpetp').setScale(.3);
        this.carpet.setInteractive();
        this.table = this.add.image(500, 1000, 'tablep').setScale(.35);
        this.table.setInteractive();
        this.sofa = this.add.image(900, 600, 'sofa').setScale(.3);
        this.sofa.setInteractive();
        this.sofa.angle = 90;
        this.tv = this.add.image(125, 600, 'tvp').setScale(.3);
        this.tv.setInteractive();
        this.chair = this.add.image(1150, 950, 'chairp').setScale(.3);
        this.chair.setInteractive();
        this.door = this.add.image(1800, 500, 'doorp').setScale(.3);
        this.door.setInteractive();
        this.player = this.add.image(1400, 600, 'player').setScale(.3);

        this.bookshelf.on('pointerdown', () => {
            this.tweens.add({
                targets: this.player,
                x: this.bookshelf.x,
                y: this.bookshelf.y,
                duration: 500,
                ease: 'Linear',
            })
        })
        this.diningTable.on('pointerdown', () => {
            this.tweens.add({
                targets: this.player,
                x: this.diningTable.x,
                y: this.diningTable.y,
                duration: 500,
                ease: 'Linear',
            })
        })
        this.table.on('pointerdown', () => {
            this.tweens.add({
                targets: this.player,
                x: this.table.x,
                y: this.table.y,
                duration: 500,
                ease: 'Linear',
            })
        })
        this.carpet.on('pointerdown', () => {
            this.tweens.add({
                targets: this.player,
                x: this.carpet.x,
                y: this.carpet.y,
                duration: 500,
                ease: 'Linear',
            })
            this.time.delayedCall(500, () => {
                display = 12;
                this.scene.pause('level3past');
                this.scene.launch('pickup');
            })
        })
        this.sofa.on('pointerdown', () => {
            this.tweens.add({
                targets: this.player,
                x: this.sofa.x,
                y: this.sofa.y,
                duration: 500,
                ease: 'Linear',
            })
        })
        this.tv.on('pointerdown', () => {
            this.tweens.add({
                targets: this.player,
                x: this.tv.x,
                y: this.tv.y,
                duration: 500,
                ease: 'Linear',
            })
            this.time.delayedCall(500, () => {
                
            })
        })
        this.chair.on('pointerdown', () => {
            this.tweens.add({
                targets: this.player,
                x: this.chair.x,
                y: this.chair.y,
                duration: 500,
                ease: 'Linear',
            })
        })
        this.door.on('pointerdown', () => {
            this.tweens.add({
                targets: this.player,
                x: this.door.x,
                y: this.door.y,
                duration: 500,
                ease: 'Linear',
            })
            this.time.delayedCall(500, () => {
                this.scene.pause('level3past');
                this.scene.launch('finallock');
            })
        })

        level = 8;
        this.travel = this.add.text(1800, 900, "⏱️").setFontSize(100);
        this.travel.setInteractive();

        this.travel.on('pointerdown', () => {
            this.cameras.main.fadeOut(1000, 0, 0,0);
            this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) =>{
                this.scene.start('timetravel');
            })
        })

        this.pmenu = this.add.text(1800, 50, "⚙️").setFontSize(50);
        this.pmenu.setInteractive();
        this.pmenu.on('pointerdown', () => this.scene.start('pause'));
    }
}