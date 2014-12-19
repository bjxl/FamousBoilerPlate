define(function(require, exports, module) {
    var UIElement           = require('core/UIElement');
    var UIComponent         = require('core/UIComponent');

    var EmptyComponent = UIComponent.extend({
        constructor:function(options) {
            options = options || {};

            this._callSuper(UIComponent, 'constructor', {
                // component properties (size, align, origin, etc)
                size: [550,230]
            });

            _createUIElement.call(this);
        }
    });

    function _createUIElement() {

        var digitFrame = new UIElement({
            origin: [1,1],
            align: [1,1],
            size: [0, -550],
            content: '<img src="assets/imgs/creditFrame2.png">',
            //style: {
            //    zIndex: 0
            //}
        });
        this._addChild(digitFrame);
    }

    module.exports = EmptyComponent;
});
