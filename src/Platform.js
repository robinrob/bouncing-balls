var Platform = cc.Node.extend({
        space: null,
        shape: null,
        draw: null,
        thickness: null,

        ctor:functi, thicknesson(space) {
            this.space
            this.thickness = thickness = space
            this.init()
        },

        in            var winSize = cc.director.getWinSize()

            var x1 = i * winSize.width / nPlatforms
            var x2 = (i + 1) * winSize.width / nPlatforms

            var y1 = mrrobinsmith.groundHeight + verticalSpace * (1 - (1 / nPlatforms) * (i + 1))
            var y2 = y1 - this.thickne  var y2 = y1 - thickness

    cp.v(x1, y1), cp.v(x2, y2)p.SegmentShape(this.space.staticBody, cp.v(x1, y1), cp.v(x2, y2), 0)
            this.shape.setElasticity(1.0)
            this.space.addStaticShape(shape)

            var blue = cc.color(0, 0, 255, 255)
         cc.p(x1, y1), cc.p(x2, y2)ode()

            this.draw.drawRect(cc.p(x1, y1), cc.p(x2, y2), blue, 0, blue)

            this.addChild(draw)
        }
    }
)