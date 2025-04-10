System.register("chunks:///_virtual/GameController.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var t,o,i,l,r,n,a,c,u,s,p;return{setters:[function(e){t=e.applyDecoratedDescriptor,o=e.inheritsLoose,i=e.initializerDefineProperty,l=e.assertThisInitialized},function(e){r=e.cclegacy,n=e._decorator,a=e.Label,c=e.AudioSource,u=e.Node,s=e.Input,p=e.Component}],execute:function(){var d,h,b,f,g,y,G,I,k,m,v;r._RF.push({},"0c9edBLsXJBtI+ZbD6jjSq/","GameController",void 0);var L=n.ccclass,S=n.property;e("GameController",(d=L("GameController"),h=S({type:a}),b=S({type:a}),f=S({type:c}),g=S({type:u}),d((I=t((G=function(e){function t(){for(var t,o=arguments.length,r=new Array(o),n=0;n<o;n++)r[n]=arguments[n];return t=e.call.apply(e,[this].concat(r))||this,i(t,"scoreLabel",I,l(t)),i(t,"goldLabel",k,l(t)),i(t,"clickSound",m,l(t)),i(t,"clickNode",v,l(t)),t.score=0,t.gold=0,t.autoGoldInterval=1,t.autoGoldMultiplier=.1,t}o(t,e);var r=t.prototype;return r.start=function(){this.updateUI(),this.clickNode.on(s.EventType.TOUCH_START,this.onClick,this),this.schedule(this.autoGoldIncrease,this.autoGoldInterval)},r.onClick=function(e){this.gold+=1,this.score+=1,this.clickSound&&this.clickSound.play(),this.updateUI()},r.autoGoldIncrease=function(){this.gold>0&&(this.gold+=this.gold*this.autoGoldMultiplier,this.updateUI())},r.updateUI=function(){this.goldLabel.string="Gold: "+Math.floor(this.gold),this.scoreLabel.string="Score: "+this.score},t}(p)).prototype,"scoreLabel",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),k=t(G.prototype,"goldLabel",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),m=t(G.prototype,"clickSound",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),v=t(G.prototype,"clickNode",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),y=G))||y));r._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./GameController.ts","./UpgradeManager.ts"],(function(){return{setters:[null,null],execute:function(){}}}));

System.register("chunks:///_virtual/UpgradeManager.ts",["./rollupPluginModLoBabelHelpers.js","cc","./GameController.ts"],(function(t){var e,r,n,o,i,a,l,u,s,c;return{setters:[function(t){e=t.applyDecoratedDescriptor,r=t.inheritsLoose,n=t.initializerDefineProperty,o=t.assertThisInitialized},function(t){i=t.cclegacy,a=t._decorator,l=t.Node,u=t.Label,s=t.Component},function(t){c=t.GameController}],execute:function(){var p,g,f,d,h,C,b,y,m;i._RF.push({},"f323fviSZdFo7JTRNQ+/iKr","UpgradeManager",void 0);var v=a.ccclass,L=a.property;t("UpgradeManager",(p=v("UpgradeManager"),g=L(l),f=L(u),d=L(c),p((b=e((C=function(t){function e(){for(var e,r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];return e=t.call.apply(t,[this].concat(i))||this,n(e,"upgradeButton",b,o(e)),n(e,"costLabel",y,o(e)),n(e,"gameController",m,o(e)),e.baseCost=100,e.currentCost=100,e}r(e,t);var i=e.prototype;return i.start=function(){this.updateCostLabel(),this.upgradeButton.on(l.EventType.TOUCH_END,this.onUpgradeClick,this)},i.onUpgradeClick=function(){this.gameController.upgradeClickMultiplier(this.currentCost),this.currentCost=Math.floor(1.2*this.currentCost),this.updateCostLabel()},i.updateCostLabel=function(){this.costLabel.string="Цена апгрейда: "+this.currentCost+" золота"},e}(s)).prototype,"upgradeButton",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),y=e(C.prototype,"costLabel",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),m=e(C.prototype,"gameController",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),h=C))||h));i._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});