var Ball = cc.Node.extend({
    radius: null,
    draw: null,

    ctor:function (radius, space) {
        cc.log("Ball.ctor ...")

        this._super();

        this.radius = radius
        this.space = space;

        winSize = cc.director.getWinSize()
        draw = new cc.DrawNode();
        this.addChild(draw)
        draw.drawDot(cc.p(winSize.width / 2, winSize.height / 2), this.radius, cc.color(255, 0, 0, 255));
    }
})