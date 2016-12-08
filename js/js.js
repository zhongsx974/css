$(function(){
    var page = 1;
    var i = 7; //每版放7个图片
    //向后 按钮
    $("span.rightward").click(function(){    //绑定click事件
        var $parent = $(this).parents("div.designerContent");
        var $p_show = $parent.find("div.contentList");
        var $p_content = $parent.find("div.littleContent");
        var p_width = $p_content.width() ;
        var len = $p_show.find("li").length;
        var page_count = Math.floor(len / i) ;   //只要不是整数，就往xiao的方向取最大的整数
        if( !$p_show.is(":animated") ){    //判断“图片内容展示区域”是否正在处于动画
            if( page == page_count ){  //已经到最后一个版面了,如果再向后，必须跳转到第一个版面
                $p_show.animate({ left : '0px'}, "slow"); //通过改变left值，跳转到第一个版面
                page = 1;
            }else{
                $p_show.animate({ left : '-='+p_width }, "slow");  //通过改变left值，达到每次换一个版面
                page++;
            }
            $parent.find("span").eq((page-1)).addClass("current").siblings().removeClass("current");
        }
    });
    //往前 按钮
    $("span.aleft").click(function(){
        var $parent = $(this).parents("div.designerContent");
        var $p_show = $parent.find("div.contentList");
        var $p_content = $parent.find("div.littleContent");
        var p_width = $p_content.width() ;
        var len = $p_show.find("li").length;
        var page_count = Math.floor(len / i) ;
        if( !$p_show.is(":animated") ){
            if( page == 1 ){
                $p_show.animate({ left : '-='+p_width*(page_count-1) }, "slow");
                page = page_count;
            }else{
                $p_show.animate({ left : '+='+p_width }, "slow");
                page--;
            }
            $parent.find("span").eq((page-1)).addClass("current").siblings().removeClass("current");
        }
    });
});

//轮播jQury还写不写？？偷个懒，不写了吧。。。这是轮播图代码，你们可以试一下
/*
$(function(){
    var $imgrolls = $("#jnImageroll div a");
    $imgrolls.css("opacity","0.7");
    var len  = $imgrolls.length;
    var index = 0;
    var adTimer = null;
    $imgrolls.mouseover(function(){
        index = $imgrolls.index(this);
        showImg(index);
    }).eq(0).mouseover();
    //滑入 停止动画，滑出开始动画.
    $('#jnImageroll').hover(function(){
        if(adTimer){
            clearInterval(adTimer);
        }
    },function(){
        adTimer = setInterval(function(){
            showImg(index);
            index++;
            if(index==len){index=0;}
        } , 1000);
    }).trigger("mouseleave");
})
//显示不同的幻灯片
function showImg(index){
    var $rollobj = $("#jnImageroll");
    var $rolllist = $rollobj.find("div a");
    var newhref = $rolllist.eq(index).attr("href");
    $("#JS_imgWrap").attr("href",newhref)
        .find("img").eq(index).stop(true,true).fadeIn().siblings().fadeOut();
    $rolllist.removeClass("chos").css("opacity","0.7")
        .eq(index).addClass("chos").css("opacity","1");
}*/
