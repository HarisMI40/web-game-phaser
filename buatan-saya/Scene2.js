// SpriteSheet adalah collection dari gambar pada sebuah single file terpisah oleh frame

class Scene2 extends Phaser.Scene {
    constructor() {
        super("playGame");
    }

    create() {

        // this.background = this.add.image(0, 0, "background")
        this.background = this.add.tileSprite(0, 0, config.width, config.height, "background")

        this.background.setOrigin(0, 0)

        // this.ship1 = this.add.image(config.width / 2 - 50, config.height / 2, "ship")
        // this.ship2 = this.add.image(config.width / 2, config.height / 2, "ship2")
        // this.ship3 = this.add.image(config.width / 2 + 50, config.height / 2, "ship3")

        this.ship1 = this.add.sprite(config.width / 2 - 50, config.height / 2, "ship")
        this.ship2 = this.add.sprite(config.width / 2, config.height / 2, "ship2")
        this.ship3 = this.add.sprite(config.width / 2 + 50, config.height / 2, "ship3")
        this.ship4 = this.add.sprite(config.width / 2 + 70, config.height / 2, "ship4")
        this.ship5 = this.add.sprite(config.width / 2 + 70, config.height / 2, "ship5")

        // membuat animasi
        this.anims.create({
            key: "ship1_anim",
            frames: this.anims.generateFrameNumbers("ship"),
            frameRate: 20, // frame per second 20
            repeat: -1 // berapa kali dia akan looping, untuk infinite loop gunakan -1
        })
        this.anims.create({
            key: "ship2_anim",
            frames: this.anims.generateFrameNumbers("ship2"),
            frameRate: 20, // frame per second 20
            repeat: -1 // berapa kali dia akan looping, untuk infinite loop gunakan -1
        })
        this.anims.create({
            key: "ship3_anim",
            frames: this.anims.generateFrameNumbers("ship3"),
            frameRate: 20, // frame per second 20
            repeat: -1 // berapa kali dia akan looping, untuk infinite loop gunakan -1
        })
        this.anims.create({
            key: "ship4_anim",
            frames: this.anims.generateFrameNumbers("ship4"),
            frameRate: 20, // frame per second 20
            repeat: -1 // berapa kali dia akan looping, untuk infinite loop gunakan -1
        })
        this.anims.create({
            key: "ship5_anim",
            frames: this.anims.generateFrameNumbers("ship4"),
            frameRate: 20, // frame per second 20
            repeat: -1 // berapa kali dia akan looping, untuk infinite loop gunakan -1
        })
        this.anims.create({
            key: "explode",
            frames: this.anims.generateFrameNumbers("explosion"),
            frameRate: 20, // frame per second 20
            repeat: 0, // berapa kali dia akan looping, untuk infinite loop gunakan -1
            hideOnComplete: true // sembunyikan / hilangkan jika animasi sudah selesai
        });

        this.ship1.play("ship1_anim"); // play animasi ship1_anim
        this.ship2.play("ship2_anim"); // play animasi ship2_anim
        this.ship3.play("ship3_anim"); // play animasi ship3_anim
        this.ship4.play("ship4_anim"); // play animasi ship3_anim
        this.ship4.play("ship5_anim"); // play animasi ship3_anim

        // membuat objek menjadi interactive ( bisa disentuh, bisa dibuatkan event)
        this.ship1.setInteractive() // membuat ship1 interactive
        this.ship2.setInteractive() // membuat ship2 interactive
        this.ship3.setInteractive() // membuat ship3 interactive
        this.ship4.setInteractive() // membuat ship4 interactive
        this.ship5.setInteractive() // membuat ship4 interactive
        // ini seperti inisialiasi dulu

        this.input.on('gameobjectdown', this.destroyShip, this);
        // param1 "gameobjectdown" mendefinisikan event akan ke trigger ketika objek di klik
        // param2 : function yang akan dijalankan ketika event ke trigger
        // param3 : this, artinya objek atau spreedsheet yang diklik tersebut

        // this.ship1.flipY = true
        // this.ship1.setScale(2)
        // var i = 0;
        // setInterval(() => {
        //     this.ship1.angle += i
        //     i += 2
        // }, 300);

        // this.add.text(config.width / 2 - 60, config.height / 2, "Playing Game", { font: "18px Arial", fill: "Yellow" });
    }

    moveShip(ship, speed) {
        ship.y += speed

        if (ship.y > config.height) {
            this.resetShipPos(ship)
        }
    }

    update() {
        this.moveShip(this.ship1, 1)
        this.moveShip(this.ship2, 2)
        this.moveShip(this.ship3, 3)
        this.moveShip(this.ship4, 4)
        this.moveShip(this.ship5, 3)

        this.background.tilePositionY -= 0.5 // mengganti posisi background koordinat Y
    }

    resetShipPos(ship) {
        ship.y = 0; // koordinat Y si kapal jadi 0 lagi
        var randomX = Phaser.Math.Between(0, config.width) // membuat angka diantara 0 dan panjang canvas gamenya

        ship.x = randomX // koordinat x si kapal akan random ( diantara angka 0 dan panjang kanvas)
    }


    destroyShip(pointer, gameObject) {
        gameObject.setTexture("explosion"); // ketika objek di klik, objek akan switch ke objek explosion
        gameObject.play("explode"); // play animiasi explode
    }
}