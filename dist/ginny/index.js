webpackJsonp([3],{0:function(e,n,t){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function a(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}var o=function(){function e(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(n,t,i){return t&&e(n.prototype,t),i&&e(n,i),n}}();t(1);var u=t(344),r=i(u),s=t(327),c=i(s);!function(){window.onload=function(){new l}}();var l=function(){function e(){a(this,e),this.init(),this.addEvent(),this.onResize()}return o(e,[{key:"init",value:function(){this.test=new r.default}},{key:"addEvent",value:function(){window.onresize=this.onResize.bind(this),window.addEventListener("keyup",this.onKeyUp.bind(this))}},{key:"onResize",value:function(){}},{key:"onKeyUp",value:function(e){switch(e.keyCode){case c.default.BACKQUOTE:break;case c.default.ESCAPE:console.clear();break;case c.default.SPACE:break;case c.default.DOWN:break;case c.default.UP:break;case c.default.LEFT:break;case c.default.RIGHT:break;case c.default.BACKSPACE:}}}]),e}()},344:function(e,n){"use strict";function t(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var i=function(){function e(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(n,t,i){return t&&e(n.prototype,t),i&&e(n,i),n}}(),a=function(){function e(){t(this,e),this.app=new PIXI.Application(800,600,{backgroundColor:9159498}),document.body.appendChild(this.app.view),this.canvas=this.app.renderer.view,this.stage=this.app.stage,this.initialize(),this.initializeGUI(),this.render()}return i(e,[{key:"initialize",value:function(){"undefined"==typeof Be||null===Be?console.log("Be Not Found"):console.log("Be Found")}},{key:"initializeGUI",value:function(){this.gui=new dat.GUI}},{key:"update",value:function(e){}},{key:"render",value:function(e){this.update(e),this.requestId=requestAnimationFrame(this.render.bind(this))}}]),e}();n.default=a}});