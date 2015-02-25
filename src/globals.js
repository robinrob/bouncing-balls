cc.log("Setting globals ...")

var mrrobinsmith = {
    groundHeight: 40,

    buttonOuterColor: new cc.color(0, 255, 0, 0),
    buttonInnerColor: new cc.color(0, 0, 255, 0),
    buttonTextColor: new cc.color(0, 255, 0, 0)
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

    fish_png  : "res/fish.png",
    fish_plist : "res/fish.plist"
};

res = {
    // Buttons
    button_outer_png: "res/button-outer.png",

    button_n_inner_png: "res/button_n-inner.png",
    button_s_inner_png: "res/button_s-inner.png",

    start_n_text_png: "res/start_n-text.png",
    start_s_text_png: "res/start_s-text.png",

    restart_n_text_png: "res/restart_n-text.png",
    restart_s_text_png: "res/restart_s-text.png",

    fish_png  : "res/fish.png",
    fish_plist : "res/fish.plist"
};

mrrobinsmith.resources = [];
for (var i in mrrobinsmith.res) {
    mrrobinsmith.resources.push(mrrobinsmith.res[i]);
}