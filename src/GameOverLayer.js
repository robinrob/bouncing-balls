var GameOverLayer = cc.LayerColor.extend({
    // constructor
    ctor:function () {
        cc.log("GameOver.ctor ...")
        this._super();
        this.init();
    },
    init:function () {
        cc.log("GameOver.init ...")
        this._super(cc.color(0, 0, 0, 180));
        var winSize = cc.director.getWinSize();

        var centerPos = cc.p(winSize.width / 2, winSize.height / 2);
        cc.MenuItemFont.setFontSize(10);

        var menuItemRestart = new cc.MenuItemSprite(
            components.restartButton().normal,
            components.restartButton().selected,
            this.onRestart, this);
        var menu = new cc.Menu(menuItemRestart);
        menu.setPosition(centerPos);
        this.addChild(menu);
    },
    onRestart:function (sender) {
        cc.log("GameOver.onRestart ...")
        cc.director.resume();
        cc.director.runScene(new PlayScene());
    }
});