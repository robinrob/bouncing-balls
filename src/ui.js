var ui = {
    startButton: function startButton() {
        var buttons = {
            normal: (function () {
                cc.log("Generating start_n button ...")
                var btn = new CompositeSprite([mrrobinsmith.res.button_outer_png, mrrobinsmith.res.button_n_inner_png, mrrobinsmith.res.start_n_text_png])
                btn.setColor(mrrobinsmith.g_buttonOuterColor)
                btn.setChildColor(0, mrrobinsmith.g_buttonInnerColor)
                btn.setChildColor(1, mrrobinsmith.g_buttonTextColor)
                return btn
            })(),
            selected: (function () {
                var btn = new CompositeSprite([mrrobinsmith.res.button_outer_png, mrrobinsmith.res.button_s_inner_png, mrrobinsmith.res.start_s_text_png])
                btn.setColor(mrrobinsmith.g_buttonOuterColor)
                btn.setChildColor(0, mrrobinsmith.g_buttonInnerColor)
                btn.setChildColor(1, mrrobinsmith.g_buttonTextColor)
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
                btn.setColor(mrrobinsmith.g_buttonOuterColor)
                btn.setChildColor(0, mrrobinsmith.g_buttonInnerColor)
                btn.setChildColor(1, mrrobinsmith.g_buttonTextColor)
                return btn
            })(),
            selected: (function () {
                var btn = new CompositeSprite([mrrobinsmith.res.button_outer_png, mrrobinsmith.res.button_s_inner_png, mrrobinsmith.res.restart_s_text_png])
                btn.setColor(mrrobinsmith.g_buttonOuterColor)
                btn.setChildColor(0, mrrobinsmith.g_buttonInnerColor)
                btn.setChildColor(1, mrrobinsmith.g_buttonTextColor)
                return btn
            })()
        }

        return buttons
    },

    // Example singleton implementation for reference
    example: function example() {
        if (typeof example.instance === "undefined") {
            example.instance = {}
        }
        return (function() { return example.instance })()
    }
}