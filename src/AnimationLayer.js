var AnimationLayer = cc.LayerColor.extend({
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

        var white = cc.color(255, 255, 255, 255)
        var black = cc.color(0, 0, 0, 255)
        var red = cc.color(255, 0, 0, 255)
        var color = black

        this.color = color

        var winSize = cc.director.getWinSize()

        var nBalls = 10
        var nPlatforms = 2

        var platWidth = winSize.width / nPlatforms
        var verticalSpace = winSize.height - mrrobinsmith.groundHeight - winSize.height / 2
        var gap = verticalSpace / (nPlatforms - 1)
        var leftPlatHeight = mrrobinsmith.groundHeight + (gap * (nPlatforms - 1))

        var groundHeight = mrrobinsmith.groundHeight

        for (var i = 0; i < nBalls; ++i) {
            var radius = 10

            var pos = cc.p(platWidth / 2, leftPlatHeight + 100);

            var ball = new Ball(pos, leftPlatHeight, radius, this.space);

            this.balls.push(ball);
            this.addChild(ball)
        }

        for (var i = 0; i < nPlatforms; ++i) {
            var thickness = 10

            var x1 = i * platWidth
            var x2 = (i + 1) * platWidth

            var y1 = leftPlatHeight - (i * gap)
            cc.log("y1:  " + y1)
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