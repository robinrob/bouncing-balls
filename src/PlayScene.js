var PlayScene = cc.Scene.extend({
    space:null,
    shapesToRemove :[],

    collisionCoinBegin:function (arbiter, space) {
        cc.log("PlayScene.collisionCoinBegin ...")
        var shapes = arbiter.getShapes();
        // shapes[0] is runner
        this.shapesToRemove.push(shapes[1]);

        //add the collect coin audio effect in *collisionCoinBegin* method of PlayScene
        cc.audioEngine.playEffect(mrrobinsmith.res.music_pickup_coin);

        var statusLayer = this.getChildByTag(mrrobinsmith.TagOfLayer.Status);
        statusLayer.addCoin(1);
    },

    collisionRockBegin:function (arbiter, space) {
        cc.log("PlayScene.collisionRockBegin ...")
        cc.log("==game over");

        //stop bg music
        cc.audioEngine.stopMusic();

        cc.director.pause();
        this.addChild(new GameOverLayer());
    },

    // init space of chipmunk
    initPhysics:function() {
        cc.log("PlayScene.initPhysics ...")
        //1. new space object
        this.space = new cp.Space();
        //2. setup the  Gravity
        this.space.gravity = cp.v(0, -350);

        // 3. set up Walls
        var wallBottom = new cp.SegmentShape(this.space.staticBody,
            cp.v(0, mrrobinsmith.g_groundHeight),// start point
            cp.v(4294967295, mrrobinsmith.g_groundHeight),// MAX INT:4294967295
            0);// thickness of wall
        this.space.addStaticShape(wallBottom);

        // setup chipmunk CollisionHandler
        this.space.addCollisionHandler(
            mrrobinsmith.SpriteTag.runner,
            mrrobinsmith.SpriteTag.coin,
            this.collisionCoinBegin.bind(this), null, null, null);

        this.space.addCollisionHandler(
            mrrobinsmith.SpriteTag.runner,
            mrrobinsmith.SpriteTag.rock,
            this.collisionRockBegin.bind(this), null, null, null)
    },

    onEnter:function () {
        cc.log("PlayScene.onEnter ...")
        this._super();
        this.shapesToRemove = [];
        this.initPhysics();
        this.gameLayer = new cc.Layer();

        //add Background layer and Animation layer to gameLayer
        this.gameLayer.addChild(new BackgroundLayer(this.space), 0, mrrobinsmith.TagOfLayer.background);
        this.gameLayer.addChild(new AnimationLayer(this.space), 0, mrrobinsmith.TagOfLayer.Animation);
        this.addChild(this.gameLayer);
        this.addChild(new StatusLayer(), 0, mrrobinsmith.TagOfLayer.Status);

        //add background music
        cc.audioEngine.playMusic(mrrobinsmith.res.music_background, true);

        this.scheduleUpdate();
    },

    update:function (dt) {
        cc.log("PlayScene.update ...")
        // chipmunk step
        this.space.step(dt);

        var animationLayer = this.gameLayer.getChildByTag(mrrobinsmith.TagOfLayer.Animation);
        animationLayer.update(dt);
        var eyeX = animationLayer.getEyeX();

        this.gameLayer.setPosition(cc.p(-eyeX,0));

        // Simulation cpSpaceAddPostStepCallback
        for(var i = 0; i < this.shapesToRemove.length; i++) {
            var shape = this.shapesToRemove[i];
            this.gameLayer.getChildByTag(mrrobinsmith.TagOfLayer.background).removeObjectByShape(shape);
        }
        this.shapesToRemove = [];
    }
});

