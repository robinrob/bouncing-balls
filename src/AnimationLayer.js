var AnimationLayer = cc.Layer.extend({
    balls: null,

    ctor:function (space) {
        cc.log("AnimationLayer.ctor ...")
        this._super();
        this.space = space;
        this.balls = []

        this.init();
    },

    init:function () {
        cc.log("AnimationLayer.init ...")
        this._super();

        var nBalls = 1

        for (var i = 0; i < nBalls; ++i) {
            var winSize = cc.director.getWinSize()
            console.log(winSize.width)
            var radius = 10
            var gap = radius * 3
            var pos = cc.p(winSize.width / 2 - (nBalls / 2 * gap) + (i * gap), winSize.height / 2);

            var ball = new Ball(pos, radius, this.space);

            this.balls.push(ball);
            this.addChild(ball)
        }

        var blue = cc.color(0, 0, 255, 255)
        var draw = new cc.DrawNode()
        draw.drawRect(cc.p(0, 20), cc.p(winSize.width, 0), blue, 10, blue)
        this.addChild(draw)
    },

    update: function(dt) {
        this.balls.forEach(function(ball) {
            console.log("ball: " + ball)
            ball.move(dt)
        })
    }
});