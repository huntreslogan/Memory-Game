
define(function(require, exports, module) {
    var Engine     = require("famous/core/Engine");
    var Surface    = require("famous/core/Surface");
    var GridLayout = require("famous/views/GridLayout");
    var Flipper    = require("famous/views/Flipper");
    var Modifier   = require("famous/core/Modifier");
    var View = require("famous/core/View");
    var FlipperView = require("./FlipperView");

    var mainContext = Engine.createContext();

    var grid = new GridLayout({
        dimensions: [4, 3]
    });

    var views = [];
    grid.sequenceFrom(views);

    console.log(FlipperView);
    for(var i = 0; i < 12; i++) {
        var view = new FlipperView(i);
        views.push(view);
    }

    mainContext.add(grid);
});


