cc.log("Setting resource variables ...")

// Configure colors!
var start_color = "lime-green-blue"

var res = {
    helloBG_png : "res/bouncing-ball-bg.jpg",
    start_n_png : "res/start_n-" + start_color + ".png",
    start_s_png : "res/start_s-" + start_color + ".png",
    PlayBG_png  : "res/PlayBG.png",
    runner_png  : "res/running.png",
    runner_plist : "res/running.plist",
    fish_png  : "res/fish.png",
    fish_plist : "res/fish.plist",
    map_png: "res/map.png",
    map00_tmx: "res/map00.tmx",
    map01_tmx: "res/map01.tmx",
    background_png :"res/background.png",
    background_plistgg : "res/background.plist",
    restart_n_png : "res/restart_n.png",
    restart_s_png : "res/restart_s.png",
    music_background : "res/background.ogg",
    music_jump : "res/jump.ogg",
    music_pickup_coin : "res/pickup_coin.ogg"
};

var g_resources = [];
for (var i in res) {
    g_resources.push(res[i]);
}