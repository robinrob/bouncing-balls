var Ball = cc.Class.extend({
    body: null,
    shape: null,
    sprite: null,
    spriteSheet: null,
    runningAction: null,

    ctor:function (spriteSheet, space) {
        cc.log("Ball.ctor ...")

        this.spriteSheet = spriteSheet;
        this.space = space;

        //var winSize = cc.director.getWinSize();
        //var draw = new cc.DrawNode()
        //draw.drawCircle(cc.p(winSize.width / 2, winSize.height / 2), 50, cc.degreesToRadians(90), 50, true, 2, cc.color(0, 255, 255, 255));

        //1. create PhysicsSprite with a sprite frame name
        this.sprite = new cc.PhysicsSprite("#fish1.png");

        var contentSize = this.sprite.getContentSize();
        // 2. init the runner physic body
        this.body = new cp.Body(1, cp.momentForBox(1, contentSize.width, contentSize.height));
        //3. set the position of the runner
        this.body.p = cc.p(mrrobinsmith.g_runnerStartX, mrrobinsmith.g_groundHeight + contentSize.height / 2);
        //4. apply impulse to the body
        this.body.applyImpulse(cp.v(150, 0), cp.v(0, 0));//run speed
        //5. add the created body to space
        this.space.addBody(this.body);
        //6. create the shape for the body
        this.shape = new cp.BoxShape(this.body, contentSize.width - 14, contentSize.height);
        //7. add shape to space
        this.space.addShape(this.shape);
        //8. set body to the physic sprite
        this.sprite.setBody(this.body);

        this.initAction();

        this.sprite.runAction(this.runningAction);

        this.spriteSheet.addChild(this.sprite);
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

    move:function(dt) {
        cc.log("Ball.move ...")
        var vel = this.body.getVel();

        if (this.sprite.x >= cc.director.getWinSize().width) {
            this.sprite.x = 0 - this.sprite.width / 2
        }
    },

    destroy:function() {
        cc.log("Ball.destroy ...")
        this.body.runningAction.release();
    }
})