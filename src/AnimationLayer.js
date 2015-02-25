
var AnimationLayer = cc.Layer.extend({
    balls: null,
    platforms: null,
    space: null,

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
        var nPlatforms = 5

        var winSize = cc.director.getWinSize()

        for (var i = 0; i < nBalls; ++i) {
            console.log(winSize.width)
            var radius = 10
            var gap = radius * 3
            var pos = cc.p(winSize.width / 2 - (nBalls / 2 * gap) + (i * gap), winSize.height / 2);

            var ball = new Ball(pos, radius, this.space);

            this.balls.push(ball);
            this.addChild(ball)
        }

        var verticalSpace = winSize.height - mrrobinsmith.groundHeight - 200

        for (var i = 0; i < nPlatforms; ++i) {
            var x1 = i * winSize.width / nPlatforms
            var x2 = (i + 1) * winSize.width / nPlatforms

            var y1 = mrrobinsmith.groundHeight + verticalSpace * (1 - (1 / nPlatforms) * (i + 1))
            var y2 = y1 - this.thickness

            var plat = new Platform(cc.p(x1, y1), cc.p(x2, y2), this.space, 10)
            this.addChild(plat)
        }
    },

    update: function(dt) {
        this.balls.forEach(function(ball) {
            console.log("ball: " + ball)
            ball.move(dt)
        })
    }
});