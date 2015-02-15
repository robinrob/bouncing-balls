cc.log("Setting resource variables ...")

var res = {
    // Buttons
    button_outer_png : "res/button-outer.png",

    button_n_inner_png : "res/button_n-inner.png",
    button_s_inner_png : "res/button_s-inner.png",

    start_n_text_png : "res/start_n-text.png",
    start_s_text_png : "res/start_s-text.png",

    restart_n_text_png : "res/restart_n-text.png",
    restart_s_text_png : "res/restart_s-text.png",

    helloBG_png : "res/bouncing-ball-bg.jpg",
    PlayBG_png  : "res/PlayBG.png",
    runner_png  : "res/running.png",
    runner_plist : "res/running.plist",
    fish_png  : "res/fish.png",
    fish_plist : "res/fish.plist",
    map_png: "res/map.png",
    map00_tmx: "res/map00.tmx",
    map01_tmx: "res/map01.tmx",
    background_png :"res/background.png",
    background_plist : "res/background.plist",
    music_background : "res/background.ogg",
    music_jump : "res/jump.ogg",
    music_pickup_coin : "res/pickup_coin.ogg"
};

var g_resources = [];
for (var i in res) {
    g_resources.push(res[i]);
}