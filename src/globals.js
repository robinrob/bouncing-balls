cc.log("Setting globals ...")

var mrrobinsmith = {
    g_groundHeight: 57,
    g_runnerStartX: 80,

    g_buttonOuterColor: new cc.color(0, 255, 0, 0),
    g_buttonInnerColor: new cc.color(0, 0, 255, 0),
    g_buttonTextColor: new cc.color(0, 255, 0, 0)
}

if(typeof mrrobinsmith. SpriteTag == "undefined") {
    var SpriteTag = {};
    SpriteTag.runner = 0;
    SpriteTag.coin = 1;
    SpriteTag.rock = 2;
    mrrobinsmith.SpriteTag = SpriteTag
};

if(typeof mrrobinsmith.TagOfLayer == "undefined") {
    var TagOfLayer = {};
    TagOfLayer.background = 0;
    TagOfLayer.Animation = 1;
    TagOfLayer.Status = 2;
    mrrobinsmith.TagOfLayer = TagOfLayer;
};


cc.log("Setting resource variables ...")
if(typeof mrrobinsmith.res == "undefined") {
    var res = {
        // Buttons
        button_outer_png: "res/button-outer.png",

        button_n_inner_png: "res/button_n-inner.png",
        button_s_inner_png: "res/button_s-inner.png",

        start_n_text_png: "res/start_n-text.png",
        start_s_text_png: "res/start_s-text.png",

        restart_n_text_png: "res/restart_n-text.png",
        restart_s_text_png: "res/restart_s-text.png",

        helloBG_png: "res/bouncing-ball-bg.jpg",
        PlayBG_png: "res/PlayBG.png",
        runner_png: "res/running.png",
        runner_plist: "res/running.plist",
        fish_png: "res/fish.png",
        fish_plist: "res/fish.plist",
        map_png: "res/map.png",
        map00_tmx: "res/map00.tmx",
        map01_tmx: "res/map01.tmx",
        background_png: "res/background.png",
        background_plist: "res/background.plist",
        music_background: "res/background.ogg",
        music_jump: "res/jump.ogg",
        music_pickup_coin: "res/pickup_coin.ogg"
    };
    mrrobinsmith.res = res;
}

if(typeof mrrobinsmith.resources == "undefined") {
    var resources = [];
    for (var i in res) {
        resources.push(res[i]);
    }
    mrrobinsmith.resources = resources
}