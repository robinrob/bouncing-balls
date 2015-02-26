var ConsoleLayer = cc.Layer.extend({
    labelGravity: null,

    ctor:function () {
        cc.log("ConsoleLayer.ctor. ...")
        this._super();
        this.init();
    },

    init:function () {
        cc.log("ConsoleLayer.init ...")
        this._super();

        var winsize = cc.director.getWinSize();

        this.labelGravity = new cc.LabelTTF("Wanker", "Helvetica", 20);
        this.updateGravity(mrrobinsmith.gravity);
        this.labelGravity.setPosition(cc.p(winsize.width - 70, winsize.height - 80));
        this.addChild(this.labelGravity);

        this.addChild(ui.fishButton())
    },

    updateGravity:function (gravity) {
        cc.log("ConsoleLayer.updateMeter ...")
        this.labelGravity.setString(parseInt(gravity) + " m/s^2");
    }
});