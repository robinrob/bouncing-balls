cc.log("Setting globals ...")

var mrrobinsmith = {
    g_groundHeight: 57,
    g_runnerStartX: 80,

    g_buttonOuterColor: new cc.color(0, 255, 0, 0),
    g_buttonInnerColor: new cc.color(0, 0, 255, 0),
    g_buttonTextColor: new cc.color(0, 255, 0, 0)
}

if(typeof mrrobinsmith.TagOfLayer == "undefined") {
    var TagOfLayer = {};
    TagOfLayer.background = 0;
    TagOfLayer.Animation = 1;
    TagOfLayer.Status = 2;
    mrrobinsmith.TagOfLayer = TagOfLayer;
};


cc.log("Setting resource variables ...")
mrrobinsmith.res = {
    // Buttons
    button_outer_png: "res/button-outer.png",

    button_n_inner_png: "res/button_n-inner.png",
    button_s_inner_png: "res/button_s-inner.png",

    start_n_text_png: "res/start_n-text.png",
    start_s_text_png: "res/start_s-text.png",

    restart_n_text_png: "res/restart_n-text.png",
    restart_s_text_png: "res/restart_s-text.png",
    music_background: "res/background.ogg"
};

mrrobinsmith.resources = [];
for (var i in mrrobinsmith.res) {
    mrrobinsmith.resources.push(mrrobinsmith.res[i]);
}