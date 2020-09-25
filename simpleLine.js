var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    scene: {
        create: create,
        update: update
    }
}

var follower;
var path;
var graphics;

var game = new Phaser.Gamer(config);

function create(){
    graphics = this.add.graphics();

    followers = { t: 0, vec: new Phaser.Math.Vector2()};

    // The curves do not have to be joined
    var line1 = new Phaser.Curvers.Line([100, 100, 500, 200])
    var line2 = new Phaser.Curvers.Line([200, 300, 600, 500])

    path = this.add.path();


    path.add(line1);
    path.add(line2);
 
    this.tween.add({
        target: followers,
        t:1,
        ease: 'Linear',
        duration: 4000,
        yoyo: true,
        repeat: -1

    });

}


function update()
{
    graphics.clear();
    graphics.ineStyle(2,0xffffff,1)

    path.draw(graphics)
    path.getPoint(followers.t, follower.vec)

    
}