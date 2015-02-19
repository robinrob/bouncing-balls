var AnimationLayer = cc.Layer.extend({
    balls: null,

    ctor:function (space) {
        cc.log("AnimationLayer.ctor ...")
        this._super();
        this.space = space;
        this.balls = []

        // create sprite sheet
        cc.spriteFrameCache.addSpriteFrames(mrrobinsmith.res.fish_plist);
        this.spriteSheet = new cc.SpriteBatchNode(mrrobinsmith.res.fish_png);
        this.addChild(this.spriteSheet);

        this.init();

        this._debugNode = new cc.PhysicsDebugNode(this.space);
        this._debugNode.setVisible(false);
        // Parallax ratio and offset
        this.addChild(this._debugNode, 10);

        this.initAction();
    },

    init:function () {
        cc.log("AnimationLayer.init ...")
        this._super();

        for (var i = 0; i < 10; ++i) {
            var ball = new Ball(this.spriteSheet, this.space);
            cc.log("HEREcdf ...")
            console.log("Ball: " + ball);
            this.balls.push(ball);
        }
    },

    initAction:function () {
        cc.log("AnimationLayer.initAction ...")
        this.balls.forEach(function(ball) {
            ball.initAction();
        })
    },

    onExit:function() {
        cc.log("AnimationLayer.onExit ...");
        this._super();
    },

    update:function (dt) {
        cc.log("AnimationLayer.update ...")
        this.balls.forEach(function(ball) {
          ball.move(dt)
        })
    }
});