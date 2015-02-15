var Button = cc.Sprite.extend({
    ctor: function (outer_res, inner_res) {
        cc.log("Sprite.ctor ...")
        //1. call super class's ctor function
        this._super(outer_res);

        var child = new cc.Sprite(inner_res)
        var childX = this.x + this.width / 2
        var childY = this.y + this.height / 2
        child.setPosition(cc.p(childX, childY))

        this.addChild(child, 0)

        this.color = new cc.color(0, 255, 0, 0)
    }
})