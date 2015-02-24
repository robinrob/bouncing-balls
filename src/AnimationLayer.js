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

        for (var i = 0; i < 10; ++i) {
            var ball = new Ball(10, this.space);
            this.balls.push(ball);
            this.addChild(ball)
        }
    }
});