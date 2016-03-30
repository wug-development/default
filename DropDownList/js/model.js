;(function($,window,document,undefined){
    var Downslide = function(el,opt){
        this.$element = el,
        this.defaults = {
            "elemen":"",
            "etime":0,
            "color":"#999",
            "fontSize":"12px",
            "width":"150px",
            "height":"auto",
            "bgColor":"#fff",
            "hovers":"#ccc",
            "active":"#ccc",
            "chidrenElem":"ul>li",
            "isborder":true,
            "bordercss":"1px solid #ccc",
            "clicks":function(){}
        },
        this.options = $.extend({},this.defaults,opt)
    }

    Downslide.prototype = {
        changeproperty : function(){
            $(this.options.elemen).css({
                "color":this.options.color,
                "fontSize":this.options.fontSize,
                "width":this.options.width,
                "height":this.options.height,
                "background-color":this.options.bgColor
            });
            var _this = this;
            this.$element.hover(
                function(){
                    $(_this.options.elemen).animate({"height":_this.options.height},_this.options.etime);
                    if(_this.options.isborder) { $(_this.options.elemen).css("border",_this.options.bordercss); }
                },
                function(){
                    $(_this.options.elemen).animate({"height":"0px"},_this.options.etime);
                    if(_this.options.isborder) {
                        setTimeout(function () {
                            $(_this.options.elemen).css("border", "0px");
                        }, _this.options.etime);
                    }
                }
            );
            $(_this.options.elemen).find(_this.options.chidrenElem).on("click",function(){
                if(typeof _this.options.clicks === "function"){
                    _this.options.clicks();
                }
            });
        }
    }

    $.fn.myPlugin = function(options){
        var downslide = new Downslide(this,options);
        downslide.changeproperty();
    }

}(jQuery,window,document));