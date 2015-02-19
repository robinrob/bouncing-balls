var AnimationLayer = cc.Layer.extend({
    spriteSheet:null,

    space:null,

    balls:[],

    ctor:function (space) {
        cc.log("AnimationLayer.ctor ...")
        this._super();
        this.space = space;
        this.init();

        this._debugNode = new cc.PhysicsDebugNode(this.space);
        this._debugNode.setVisible(false);
        // Parallax ratio and offset
        this.addChild(this._debugNode, 10);
    },

    init:function () {
        cc.log("AnimationLayer.init ...")
        this._super();

        // create sprite sheet
        cc.spriteFrameCache.addSpriteFrames(mrrobinsmith.res.fish_plist);
        this.spriteSheet = new cc.SpriteBatchNode(mrrobinsmith.res.fish_png);
        this.addChild(this.spriteSheet);

        var winSize = cc.director.getWinSize();
        //var draw = new cc.DrawNode()
        //draw.drawCircle(cc.p(winSize.width / 2, winSize.height / 2), 50, cc.degreesToRadians(90), 50, true, 2, cc.color(0, 255, 255, 255));

        var i = 10;
        for (i = 0; i < 10; ++i) {
            // create PhysicsSprite with a sprite frame name
            var sprite = new cc.PhysicsSprite("#fish1.png");
            var contentSize = sprite.getContentSize();

            // create shape for the sprite
            var shape = new cp.BoxShape(body, contentSize.width - 14, contentSize.height);

            // add shape to space
            this.space.addShape(shape);

            // create the Ball with sprite and shape
            var ball = new Ball(
                1,
                cp.momentForBox(1, contentSize.width, contentSize.height),
                sprite,
                shape
            );

            // set the position of the ball
            ball.p = cc.p(mrrobinsmith.g_runnerStartX, mrrobinsmith.g_groundHeight + contentSize.height / 2);
            // apply impulse to the body
            ball.applyImpulse(cp.v(150, 0), cp.v(0, 0));//run speed
            // add the created body to space
            this.space.addBody(ball);
        }

        this.balls.each(function(ball) {
            ball.initAction()
            ball.sprite.runAction(ball.runningAction)
            this.spriteSheet.addChild(ball.sprite);
        })
    },

    onExit:function() {
        cc.log("AnimationLayer.onExit ...")

        this.balls.foreach(function(ball) {
            ball.destroy();
        })

        this._super();
    },

    update:function (dt) {
        cc.log("AnimationLayer.update ...")

        this.balls.foreach(function(ball) {
            ball.move();
        })
    }
});