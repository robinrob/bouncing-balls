var MenuLayer = cc.Layer.extend({
    ctor : function(){
        cc.log("MenuLayer.ctor ...")
        this._super();
    },
    init:function(){
        cc.log("MenuLayer.init ...")
        this._super();

        var winsize = cc.director.getWinSize();
        var centerpos = cc.p(winsize.width / 2, winsize.height / 2);

        var menuItemPlay = new cc.MenuItemSprite(
            ui.startButton().normal,
            ui.startButton().selected,
            this.onPlay, this);
        var menu = new cc.Menu(menuItemPlay);
        menu.setPosition(centerpos);
        this.addChild(menu);

        //this.onPlay()
    },

    onPlay : function(){
        cc.log("MenuLayer.onPlay ...")
        cc.director.runScene(new PlayScene());
    }
});
