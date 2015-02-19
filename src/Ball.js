var Ball = cc.PhysicsSprite.extend({
    body: null,
    shape: null,

    ctor:function (num, moment, body, shape) {
        cc.log("Ball.ctor ...")
        this._super(num, moment);

        this.body = body
        this.shape = shape

        this.addBody(this.body);
    },

    initAction:function () {
        cc.log("Ball.initAction ...")
        // init runningAction
        var animFrames = [];
        for (var i = 1; i < 4; i++) {
            var str = "fish" + i + ".png";
            var frame = cc.spriteFrameCache.getSpriteFrame(str);
            animFrames.push(frame);
        }

        var animation = new cc.Animation(animFrames, 0.1);
        this.body.runningAction = new cc.RepeatForever(new cc.Animate(animation));
        this.body.runningAction.retain();
    },

    move:function() {
        var vel = this.body.getVel();

        if (this.x >= cc.director.getWinSize().width) {
            this.x = 0 - this.width / 2
        }
    },

    destroy:function() {
        this.body.runningAction.release();
    }
})