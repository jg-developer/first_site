(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 1080,
	height: 720,
	fps: 24,
	color: "#FFFFFF",
	webfonts: {},
	manifest: [
		{src:"images/baseshape.png", id:"baseshape"},
		{src:"images/frontshape.png", id:"frontshape"},
		{src:"images/glare.png", id:"glare"},
		{src:"images/Ponteiro.png", id:"Ponteiro"},
		{src:"images/PUTYOURDESIGNHERE.png", id:"PUTYOURDESIGNHERE"},
		{src:"images/shadow.png", id:"shadow"},
		{src:"images/Shape.png", id:"Shape"},
		{src:"images/Shape_1.png", id:"Shape_1"},
		{src:"images/Shape_2.png", id:"Shape_2"},
		{src:"images/Shape_1_1.png", id:"Shape_1_1"},
		{src:"images/Shape_1_2.png", id:"Shape_1_2"},
		{src:"images/Shape_1_3.png", id:"Shape_1_3"},
		{src:"images/Shape_2_1.png", id:"Shape_2_1"},
		{src:"images/Shape_2_2.png", id:"Shape_2_2"},
		{src:"images/Shape_3.png", id:"Shape_3"}
	]
};



lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.baseshape = function() {
	this.initialize(img.baseshape);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1891,22);


