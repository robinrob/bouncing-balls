var Ball = cc.Node.extend({
    radius: null,
    _draw: null,
    body: null,
    shape: null,
    sprite: null,
    spriteSheet: null,
    runningAction: null,
    startPos: null,
    leftHeight: null,

    ctor:function (position, leftHeight, radius, space) {
        cc.log("Ball.ctor ...")

        this._super();

        this.radius = radius

        this.color = cc.color(255, 0, 0, 255)

        this.space = space;

        this.startPos = position

        this.leftHeight = leftHeight

        this.init()
    },

    init:function() {
        cc.log("Ball.init ...")
        this._super()

        // ball physics
        this.body = new cp.Body(10, cp.momentForCircle(10, 0, this.radius, cp.v(0,0)));
        this.body.p = cc.p(this.startPos.x, this.startPos.y);
        this.body.applyImpulse(cp.v(1000, 0), cp.v(0, 0));//run speed
        this.space.addBody(this.body);

        //ball graphics
        this.initBall()
        this.initFish()
        this.draw()

        // ball collision model
        this.shape = new cp.CircleShape(this.body, this.radius, cp.v(0,0))
        this.shape.setElasticity(0.8)
        this.space.addShape(this.shape)
    },

    initFish:function() {
        cc.spriteFrameCache.addSpriteFrames(res.fish_plist);
        this.initAction()
        this.initFishSprite()
        this.initFishSpriteSheet()
    },

    initFishSpriteSheet:function() {
        this.spriteSheet = new cc.SpriteBatchNode(res.fish_png);
        this.addChild(this.spriteSheet);
        this.spriteSheet.addChild(this.sprite)
    },

    initFishSprite:function() {
        this.sprite = new cc.PhysicsSprite("#fish1.png");
        this.sprite.setBody(this.body)
        this.sprite.runAction(this.runningAction);
    },

    initBall:function() {
        this._draw = new cc.DrawNode()
        this.addChild(this._draw)
    },

    initAction:function() {
        cc.log("AnimationLayer.initAction ...")
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

    draw:function(x, y) {
        this._draw.clear()
        if (mrrobinsmith.fishMode) {
            this.sprite.setVisible(true)
        }
        else if (!mrrobinsmith.fishMode) {
            this.sprite.setVisible(false)
            this._draw.drawDot(cc.p(x, y), this.radius, this.color)
        }
    },

    move:function(dt) {
        var x = this.body.getPos().x
        var y = this.body.getPos().y

        var winSize = cc.director.getWinSize()

        if (x > winSize.width) {
            this.body.setPos(cc.p(0 + this.radius / 2, this.leftHeight + y))
        }

        this.draw(x, y)
    },

    onExit:function() {
        cc.log("AnimationLayer.onExit ...")
        this.runningAction.release();

        this._super();
    }
})