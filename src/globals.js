cc.log("Setting globals ...")
var g_groundHeight = 57;
var g_runnerStartX = 80;

var g_buttonOuterColor = new cc.color(0, 255, 0, 0)
var g_buttonInnerColor = new cc.color(0, 0, 255, 0)
var g_buttonTextColor = new cc.color(0, 255, 0, 0)

if(typeof TagOfLayer == "undefined") {
    var TagOfLayer = {};
    TagOfLayer.background = 0;
    TagOfLayer.Animation = 1;
    TagOfLayer.Status = 2;
};

// collision type for chipmunk
if(typeof SpriteTag == "undefined") {
    var SpriteTag = {};
    SpriteTag.runner = 0;
    SpriteTag.coin = 1;
    SpriteTag.rock = 2;
};