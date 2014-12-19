define(function(require, exports, module) {
    var UIElement           = require('core/UIElement');
    var Easing              = require('famous/transitions/Easing');

    var DigitBox = UIElement.extend({
        constructor:function(options) {
            this.options = options || {};
            this._callSuper(UIElement, 'constructor', this.options);
            this.value = 0;

        },
        setValueAdd: function(value) {

            if (value!=this.value) {
                //console.log("****", value , this.value)
                this.value = value;
                this.setContent('<div>'+this.value+'</div>');
                if (this.options.animate) {
                    //console.log('****', value, this.value)
                    //this.setStyle({
                    //    color: 'red'
                    //})
                    //this.setScale(1.2,1.2,1, {duration: 0.11, curve:'easeInOut'},function() {
                    //    this.setScale(1, 1, 1, {duration: 0.1, method: 'snap'});
                    //}.bind(this));
                    //this.setOpacity(0.2, {duration: 1, curve:'easeInOut'},function() {
                    //    this.setOpacity(1, {duration: 1, method: 'snap'});
                    //    this.setStyle({
                    //        color: this.options.style.color
                    //    })
                    //}.bind(this));
                    this.setPosition(0,-30,0, {
                        duration: 0.1, curve:Easing.inOutElastic()},function() {
                        this.setPosition(0, 0, 0, {duration: 0.1, curve:Easing.inOutElastic()})
                    }.bind(this));
                }

            }
        },

        setValueMinus: function(value) {

            if (value != this.value) {
                //console.log("****", value , this.value)
                this.value = value;
                this.setContent('<div>' + this.value + '</div>');
            }
        }
    });

    module.exports = DigitBox;
});
