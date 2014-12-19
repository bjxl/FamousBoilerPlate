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
            this.duration = 25;
        },
        add: function(n) {
            //this.setScale(1.2, 1.2, 1.2, {duration:1, method: 'snap'});
            _(n).times(function (i) {
                setTimeout(function () {
                    this.credit++;
                    redrawDigitsAdd.call(this);
                }.bind(this), this.duration * i);
            }.bind(this));
            //setTimeout(function(){
            ////    this.setScale(1, 1, 1, {duration: 1, method: 'snap'});
            ////}.bind(this), this.duration * n);
        },
        minus: function(n) {
            _(n).times(function(i){
                setTimeout(function() {
                    this.credit--;
                    if (this.credit<0){
                        this.credit=0;
                    }
                    redrawDigitsMinus.call(this);
                }.bind(this), this.duration*i);
            }.bind(this));
        }
    });

    function pad(n, width, z) {
        z = z || ' ';
        n = n + '';
        return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
    }

    function redrawDigitsAdd() {
        var creditStr = pad(this.credit, 5);
        console.log("*******",creditStr)
        _(creditStr).each(function(num, i){
            if (i==creditStr.length-1) {
                this.digitBox0.setValueAdd(num);
            } else if (i==creditStr.length-2) {
                this.digitBox1.setValueAdd(num);}
              else if (i==creditStr.length-3) {
                this.digitBox2.setValueAdd(num);}
              else if (i==creditStr.length-4) {
                this.digitBox3.setValueAdd(num);}
              else if (i==creditStr.length-5) {
                this.digitBox4.setValueAdd(num);
                }
        }.bind(this));
    }

    function redrawDigitsMinus() {
        var creditStr = pad(this.credit, 5);
        console.log("*******",creditStr)
        _(creditStr).each(function(num, i){
            if (i==creditStr.length-1) {
                this.digitBox0.setValueMinus(num);
            } else if (i==creditStr.length-2) {
                this.digitBox1.setValueMinus(num);}
            else if (i==creditStr.length-3) {
                this.digitBox2.setValueMinus(num);}
            else if (i==creditStr.length-4) {
                this.digitBox3.setValueMinus(num);}
            else if (i==creditStr.length-5) {
                this.digitBox4.setValueMinus(num);
            }
        }.bind(this));
    }

    function _createUIElement() {
        this.digitBox0 = new DigitBox({
            content: '0',
            size: [100, 200],
            align: [0.55,0.5],
            origin: [0.5,0.5],
            style: {
                backgroundColor: 'transparent',
                color: 'gold',
                fontSize: '100px'
            },
            animate:false
        });
        this.digitBox1 = new DigitBox({
            size: [100, 200],
            align: [0.5,0.5],
            origin: [0.5,0.5],
            style: {
                backgroundColor: 'transparent',
                color: 'gold',
                fontSize: '100px'
            },
            animate:true
        });
        this.digitBox2 = new DigitBox({
            size: [100, 200],
            align: [0.45, 0.5],
            origin: [0.5, 0.5],
            style: {
                backgroundColor: 'transparent',
                color: 'gold',
                fontSize: '100px'
            },
            animate:true
        });
        this.digitBox3 = new DigitBox({
            size: [100, 200],
            align: [0.4, 0.5],
            origin: [0.5, 0.5],
            style: {
                backgroundColor: 'transparent',
                color: 'gold',
                fontSize: '100px'
            },
            animate:true
        });
        this.digitBox4 = new DigitBox({
            size: [100, 200],
            align: [0.35, 0.5],
            origin: [0.5, 0.5],
            style: {
                backgroundColor: 'transparent',
                color: 'gold',
                fontSize: '100px'
            },
            animate:true
        });
        this._addChild(this.digitBox0);
        this._addChild(this.digitBox1);
        this._addChild(this.digitBox2);
        this._addChild(this.digitBox3);
        this._addChild(this.digitBox4);
    }

    module.exports = CreditBox;
});
