!function(a,b,c){function d(b,c){this.bodyOverflowX,this.callbacks={hide:[],show:[]},this.checkInterval=null,this.Content,this.$el=a(b),this.$elProxy,this.elProxyPosition,this.enabled=!0,this.options=a.extend({},i,c),this.mouseIsOverProxy=!1,this.namespace="tooltipster-"+Math.round(1e5*Math.random()),this.Status="hidden",this.timerHide=null,this.timerShow=null,this.$tooltip,this.options.iconTheme=this.options.iconTheme.replace(".",""),this.options.theme=this.options.theme.replace(".",""),this._init()}function e(b,c){var d=!0;return a.each(b,function(a,e){return"undefined"==typeof c[a]||b[a]!==c[a]?(d=!1,!1):void 0}),d}function f(){return!k&&j}function g(){var a=c.body||c.documentElement,b=a.style,d="transition";if("string"==typeof b[d])return!0;v=["Moz","Webkit","Khtml","O","ms"],d=d.charAt(0).toUpperCase()+d.substr(1);for(var e=0;e<v.length;e++)if("string"==typeof b[v[e]+d])return!0;return!1}var h="tooltipster",i={animation:"fade",arrow:!0,arrowColor:"",autoClose:!0,content:null,contentAsHTML:!1,contentCloning:!0,debug:!0,delay:200,minWidth:0,maxWidth:null,functionInit:function(a,b){},functionBefore:function(a,b){b()},functionReady:function(a,b){},functionAfter:function(a){},hideOnClick:!1,icon:"(?)",iconCloning:!0,iconDesktop:!1,iconTouch:!1,iconTheme:"tooltipster-icon",interactive:!1,interactiveTolerance:350,multiple:!1,offsetX:0,offsetY:0,onlyOne:!1,position:"top",positionTracker:!1,positionTrackerCallback:function(a){"hover"==this.option("trigger")&&this.option("autoClose")&&this.hide()},restoration:"current",speed:350,timer:0,theme:"tooltipster-default",touchDevices:!0,trigger:"hover",updateAnimation:!0};d.prototype={_init:function(){var b=this;if(c.querySelector){var d=null;void 0===b.$el.data("tooltipster-initialTitle")&&(d=b.$el.attr("title"),void 0===d&&(d=null),b.$el.data("tooltipster-initialTitle",d)),null!==b.options.content?b._content_set(b.options.content):b._content_set(d);var e=b.options.functionInit.call(b.$el,b.$el,b.Content);"undefined"!=typeof e&&b._content_set(e),b.$el.removeAttr("title").addClass("tooltipstered"),!j&&b.options.iconDesktop||j&&b.options.iconTouch?("string"==typeof b.options.icon?(b.$elProxy=a('<span class="'+b.options.iconTheme+'"></span>'),b.$elProxy.text(b.options.icon)):b.options.iconCloning?b.$elProxy=b.options.icon.clone(!0):b.$elProxy=b.options.icon,b.$elProxy.insertAfter(b.$el)):b.$elProxy=b.$el,"hover"==b.options.trigger?(b.$elProxy.on("mouseenter."+b.namespace,function(){(!f()||b.options.touchDevices)&&(b.mouseIsOverProxy=!0,b._show())}).on("mouseleave."+b.namespace,function(){(!f()||b.options.touchDevices)&&(b.mouseIsOverProxy=!1)}),j&&b.options.touchDevices&&b.$elProxy.on("touchstart."+b.namespace,function(){b._showNow()})):"click"==b.options.trigger&&b.$elProxy.on("click."+b.namespace,function(){(!f()||b.options.touchDevices)&&b._show()})}},_show:function(){var a=this;"shown"!=a.Status&&"appearing"!=a.Status&&(a.options.delay?a.timerShow=setTimeout(function(){("click"==a.options.trigger||"hover"==a.options.trigger&&a.mouseIsOverProxy)&&a._showNow()},a.options.delay):a._showNow())},_showNow:function(c){var d=this;d.options.functionBefore.call(d.$el,d.$el,function(){if(d.enabled&&null!==d.Content){c&&d.callbacks.show.push(c),d.callbacks.hide=[],clearTimeout(d.timerShow),d.timerShow=null,clearTimeout(d.timerHide),d.timerHide=null,d.options.onlyOne&&a(".tooltipstered").not(d.$el).each(function(b,c){var d=a(c),e=d.data("tooltipster-ns");a.each(e,function(a,b){var c=d.data(b),e=c.status(),f=c.option("autoClose");"hidden"!==e&&"disappearing"!==e&&f&&c.hide()})});var e=function(){d.Status="shown",a.each(d.callbacks.show,function(a,b){b.call(d.$el)}),d.callbacks.show=[]};if("hidden"!==d.Status){var f=0;"disappearing"===d.Status?(d.Status="appearing",g()?(d.$tooltip.clearQueue().removeClass("tooltipster-dying").addClass("tooltipster-"+d.options.animation+"-show"),d.options.speed>0&&d.$tooltip.delay(d.options.speed),d.$tooltip.queue(e)):d.$tooltip.stop().fadeIn(e)):"shown"===d.Status&&e()}else{d.Status="appearing";var f=d.options.speed;d.bodyOverflowX=a("body").css("overflow-x"),a("body").css("overflow-x","hidden");var h="tooltipster-"+d.options.animation,i="-webkit-transition-duration: "+d.options.speed+"ms; -webkit-animation-duration: "+d.options.speed+"ms; -moz-transition-duration: "+d.options.speed+"ms; -moz-animation-duration: "+d.options.speed+"ms; -o-transition-duration: "+d.options.speed+"ms; -o-animation-duration: "+d.options.speed+"ms; -ms-transition-duration: "+d.options.speed+"ms; -ms-animation-duration: "+d.options.speed+"ms; transition-duration: "+d.options.speed+"ms; animation-duration: "+d.options.speed+"ms;",k=d.options.minWidth?"min-width:"+Math.round(d.options.minWidth)+"px;":"",l=d.options.maxWidth?"max-width:"+Math.round(d.options.maxWidth)+"px;":"",m=d.options.interactive?"pointer-events: auto;":"";if(d.$tooltip=a('<div class="tooltipster-base '+d.options.theme+'" style="'+k+" "+l+" "+m+" "+i+'"><div class="tooltipster-content"></div></div>'),g()&&d.$tooltip.addClass(h),d._content_insert(),d.$tooltip.appendTo("body"),d.reposition(),d.options.functionReady.call(d.$el,d.$el,d.$tooltip),g()?(d.$tooltip.addClass(h+"-show"),d.options.speed>0&&d.$tooltip.delay(d.options.speed),d.$tooltip.queue(e)):d.$tooltip.css("display","none").fadeIn(d.options.speed,e),d._interval_set(),a(b).on("scroll."+d.namespace+" resize."+d.namespace,function(){d.reposition()}),d.options.autoClose)if(a("body").off("."+d.namespace),"hover"==d.options.trigger){if(j&&setTimeout(function(){a("body").on("touchstart."+d.namespace,function(){d.hide()})},0),d.options.interactive){j&&d.$tooltip.on("touchstart."+d.namespace,function(a){a.stopPropagation()});var n=null;d.$elProxy.add(d.$tooltip).on("mouseleave."+d.namespace+"-autoClose",function(){clearTimeout(n),n=setTimeout(function(){d.hide()},d.options.interactiveTolerance)}).on("mouseenter."+d.namespace+"-autoClose",function(){clearTimeout(n)})}else d.$elProxy.on("mouseleave."+d.namespace+"-autoClose",function(){d.hide()});d.options.hideOnClick&&d.$elProxy.on("click."+d.namespace+"-autoClose",function(){d.hide()})}else"click"==d.options.trigger&&(setTimeout(function(){a("body").on("click."+d.namespace+" touchstart."+d.namespace,function(){d.hide()})},0),d.options.interactive&&d.$tooltip.on("click."+d.namespace+" touchstart."+d.namespace,function(a){a.stopPropagation()}))}d.options.timer>0&&(d.timerHide=setTimeout(function(){d.timerHide=null,d.hide()},d.options.timer+f))}})},_interval_set:function(){var b=this;b.checkInterval=setInterval(function(){if(0===a("body").find(b.$el).length||0===a("body").find(b.$elProxy).length||"hidden"==b.Status||0===a("body").find(b.$tooltip).length)("shown"==b.Status||"appearing"==b.Status)&&b.hide(),b._interval_cancel();else if(b.options.positionTracker){var c=b._repositionInfo(b.$elProxy),d=!1;e(c.dimension,b.elProxyPosition.dimension)&&("fixed"===b.$elProxy.css("position")?e(c.position,b.elProxyPosition.position)&&(d=!0):e(c.offset,b.elProxyPosition.offset)&&(d=!0)),d||(b.reposition(),b.options.positionTrackerCallback.call(b,b.$el))}},200)},_interval_cancel:function(){clearInterval(this.checkInterval),this.checkInterval=null},_content_set:function(a){"object"==typeof a&&null!==a&&this.options.contentCloning&&(a=a.clone(!0)),this.Content=a},_content_insert:function(){var a=this,b=this.$tooltip.find(".tooltipster-content");"string"!=typeof a.Content||a.options.contentAsHTML?b.empty().append(a.Content):b.text(a.Content)},_update:function(a){var b=this;b._content_set(a),null!==b.Content?"hidden"!==b.Status&&(b._content_insert(),b.reposition(),b.options.updateAnimation&&(g()?(b.$tooltip.css({width:"","-webkit-transition":"all "+b.options.speed+"ms, width 0ms, height 0ms, left 0ms, top 0ms","-moz-transition":"all "+b.options.speed+"ms, width 0ms, height 0ms, left 0ms, top 0ms","-o-transition":"all "+b.options.speed+"ms, width 0ms, height 0ms, left 0ms, top 0ms","-ms-transition":"all "+b.options.speed+"ms, width 0ms, height 0ms, left 0ms, top 0ms",transition:"all "+b.options.speed+"ms, width 0ms, height 0ms, left 0ms, top 0ms"}).addClass("tooltipster-content-changing"),setTimeout(function(){"hidden"!=b.Status&&(b.$tooltip.removeClass("tooltipster-content-changing"),setTimeout(function(){"hidden"!==b.Status&&b.$tooltip.css({"-webkit-transition":b.options.speed+"ms","-moz-transition":b.options.speed+"ms","-o-transition":b.options.speed+"ms","-ms-transition":b.options.speed+"ms",transition:b.options.speed+"ms"})},b.options.speed))},b.options.speed)):b.$tooltip.fadeTo(b.options.speed,.5,function(){"hidden"!=b.Status&&b.$tooltip.fadeTo(b.options.speed,1)}))):b.hide()},_repositionInfo:function(a){return{dimension:{height:a.outerHeight(!1),width:a.outerWidth(!1)},offset:a.offset(),position:{left:parseInt(a.css("left")),top:parseInt(a.css("top"))}}},hide:function(c){var d=this;c&&d.callbacks.hide.push(c),d.callbacks.show=[],clearTimeout(d.timerShow),d.timerShow=null,clearTimeout(d.timerHide),d.timerHide=null;var e=function(){a.each(d.callbacks.hide,function(a,b){b.call(d.$el)}),d.callbacks.hide=[]};if("shown"==d.Status||"appearing"==d.Status){d.Status="disappearing";var f=function(){d.Status="hidden","object"==typeof d.Content&&null!==d.Content&&d.Content.detach(),d.$tooltip.remove(),d.$tooltip=null,a(b).off("."+d.namespace),a("body").off("."+d.namespace).css("overflow-x",d.bodyOverflowX),a("body").off("."+d.namespace),d.$elProxy.off("."+d.namespace+"-autoClose"),d.options.functionAfter.call(d.$el,d.$el),e()};g()?(d.$tooltip.clearQueue().removeClass("tooltipster-"+d.options.animation+"-show").addClass("tooltipster-dying"),d.options.speed>0&&d.$tooltip.delay(d.options.speed),d.$tooltip.queue(f)):d.$tooltip.stop().fadeOut(d.options.speed,f)}else"hidden"==d.Status&&e();return d},show:function(a){return this._showNow(a),this},update:function(a){return this.content(a)},content:function(a){return"undefined"==typeof a?this.Content:(this._update(a),this)},reposition:function(){function c(){var c=a(b).scrollLeft();0>C-c&&(f=C-c,C=c),C+i-c>g&&(f=C-(g+c-i),C=g+c-i)}function d(c,d){h.offset.top-a(b).scrollTop()-j-F-12<0&&d.indexOf("top")>-1&&(H=c),h.offset.top+h.dimension.height+j+12+F>a(b).scrollTop()+a(b).height()&&d.indexOf("bottom")>-1&&(H=c,E=h.offset.top-j-F-12)}var e=this;if(0!==a("body").find(e.$tooltip).length){e.$tooltip.css("width",""),e.elProxyPosition=e._repositionInfo(e.$elProxy);var f=null,g=a(b).width(),h=e.elProxyPosition,i=e.$tooltip.outerWidth(!1),j=(e.$tooltip.innerWidth()+1,e.$tooltip.outerHeight(!1));if(e.$elProxy.is("area")){var k=e.$elProxy.attr("shape"),l=e.$elProxy.parent().attr("name"),m=a('img[usemap="#'+l+'"]'),n=m.offset().left,o=m.offset().top,p=void 0!==e.$elProxy.attr("coords")?e.$elProxy.attr("coords").split(","):void 0;if("circle"==k){var q=parseInt(p[0]),r=parseInt(p[1]),s=parseInt(p[2]);h.dimension.height=2*s,h.dimension.width=2*s,h.offset.top=o+r-s,h.offset.left=n+q-s}else if("rect"==k){var q=parseInt(p[0]),r=parseInt(p[1]),t=parseInt(p[2]),u=parseInt(p[3]);h.dimension.height=u-r,h.dimension.width=t-q,h.offset.top=o+r,h.offset.left=n+q}else if("poly"==k){for(var v=0,w=0,x=0,y=0,z="even",A=0;A<p.length;A++){var B=parseInt(p[A]);"even"==z?(B>x&&(x=B,0===A&&(v=x)),v>B&&(v=B),z="odd"):(B>y&&(y=B,1==A&&(w=y)),w>B&&(w=B),z="even")}h.dimension.height=y-w,h.dimension.width=x-v,h.offset.top=o+w,h.offset.left=n+v}else h.dimension.height=m.outerHeight(!1),h.dimension.width=m.outerWidth(!1),h.offset.top=o,h.offset.left=n}var C=0,D=0,E=0,F=parseInt(e.options.offsetY),G=parseInt(e.options.offsetX),H=e.options.position;if("top"==H){var I=h.offset.left+i-(h.offset.left+h.dimension.width);C=h.offset.left+G-I/2,E=h.offset.top-j-F-12,c(),d("bottom","top")}if("top-left"==H&&(C=h.offset.left+G,E=h.offset.top-j-F-12,c(),d("bottom-left","top-left")),"top-right"==H&&(C=h.offset.left+h.dimension.width+G-i,E=h.offset.top-j-F-12,c(),d("bottom-right","top-right")),"bottom"==H){var I=h.offset.left+i-(h.offset.left+h.dimension.width);C=h.offset.left-I/2+G,E=h.offset.top+h.dimension.height+F+12,c(),d("top","bottom")}if("bottom-left"==H&&(C=h.offset.left+G,E=h.offset.top+h.dimension.height+F+12,c(),d("top-left","bottom-left")),"bottom-right"==H&&(C=h.offset.left+h.dimension.width+G-i,E=h.offset.top+h.dimension.height+F+12,c(),d("top-right","bottom-right")),"left"==H){C=h.offset.left-G-i-12,D=h.offset.left+G+h.dimension.width+12;var J=h.offset.top+j-(h.offset.top+h.dimension.height);if(E=h.offset.top-J/2-F,0>C&&D+i>g){var K=2*parseFloat(e.$tooltip.css("border-width")),L=i+C-K;e.$tooltip.css("width",L+"px"),j=e.$tooltip.outerHeight(!1),C=h.offset.left-G-L-12-K,J=h.offset.top+j-(h.offset.top+h.dimension.height),E=h.offset.top-J/2-F}else 0>C&&(C=h.offset.left+G+h.dimension.width+12,f="left")}if("right"==H){C=h.offset.left+G+h.dimension.width+12,D=h.offset.left-G-i-12;var J=h.offset.top+j-(h.offset.top+h.dimension.height);if(E=h.offset.top-J/2-F,C+i>g&&0>D){var K=2*parseFloat(e.$tooltip.css("border-width")),L=g-C-K;e.$tooltip.css("width",L+"px"),j=e.$tooltip.outerHeight(!1),J=h.offset.top+j-(h.offset.top+h.dimension.height),E=h.offset.top-J/2-F}else C+i>g&&(C=h.offset.left-G-i-12,f="right")}if(e.options.arrow){var M="tooltipster-arrow-"+H;if(e.options.arrowColor.length<1)var N=e.$tooltip.css("background-color");else var N=e.options.arrowColor;if(f?"left"==f?(M="tooltipster-arrow-right",f=""):"right"==f?(M="tooltipster-arrow-left",f=""):f="left:"+Math.round(f)+"px;":f="","top"==H||"top-left"==H||"top-right"==H)var O=parseFloat(e.$tooltip.css("border-bottom-width")),P=e.$tooltip.css("border-bottom-color");else if("bottom"==H||"bottom-left"==H||"bottom-right"==H)var O=parseFloat(e.$tooltip.css("border-top-width")),P=e.$tooltip.css("border-top-color");else if("left"==H)var O=parseFloat(e.$tooltip.css("border-right-width")),P=e.$tooltip.css("border-right-color");else if("right"==H)var O=parseFloat(e.$tooltip.css("border-left-width")),P=e.$tooltip.css("border-left-color");else var O=parseFloat(e.$tooltip.css("border-bottom-width")),P=e.$tooltip.css("border-bottom-color");O>1&&O++;var Q="";if(0!==O){var R="",S="border-color: "+P+";";-1!==M.indexOf("bottom")?R="margin-top: -"+Math.round(O)+"px;":-1!==M.indexOf("top")?R="margin-bottom: -"+Math.round(O)+"px;":-1!==M.indexOf("left")?R="margin-right: -"+Math.round(O)+"px;":-1!==M.indexOf("right")&&(R="margin-left: -"+Math.round(O)+"px;"),Q='<span class="tooltipster-arrow-border" style="'+R+" "+S+';"></span>'}e.$tooltip.find(".tooltipster-arrow").remove();var T='<div class="'+M+' tooltipster-arrow" style="'+f+'">'+Q+'<span style="border-color:'+N+';"></span></div>';e.$tooltip.append(T)}e.$tooltip.css({top:Math.round(E)+"px",left:Math.round(C)+"px"})}return e},enable:function(){return this.enabled=!0,this},disable:function(){return this.hide(),this.enabled=!1,this},destroy:function(){var b=this;b.hide(),b.$el[0]!==b.$elProxy[0]&&b.$elProxy.remove(),b.$el.removeData(b.namespace).off("."+b.namespace);var c=b.$el.data("tooltipster-ns");if(1===c.length){var d=null;"previous"===b.options.restoration?d=b.$el.data("tooltipster-initialTitle"):"current"===b.options.restoration&&(d="string"==typeof b.Content?b.Content:a("<div></div>").append(b.Content).html()),d&&b.$el.attr("title",d),b.$el.removeClass("tooltipstered").removeData("tooltipster-ns").removeData("tooltipster-initialTitle")}else c=a.grep(c,function(a,c){return a!==b.namespace}),b.$el.data("tooltipster-ns",c);return b},elementIcon:function(){return this.$el[0]!==this.$elProxy[0]?this.$elProxy[0]:void 0},elementTooltip:function(){return this.$tooltip?this.$tooltip[0]:void 0},option:function(a,b){return"undefined"==typeof b?this.options[a]:(this.options[a]=b,this)},status:function(){return this.Status}},a.fn[h]=function(){var b=arguments;if(0===this.length){if("string"==typeof b[0]){var c=!0;switch(b[0]){case"setDefaults":a.extend(i,b[1]);break;default:c=!1}return c?!0:this}return this}if("string"==typeof b[0]){var e="#*$~&";return this.each(function(){var c=a(this).data("tooltipster-ns"),d=c?a(this).data(c[0]):null;if(!d)throw new Error("You called Tooltipster's \""+b[0]+'" method on an uninitialized element');if("function"!=typeof d[b[0]])throw new Error('Unknown method .tooltipster("'+b[0]+'")');var f=d[b[0]](b[1],b[2]);return f!==d?(e=f,!1):void 0}),"#*$~&"!==e?e:this}var f=[],g=b[0]&&"undefined"!=typeof b[0].multiple,h=g&&b[0].multiple||!g&&i.multiple,j=b[0]&&"undefined"!=typeof b[0].debug,k=j&&b[0].debug||!j&&i.debug;return this.each(function(){var c=!1,e=a(this).data("tooltipster-ns"),g=null;e?h?c=!0:k&&console.log('Tooltipster: one or more tooltips are already attached to this element: ignoring. Use the "multiple" option to attach more tooltips.'):c=!0,c&&(g=new d(this,b[0]),e||(e=[]),e.push(g.namespace),a(this).data("tooltipster-ns",e),a(this).data(g.namespace,g)),f.push(g)}),h?f:this};var j=!!("ontouchstart"in b),k=!1;a("body").one("mousemove",function(){k=!0})}(jQuery,window,document),function(a,b,c,d,e,f){"use strict";e.define("tip",[],function(){return{sPathCss:c.sPathCssUI+"?v="+c.sHash,oDefault:{contentAsHTML:!0,position:"bottom",functionReady:function(a,b){f("body").css("overflow-x","")},functionAfter:function(a,b){f("body").css("overflow-x","")}},onStart:function(){var a=d.getDataModules("tip"),b=this;d.loadCSS(this.sPathCss),d.trackModule("JS_Libraries","call","tip"),f(a).each(function(){b.autobind(this)})},autobind:function(a,b){var c,e=this,g={};null!==a.getAttribute("data-fc-position")&&(g.position=a.getAttribute("data-fc-position")),"click"===a.getAttribute("data-fc-trigger")&&(g.trigger="click",g.hideOnClick=!0,f(a).click(function(a){a.preventDefault()})),null!==a.getAttribute("data-fc-content")&&(g.content=a.getAttribute("data-fc-content")),c=d.mergeOptions(e.oDefault,g),void 0!==c.content&&f(a).tooltipster(c)},onStop:function(){this.sPathCss=null,this.oDefault=null},onDestroy:function(){delete this.sPathCss,delete this.oDefault}}})}(window,document,oGlobalSettings,FrontendTools,FrontendCore,$);