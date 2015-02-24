var PlayScene = cc.Scene.extend({
    space:null,
    shapesToRemove :[],


    onEnter:function () {
        cc.log("PlayScene.onEnter ...")
        this._super();
        this.shapesToRemove = [];
        this.initPhysics();
        this.gameLayer = new cc.Layer();

        //add Background layer and Animation layer to gameLayer
        //this.gameLayer.addChild(new BackgroundLayer(this.space), 0, mrrobinsmith.TagOfLayer.background);
        this.gameLayer.addChild(new AnimationLayer(this.space), 0, mrrobinsmith.TagOfLayer.Animation);
        this.addChild(this.gameLayer);
        //this.addChild(new StatusLayer(), 0, mrrobinsmith.TagOfLayer.Status);

        this.scheduleUpdate();
    },

    // init space of chipmunk
    initPhysics:function() {
        cc.log("PlayScene.initPhysics ...")
        //1. new space object
        this.space = new cp.Space();
        //2. setup the  Gravity
        this.space.gravity = cp.v(0, -200);

        // 3. set up Walls
        var wallBottom = new cp.SegmentShape(this.space.staticBody,
            cp.v(0, mrrobinsmith.g_groundHeight),// start point
            cp.v(4294967295, mrrobinsmith.g_groundHeight),// MAX INT:4294967295
            0);// thickness of wall
        this.space.addStaticShape(wallBottom);
    },

    update:function (dt) {
        cc.log("PlayScene.update ...")
        // chipmunk step
        this.space.step(dt);

        var animationLayer = this.gameLayer.getChildByTag(mrrobinsmith.TagOfLayer.Animation);
        animationLayer.update(dt);
    }
});