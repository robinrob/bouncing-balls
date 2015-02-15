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

        var restart_n = new CompositeSprite([res.button_outer_png, res.button_n_inner_png, res.restart_n_text_png])
        restart_n.setColor(g_buttonOuterColor)
        restart_n.setChildColor(0, g_buttonInnerColor)
        restart_n.setChildColor(1, g_buttonTextColor)

        var restart_s = new CompositeSprite([res.button_outer_png, res.button_s_inner_png, res.restart_s_text_png])
        restart_s.setColor(g_buttonOuterColor)
        restart_s.setChildColor(0, g_buttonInnerColor)
        restart_s.setChildColor(1, g_buttonTextColor)

        var menuItemRestart = new cc.MenuItemSprite(
            restart_n,
            restart_s,
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