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

        var winSize = cc.director.getWinSize()

        var nBalls = 10
        var nPlatforms = 5

        var platWidth = winSize.width / nPlatforms
        var verticalSpace = winSize.height - mrrobinsmith.groundHeight - 200
        var leftPlatHeight = mrrobinsmith.groundHeight + verticalSpace * (1 - (1 / nPlatforms) * (0 + 1))

        for (var i = 0; i < nBalls; ++i) {
            console.log(winSize.width)
            var radius = 10
            var gap = radius * 3

            var pos = cc.p(platWidth / 2, leftPlatHeight + 100);

            var ball = new Ball(pos, leftPlatHeight, radius, this.space);

            this.balls.push(ball);
            this.addChild(ball)
        }

        for (var i = 0; i < nPlatforms; ++i) {
            var thickness = 10

            var x1 = i * platWidth
            var x2 = (i + 1) * platWidth

            var y1 = mrrobinsmith.groundHeight + verticalSpace * (1 - (1 / nPlatforms) * (i + 1))
            var y2 = y1

            var plat = new Platform(cc.p(x1, y1), cc.p(x2, y2), thickness, this.space)
            this.addChild(plat)
        }
    },

    update: function(dt) {
        this.balls.forEach(function(ball) {
            //console.log("ball: " + ball)
            ball.move(dt)
        })
    }
});