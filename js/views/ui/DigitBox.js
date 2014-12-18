define(function(require, exports, module) {
    var UIElement           = require('core/UIElement');

    var DigitBox = UIElement.extend({
        constructor:function(options) {
            options = options || {};
            this._callSuper(UIElement, 'constructor', options);
            this.value = 0;

        },
        setValue: function(value) {

            if (value!=this.value) {
                //console.log("****", value , this.value)
                this.value = value;
                this.setContent('<div>'+this.value+'</div>');
                if (value == 9) {
                    //console.log('****', value, this.value)
                    this.setScale(2,2,1, {duration: 25, method: 'snap'});
                        //function() {
                        //this.setScale(1, 1, 1, {duration: 20, method: 'snap'});
                    //}.bind(this));
                }

            }
        }
    });

    module.exports = DigitBox;
});
