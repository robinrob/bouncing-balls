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

        var nBalls = 10

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
    },

    update: function(dt) {
        this.balls.forEach(function(ball) {
            console.log("ball: " + ball)
            ball.move(dt)
        })
    }
});