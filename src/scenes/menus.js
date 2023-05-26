class Test extends Phaser.Scene {
    constructor(){
        super('test');
    }
    create(){
        this.add.text("This is our deployed game");
    }
}