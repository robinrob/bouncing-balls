var Platform = cc.Node.extend({
        space: null,
        shape: null,
        draw: null,
        thickness: null,
        p1: null,
        p2: null,
        v1: null,
        v2: null,

        ctor:function(top_left, bottom_right, thickness, space) {
            this.space

            this.thickness = thickness

            this.p1 = top_left
            this.p2 = bottom_right

            this.v1 = cp.v(this.p1.x, this.p1.y)
            this.v2 = cp.v(this.p2.x, this.p2.y)

            this.init()
        },

        init:function() {
            this.shape = new cp.SegmentShape(this.space.staticBody, v1, v2, 0)
            this.shape.setElasticity(1.0)
            this.space.addStaticShape(shape)

            var blue = cc.color(0, 0, 255, 255)

            this.draw = new cc.DrawNode()
            this.draw.drawRect(p1, p2, blue, 0, blue)

            this.addChild(this.draw)
        }
}