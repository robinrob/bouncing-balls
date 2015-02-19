var Ball = cp.Body.extend({
    sprite: null,
    shape: null,

    ctor:function (num, moment, sprite, shape) {
        cc.log("Ball.ctor ...")
        this._super(num, moment);

        this.sprite = sprite
        this.shape = shape

        this.sprite.addBody(this);
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
        this.runningAction = new cc.RepeatForever(new cc.Animate(animation));
        this.runningAction.retain();
    },

    move:function() {
        var vel = body.getVel();

        if (this.sprite.x >= cc.director.getWinSize().width) {
            this.sprite.x = 0 - this.sprite.width / 2
        }
    },

    destroy:function() {
        this.runningAction.release();
    }
})