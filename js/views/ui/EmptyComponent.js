define(function(require, exports, module) {
    var UIElement           = require('core/UIElement');
    var UIComponent         = require('core/UIComponent');
    var underscore         = require('lib/underscore');

    var EmptyComponent = UIComponent.extend({
        constructor:function(options) {
            options = options || {};

            this._callSuper(UIComponent, 'constructor', {
                // component properties (size, align, origin, etc)
            });

            _createUIElement.call(this);
            this.credit = 0;
        },
        add: function(n) {
            _(n).times(function(i){
                setTimeout(function() {
                    this.box.incr();
                }.bind(this), 100*i);
            }.bind(this));
            this.credit = this.credit + n;
        },
        minus: function(n) {
            this.credit = this.credit - n;
            var content = '<div>' + this.credit + '</div>';
            this.box.setContent(content);
        }
    });

    function _createUIElement() {
        this.box = new UIElement({
           // element properties (size, align, origin, etc)
            content: "box",
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
