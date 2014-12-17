define(function(require, exports, module) {
    var UIElement           = require('core/UIElement');
    var UIComponent         = require('core/UIComponent');

    var EmptyComponent = UIComponent.extend({
        constructor:function(options) {
            options = options || {};

            this._callSuper(UIComponent, 'constructor', {
                // component properties (size, align, origin, etc)
            });

            _createUIElement.call(this);
        }
    });

    function _createUIElement() {
        this.box = new UIElement({
           // element properties (size, align, origin, etc)
            size: [200, 100],
            align: [0.5,0.5],
            origin: [0.5,0.5],
            style: {
                backgroundColor: 'teal'
            }
        });
        this._addChild(this.box);
    }

    module.exports = EmptyComponent;
});
