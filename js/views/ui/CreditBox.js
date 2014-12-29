define(function(require, exports, module) {
    var UIElement           = require('core/UIElement');
    var UIComponent         = require('core/UIComponent');
    var DigitBox = require('views/ui/DigitBox');

    var CreditBox = UIComponent.extend({
        constructor:function(options) {
            options = options || {};
            this.size           = options.size          || [50, 100];
            this.origin         = options.origin        || [1, 1];
            this.align          = options.align         || [1, 1];
            this.xPos           = options.xPos          || -120;
            this.yPos           = options.yPos          || -50;
            this.zPos           = options.zPos          || 0;
            this.gap            = options.gap           || 40;

            this._callSuper(UIComponent, 'constructor', {
                // component properties (size, align, origin, etc)
            });

            _createUIElement.call(this);
            this.credit = 0;
            this.duration = 1;
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
        //console.log("*******",creditStr)
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
                this.digitBox4.setValueAdd(num);}
              else if (i==creditStr.length-6) {
                this.digitBox5.setValueAdd(num); }
              else if (i==creditStr.length-7) {
                this.digitBox6.setValueAdd(num);}
              else if (i==creditStr.length-8) {
                this.digitBox7.setValueAdd(num);
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
                this.digitBox4.setValueMinus(num);}
            else if (i==creditStr.length-6) {
                this.digitBox5.setValueMinus(num);}
            else if (i==creditStr.length-7) {
                this.digitBox6.setValueMinus(num);}
            else if (i==creditStr.length-8) {
                this.digitBox7.setValueMinus(num);
            }
        }.bind(this));
    }

    function _createUIElement() {
        this.digitBox0 = new DigitBox({
            content: '0',
            classes: ['digitbox'],
            size: this.size,
            align: this.align,
            origin: this.origin,
            position: [this.xPos, this.yPos, this.zPos],
            xPos: this.xPos, yPos: this.yPos,
            animate: false
        });
        this.digitBox1 = new DigitBox({
            classes: ['digitbox'],
            size: this.size,
            align: this.align,
            origin: this.origin,
            position: [this.xPos-this.gap, this.yPos, this.zPos],
            xPos: this.xPos-this.gap, yPos: this.yPos,
            animate:true
        });
        this.digitBox2 = new DigitBox({
            classes: ['digitbox'],
            size: this.size,
            align: this.align,
            origin: this.origin,
            position: [this.xPos-this.gap*2, this.yPos, this.zPos],
            xPos: this.xPos-this.gap*2, yPos: this.yPos,
            animate:true
        });
        this.digitBox3 = new DigitBox({
            classes: ['digitbox'],
            size: this.size,
            align: this.align,
            origin: this.origin,
            position: [this.xPos-this.gap*3, this.yPos, this.zPos],
            xPos: this.xPos-this.gap*3, yPos: this.yPos,
            animate:true
        });
        this.digitBox4 = new DigitBox({
            classes: ['digitbox'],
            size: this.size,
            align: this.align,
            origin: this.origin,
            position: [this.xPos-this.gap*4, this.yPos, this.zPos],
            xPos: this.xPos-this.gap*4, yPos: this.yPos,
            animate:true
        });
        this.digitBox5 = new DigitBox({
            classes: ['digitbox'],
            size: this.size,
            align: this.align,
            origin: this.origin,
            position: [this.xPos-this.gap*5, this.yPos, this.zPos],
            xPos: this.xPos-this.gap*5, yPos: this.yPos,
            animate:true
        });
        this.digitBox6 = new DigitBox({
            classes: ['digitbox'],
            size: this.size,
            align: this.align,
            origin: this.origin,
            position: [this.xPos-this.gap*6, this.yPos, this.zPos],
            xPos: this.xPos-this.gap*6, yPos: this.yPos,
            animate:true
        });
        this.digitBox7 = new DigitBox({
            classes: ['digitbox'],
            size: this.size,
            align: this.align,
            origin: this.origin,
            position: [this.xPos-this.gap*7, this.yPos, this.zPos],
            xPos: this.xPos-this.gap*7, yPos: this.yPos,
            animate:true
        });
        this._addChild(this.digitBox0);
        this._addChild(this.digitBox1);
        this._addChild(this.digitBox2);
        this._addChild(this.digitBox3);
        this._addChild(this.digitBox4);
        this._addChild(this.digitBox5);
        this._addChild(this.digitBox6);
        this._addChild(this.digitBox7);
    }

    module.exports = CreditBox;
});