(lib.frontshape = function() {
	this.initialize(img.frontshape);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1897,36);


(lib.glare = function() {
	this.initialize(img.glare);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,581,1003);


(lib.Ponteiro = function() {
	this.initialize(img.Ponteiro);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3,40);


(lib.PUTYOURDESIGNHERE = function() {
	this.initialize(img.PUTYOURDESIGNHERE);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1448,908);


(lib.shadow = function() {
	this.initialize(img.shadow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1722,1084);


(lib.Shape = function() {
	this.initialize(img.Shape);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,265,22);


(lib.Shape_1 = function() {
	this.initialize(img.Shape_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,14,14);


(lib.Shape_2 = function() {
	this.initialize(img.Shape_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1219,22);


(lib.Shape_1_1 = function() {
	this.initialize(img.Shape_1_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,21,5);


(lib.Shape_1_2 = function() {
	this.initialize(img.Shape_1_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,18,19);


(lib.Shape_1_3 = function() {
	this.initialize(img.Shape_1_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1546,1071);


(lib.Shape_2_1 = function() {
	this.initialize(img.Shape_2_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,21,5);


(lib.Shape_2_2 = function() {
	this.initialize(img.Shape_2_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1538,1061);


(lib.Shape_3 = function() {
	this.initialize(img.Shape_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1532,1003);


(lib.Símbolo1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Camada 1
	this.instance = new lib.Ponteiro();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,3,40);


(lib.o = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Camada 1
	this.text = new cjs.Text("o", "34px 'Times New Roman'", "#FF6600");
	this.text.lineHeight = 40;
	this.text.lineWidth = 17;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,21,41.7);


(lib.notebook_flatpsd = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Shape
	this.instance = new lib.Shape();
	this.instance.setTransform(1368,1494);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// front shape
	this.instance_1 = new lib.frontshape();
	this.instance_1.setTransform(551,1494);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Shape_2
	this.instance_2 = new lib.Shape_2_1();
	this.instance_2.setTransform(1782,1546);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Shape_1
	this.instance_3 = new lib.Shape_1_1();
	this.instance_3.setTransform(1193,1546);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// base shape
	this.instance_4 = new lib.baseshape();
	this.instance_4.setTransform(554,1530);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// Shape
	this.instance_5 = new lib.Shape_1();
	this.instance_5.setTransform(1493,492);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// Shape_1
	this.instance_6 = new lib.Shape_1_2();
	this.instance_6.setTransform(1491,490);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// glare
	this.instance_7 = new lib.glare();
	this.instance_7.setTransform(1685,469);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// PUT YOUR DESIGN HERE
	this.instance_8 = new lib.PUTYOURDESIGNHERE();
	this.instance_8.setTransform(776,521);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

	// Shape
	this.instance_9 = new lib.Shape_2();
	this.instance_9.setTransform(888,1473);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1));

	// Shape_3
	this.instance_10 = new lib.Shape_3();
	this.instance_10.setTransform(734,469);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1));

	// Shape_2
	this.instance_11 = new lib.Shape_2_2();
	this.instance_11.setTransform(731,465);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1));

	// Shape_1
	this.instance_12 = new lib.Shape_1_3();
	this.instance_12.setTransform(727,461);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1));

	// shadow
	this.instance_13 = new lib.shadow();
	this.instance_13.setTransform(551,462);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(551,461,1897,1091);


(lib.m_W = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Camada 1
	this.text = new cjs.Text("W", "34px 'Times New Roman'", "#FF6600");
	this.text.lineHeight = 40;
	this.text.lineWidth = 35;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,39.4,41.7);


(lib.t = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Camada 1
	this.text = new cjs.Text("t", "34px 'Times New Roman'", "#0066CC");
	this.text.lineHeight = 40;
	this.text.lineWidth = 9;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,13.5,41.7);


(lib.m_Y = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Camada 1
	this.text = new cjs.Text("Y", "34px 'Times New Roman'", "#0066CC");
	this.text.lineHeight = 40;
	this.text.lineWidth = 25;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,28.6,41.7);


(lib.m_T = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Camada 1
	this.text = new cjs.Text("T", "34px 'Times New Roman'", "#0066CC");
	this.text.lineHeight = 40;
	this.text.lineWidth = 21;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,24.8,41.7);


(lib.m_P = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Camada 1
	this.text = new cjs.Text("P", "34px 'Times New Roman'", "#0066CC");
	this.text.lineHeight = 40;
	this.text.lineWidth = 19;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,22.9,41.7);


(lib.m_O = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Camada 1
	this.text = new cjs.Text("O", "34px 'Times New Roman'", "#0066CC");
	this.text.lineHeight = 40;
	this.text.lineWidth = 25;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,28.6,41.7);


(lib.m_E = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Camada 1
	this.text = new cjs.Text("E", "34px 'Times New Roman'", "#0066CC");
	this.text.lineHeight = 40;
	this.text.lineWidth = 21;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,24.8,41.7);


(lib.m_D = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Camada 1
	this.text = new cjs.Text("D", "34px 'Times New Roman'", "#0066CC");
	this.text.lineHeight = 40;
	this.text.lineWidth = 25;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,28.6,41.7);


(lib.m_C = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Camada 1
	this.text = new cjs.Text("C", "34px 'Times New Roman'", "#0066CC");
	this.text.lineHeight = 40;
	this.text.lineWidth = 23;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,26.7,41.7);


(lib.m = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Camada 1
	this.text = new cjs.Text("m", "34px 'Times New Roman'", "#0066CC");
	this.text.lineHeight = 40;
	this.text.lineWidth = 26;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,30.5,41.7);


(lib.l = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Camada 1
	this.text = new cjs.Text("l", "34px 'Times New Roman'", "#0066CC");
	this.text.lineHeight = 40;
	this.text.lineWidth = 9;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,13.5,41.7);


(lib.i = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Camada 1
	this.text = new cjs.Text("i", "34px 'Times New Roman'", "#FF6600");
	this.text.lineHeight = 40;
	this.text.lineWidth = 11;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,15.3,41.7);


(lib.h = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Camada 1
	this.text = new cjs.Text("h", "34px 'Times New Roman'", "#0066CC");
	this.text.lineHeight = 40;
	this.text.lineWidth = 17;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,21,41.7);


(lib.e = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Camada 1
	this.text = new cjs.Text("e", "34px 'Times New Roman'", "#0066CC");
	this.text.lineHeight = 40;
	this.text.lineWidth = 15;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,19.1,41.7);


(lib.d = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Camada 1
	this.text = new cjs.Text("d", "34px 'Times New Roman'", "#0066CC");
	this.text.lineHeight = 40;
	this.text.lineWidth = 17;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,21,41.7);


(lib.c = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Camada 1
	this.text = new cjs.Text("c", "34px 'Times New Roman'", "#FF6600");
	this.text.lineHeight = 40;
	this.text.lineWidth = 15;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,19.1,41.7);


(lib.a = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Camada 1
	this.text = new cjs.Text("a", "34px 'Times New Roman'", "#0066CC");
	this.text.lineHeight = 40;
	this.text.lineWidth = 15;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,19.1,41.7);


(lib.Symbol = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Camada 1
	this.text = new cjs.Text(">", "34px 'Times New Roman'", "#0066CC");
	this.text.lineHeight = 40;
	this.text.lineWidth = 19;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,23.2,41.7);


(lib.Symbol_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Camada 1
	this.text = new cjs.Text("<", "34px 'Times New Roman'", "#0066CC");
	this.text.lineHeight = 40;
	this.text.lineWidth = 19;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,23.2,41.7);


(lib.Symbol_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Camada 1
	this.text = new cjs.Text(":", "34px 'Times New Roman'", "#FF6600");
	this.text.lineHeight = 40;
	this.text.lineWidth = 14;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,18,41.7);


(lib.Symbol_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Camada 1
	this.text = new cjs.Text("/", "34px 'Times New Roman'", "#FF6600");
	this.text.lineHeight = 40;
	this.text.lineWidth = 9;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,13.5,41.7);


(lib.Symbol_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Camada 1
	this.text = new cjs.Text(")", "34px 'Times New Roman'", "#FF6600");
	this.text.lineHeight = 40;
	this.text.lineWidth = 11;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,15.3,41.7);


(lib.Symbol_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Camada 1
	this.text = new cjs.Text("!", "34px 'Times New Roman'", "#0066CC");
	this.text.lineHeight = 40;
	this.text.lineWidth = 11;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,15.3,41.7);


(lib.ponteiro = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Camada 1
	this.instance = new lib.Símbolo1();
	this.instance.setTransform(1.5,20,1,1,0,0,0,1.5,20);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:1},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:1},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,3,40);


// stage content:



(lib.banner = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// <
	this.instance = new lib.Symbol_1();
	this.instance.setTransform(195.1,204.4,1,1,0,0,0,11.6,20.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).wait(237));

	// !
	this.instance_1 = new lib.Symbol_5();
	this.instance_1.setTransform(206.7,204.4,1,1,0,0,0,7.7,20.8);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(7).to({_off:false},0).wait(233));

	// D
	this.instance_2 = new lib.m_D();
	this.instance_2.setTransform(290.8,204.2,1,1,0,0,0,76.5,20.8);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(11).to({_off:false},0).wait(229));

	// O
	this.instance_3 = new lib.m_O();
	this.instance_3.setTransform(257.2,204.4,1,1,0,0,0,14.3,20.8);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(15).to({_off:false},0).wait(225));

	// C
	this.instance_4 = new lib.m_C();
	this.instance_4.setTransform(284.8,204.2,1,1,0,0,0,13.4,20.8);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(19).to({_off:false},0).wait(221));

	// T
	this.instance_5 = new lib.m_T();
	this.instance_5.setTransform(310.5,204.4,1,1,0,0,0,12.4,20.8);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(23).to({_off:false},0).wait(217));

	// Y
	this.instance_6 = new lib.m_Y();
	this.instance_6.setTransform(337.2,204.4,1,1,0,0,0,14.3,20.8);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(27).to({_off:false},0).wait(213));

	// P
	this.instance_7 = new lib.m_P();
	this.instance_7.setTransform(362.9,204.4,1,1,0,0,0,11.5,20.8);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(31).to({_off:false},0).wait(209));

	// E
	this.instance_8 = new lib.m_E();
	this.instance_8.setTransform(386.7,204.4,1,1,0,0,0,12.4,20.8);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(35).to({_off:false},0).wait(205));

	// h
	this.instance_9 = new lib.h();
	this.instance_9.setTransform(436.5,204.2,1,1,0,0,0,10.5,20.8);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(41).to({_off:false},0).wait(199));

	// t
	this.instance_10 = new lib.t();
	this.instance_10.setTransform(455.2,204.4,1,1,0,0,0,6.7,20.8);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(45).to({_off:false},0).wait(195));

	// m
	this.instance_11 = new lib.m();
	this.instance_11.setTransform(477.2,204.4,1,1,0,0,0,15.2,20.8);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(49).to({_off:false},0).wait(191));

	// l
	this.instance_12 = new lib.l();
	this.instance_12.setTransform(499.2,204.4,1,1,0,0,0,6.7,20.8);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(53).to({_off:false},0).wait(187));

	// >
	this.instance_13 = new lib.Symbol();
	this.instance_13.setTransform(518.6,204.4,1,1,0,0,0,11.6,20.8);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(57).to({_off:false},0).wait(183));

	// <
	this.instance_14 = new lib.Symbol_1();
	this.instance_14.setTransform(218.3,246.1,1,1,0,0,0,11.6,20.8);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(61).to({_off:false},0).wait(179));

	// h
	this.instance_15 = new lib.h();
	this.instance_15.setTransform(236.8,246,1,1,0,0,0,10.5,20.8);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(65).to({_off:false},0).wait(175));

	// t
	this.instance_16 = new lib.t();
	this.instance_16.setTransform(251.4,246,1,1,0,0,0,6.7,20.8);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(69).to({_off:false},0).wait(171));

	// m
	this.instance_17 = new lib.m();
	this.instance_17.setTransform(272.7,246.1,1,1,0,0,0,15.2,20.8);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(73).to({_off:false},0).wait(167));

	// l
	this.instance_18 = new lib.l();
	this.instance_18.setTransform(292.4,246.1,1,1,0,0,0,6.7,20.8);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(77).to({_off:false},0).wait(163));

	// >
	this.instance_19 = new lib.Symbol();
	this.instance_19.setTransform(310.7,246.1,1,1,0,0,0,11.6,20.8);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(81).to({_off:false},0).wait(159));

	// <
	this.instance_20 = new lib.Symbol_1();
	this.instance_20.setTransform(245.3,282.3,1,1,0,0,0,11.6,20.8);
	this.instance_20._off = true;
	this.instance_20.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 153, 0, 0)];
	this.instance_20.cache(-2,-2,27,46);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(85).to({_off:false},0).wait(155));

	// h
	this.instance_21 = new lib.h();
	this.instance_21.setTransform(267.3,282.3,1,1,0,0,0,10.5,20.8);
	this.instance_21._off = true;
	this.instance_21.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 153, 0, 0)];
	this.instance_21.cache(-2,-2,25,46);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(89).to({_off:false},0).wait(151));

	// e
	this.instance_22 = new lib.e();
	this.instance_22.setTransform(283.9,282.3,1,1,0,0,0,9.6,20.8);
	this.instance_22._off = true;
	this.instance_22.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 153, 0, 0)];
	this.instance_22.cache(-2,-2,23,46);

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(93).to({_off:false},0).wait(147));

	// a
	this.instance_23 = new lib.a();
	this.instance_23.setTransform(300.3,282.3,1,1,0,0,0,9.6,20.8);
	this.instance_23._off = true;
	this.instance_23.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 153, 0, 0)];
	this.instance_23.cache(-2,-2,23,46);

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(97).to({_off:false},0).wait(143));

	// d
	this.instance_24 = new lib.d();
	this.instance_24.setTransform(317,282.3,1,1,0,0,0,10.5,20.8);
	this.instance_24._off = true;
	this.instance_24.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 153, 0, 0)];
	this.instance_24.cache(-2,-2,25,46);

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(101).to({_off:false},0).wait(139));

	// >
	this.instance_25 = new lib.Symbol();
	this.instance_25.setTransform(338.8,282.3,1,1,0,0,0,11.6,20.8);
	this.instance_25._off = true;
	this.instance_25.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 153, 0, 0)];
	this.instance_25.cache(-2,-2,27,46);

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(105).to({_off:false},0).wait(135));

	// <
	this.instance_26 = new lib.Symbol_1();
	this.instance_26.setTransform(274.7,317.3,1,1,0,0,0,11.6,20.8);
	this.instance_26._off = true;
	this.instance_26.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 204, 0, 0)];
	this.instance_26.cache(-2,-2,27,46);

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(111).to({_off:false},0).wait(129));

	// t
	this.instance_27 = new lib.t();
	this.instance_27.setTransform(293.4,317.3,1,1,0,0,0,6.7,20.8);
	this.instance_27._off = true;
	this.instance_27.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 204, 0, 0)];
	this.instance_27.cache(-2,-2,18,46);

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(115).to({_off:false},0).wait(125));

	// i
	this.instance_28 = new lib.i();
	this.instance_28.setTransform(311.1,317.3,1,1,0,0,0,7.7,20.8);
	this.instance_28._off = true;
	this.instance_28.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 204, 0, 0)];
	this.instance_28.cache(-2,-2,19,46);

	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(119).to({_off:false},0).wait(121));

	// t
	this.instance_29 = new lib.t();
	this.instance_29.setTransform(327.5,317.5,1,1,0,0,0,6.7,20.8);
	this.instance_29._off = true;
	this.instance_29.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 204, 0, 0)];
	this.instance_29.cache(-2,-2,18,46);

	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(123).to({_off:false},0).wait(117));

	// l
	this.instance_30 = new lib.l();
	this.instance_30.setTransform(342.1,317.4,1,1,0,0,0,6.7,20.8);
	this.instance_30._off = true;
	this.instance_30.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 204, 0, 0)];
	this.instance_30.cache(-2,-2,18,46);

	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(127).to({_off:false},0).wait(113));

	// e
	this.instance_31 = new lib.e();
	this.instance_31.setTransform(359.5,317.4,1,1,0,0,0,9.6,20.8);
	this.instance_31._off = true;
	this.instance_31.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 204, 0, 0)];
	this.instance_31.cache(-2,-2,23,46);

	this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(131).to({_off:false},0).wait(109));

	// >
	this.instance_32 = new lib.Symbol();
	this.instance_32.setTransform(380.8,317.4,1,1,0,0,0,11.6,20.8);
	this.instance_32._off = true;
	this.instance_32.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 204, 0, 0)];
	this.instance_32.cache(-2,-2,27,46);

	this.timeline.addTween(cjs.Tween.get(this.instance_32).wait(135).to({_off:false},0).wait(105));

	// W
	this.instance_33 = new lib.m_W();
	this.instance_33.setTransform(414.3,316.7,1,1,0,0,0,19.7,20.8);
	this.instance_33._off = true;
	this.instance_33.filters = [new cjs.ColorFilter(0, 0, 0, 1, 102, 102, 102, 0)];
	this.instance_33.cache(-2,-2,43,46);

	this.timeline.addTween(cjs.Tween.get(this.instance_33).wait(139).to({_off:false},0).wait(101));

	// e
	this.instance_34 = new lib.e();
	this.instance_34.setTransform(444.9,317.6,1,1,0,0,0,9.6,20.8);
	this.instance_34._off = true;
	this.instance_34.filters = [new cjs.ColorFilter(0, 0, 0, 1, 102, 102, 102, 0)];
	this.instance_34.cache(-2,-2,23,46);

	this.timeline.addTween(cjs.Tween.get(this.instance_34).wait(143).to({_off:false},0).wait(97));

	// l
	this.instance_35 = new lib.l();
	this.instance_35.setTransform(462.2,317.6,1,1,0,0,0,6.7,20.8);
	this.instance_35._off = true;
	this.instance_35.filters = [new cjs.ColorFilter(0, 0, 0, 1, 102, 102, 102, 0)];
	this.instance_35.cache(-2,-2,18,46);

	this.timeline.addTween(cjs.Tween.get(this.instance_35).wait(147).to({_off:false},0).wait(93));

	// c
	this.instance_36 = new lib.c();
	this.instance_36.setTransform(480.3,316.9,1,1,0,0,0,9.6,20.8);
	this.instance_36._off = true;
	this.instance_36.filters = [new cjs.ColorFilter(0, 0, 0, 1, 102, 102, 102, 0)];
	this.instance_36.cache(-2,-2,23,46);

	this.timeline.addTween(cjs.Tween.get(this.instance_36).wait(151).to({_off:false},0).wait(89));

	// o
	this.instance_37 = new lib.o();
	this.instance_37.setTransform(501.2,316.9,1,1,0,0,0,10.5,20.8);
	this.instance_37._off = true;
	this.instance_37.filters = [new cjs.ColorFilter(0, 0, 0, 1, 102, 102, 102, 0)];
	this.instance_37.cache(-2,-2,25,46);

	this.timeline.addTween(cjs.Tween.get(this.instance_37).wait(155).to({_off:false},0).wait(85));

	// m
	this.instance_38 = new lib.m();
	this.instance_38.setTransform(527.5,317.7,1,1,0,0,0,15.2,20.8);
	this.instance_38._off = true;
	this.instance_38.filters = [new cjs.ColorFilter(0, 0, 0, 1, 102, 102, 102, 0)];
	this.instance_38.cache(-2,-2,35,46);

	this.timeline.addTween(cjs.Tween.get(this.instance_38).wait(159).to({_off:false},0).wait(81));

	// e
	this.instance_39 = new lib.e();
	this.instance_39.setTransform(552.9,317.7,1,1,0,0,0,9.6,20.8);
	this.instance_39._off = true;
	this.instance_39.filters = [new cjs.ColorFilter(0, 0, 0, 1, 102, 102, 102, 0)];
	this.instance_39.cache(-2,-2,23,46);

	this.timeline.addTween(cjs.Tween.get(this.instance_39).wait(163).to({_off:false},0).wait(77));

	// !
	this.instance_40 = new lib.Symbol_5();
	this.instance_40.setTransform(570.2,317.6,1,1,0,0,0,7.7,20.8);
	this.instance_40._off = true;
	this.instance_40.filters = [new cjs.ColorFilter(0, 0, 0, 1, 102, 102, 102, 0)];
	this.instance_40.cache(-2,-2,19,46);

	this.timeline.addTween(cjs.Tween.get(this.instance_40).wait(167).to({_off:false},0).wait(73));

	// :
	this.instance_41 = new lib.Symbol_2();
	this.instance_41.setTransform(598.6,317,1,1,0,0,0,9,20.8);
	this.instance_41._off = true;
	this.instance_41.filters = [new cjs.ColorFilter(0, 0, 0, 1, 102, 102, 102, 0)];
	this.instance_41.cache(-2,-2,22,46);

	this.timeline.addTween(cjs.Tween.get(this.instance_41).wait(171).to({_off:false},0).wait(69));

	// )
	this.instance_42 = new lib.Symbol_4();
	this.instance_42.setTransform(612.9,317,1,1,0,0,0,7.7,20.8);
	this.instance_42._off = true;
	this.instance_42.filters = [new cjs.ColorFilter(0, 0, 0, 1, 102, 102, 102, 0)];
	this.instance_42.cache(-2,-2,19,46);

	this.timeline.addTween(cjs.Tween.get(this.instance_42).wait(175).to({_off:false},0).wait(65));

	// <
	this.instance_43 = new lib.Symbol_1();
	this.instance_43.setTransform(632.5,317.8,1,1,0,0,0,11.6,20.8);
	this.instance_43._off = true;
	this.instance_43.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 204, 0, 0)];
	this.instance_43.cache(-2,-2,27,46);

	this.timeline.addTween(cjs.Tween.get(this.instance_43).wait(179).to({_off:false},0).wait(61));

	// /
	this.instance_44 = new lib.Symbol_3();
	this.instance_44.setTransform(650.4,317,1,1,0,0,0,6.7,20.8);
	this.instance_44._off = true;
	this.instance_44.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 204, 0, 0)];
	this.instance_44.cache(-2,-2,18,46);

	this.timeline.addTween(cjs.Tween.get(this.instance_44).wait(183).to({_off:false},0).wait(57));

	// t
	this.instance_45 = new lib.t();
	this.instance_45.setTransform(665.7,317.8,1,1,0,0,0,6.7,20.8);
	this.instance_45._off = true;
	this.instance_45.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 204, 0, 0)];
	this.instance_45.cache(-2,-2,18,46);

	this.timeline.addTween(cjs.Tween.get(this.instance_45).wait(187).to({_off:false},0).wait(53));

	// i
	this.instance_46 = new lib.i();
	this.instance_46.setTransform(681.8,317.8,1,1,0,0,0,7.7,20.8);
	this.instance_46._off = true;
	this.instance_46.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 204, 0, 0)];
	this.instance_46.cache(-2,-2,19,46);

	this.timeline.addTween(cjs.Tween.get(this.instance_46).wait(191).to({_off:false},0).wait(49));

	// t
	this.instance_47 = new lib.t();
	this.instance_47.setTransform(697.7,317.8,1,1,0,0,0,6.7,20.8);
	this.instance_47._off = true;
	this.instance_47.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 204, 0, 0)];
	this.instance_47.cache(-2,-2,18,46);

	this.timeline.addTween(cjs.Tween.get(this.instance_47).wait(195).to({_off:false},0).wait(45));

	// l
	this.instance_48 = new lib.l();
	this.instance_48.setTransform(711.1,317.8,1,1,0,0,0,6.7,20.8);
	this.instance_48._off = true;
	this.instance_48.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 204, 0, 0)];
	this.instance_48.cache(-2,-2,18,46);

	this.timeline.addTween(cjs.Tween.get(this.instance_48).wait(199).to({_off:false},0).wait(41));

	// e
	this.instance_49 = new lib.e();
	this.instance_49.setTransform(727.5,316.7,1,1,0,0,0,9.6,20.8);
	this.instance_49._off = true;
	this.instance_49.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 204, 0, 0)];
	this.instance_49.cache(-2,-2,23,46);

	this.timeline.addTween(cjs.Tween.get(this.instance_49).wait(203).to({_off:false},0).wait(37));

	// >
	this.instance_50 = new lib.Symbol();
	this.instance_50.setTransform(748.6,317.8,1,1,0,0,0,11.6,20.8);
	this.instance_50._off = true;
	this.instance_50.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 204, 0, 0)];
	this.instance_50.cache(-2,-2,27,46);

	this.timeline.addTween(cjs.Tween.get(this.instance_50).wait(207).to({_off:false},0).wait(33));

	// ponteiro
	this.instance_51 = new lib.ponteiro();
	this.instance_51.setTransform(185,205.3,1,1,0,0,0,1.5,20);

	this.timeline.addTween(cjs.Tween.get(this.instance_51).wait(1).to({x:194.8,y:205},0).wait(1).to({x:204.5,y:204.7},0).wait(1).to({x:214.3,y:204.4},0).wait(1).to({x:214},0).wait(1).to({x:213.8},0).wait(1).to({x:213.5},0).wait(1).to({x:213.2},0).wait(1).to({x:221,y:204.2},0).wait(1).to({x:228.8,y:204},0).wait(1).to({x:236.6,y:203.8},0).wait(1).to({x:244.4,y:203.6},0).wait(1).to({x:251.5,y:204},0).wait(1).to({x:258.6,y:204.3},0).wait(1).to({x:265.8,y:204.7},0).wait(1).to({x:272.9,y:205},0).wait(1).to({x:279.6,y:204.7},0).wait(1).to({x:286.3,y:204.3},0).wait(1).to({x:293,y:204},0).wait(1).to({x:299.7,y:203.6},0).wait(1).to({x:305.8,y:204},0).wait(1).to({x:312,y:204.3},0).wait(1).to({x:318.2,y:204.7},0).wait(1).to({x:324.4,y:205},0).wait(1).to({x:331.5},0).wait(1).to({x:338.6},0).wait(1).to({x:345.8},0).wait(1).to({x:352.9},0).wait(1).to({x:358.6},0).wait(1).to({x:364.4},0).wait(1).to({x:370.1},0).wait(1).to({x:375.8},0).wait(1).to({x:382},0).wait(1).to({x:388.2},0).wait(1).to({x:394.4},0).wait(1).to({x:400.6},0).wait(1).to({x:408.6},0).wait(1).to({x:416.7},0).wait(1).to({x:424.8},0).wait(1).to({x:432.8},0).wait(1).to({x:440.9},0).wait(1).to({x:449},0).wait(1).to({x:453.1},0).wait(1).to({x:457.2},0).wait(1).to({x:461.3},0).wait(1).to({x:465.5},0).wait(1).to({x:472.3},0).wait(1).to({x:479.2},0).wait(1).to({x:486.1},0).wait(1).to({x:493},0).wait(1).to({x:496},0).wait(1).to({x:499},0).wait(1).to({x:502},0).wait(1).to({x:505.1},0).wait(1).to({x:430.1,y:215.1},0).wait(1).to({x:355.1,y:225.1},0).wait(1).to({x:280.1,y:235.2},0).wait(1).to({x:205.2,y:245.3},0).wait(1).to({x:212},0).wait(1).to({x:218.8},0).wait(1).to({x:225.6},0).wait(1).to({x:232.4},0).wait(1).to({x:236},0).wait(1).to({x:239.6},0).wait(1).to({x:243.1},0).wait(1).to({x:246.7},0).wait(1).to({x:250},0).wait(1).to({x:253.3},0).wait(1).to({x:256.6},0).wait(1).to({x:259.9},0).wait(1).to({x:267.3},0).wait(1).to({x:274.8},0).wait(1).to({x:282.2},0).wait(1).to({x:289.6},0).wait(1).to({x:291.5},0).wait(1).to({x:293.5},0).wait(1).to({x:295.4},0).wait(1).to({x:297.3},0).wait(1).to({x:303.9},0).wait(1).to({x:310.5},0).wait(1).to({x:317.1},0).wait(1).to({x:323.7},0).wait(1).to({x:277.5,y:262.5},0).wait(1).to({x:231.4,y:279.7},0).wait(1).to({x:244.6,y:280.6},0).wait(1).to({x:257.8,y:281.5},0).wait(1).to({x:263.3},0).wait(1).to({x:268.8},0).wait(1).to({x:274.3},0).wait(1).to({x:279.8},0).wait(1).to({x:283.1},0).wait(1).to({x:286.4},0).wait(1).to({x:289.7},0).wait(1).to({x:293},0).wait(1).to({x:297.4},0).wait(1).to({x:301.8},0).wait(1).to({x:306.2},0).wait(1).to({x:310.6},0).wait(1).to({x:314.4},0).wait(1).to({x:318.3},0).wait(1).to({x:322.1},0).wait(1).to({x:326},0).wait(1).to({x:332.6},0).wait(1).to({x:339.2},0).wait(1).to({x:345.8},0).wait(1).to({x:352.4},0).wait(1).to({x:320.2,y:291.8},0).wait(1).to({x:288.1,y:302.2},0).wait(1).to({x:256,y:312.6},0).wait(1).to({x:266.6,y:313.7},0).wait(1).to({x:277.2,y:314.8},0).wait(1).to({x:287.9,y:315.9},0).wait(1).to({x:291.2},0).wait(1).to({x:294.5},0).wait(1).to({x:297.8},0).wait(1).to({x:301.1},0).wait(1).to({x:304.9},0).wait(1).to({x:308.8},0).wait(1).to({x:312.6},0).wait(1).to({x:316.5},0).wait(1).to({x:321.1},0).wait(1).to({x:325.8},0).wait(1).to({x:330.5},0).wait(1).to({x:335.2},0).wait(1).to({x:338.5},0).wait(1).to({x:341.8},0).wait(1).to({x:345.1},0).wait(1).to({x:348.4},0).wait(1).to({x:353.6},0).wait(1).to({x:358.8},0).wait(1).to({x:364},0).wait(1).to({x:369.3},0).wait(1).to({x:375.6},0).wait(1).to({x:381.9},0).wait(1).to({x:388.2},0).wait(1).to({x:394.6},0).wait(1).to({x:403.4},0).wait(1).to({x:412.2},0).wait(1).to({x:421},0).wait(1).to({x:429.8},0).wait(1).to({x:436.1},0).wait(1).to({x:442.4},0).wait(1).to({x:448.7},0).wait(1).to({x:455.1},0).wait(1).to({x:458.4},0).wait(1).to({x:461.7},0).wait(1).to({x:465},0).wait(1).to({x:468.3},0).wait(1).to({x:474},0).wait(1).to({x:479.8},0).wait(1).to({x:485.6},0).wait(1).to({x:491.4},0).wait(1).to({x:496.6},0).wait(1).to({x:501.8},0).wait(1).to({x:507},0).wait(1).to({x:512.3},0).wait(1).to({x:519.7},0).wait(1).to({x:527.1},0).wait(1).to({x:534.5},0).wait(1).to({x:542},0).wait(1).to({x:546.9},0).wait(1).to({x:551.9},0).wait(1).to({x:556.8},0).wait(1).to({x:561.8},0).wait(1).to({x:565.3},0).wait(1).to({x:568.9},0).wait(1).to({x:572.5},0).wait(1).to({x:576.1},0).wait(1).to({x:582.7},0).wait(1).to({x:589.3},0).wait(1).to({x:595.3},0).wait(1).to({x:601.4},0).wait(1).to({x:606},0).wait(1).to({x:610.7},0).wait(1).to({x:615.4},0).wait(1).to({x:620.1},0).wait(1).to({x:626.4},0).wait(1).to({x:632.7},0).wait(1).to({x:639},0).wait(1).to({x:645.4},0).wait(1).to({x:648.1},0).wait(1).to({x:650.9},0).wait(1).to({x:653.6},0).wait(1).to({x:656.4},0).wait(1).to({x:660.5},0).wait(1).to({x:664.6},0).wait(1).to({x:668.7},0).wait(1).to({x:672.9},0).wait(1).to({x:676.7},0).wait(1).to({x:680.6},0).wait(1).to({x:684.4},0).wait(1).to({x:688.3},0).wait(1).to({x:692.7},0).wait(1).to({x:697.1},0).wait(1).to({x:701.5},0).wait(1).to({x:705.9},0).wait(1).to({x:708.9},0).wait(1).to({x:711.9},0).wait(1).to({x:714.9},0).wait(1).to({x:718},0).wait(1).to({x:722.9},0).wait(1).to({x:727.9},0).wait(1).to({x:732.8},0).wait(1).to({x:737.8},0).wait(1).to({x:743.8},0).wait(1).to({x:749.9},0).wait(1).to({x:755.9},0).wait(1).to({x:762},0).wait(33));

	// background
	this.instance_52 = new lib.notebook_flatpsd("synched",0);
	this.instance_52.setTransform(714.6,393.4,0.563,0.558,0,0,0,1798.7,1023.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_52).wait(240));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(552.2,439.1,1067.8,609.1);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;