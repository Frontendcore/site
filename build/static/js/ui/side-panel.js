!function(a){"use strict";a.fn.bigSlide=function(b){var c=this,d=a.extend({menu:"#menu",push:".push",side:"left",menuWidth:"15.625em",speed:"300",state:"closed"},b),e={state:d.state},f={init:function(){g.init()},changeState:function(){e.state="closed"===e.state?"open":"closed"},getState:function(){return e.state}},g={init:function(){this.$menu=a(d.menu),this.$push=a(d.push),this.width=d.menuWidth;var b={position:"fixed",top:"0",bottom:"0","settings.side":"-"+d.menuWidth,width:d.menuWidth,height:"100%"},e={"-webkit-transition":d.side+" "+d.speed+"ms ease","-moz-transition":d.side+" "+d.speed+"ms ease","-ms-transition":d.side+" "+d.speed+"ms ease","-o-transition":d.side+" "+d.speed+"ms ease",transition:d.side+" "+d.speed+"ms ease"};this.$menu.css(b),this.$push.css(d.side,"0"),this.$menu.css(e),this.$push.css(e),c.on("click.bigSlide touchstart.bigSlide",function(a){a.preventDefault(),"open"===f.getState()?g.toggleClose():g.toggleOpen()})},toggleOpen:function(){f.changeState(),this.$menu.css(d.side,"0"),this.$push.css(d.side,this.width)},toggleClose:function(){f.changeState(),this.$menu.css(d.side,"-"+this.width),this.$push.css(d.side,"0")}};f.init()}}(jQuery),TinyCore.AMD.define("side-panel",[],function(){return{sPathCss:oGlobalSettings.sPathCssUI+"?v="+oGlobalSettings.sHash,oDefault:{menu:"#side-panel",push:".push",side:"left",menuWidth:"15.6em",speed:300,"class":"side-panel-default"},onStart:function(){var a=oTools.getDataModules("side-panel"),b=this;oTools.loadCSS(this.sPathCss),oTools.trackModule("JS_Libraries","call","side-panel"),$(a).each(function(a){b.autobind(this,a)})},autobind:function(a){var b,c,d=this,e=a.href,f={};if(null!==a.getAttribute("data-tc-width")&&(f.menuWidth=a.getAttribute("data-tc-width")),null!==a.getAttribute("data-tc-position")&&(f.side=a.getAttribute("data-tc-position")),null!==a.getAttribute("data-tc-class")&&(f["class"]=a.getAttribute("data-tc-class")),-1!==e.indexOf("#")&&(f.menu="#"+e.split("#")[1]),b=oTools.mergeOptions(d.oDefault,f),$(b.menu).addClass(b["class"]).removeClass("hidden"),$(a).bigSlide(b),-1!==$(b.menu)[0].className.indexOf("navigation")?$(a).on("click",function(){"right"===b.side?"0px"!==$(b.menu).css("right")?($(b.menu).css("z-index","1000"),$("html").css({position:"absolute",overflow:"hidden",width:$(window).width()+b.menuWidth}).animate({"padding-right":$(b.menu).width()})):$("html").css({position:"relative",width:"auto",overflow:"auto"}).animate({"padding-right":0}):"0px"!==$(b.menu).css("left")?($(b.menu).css("z-index","1000"),$("html").css({position:"absolute",overflow:"hidden",width:$(window).width()+b.menuWidth}).animate({"padding-left":$(b.menu).width()})):$("html").css({position:"relative",width:"auto",overflow:"auto"}).animate({"padding-left":0})}):$(a).on("click",function(){"right"===b.side&&"0px"===$(b.menu).css("right")?$(b.menu).css("z-index","1000"):$(b.menu).css("z-index","1001")}),c=$(a).parent(b.menu)[0],void 0!==c){var g=$(a).outerWidth();$(a).css("right"===b.side?{left:"-"+(g-1)+"px"}:{right:"-"+(g-1)+"px"}),null!==a.getAttribute("data-tc-tab-top")&&$(a).css("top",a.getAttribute("data-tc-tab-top")),-1!==c.className.indexOf("box")&&$(c).css("overflow","visible")}"right"===b.side?$(b.menu).css({right:"-"+b.menuWidth}).addClass("side-panel-right"):$(b.menu).css({left:"-"+b.menuWidth}).addClass("side-panel-left")},onStop:function(){this.sPathCss=null},onDestroy:function(){delete this.sPathCss}}});