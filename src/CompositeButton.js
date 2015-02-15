var CompositeButton = cc.Sprite.extend({
    ctor: function (resources) {
        var child, childX, childY
        cc.log("Sprite.ctor ...")
        //1. call super class's ctor function
        this._super(resources.shift());

        resources.forEach(function(res, index){
            child = new cc.Sprite(res)
            childX = this.x + this.width / 2
            childY = this.y + this.height / 2
            child.setPosition(cc.p(childX, childY))
            // Add children at successively higher z-values in order to stack them on top of each other.
            this.addChild(child, index)
        }, this)

        this.color = new cc.color(0, 255, 0, 0)
    },

    setChildColor: function (i, color) {
        this.getChildren()[i].color = color
    }
})