/**
 * Created by 武广 on 2016/3/12.
 */
;(function($,window,document,undefined){
    $.fn.extend({
        "showLayer" : function(options){
            if(!isValid(options))
                return this;
            var opt = $.extend({},defaults,options);
            if(opt._isbg) {
                var _lb = '<div class="tc_bgc"></div>';
                $(".tc_bgc").remove();
                $("body").append(_lb);
            }
            var _this = this;
            $(this).css({"left":opt._lw + "px","top": opt._lh + "px"}).show();
            $("body").css("overflow","hidden");
            if(opt._isblur)
                $(opt._blurdiv).addClass("blurs");
            $(this).animate({"left":(opt._lw - Number(opt._boxw.replace("px",""))/ 2) + "px","top":(opt._lh -  Number(opt._boxh.replace("px",""))/ 2) + "px", "width" : opt._boxw, "height" : opt._boxh}, opt._tm).addClass("addc");
            if($(opt._tbodyName)) $(opt._tbodyName).html(opt._tbody);
            if($(opt._titleName)) $(opt._titleName).html(opt._title);
            var _tim;
            if(opt._isTimingClose) _tim = setTimeout(function(){ hideLayer(); },opt._closeTime);
            $(opt._btnCloName).off().on("click",function(){
                hideLayer();
                clearTimeout(_tim);
                if(typeof opt._btnClose === "function") opt._btnClose();
            });
            $(opt._btnCanName).off().on("click",function(){
                hideLayer();
                clearTimeout(_tim);
                if(typeof opt._btnCancel === "function") opt._btnCancel();
            });
            $(opt._btnOKName).off().on("click",function(){
                hideLayer();
                clearTimeout(_tim);
                if(typeof opt._btnOK === "function") opt._btnOK();
            });
            function hideLayer(){
                $(_this).hide();
                $(_this).css({"left":opt._lw+"px","top":opt._lh+"px","width":"0px","height":"0px"}).removeClass("addc");
                if(opt._isblur)
                    $(opt._blurdiv).removeClass("blurs");
                if(opt._isbg)
                    $(".tc_bgc").remove();
                $("body").css("overflow","");
            }
        }
    });

    var defaults = {
        _lw : $(window).width()/2, //窗体宽度
        _lh : $(window).height()/2, //窗体高度
        _boxw : "350px",  //弹出框宽度
        _boxh : "200px",  //弹出框高度
        _tm : 300, //显示动画时间
        _isblur : true, //是否背景模糊
        _blurdiv: ".btn", //模糊背景层
        _isTimingClose : false, //是否定时关闭
        _closeTime : 2400, //定时关闭时间
        _isbg : true, //是否有遮罩层
        _titleName : "#tc_lay_tit", //图层标题ID
        _title : "", //图层标题
        _tbodyName : "#tc_lay_body", //图层内容ID
        _tbody : "", //图层内容
        _btnOKName :"#wg_ok_layer", //第一个按钮ID
        _btnOK : "", //第一个按钮事件
        _btnCanName :"#wg_cancel_layer", //第一个按钮ID
        _btnCancel : "", //第一个按钮事件
        _btnCloName :"#wg_close_layer", // “×”关闭ID
        _btnClose : ""  //“×”关闭ID事件
    }

    function isValid(options){
        return !options || (options && typeof options === "object") ? true : false;
    }
 }(jQuery,window,document));




