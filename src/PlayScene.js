var PlayScene = cc.Scene.extend({
    space:null,
    shapesToRemove :[],


    onEnter:function () {
        cc.log("PlayScene.onEnter ...")
        this._super();
        this.shapesToRemove = [];
        this.initPhysics();
        this.gameLayer = new cc.Layer();

        var white = cc.color(255, 255, 255, 255)
        this.gameLayer.addChild(new AnimationLayer(this.space), 0, mrrobinsmith.TagOfLayer.Animation);
        this.addChild(this.gameLayer);
        //this.addChild(new StatusLayer(), 0, TagOfLayer.Status);
        this.addChild(new ConsoleLayer(), 0, TagOfLayer.Status)

        this.scheduleUpdate();
    },

    // init space of chipmunk
    initPhysics:function() {
        cc.log("PlayScene.initPhysics ...")
        //1. new space object
        this.space = new cp.Space();
        //2. setup the  Gravity
        this.space.gravity = cp.v(0, mrrobinsmith.gravity);

        // 3. set up Walls
        var winSize = cc.director.getWinSize()

        var ground = new cp.SegmentShape(this.space.staticBody, cp.v(0,40), cp.v(winSize.width,40), 0)
        ground.setElasticity(1.0)

        this.space.addStaticShape(ground);
    },

    update:function (dt) {
        cc.log("PlayScene.update ...")
        // chipmunk step
        this.space.step(dt);

        var animationLayer = this.gameLayer.getChildByTag(mrrobinsmith.TagOfLayer.Animation);
        animationLayer.update(dt);
    }
});