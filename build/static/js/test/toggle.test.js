TinyCore.debugMode=!0,describe("toggle",function(){var a;beforeEach(function(a){FrontendCore.require(["toggle"],function(){void 0!==a&&a()})}),it("should exist",function(){a=TinyCore.Module.instantiate("toggle"),expect(a).toBeTruthy()}),describe("onStart",function(){beforeEach(function(){spyOn(FrontendTools,"getDataModules"),spyOn(FrontendTools,"trackModule"),a.onStart()}),it("should exist",function(){expect(a.onStart).toBeTruthy()}),it('should call FrontendTools.trackModule with "JS_Libraries", "call", "toggle"',function(){expect(FrontendTools.trackModule).toHaveBeenCalledWith("JS_Libraries","call","toggle")})}),describe("toggleClass",function(){var b;beforeEach(function(){b=$('<a href="#toggle-class" data-fc-modules="toggle" data-fc-class="hidden" class="button">Click to toggle Class</a><div id="toggle-class" class="box-invert"><p>Hello World!</p></div>'),spyOn(jQuery.fn,"toggleClass"),a.toggleClass(b[0])}),afterEach(function(){b.remove()}),it("should exist",function(){spyOn(a,"toggleClass"),expect(a.toggleClass).toBeTruthy()}),it("should Call jQuery toggleClass",function(){expect(jQuery.fn.toggleClass).toHaveBeenCalled()})}),describe("slideToggle",function(){var b;beforeEach(function(){b=$('<a href="#toggle-slide" data-fc-modules="toggle" class="button">Click to toggle Class</a><div id="toggle-slide" class="box-invert"><p>Hello World!</p></div>'),spyOn(jQuery.fn,"slideDown"),a.slideToggle(b[0])}),afterEach(function(){b.remove()}),it("should exist",function(){spyOn(a,"slideToggle"),expect(a.slideToggle).toBeTruthy()}),it("should Call jQuery slideToggle",function(){expect(jQuery.fn.slideDown).toHaveBeenCalled()})}),describe("toggleAnimation",function(){var b;beforeEach(function(){b=$('<a href="#toggle-animation-attention" data-fc-modules="toggle" data-fc-animation="bounce" class="button">bounce</a> <p class="fz-h1" id="toggle-animation-attention">Hello World!</p>'),spyOn(a,"toggleAnimation"),a.toggleAnimation(b[0]),console.info(b[0])}),afterEach(function(){b.remove()}),it("should exist",function(){expect(a.toggleAnimation).toBeTruthy()})})});