!function(a,b,c,d,e,f){"use strict";e.define("yes-no",[],function(){return{sPathCss:c.sPathCssUI+"?v="+c.sHash,onStart:function(){var a=d.getDataModules("yes-no"),b=this;d.loadCSS(this.sPathCss),d.trackModule("JS_Libraries","call","yes-no"),f(a).each(function(){b.autobind(this)})},autobind:function(a){},onStop:function(){this.sPathCss=null,this.oDefault=null},onDestroy:function(){delete this.sPathCss,delete this.oDefault}}})}(window,document,oGlobalSettings,FrontendTools,FrontendCore,$);