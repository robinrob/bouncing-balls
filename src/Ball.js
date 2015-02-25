var Ball = cc.Node.extend({
    radius: null,
    _draw: null,
    body: null,
    shape: null,
    sprite: null,
    position: null,

    ctor:function (position, radius, space) {
        cc.log("Ball.ctor ...")

        this._super();

        this.radius = radius

        this.color = cc.color(255, 0, 0, 255)

        this.space = space;

        this.position = position

        this.init()
    },

    init:function() {
        cc.log("Ball.init ...")
        this._super()

        // ball graphics
        this._draw = new cc.DrawNode()
        this.addChild(this._draw)

        // ball physics
        this.body = new cp.Body(10, cp.momentForCircle(10, 0, this.radius, cp.v(0,0)));
        this.body.p = cc.p(this.position.x, this.position.y);
        this.body.applyImpulse(cp.v(300, 0), cp.v(0, 0));//run speed

        // ball collision model
        this.shape = new cp.CircleShape(this.body, this.radius, cp.v(0,0))
        this.shape.setElasticity(0.8)

        this.space.addBody(this.body);
        this.space.addShape(this.shape)

        this.draw()
    },


    draw:function(x, y) {
        this._draw.clear()
        this._draw.drawDot(cc.p(x, y), this.radius, this.color)
        //this._draw.drawCircle(cc.p(x, y), this.radius, 0, 12, false, 2, this.color)
    },

    move:function(dt) {
        var x = this.body.getPos().x
        var y = this.body.getPos().y
        console.log("y: " + y)
        this.draw(x, y)
    }
})