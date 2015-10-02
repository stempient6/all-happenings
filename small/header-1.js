(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 400,
	height: 182,
	fps: 24,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(lib.appenings = function() {
	this.spriteSheet = ss["header_1_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.cityoutline = function() {
	this.spriteSheet = ss["header_1_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.firstline = function() {
	this.spriteSheet = ss["header_1_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.flash = function() {
	this.spriteSheet = ss["header_1_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.plug = function() {
	this.spriteSheet = ss["header_1_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.spark = function() {
	this.spriteSheet = ss["header_1_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Symbol13 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.flash();
	this.instance.setTransform(0,0,0.08,0.08);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,14.6,14.6);


(lib.Symbol12 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.spark();
	this.instance.setTransform(0,0,0.67,0.67);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,20.1,20.1);


(lib.Symbol8 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.appenings();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,825,155);


(lib.Symbol7 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(0.1,1,1).p("ABu4NIAUAAIAAADAiB4NIDdAAAhtYOIgUAAIAAgDACCYOIjdAA");
	this.shape.setTransform(35.1,155.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhtYOIgUgDIjcggMAG5gv4IAAgCIASACIAUADIDcAgMgG5Av4IAAACg");
	this.shape_1.setTransform(35.1,155.3);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-0.7,70.2,312.1);


(lib.Symbol5 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AkNszIIbAAIAAZnIobAAg");
	this.shape.setTransform(27,82);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AkNM0IAA5nIIbAAIAAZng");
	this.shape_1.setTransform(27,82);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,56.1,166.1);


(lib.Symbol4 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("Ah3rjIDvAAIAAXHIjvAAg");
	this.shape.setTransform(12,74);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ah3LjIAA3GIDvAAIAAXGg");
	this.shape_1.setTransform(12,74);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,26,150);


(lib.Symbol3 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("EhbGgZdMC2NAAAMAAAAy7Mi2NAAAg");
	this.shape.setTransform(583.1,163);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EhbGAZeMAAAgy7MC2NAAAMAAAAy7g");
	this.shape_1.setTransform(583.1,163);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,1168.3,328.1);


(lib.Symbol2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AnBxLIODAAMAAAAiXIuDAAg");
	this.shape.setTransform(45,110);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AnBRMMAAAgiXIODAAMAAAAiXg");
	this.shape_1.setTransform(45,110);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,92.1,222.1);


(lib.Symbol1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.plug();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,371,513);


// stage content:
(lib.header1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// spark
	this.instance = new lib.Symbol12();
	this.instance.setTransform(390,124.1,1,1,0,0,0,10.1,10.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(23).to({_off:false},0).wait(1).to({regX:10,regY:10,x:389.9,y:112},0).wait(1).to({y:100.1},0).wait(1).to({y:88.2},0).wait(1).to({y:76.3},0).wait(1).to({y:64.4},0).wait(1).to({y:54.9},0).wait(1).to({x:381.8,y:51},0).wait(1).to({x:372.9,y:49.7},0).wait(1).to({x:364,y:51},0).wait(1).to({x:355.7,y:54.4},0).wait(1).to({x:351.2,y:55.7},0).wait(1).to({x:349.6,y:61.4},0).wait(1).to({x:350.2,y:68.7},0).wait(1).to({x:349.9,y:81.7},0).wait(1).to({x:347.9,y:92.3},0).wait(1).to({x:343.3,y:96.8},0).wait(1).to({x:341.6,y:86.1},0).wait(1).to({x:337.2,y:75},0).wait(1).to({x:327.2,y:70.1},0).wait(1).to({x:317.1,y:71.2},0).wait(1).to({x:309,y:79.1},0).wait(1).to({x:309.3,y:83.5},0).wait(1).to({x:309.6,y:87.9},0).wait(1).to({x:309.7,y:92.3},0).wait(1).to({x:308.8,y:97},0).wait(1).to({x:307.9,y:101.6},0).wait(1).to({x:307,y:106.3},0).wait(1).to({x:300.3,y:99.8},0).wait(1).to({x:293.5,y:93.7},0).wait(1).to({x:286,y:56.9},0).wait(1).to({x:280.5,y:63.7},0).wait(1).to({x:272.9},0).wait(1).to({y:58.3},0).wait(1).to({x:262.7,y:53.1},0).wait(1).to({x:250,y:33.7},0).wait(1).to({x:247.7,y:12.7},0).wait(1).to({x:240.4,y:43.9},0).wait(1).to({x:229.3,y:64.6},0).wait(1).to({x:228.5,y:99.2},0).wait(1).to({x:219.5,y:110.7},0).wait(1).to({x:211.5},0).wait(1).to({x:189.8,y:91},0).wait(1).to({x:186.1,y:48.3},0).wait(1).to({x:184.7,y:14.5},0).wait(1).to({x:204.6,y:33.5},0).wait(1).to({x:196.6,y:82.3},0).wait(1).to({x:173.2,y:112},0).wait(1).to({x:155,y:69.7},0).wait(1).to({x:152.8,y:16.7},0).wait(1).to({x:172.4,y:35},0).wait(1).to({x:169.2,y:87.8},0).wait(1).to({x:139.7,y:97.5},0).wait(1).to({x:131.9,y:44},0).wait(1).to({x:124.1,y:36.5},0).wait(1).to({x:116.2,y:28.9},0).wait(1).to({x:108.4,y:21.5},0).wait(1).to({x:102.6,y:17.1},0).wait(1).to({x:96.9,y:12.7},0).wait(1).to({x:91.1,y:8.4},0).wait(1).to({x:85.4,y:4},0).wait(1).to({x:76.8,y:4.4},0).wait(1).to({x:69.7,y:9},0).wait(1).to({x:65.4,y:16.4},0).wait(2).to({_off:true},1).wait(22));

	// floor
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(0.1,1,1).p("ECI6gBFIAACLMkRzAAAIAAiL");
	this.shape.setTransform(162.2,205.2,0.356,0.356);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EiI5AIHIAAwNMERyAAAIAAQNg");
	this.shape_1.setTransform(162.2,184.2,0.356,0.356);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.shape}]},15).to({state:[{t:this.shape_1},{t:this.shape}]},8).to({state:[{t:this.shape_1},{t:this.shape}]},7).to({state:[{t:this.shape_1},{t:this.shape}]},5).to({state:[{t:this.shape_1},{t:this.shape}]},4).to({state:[{t:this.shape_1},{t:this.shape}]},51).to({state:[{t:this.shape_1},{t:this.shape}]},10).to({state:[{t:this.shape_1},{t:this.shape}]},10).wait(1));

	// appenings
	this.instance_1 = new lib.appenings();
	this.instance_1.setTransform(106.7,-52.4,0.356,0.356);

	this.instance_2 = new lib.Symbol8();
	this.instance_2.setTransform(253.4,-24.9,0.356,0.356,0,0,0,412.6,77.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(50).to({_off:true},40).wait(10).to({_off:false,y:118.1},0).wait(11));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(90).to({_off:false},0).wait(1).to({regX:412.5,x:253.3,y:-5.9},0).wait(1).to({y:13},0).wait(1).to({y:31.9},0).wait(1).to({y:50.8},0).wait(1).to({y:69.7},0).wait(1).to({y:88.6},0).wait(1).to({y:107.6},0).wait(1).to({y:126.5},0).wait(1).to({y:145.4},0).to({_off:true},1).wait(11));

	// flash
	this.instance_3 = new lib.Symbol13();
	this.instance_3.setTransform(211.1,155.1,1,1,0,0,0,7.3,7.3);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(99).to({_off:false},0).wait(1).to({scaleX:33.27,scaleY:33.27,x:212.7,y:156.7},0).wait(1).to({scaleX:65.55,scaleY:65.55,x:214.3,y:158.3},0).to({_off:true},1).wait(9));

	// plug
	this.instance_4 = new lib.Symbol1();
	this.instance_4.setTransform(66,-92.3,0.356,0.356,0,0,0,185.5,256.5);

	this.instance_5 = new lib.plug();
	this.instance_5.setTransform(0,0.7,0.356,0.356);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({y:-79.1},0).wait(1).to({y:-66},0).wait(1).to({y:-52.9},0).wait(1).to({y:-39.8},0).wait(1).to({y:-26.7},0).wait(1).to({y:-13.6},0).wait(1).to({y:-0.5},0).wait(1).to({y:12.6},0).wait(1).to({y:25.7},0).wait(1).to({y:38.8},0).wait(1).to({y:51.9},0).wait(1).to({y:65},0).wait(1).to({y:78.1},0).wait(1).to({y:91.2},0).to({_off:true},1).wait(96));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(15).to({_off:false},0).wait(96));

	// mask 4
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ah3GjIAAtFIDvAAIAANFg");
	this.shape_2.setTransform(311.5,96,0.356,0.356);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(1,1,1).p("AkNszIIbAAIAAZnIobAAg");
	this.shape_3.setTransform(314.7,109.5,0.356,0.356);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AkNM0IAA5nIIbAAIAAZng");
	this.shape_4.setTransform(314.7,109.5,0.356,0.356);

	this.instance_6 = new lib.Symbol5();
	this.instance_6.setTransform(314.8,109.6,0.356,0.356,0,0,0,27,82.2);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).to({state:[{t:this.shape_4},{t:this.shape_3}]},40).to({state:[{t:this.shape_4},{t:this.shape_3}]},5).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[]},1).wait(61));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(46).to({_off:false},0).wait(1).to({regY:82,x:314.7,y:124.1},0).wait(1).to({y:138.6},0).wait(1).to({y:153.2},0).to({_off:true},1).wait(61));

	// mask 3
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFFFFF").ss(1,1,1).p("Ah3rjIDvAAIAAXHIjvAAg");
	this.shape_5.setTransform(349.9,82.5,0.356,0.356);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ah2LkIAA3HIDtAAIAAXHg");
	this.shape_6.setTransform(349.9,82.5,0.356,0.356);

	this.instance_7 = new lib.Symbol4();
	this.instance_7.setTransform(350,82.5,0.356,0.356,0,0,0,12,74);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5}]}).to({state:[{t:this.instance_7}]},35).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[]},1).wait(72));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(35).to({_off:false},0).wait(1).to({x:349.9,y:98.6},0).wait(1).to({y:114.7},0).wait(1).to({y:130.8},0).to({_off:true},1).wait(72));

	// mask 2
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFFFF").ss(1,1,1).p("AnBxLIODAAMAAAAiXIuDAAg");
	this.shape_7.setTransform(402.2,88.2,0.356,0.356);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AnBRMMAAAgiXIODAAMAAAAiXg");
	this.shape_8.setTransform(402.2,88.2,0.356,0.356);

	this.instance_8 = new lib.Symbol2();
	this.instance_8.setTransform(402.2,88.2,0.356,0.356,0,0,0,45,110);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7}]}).to({state:[{t:this.instance_8}]},23).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[]},1).wait(81));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(23).to({_off:false},0).wait(1).to({y:75.4},0).wait(1).to({y:62.6},0).wait(1).to({y:49.8},0).wait(1).to({y:37},0).wait(1).to({y:24.2},0).wait(1).to({y:11.4},0).to({_off:true},1).wait(81));

	// mask1
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FFFFFF").ss(1,1,1).p("EhbGgZdMC2NAAAMAAAAy7Mi2NAAAg");
	this.shape_9.setTransform(178.9,60.8,0.356,0.356);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("EhbGAZeMAAAgy7MC2NAAAMAAAAy7g");
	this.shape_10.setTransform(178.9,60.8,0.356,0.356);

	this.instance_9 = new lib.Symbol3();
	this.instance_9.setTransform(178.9,60.8,0.356,0.356,0,0,0,583.1,163);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9}]}).to({state:[{t:this.instance_9}]},30).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(30).to({_off:false},0).wait(1).to({x:168.8,y:60.7},0).wait(1).to({x:158.6},0).wait(1).to({x:148.5,y:60.6},0).wait(1).to({x:138.3},0).wait(5).to({regX:583.2,x:138.4},0).wait(1).to({regX:583.1,x:138.3},0).wait(1).to({x:128.2},0).wait(1).to({x:118},0).wait(1).to({x:107.9},0).wait(1).to({x:97.7},0).wait(7).to({x:91},0).wait(1).to({x:84.2},0).wait(1).to({x:77.4},0).wait(1).to({x:70.6},0).wait(1).to({x:63.8},0).wait(1).to({x:57},0).wait(1).to({x:50.3},0).wait(1).to({x:43.5},0).wait(1).to({x:36.7},0).wait(1).to({x:29.9},0).wait(1).to({x:23.1},0).wait(1).to({x:16.3},0).wait(1).to({x:9.6},0).wait(1).to({x:2.8},0).wait(1).to({x:-4},0).wait(1).to({x:-10.8},0).wait(1).to({x:-17.6},0).wait(1).to({x:-24.4},0).wait(1).to({x:-31.1},0).wait(1).to({x:-37.9},0).wait(1).to({x:-44.7},0).wait(1).to({x:-51.5},0).wait(1).to({x:-58.3},0).wait(1).to({x:-65.1},0).wait(1).to({x:-71.8},0).wait(1).to({x:-78.6},0).wait(1).to({x:-85.4},0).wait(1).to({x:-92.2},0).wait(1).to({x:-99},0).wait(1).to({x:-105.8},0).wait(1).to({x:-112.5},0).wait(1).to({x:-119.3},0).wait(1).to({x:-126.1},0).wait(1).to({x:-132.9},0).wait(1).to({x:-139.7},0).wait(1).to({x:-146.5},0).wait(1).to({x:-153.2},0).wait(1).to({x:-160},0).wait(1).to({x:-166.8},0).wait(22));

	// line 1
	this.instance_10 = new lib.firstline();
	this.instance_10.setTransform(181.6,68.4,0.356,0.356);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({_off:true},69).wait(42));

	// Layer 8
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FFFFFF").ss(0.1,1,1).p("ABu4NIAUAAIAAADAhtYOIgUAAIAAgDAiB4NIDdAAACCYOIjdAA");
	this.shape_11.setTransform(171.8,61.5,0.356,0.356);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhtYOIgUgDIjcggMAG5gv4IAAgCIASACIAUADIDcAgMgG5Av4IAAACg");
	this.shape_12.setTransform(171.8,61.5,0.356,0.356);

	this.instance_11 = new lib.Symbol7();
	this.instance_11.setTransform(167.5,61.5,0.356,0.356,0,0,0,35,155.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#FFFFFF").ss(0.1,1,1).p("ABu4NIAUAAIAAADAhtYOIgUAAIAAgDACCYOIjdAA");
	this.shape_13.setTransform(167.5,61.5,0.356,0.356);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11}]}).to({state:[{t:this.instance_11,p:{regX:35,x:167.5,y:61.5}}]},70).to({state:[{t:this.instance_11,p:{regX:35.1,x:160.1,y:120.2}}]},1).to({state:[{t:this.instance_11,p:{regX:35.1,x:152.6,y:178.9}}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},27).to({state:[{t:this.shape_13}]},10).wait(1));

	// mask 6
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FFFFFF").ss(1,1,1).p("Ak/5dIJ/AAAFAZeIp/AA");
	this.shape_14.setTransform(209.1,60.1,0.356,0.356);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("ApaXVMAM6gwPIF7BlMgM6AwQg");
	this.shape_15.setTransform(197.7,60.4,0.356,0.356);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14}]}).to({state:[]},65).wait(46));

	// outline
	this.instance_12 = new lib.cityoutline();
	this.instance_12.setTransform(61.1,1.5,0.356,0.356);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(111));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(49.7,-92.5,625.1,392.2);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;