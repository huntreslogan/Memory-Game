define(function(require, exports, module) {
    var Engine     = require("famous/core/Engine");
    var Surface    = require("famous/core/Surface");
    var GridLayout = require("famous/views/GridLayout");
    var Flipper    = require("famous/views/Flipper");
    var Modifier   = require("famous/core/Modifier");
    var View = require('famous/core/View');
    var ImageSurface = require('famous/surfaces/ImageSurface');

    function FlipperView(num) {
        View.call(this);

        this.flipper = new Flipper();

        this.front = new Surface({
            size: [undefined, undefined],
            properties: {
                backgroundColor: "hsl(" + (num * 360 / 8) + ", 100%, 50%)",
                color: "white",
                textAlign: 'center',
                fontFamily: 'Helvetica',
                lineHeight: '200px',
                border: '1px solid white'
            }
        })

        this.front.on('click', function() {
            this.flipContent(false);
        }.bind(this));


        this.back = new ImageSurface({
            size: [200, 200],
            content: '/images/logo.png',
            properties: {
                margin: 'auto',
                left: '50px'

            }
        });

        this.back.on('click', function() {
            this.flipContent(true);
        }.bind(this));

        this.flipper.setFront(this.front);
        this.flipper.setBack(this.back);

        this.add(this.flipper);
    }

    FlipperView.prototype = Object.create(View.prototype);
    FlipperView.prototype.constructor = FlipperView;

    FlipperView.prototype.flipContent = function(toggle) {
        var angle = toggle ? 0 : Math.PI;
        this.flipper.setAngle(angle, { curve: 'easeOutBounce', duration : 500});
    };

    module.exports = FlipperView;
});
