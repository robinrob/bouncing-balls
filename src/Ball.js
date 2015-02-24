var Ball = cc.Node.extend({
    radius: null,
    draw: null,
    body: null,
    shape: null,
    sprite: null,
    position: null,

    ctor:function (position, radius, space) {
        cc.log("Ball.ctor ...")

        this._super();

        this.radius = radius
        this.space = space;

        this.position = position

        this.init()
    },

    init:function() {
        cc.log("Ball.init ...")
        this._super()

        cc.spriteFrameCache.addSpriteFrames(mrrobinsmith.res.fish_plist);
        this.spriteSheet = new cc.SpriteBatchNode(mrrobinsmith.res.fish_png);
        this.addChild(this.spriteSheet);

        this.sprite = new cc.PhysicsSprite("#fish1.png");
        this.spriteSheet.addChild(this.sprite);

        var contentSize = this.sprite.getContentSize();

        this.body = new cp.Body(10, cp.momentForCircle(10, 0, this.radius, cp.v(0,0)));
        //this.body = new cp.Body(1, cp.momentForBox(1, contentSize.width, contentSize.height));

        this.body.p = cc.p(this.position.x, this.position.y);

        this.body.applyImpulse(cp.v(20, 0), cp.v(0, 0));//run speed

        this.space.addBody(this.body);

        this.shape = new cp.CircleShape(this.body, this.radius, cp.v(0,0))
        //this.shape = new cp.BoxShape(this.body, this.radius * 2, this.radius * 2);
        this.shape.setElasticity(0.8)

        this.space.addShape(this.shape)

        this.sprite.setBody(this.body)
    },



    move: function(dt) {
        //console.log("x: " + this.body.x)
        var x = this.body.getPos().x
        var y = this.body.getPos().y
        console.log("y: " + y)
        //this.draw.drawDot(cc.p(x, y), this.radius, cc.color(255, 0, 0, 255))
    }
})