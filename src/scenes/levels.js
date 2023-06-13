class Level1 extends Phaser.Scene {
    constructor(){
        super('level1');
    }
    preload(){
        this.load.path = './assets/';
        this.load.image('bed', 'bed_present.png');
        this.load.image('bookshelf', 'bookshelf_present.png');
        this.load.image('carpet', 'carpet_present.png');
        this.load.image('chair', 'chair_present.png');
        this.load.image('couch', 'couch_present.png');
        this.load.image('door', 'door_present.png');
        this.load.image('lock', 'lock_present.png');
        this.load.image('tv', 'tv_present.png');
        this.load.image('table', 'table_present.png');
        this.load.image('player', 'player.png');
    }
    create(){
        
        if(playing == false && mopp == true){
            backgroundMusic.play();
            playing = true;
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
                if(clueArr.indexOf("clue1")==-1){
                    clueArr.push("clue1");
                }
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
                if(clueArr.indexOf("clue2")==-1){
                    clueArr.push("clue2");
                }
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
                if(clueArr.indexOf("clue3")==-1){
                    clueArr.push("clue3");
                }
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
                this.scene.pause('level1');
                this.scene.launch('futurelock');
            })
        })

        this.travel.on('pointerdown', () => {
            this.cameras.main.fadeOut(1000, 0, 0,0);
            this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) =>{
                this.scene.start('timetravel');
            })
        })

        pmenu = this.input.keyboard.addKey('P');
        level = 1;
        pmenu.on('down', () => this.scene.start('pause'));
    }
}

class Level1Alt extends Phaser.Scene {
    constructor(){
        super('level1alt');
    }
    preload(){
        this.load.path = './assets/';
        this.load.image('bedp', 'bed_past.png');
        this.load.image('bookshelfp', 'bookshelf_past.png');
        this.load.image('carpetp', 'carpet_past.png');
        this.load.image('chairp', 'chair_past.png');
        this.load.image('doorp', 'door_past.png');
        this.load.image('sofa', 'sofa_past.png');
        this.load.image('tablep', 'table_past.png');
        this.load.image('tvp', 'tv_past.png');
        this.load.image('player', 'player.png');
    }
    create(){
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
                if(clueArr.indexOf("clue5")==-1){
                    clueArr.push("clue5");
                }
                display = 5;
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
                if(clueArr.indexOf("clue6")==-1){
                    clueArr.push("clue6");
                }
                display = 6;
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
                if(clueArr.indexOf("clue4")==-1){
                    clueArr.push("clue4");
                }
                display = 4;
                this.scene.pause('level1alt');
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
        })

        this.travel = this.add.text(1800, 900, "⏱️").setFontSize(100);
        this.travel.setInteractive();

        this.travel.on('pointerdown', () => {
            this.cameras.main.fadeOut(1000, 0, 0,0);
            this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) =>{
                this.scene.start('timetravel');
            })
        })

        pmenu = this.input.keyboard.addKey('P');
        level = 2;
        pmenu.on('down', () => this.scene.start('pause'));
    }
}

