define(function(require, exports, module) {
    var UIElement           = require('core/UIElement');
    var UIComponent         = require('core/UIComponent');
    var DigitBox = require('views/ui/DigitBox');

    var CreditBox = UIComponent.extend({
        constructor:function(options) {
            options = options || {};

            this._callSuper(UIComponent, 'constructor', {
                // component properties (size, align, origin, etc)
            });

            _createUIElement.call(this);
            this.credit = 0;
            this.duration = 200;
        },
        add: function(n) {
            _(n).times(function(i){
                setTimeout(function() {
                    this.credit++;
                    redrawDigits.call(this);
                }.bind(this), this.duration*i);
            }.bind(this));
        },
        minus: function(n) {
            _(n).times(function(i){
                setTimeout(function() {
                    this.credit--;
                    redrawDigits.call(this);
                }.bind(this), this.duration*i);
            }.bind(this));
        }
    });

    function redrawDigits() {
        var creditStr = this.credit.toString();
        _(creditStr).each(function(num, i){
            console.log(num,i)
            if (i==creditStr.length-1) {
                this.digitBox0.setValue(num);
            } else if (i==creditStr.length-2) {
                this.digitBox1.setValue(num);
            }
        }.bind(this));
    }

    function _createUIElement() {
        this.digitBox0 = new DigitBox({
            content: "box",
            size: [100, 200],
            align: [0.55,0.5],
            origin: [0.5,0.5],
            style: {
                backgroundColor: 'red',
                color: 'white',
                fontSize: '100px'
            }
        });
        this.digitBox1 = new DigitBox({
            content: "box",
            size: [100, 200],
            align: [0.45,0.5],
            origin: [0.5,0.5],
            style: {
                backgroundColor: 'blue',
                color: 'white',
                fontSize: '100px'
            }
        });
        this._addChild(this.digitBox0);
        this._addChild(this.digitBox1);
    }

    module.exports = CreditBox;
});
