window.__require = function t(e, n, a) {
function r(c, i) {
if (!n[c]) {
if (!e[c]) {
var s = c.split("/");
s = s[s.length - 1];
if (!e[s]) {
var u = "function" == typeof __require && __require;
if (!i && u) return u(s, !0);
if (o) return o(s, !0);
throw new Error("Cannot find module '" + c + "'");
}
c = s;
}
var d = n[c] = {
exports: {}
};
e[c][0].call(d.exports, function(t) {
return r(e[c][1][t] || t);
}, d, d.exports, t, e, n, a);
}
return n[c].exports;
}
for (var o = "function" == typeof __require && __require, c = 0; c < a.length; c++) r(a[c]);
return r;
}({
DataManager: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "62a44vKSwxEbpwcnML7+2An", "DataManager");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.DataManager = void 0;
var a = t("./cardManager"), r = function() {
function t() {
this.CurPoint = 0;
this.runWayIndex = 1;
this.TopCardNum = 16;
this.DownCardNum = 36;
this.randomNum = .8;
this.isRunAction = !1;
this.launchIndex = 0;
this.limitChangeTimes = 20;
this.topcards = new Map();
this.downcards = new Map();
this.runWayList = [];
this.randomTopNumArray = [];
this.randomDownArray = [];
this.CommonArray = [];
this.isSuccess = !1;
}
Object.defineProperty(t, "Instance", {
get: function() {
null === this._instance && (this._instance = new t());
return this._instance;
},
enumerable: !1,
configurable: !0
});
t.prototype.randomCards = function() {
for (var e = 1; e <= 52; e++) t.Instance.CommonArray.push(e);
t.Instance.CommonArray.sort(function() {
return t.Instance.randomNum - Math.random();
});
for (var n = 0, a = t.Instance.CommonArray; n < a.length; n++) {
e = a[n];
t.Instance.randomTopNumArray.length < t.Instance.TopCardNum ? t.Instance.randomTopNumArray.push(e) : t.Instance.randomDownArray.push(e);
}
t.Instance.randomTopNumArray.sort(function() {
return t.Instance.randomNum - Math.random();
});
t.Instance.randomDownArray.sort(function() {
return t.Instance.randomNum - Math.random();
});
};
t.prototype.loadCards = function(e, n) {
for (var r = 1; r <= 52; r += 1) {
var o = cc.instantiate(n);
e.addChild(o);
if (r <= t.Instance.TopCardNum) {
var c = t.Instance.randomTopNumArray[r - 1];
o.getComponent(a.default).index = c;
o.name = "" + c;
o.scale = .6;
!1 === t.Instance.topcards.has(this.runWayIndex) && t.Instance.topcards.set(this.runWayIndex, []);
t.Instance.topcards.get(this.runWayIndex).push({
number: t.Instance.randomTopNumArray[r - 1],
node: o
});
t.Instance.topcards.get(this.runWayIndex).length >= 4 && (this.runWayIndex = this.runWayIndex + 1);
} else {
!1 === t.Instance.downcards.has(1) && t.Instance.downcards.set(1, []);
c = t.Instance.randomDownArray[t.Instance.downcards.get(1).length];
o.getComponent(a.default).index = c;
o.name = "" + c;
t.Instance.downcards.get(1).push({
number: c,
node: o
});
o.scale = .6;
}
}
};
t.prototype.deepClone = function(t) {
var e = Array.isArray(t) ? [] : {};
if (t && "object" == typeof t) for (var n in t) t.hasOwnProperty(n) && (t[n] && "object" == typeof t[n] ? e[n] = this.deepClone(t[n]) : e[n] = t[n]);
return e;
};
t._instance = null;
return t;
}();
n.DataManager = r;
cc._RF.pop();
}, {
"./cardManager": "cardManager"
} ],
Game: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "120d06LehtMpZv17wuSXDP3", "Game");
var a, r = this && this.__extends || (a = function(t, e) {
return (a = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
a(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), o = this && this.__decorate || function(t, e, n, a) {
var r, o = arguments.length, c = o < 3 ? e : null === a ? a = Object.getOwnPropertyDescriptor(e, n) : a;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, a); else for (var i = t.length - 1; i >= 0; i--) (r = t[i]) && (c = (o < 3 ? r(c) : o > 3 ? r(e, n, c) : r(e, n)) || c);
return o > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = cc._decorator, i = c.ccclass, s = c.property, u = function(t) {
r(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.label = null;
e.text = "hello";
return e;
}
e.prototype.start = function() {};
o([ s(cc.Label) ], e.prototype, "label", void 0);
o([ s ], e.prototype, "text", void 0);
return o([ i("Game") ], e);
}(cc.Component);
n.default = u;
cc._RF.pop();
}, {} ],
Setting: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "0457cmGJTdLN4wdtN9Y96de", "Setting");
var a, r = this && this.__extends || (a = function(t, e) {
return (a = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
a(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), o = this && this.__decorate || function(t, e, n, a) {
var r, o = arguments.length, c = o < 3 ? e : null === a ? a = Object.getOwnPropertyDescriptor(e, n) : a;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, a); else for (var i = t.length - 1; i >= 0; i--) (r = t[i]) && (c = (o < 3 ? r(c) : o > 3 ? r(e, n, c) : r(e, n)) || c);
return o > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = cc._decorator, i = c.ccclass, s = (c.property, function(t) {
r(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.start = function() {};
e.prototype.backMain = function() {
cc.director.loadScene("start");
};
return o([ i("Setting") ], e);
}(cc.Component));
n.default = s;
cc._RF.pop();
}, {} ],
StartGame: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "12a5dsoYDhNU6idmpJJPsM5", "StartGame");
var a, r = this && this.__extends || (a = function(t, e) {
return (a = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
a(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), o = this && this.__decorate || function(t, e, n, a) {
var r, o = arguments.length, c = o < 3 ? e : null === a ? a = Object.getOwnPropertyDescriptor(e, n) : a;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, a); else for (var i = t.length - 1; i >= 0; i--) (r = t[i]) && (c = (o < 3 ? r(c) : o > 3 ? r(e, n, c) : r(e, n)) || c);
return o > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = cc._decorator, i = c.ccclass, s = (c.property, function(t) {
r(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.start = function() {};
e.prototype.enterGame = function() {
cc.director.loadScene("Scene");
};
e.prototype.setting = function() {
cc.director.loadScene("Setting");
};
return o([ i("StartGame") ], e);
}(cc.Component));
n.default = s;
cc._RF.pop();
}, {} ],
cardManager: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "f3120XXg99JTbg26C8Bw+i4", "cardManager");
var a, r = this && this.__extends || (a = function(t, e) {
return (a = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
a(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), o = this && this.__decorate || function(t, e, n, a) {
var r, o = arguments.length, c = o < 3 ? e : null === a ? a = Object.getOwnPropertyDescriptor(e, n) : a;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, a); else for (var i = t.length - 1; i >= 0; i--) (r = t[i]) && (c = (o < 3 ? r(c) : o > 3 ? r(e, n, c) : r(e, n)) || c);
return o > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = cc._decorator, i = c.ccclass, s = (c.property, function(t) {
r(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.index = 1;
return e;
}
e.prototype.start = function() {
var t = this;
this.index < 10 ? cc.resources.load("source2/a000" + this.index, cc.SpriteFrame, function(e, n) {
t.node.addComponent(cc.Sprite).spriteFrame = n;
}) : cc.resources.load("source2/a00" + this.index, cc.SpriteFrame, function(e, n) {
t.node.addComponent(cc.Sprite).spriteFrame = n;
});
};
return o([ i("cardManager") ], e);
}(cc.Component));
n.default = s;
cc._RF.pop();
}, {} ],
crateCard: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "6426caW0VRL/Jr5kaOUy3fH", "crateCard");
var a, r = this && this.__extends || (a = function(t, e) {
return (a = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
a(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), o = this && this.__decorate || function(t, e, n, a) {
var r, o = arguments.length, c = o < 3 ? e : null === a ? a = Object.getOwnPropertyDescriptor(e, n) : a;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, a); else for (var i = t.length - 1; i >= 0; i--) (r = t[i]) && (c = (o < 3 ? r(c) : o > 3 ? r(e, n, c) : r(e, n)) || c);
return o > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = t("./DataManager"), i = t("./cardManager"), s = cc._decorator, u = s.ccclass, d = s.property, p = function(t) {
r(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.card = null;
e.explode = null;
e.runHangIndex = 0;
e.runLieIndex = 1;
e.intervalTime = .01;
e.launchBtn = null;
return e;
}
e.prototype.onLoad = function() {
c.DataManager.Instance.CurPoint = 0;
c.DataManager.Instance.runWayIndex = 1;
c.DataManager.Instance.TopCardNum = 16;
c.DataManager.Instance.DownCardNum = 36;
c.DataManager.Instance.randomNum = .8;
c.DataManager.Instance.isRunAction = !1;
c.DataManager.Instance.launchIndex = 0;
c.DataManager.Instance.limitChangeTimes = 20;
c.DataManager.Instance.topcards = new Map();
c.DataManager.Instance.downcards = new Map();
c.DataManager.Instance.runWayList = [];
c.DataManager.Instance.randomTopNumArray = [];
c.DataManager.Instance.randomDownArray = [];
c.DataManager.Instance.CommonArray = [];
c.DataManager.Instance.randomCards();
c.DataManager.Instance.loadCards(this.node, this.card);
};
e.prototype.start = function() {
this.launchBtn = this.node.getParent().getChildByName("UI").getChildByName("linesmall").getChildByName("battery");
this.launchBtn.getComponent(cc.Button).enabled = !1;
this.runAction();
this.runDownAction();
};
e.prototype.runAction = function() {
var t = this, e = c.DataManager.Instance.topcards.get(this.runLieIndex)[this.runHangIndex].node, n = this.node.getChildByName("runway" + this.runLieIndex);
cc.tween(e).to(.05, {
position: new cc.Vec3(n.x, 120 + n.y - 30 * this.runHangIndex, 0)
}).call(function() {
if (t.runHangIndex <= Math.floor(c.DataManager.Instance.TopCardNum / 4) - 1 && t.runLieIndex <= 4) {
t.runAction();
if (t.runHangIndex === Math.floor(c.DataManager.Instance.TopCardNum / 4) - 1) {
t.runHangIndex = 0;
t.runLieIndex = t.runLieIndex + 1;
c.DataManager.Instance.runWayList.push(n);
} else t.runHangIndex = t.runHangIndex + 1;
}
}).start();
};
e.prototype.runDownAction = function() {
for (var t = this, e = 1, n = 0; n <= c.DataManager.Instance.downcards.get(1).length - 1; n++) {
var a = c.DataManager.Instance.downcards.get(1)[n].node;
cc.tween(a).delay(1).to(.2, {
position: new cc.Vec3(30 * n - 500, -cc.director.getWinSize().height / 2 - a.height / 2 * .2, 0)
}).call(function() {
e >= c.DataManager.Instance.downcards.get(1).length && (t.launchBtn.getComponent(cc.Button).enabled = !0);
e += 1;
}).start();
}
};
e.prototype.checkRepeatCard = function() {
var t = this;
t.launchBtn.getComponent(cc.Button).enabled = !1;
c.DataManager.Instance.topcards.forEach(function(e) {
var n = e;
if (0 != n.length) {
var a = function(e) {
var a = n[parseInt(e) - 1], r = n[parseInt(e)];
if (a && r && Math.ceil(a.number / 4) === Math.ceil(r.number / 4)) {
n.splice(parseInt(e) - 1, 2);
a.node.destroy();
r.node.destroy();
var o = cc.instantiate(t.explode);
t.node.addChild(o);
o.zIndex = 100;
o.setPosition(r.node.x, r.node.y + r.node.width / 2);
cc.tween(o).to(.2, {
scale: 1
}).call(function() {
o.destroy();
}, o).call(function() {}).start();
}
};
for (var r in n) a(r);
}
});
c.DataManager.Instance.topcards.forEach(function(e, n) {
var a = e, r = c.DataManager.Instance.runWayList[n - 1];
for (var o in a) {
var i = a[parseInt(o)];
cc.tween(i.node).to(.05, {
position: new cc.Vec3(r.x, 120 + r.y - 30 * parseInt(o), 0)
}).call(function() {
t.launchBtn.getComponent(cc.Button).enabled = !0;
}).start();
}
});
};
e.prototype.launchCard = function() {
var t = this;
this.launchBtn.getComponent(cc.Button).enabled = !1;
var e = c.DataManager.Instance.downcards.get(1), n = c.DataManager.Instance.CurPoint;
c.DataManager.Instance.launchIndex = e.length - 1;
if (e[c.DataManager.Instance.launchIndex]) {
var a = c.DataManager.Instance.downcards.get(1)[c.DataManager.Instance.launchIndex], r = c.DataManager.Instance.topcards.get(n)[c.DataManager.Instance.topcards.get(n).length - 1], o = r ? r.node.x : c.DataManager.Instance.runWayList[n - 1].x, i = r ? r.node.y : c.DataManager.Instance.runWayList[n - 1].y;
cc.tween(a.node).to(.1, {
position: new cc.Vec3(o, i - 30, 0)
}).call(function() {
t.checkRepeatCard();
}).start();
}
this.checkArrayState();
this.checkGameEnd();
};
e.prototype.checkArrayState = function() {
var t = c.DataManager.Instance.CurPoint;
if (0 !== c.DataManager.Instance.downcards.get(1).length) {
var e = c.DataManager.Instance.downcards.get(1).pop();
c.DataManager.Instance.topcards.get(t).push(e);
e.node.zIndex = 100 - c.DataManager.Instance.launchIndex;
}
};
e.prototype.changeDownArray = function() {
if (!(c.DataManager.Instance.limitChangeTimes <= 0)) {
var t = [];
for (var e in c.DataManager.Instance.downcards.get(1)) {
var n = c.DataManager.Instance.downcards.get(1)[e].number;
t.push(n);
}
t.sort(function() {
return c.DataManager.Instance.randomNum - Math.random();
});
for (var e in c.DataManager.Instance.downcards.get(1)) (o = c.DataManager.Instance.downcards.get(1)[e].node).destroy();
c.DataManager.Instance.downcards.has(1) && c.DataManager.Instance.downcards.set(1, []);
for (var e in t) {
var a = cc.instantiate(this.card);
this.node.addChild(a);
var r = t[e];
a.getComponent(i.default).index = r;
a.name = "" + r;
a.scale = .6;
c.DataManager.Instance.downcards.get(1).push({
number: r,
node: a
});
}
for (var e in c.DataManager.Instance.downcards.get(1)) {
var o = c.DataManager.Instance.downcards.get(1)[e].node;
cc.tween(o).delay(.5).to(.5, {
position: new cc.Vec3(30 * parseInt(e) - 500, -360, 0)
}, {}).start();
}
c.DataManager.Instance.limitChangeTimes = c.DataManager.Instance.limitChangeTimes - 1;
this.node.getParent().getChildByName("UI").getChildByName("backbtn").getChildByName("limitTimes").getComponent(cc.Label).string = String(c.DataManager.Instance.limitChangeTimes);
}
};
e.prototype.checkGameEnd = function() {
var t, e = 0;
c.DataManager.Instance.topcards.forEach(function(t) {
for (var n in t) e += 1;
});
t = c.DataManager.Instance.downcards.get(1).length;
if (0 === e) {
c.DataManager.Instance.isSuccess = !0;
cc.director.loadScene("fail");
}
if (0 === t && 0 != e) {
c.DataManager.Instance.isSuccess = !1;
cc.director.loadScene("fail");
}
};
e.prototype.update = function() {
this.intervalTime = this.intervalTime + .02;
};
o([ d(cc.Prefab) ], e.prototype, "card", void 0);
o([ d(cc.Prefab) ], e.prototype, "explode", void 0);
return o([ u("crateCard") ], e);
}(cc.Component);
n.default = p;
cc._RF.pop();
}, {
"./DataManager": "DataManager",
"./cardManager": "cardManager"
} ],
fail: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "ea045HZmBBKNILz3hTga+9w", "fail");
var a, r = this && this.__extends || (a = function(t, e) {
return (a = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
a(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), o = this && this.__decorate || function(t, e, n, a) {
var r, o = arguments.length, c = o < 3 ? e : null === a ? a = Object.getOwnPropertyDescriptor(e, n) : a;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, a); else for (var i = t.length - 1; i >= 0; i--) (r = t[i]) && (c = (o < 3 ? r(c) : o > 3 ? r(e, n, c) : r(e, n)) || c);
return o > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = t("./DataManager"), i = cc._decorator, s = i.ccclass, u = (i.property, function(t) {
r(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.failNode = null;
e.successNode = null;
return e;
}
e.prototype.onLoad = function() {
this.failNode = this.node.getChildByName("fail");
this.failNode.active = !1;
this.successNode = this.node.getChildByName("success");
this.successNode.active = !1;
};
e.prototype.start = function() {
if (!1 === c.DataManager.Instance.isSuccess) {
this.failNode.active = !0;
this.successNode.active = !1;
} else {
this.failNode.active = !1;
this.successNode.active = !0;
}
var t = 0;
c.DataManager.Instance.topcards.forEach(function(e) {
for (var n in e) t += 1;
});
this.node.getChildByName("score").getComponent(cc.Label).string = "You Score: " + (52 - t);
};
e.prototype.backMain = function() {
cc.director.loadScene("start");
};
e.prototype.again = function() {
cc.director.loadScene("Scene");
};
return o([ s("fail") ], e);
}(cc.Component));
n.default = u;
cc._RF.pop();
}, {
"./DataManager": "DataManager"
} ],
mainGame: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "e6ce0Hfg75HQ4Ode7z1LtXT", "mainGame");
var a, r = this && this.__extends || (a = function(t, e) {
return (a = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
a(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), o = this && this.__decorate || function(t, e, n, a) {
var r, o = arguments.length, c = o < 3 ? e : null === a ? a = Object.getOwnPropertyDescriptor(e, n) : a;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, a); else for (var i = t.length - 1; i >= 0; i--) (r = t[i]) && (c = (o < 3 ? r(c) : o > 3 ? r(e, n, c) : r(e, n)) || c);
return o > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = t("./DataManager"), i = cc._decorator, s = i.ccclass, u = i.property, d = function(t) {
r(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.launch = null;
e.launchNode = null;
e.runwayArray = [];
e.initAngle = 20;
e.runWayDegreeArray = [];
e.turnAction = "left";
e.totalTime = 180;
return e;
}
e.prototype.onLoad = function() {
this.initRunWay();
this.initLaunch();
this.initAngleArray();
};
e.prototype.start = function() {
this.updateEndTime();
this.schedule(this.updateEndTime, 1);
};
e.prototype.initRunWay = function() {
for (var t = 1; t <= 4; t++) {
var e = this.node.getChildByName("runWay").getChildByName("runway" + t);
e.opacity = 200;
this.runwayArray.push(e);
}
};
e.prototype.initLaunch = function() {
var t = cc.instantiate(this.launch);
this.node.getChildByName("UI").getChildByName("linesmall").getChildByName("battery").addChild(t);
this.launchNode = t;
};
e.prototype.initAngleArray = function() {
for (var t in this.runwayArray) {
var e = this.runwayArray[t], n = e.x - this.launchNode.x, a = e.y - this.launchNode.y, r = cc.v2(n, a).signAngle(cc.v2(1, 0)) / Math.PI * 180;
this.runWayDegreeArray.push(r);
}
};
e.prototype.updateEndTime = function() {
this.node.getChildByName("UI").getChildByName("clockbg").getChildByName("endtime").getComponent(cc.Label).string = "" + this.totalTime;
var t = this.node.getChildByName("UI").getChildByName("paodai").getChildByName("downcardnum"), e = 0;
c.DataManager.Instance.topcards.forEach(function(t) {
for (var n in t) e += 1;
});
t.getComponent(cc.Label).string = "" + e;
t.getComponent(cc.Label).enableBold = !0;
if (e <= 0 && this.totalTime > 0) {
c.DataManager.Instance.isSuccess = !0;
this.unschedule(this.updateEndTime);
cc.director.loadScene("fail");
}
this.totalTime = this.totalTime - 1;
if (this.totalTime <= 0) {
c.DataManager.Instance.isSuccess = !1;
this.unschedule(this.updateEndTime);
cc.director.loadScene("fail");
}
};
e.prototype.update = function() {
if (null !== this.launchNode && 0 !== this.runwayArray.length && 0 !== this.runWayDegreeArray.length) {
20 === this.initAngle && (this.turnAction = "left");
160 === this.initAngle && (this.turnAction = "right");
"left" === this.turnAction ? this.initAngle = this.initAngle + 1 : "right" === this.turnAction && (this.initAngle = this.initAngle - 1);
this.launchNode.angle = this.initAngle;
this.runwayArray[0].opacity = 180;
this.runwayArray[1].opacity = 180;
this.runwayArray[2].opacity = 180;
this.runwayArray[3].opacity = 180;
if (this.initAngle <= 160 && this.initAngle > 125) {
this.runwayArray[0].opacity = 255;
c.DataManager.Instance.CurPoint = 1;
} else if (this.initAngle <= 125 && this.initAngle > 90) {
this.runwayArray[1].opacity = 255;
c.DataManager.Instance.CurPoint = 2;
} else if (this.initAngle <= 90 && this.initAngle > 55) {
this.runwayArray[2].opacity = 255;
c.DataManager.Instance.CurPoint = 3;
} else {
this.runwayArray[3].opacity = 255;
c.DataManager.Instance.CurPoint = 4;
}
}
};
e.prototype.backMain = function() {
cc.director.loadScene("start");
};
e.prototype.onDestroy = function() {
this.unschedule(this.updateEndTime);
};
o([ u(cc.Prefab) ], e.prototype, "launch", void 0);
return o([ s("mainGame") ], e);
}(cc.Component);
n.default = d;
cc._RF.pop();
}, {
"./DataManager": "DataManager"
} ]
}, {}, [ "DataManager", "Game", "Setting", "StartGame", "cardManager", "crateCard", "fail", "mainGame" ]);