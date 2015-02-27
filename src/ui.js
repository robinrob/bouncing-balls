var ui = {
    startButton: function startButton() {
        var buttons = {
            normal: (function () {
                cc.log("Generating start_n button ...")
                var btn = new CompositeSprite([mrrobinsmith.res.button_outer_png, mrrobinsmith.res.button_n_inner_png, mrrobinsmith.res.start_n_text_png])
                btn.setColor(mrrobinsmith.buttonOuterColor)
                btn.setChildColor(0, mrrobinsmith.buttonInnerColor)
                btn.setChildColor(1, mrrobinsmith.buttonTextColor)
                return btn
            })(),
            selected: (function () {
                var btn = new CompositeSprite([mrrobinsmith.res.button_outer_png, mrrobinsmith.res.button_s_inner_png, mrrobinsmith.res.start_s_text_png])
                btn.setColor(mrrobinsmith.buttonOuterColor)
                btn.setChildColor(0, mrrobinsmith.buttonInnerColor)
                btn.setChildColor(1, mrrobinsmith.buttonTextColor)
                return btn
            })()
        }

        return buttons
    },

    restartButton: function restartButton() {
        var buttons = {
            normal:(function () {
                cc.log("Generating restart_n button ...")
                var btn = new CompositeSprite([mrrobinsmith.res.button_outer_png, mrrobinsmith.res.button_n_inner_png, mrrobinsmith.res.restart_n_text_png])
                btn.setColor(mrrobinsmith.buttonOuterColor)
                btn.setChildColor(0, mrrobinsmith.buttonInnerColor)
                btn.setChildColor(1, mrrobinsmith.buttonTextColor)
                return btn
            })(),
            selected: (function () {
                var btn = new CompositeSprite([mrrobinsmith.res.button_outer_png, mrrobinsmith.res.button_s_inner_png, mrrobinsmith.res.restart_s_text_png])
                btn.setColor(mrrobinsmith.buttonOuterColor)
                btn.setChildColor(0, mrrobinsmith.buttonInnerColor)
                btn.setChildColor(1, mrrobinsmith.buttonTextColor)
                return btn
            })()
        }

        return buttons
    },

    fishButton: function fishButton() {
        var sprite = new cc.Sprite("#fish1.png");
        var btn = cc.ControlButton.create("Fish Mode", sprite, 20)
        btn.setPreferredSize(cc.size(40, 40))
        btn.setPosition(cc.p(50, 50))
        btn.addTargetWithActionForControlEvents(this, function(){
            mrrobinsmith.fishMode = !mrrobinsmith.fishMode
        }, cc.CONTROL_EVENT_TOUCH_UP_INSIDE);

        return btn
    },

    // Example singleton implementation for reference
    example: function example() {
        if (typeof example.instance === "undefined") {
            example.instance = {}
        }
        return (function() { return example.instance })()
    }
}