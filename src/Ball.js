var Ball = cc.Node.extend({
    radius: null,
    body: null,
    draw: null,
    shape: null,

    ctor:function (position, radius, space) {
        cc.log("Ball.ctor ...")

        this._super();

        this.radius = radius
        this.space = space;

        var start_x = position.x
        var start_y = position.y

        this.draw = new cc.DrawNode();
        this.addChild(this.draw)

        this.draw.drawDot(cc.p(start_x, start_y), this.radius, cc.color(255, 0, 0, 255));

        // mass, moment of intertia
        this.body = new cp.Body(1, 5);

        this.body.p = cc.p(start_x, start_y);

        this.body.applyImpulse(cp.v(20, 100), cp.v(0, 0));//run speed

        this.space.addBody(this.body);

        this.shape = new cp.CircleShape(this.body, this.radius, 0)

        this.space.addShape(this.shape)
    },

    move: function(dt) {
        //console.log("x: " + this.body.x)
        var x = this.body.getPos().x
        var y = this.body.getPos().y
        console.log("y: " + y)
        this.draw.drawDot(cc.p(x, y), this.radius, cc.color(255, 0, 0, 255))
    }
})