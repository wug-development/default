/**
 * Created by 武广 on 2016/3/13.
 */
(function($,window,document,undefined){
    $.fn.extend({
        "openMenu":function(options){
            if(!isOption(options))
                return this;
            var opt = $.extend({},defaults,options);
            var _this = $(this);
            var _thisfold = false;

            $(_this).animate({"left":"0%"},opt._istime).addClass("wg_boxshadow");
            if(opt._isbg)
                $("body").append("<div class='wg_bg'></div>");
            if(opt._isblur)
                $(opt._blurdiv).addClass("blurs");
            if(opt._isfold) {
                $(_this).children("div").show().off().on("click",function(){
                    var _tc = $(this).attr("class");
                    if(_tc === "wg_zk") {
                        $(_this).animate({"width": opt._SWidth}, opt._istime);
                        $(this).children("label").html(">>");
                        $("nav>span>span").css("display","block");
                        $(this).attr("class","wg_hl");
                        _thisfold = true;
                    }else{
                        $(_this).animate({"width": opt._MWidth}, opt._istime);
                        $(this).children("label").html("<<");
                        $("nav>span>span").hide();
                        $(this).attr("class","wg_zk");
                        _thisfold = false;
                    }
                });
            }
            $(_this).children("nav").children("span").hover(
                function () {
                    if(!_thisfold)
                        $(this).next().addClass("sel");
                },function () {
                    $(this).next().removeClass("sel").hover(
                        function () {
                            $(this).addClass("sel");
                        }, function () {
                            $(this).removeClass("sel");
                        }
                    );
                }
            );
        }
    });

    function isOption(options){
        return !options || (options && typeof options === "object" ? true : false);
    }

    var defaults = {
        _MWidth : "300px",
        _MHeight : "auto",
        _SWidth : "60px",
        _istime : 200,
        _isbg : false,
        _isblur : false,
        _blurdiv : ".btn", //模糊背景层
        _isfold : true
    }
}(jQuery,window,document));
