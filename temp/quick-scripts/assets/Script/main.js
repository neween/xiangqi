(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/main.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '280c3rsZJJKnZ9RqbALVwtK', 'main', __filename);
// Script/main.js

'use strict';

cc.Class({
   extends: cc.Component,

   properties: {},

   // use this for initialization
   onLoad: function onLoad() {
      cc.abs = {};
      var gamedata = require('gamedata');
      cc.abs.gamedata = new gamedata();
      cc.abs.gamedata.init();
   },

   // called every frame
   update: function update(dt) {},

   onPlay: function onPlay() {
      cc.director.loadScene('game');
   }
});

cc._RF.pop();
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=main.js.map
        