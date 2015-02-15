var components = {
    startButton: function startButton() {
        if (typeof startButton.buttons === "undefined") {
            startButton.buttons = {
                normal: (function () {
                    cc.log("Generating start_n button ...")
                    var btn = new CompositeSprite([res.button_outer_png, res.button_n_inner_png, res.start_n_text_png])
                    btn.setColor(g_buttonOuterColor)
                    btn.setChildColor(0, g_buttonInnerColor)
                    btn.setChildColor(1, g_buttonTextColor)
                    return btn
                })(),
                selected: (function () {
                    var btn = new CompositeSprite([res.button_outer_png, res.button_s_inner_png, res.start_s_text_png])
                    btn.setColor(g_buttonOuterColor)
                    btn.setChildColor(0, g_buttonInnerColor)
                    btn.setChildColor(1, g_buttonTextColor)
                    return btn
                })()
            }
        }

        return (function() { return startButton.buttons })()
    },

    restartButton: function restartButton() {
        if (typeof restartButton.buttons === "undefined") {
            restartButton.buttons = {
                normal: (function () {
                    cc.log("Generating restart_n button ...")
                    var btn = new CompositeSprite([res.button_outer_png, res.button_n_inner_png, res.restart_n_text_png])
                    btn.setColor(g_buttonOuterColor)
                    btn.setChildColor(0, g_buttonInnerColor)
                    btn.setChildColor(1, g_buttonTextColor)
                    return btn
                })(),
                selected: (function () {
                    var btn = new CompositeSprite([res.button_outer_png, res.button_s_inner_png, res.restart_s_text_png])
                    btn.setColor(g_buttonOuterColor)
                    btn.setChildColor(0, g_buttonInnerColor)
                    btn.setChildColor(1, g_buttonTextColor)
                    return btn
                })()
            }
        }

        return (function() { return restartButton.buttons })()
    }
}