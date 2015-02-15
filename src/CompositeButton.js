var CompositeButton = cc.Sprite.extend({
    ctor: function (resources) {
        var child, childX, childY
        cc.log("Sprite.ctor ...")
        //1. call super class's ctor function
        this._super(resources.reverse().pop());

        resources.forEach(function(res, index){
            console.log("iterating: " + res)
            child = new cc.Sprite(res)
            childX = this.x + this.width / 2
            childY = this.y + this.height / 2
            child.setPosition(cc.p(childX, childY))
            this.addChild(child, index)
        }, this)

        this.color = new cc.color(0, 255, 0, 0)
    }
})