define(function(require, exports, module) {
    var UIElement           = require('core/UIElement');

    var DigitBox = UIElement.extend({
        constructor:function(options) {
            options = options || {};
            this._callSuper(UIElement, 'constructor', options);
            this.value = "0";
            this.setContent(this.value);
        },
        setValue: function(value) {
            if (value!=this.value) {
                this.value = value;
                this.setContent(this.value);
                this.setScale(1.2,1.2,1, {
                    duration: 50,
                    method: 'snap'
                }, function() {
                    this.setScale(1,1,1, {
                        duration: 50,
                        method: 'snap'
                    });
                }.bind(this));
            }
        }
    });

    module.exports = DigitBox;
});