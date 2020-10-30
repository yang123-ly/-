$(function(){
    $("div.contents>div.right_nav>.paging>div>span").parent().prevAll().css("cursor","not-allowed").attr("class","pag");
    $("div.contents>div.right_nav>.paging>div>span").click(function(){
        $(this).attr("class","paging_s").siblings("span").removeAttr("class");
        var index=$(this).index();
        var fa=$(this).parent().length;
        $("div.contents>div.right_nav>.member_content>ul").eq(index).attr("class","uls").siblings("ul").removeAttr("class");
        if(index==0){
            $(this).parent().prevAll().css("cursor","not-allowed").attr("class","pag");
            $(this).parent().nextAll().css("cursor","pointer").removeAttr("class","pag");
        }else if(index==fa){
            $(this).parent().prevAll().css("cursor","pointer").removeAttr("class","pag");
            $(this).parent().nextAll().css("cursor","not-allowed").attr("class","pag");
        }
    })
    $("#preva").click(function(){
        $("div.contents>div.right_nav>.paging>div>span").eq(0).attr("class","paging_s").siblings("span").removeAttr("class");
        $("div.contents>div.right_nav>.member_content>ul").eq(0).attr("class","uls").siblings("ul").removeAttr("class");
    })
    $("#prev").click(function(){
        var fa=$("div.contents>div.right_nav>.paging>div").length;
        var fas=$("div.contents>div.right_nav>.paging>div>span");
        var index;
        for(var i=0;i<=fa;i++){
            if(fas.hasClass("paging_s")){
                index=fas.index();
            }
        }
        console.log(index);
        $("div.contents>div.right_nav>.paging>div>span").eq(index).attr("class","paging_s").siblings("span").removeAttr("class");
        $("div.contents>div.right_nav>.member_content>ul").eq(index).attr("class","uls").siblings("ul").removeAttr("class");
    })
    $("#preva").click(function(){
        $("div.contents>div.right_nav>.paging>div>span").eq(0).attr("class","paging_s").siblings("span").removeAttr("class");
        $("div.contents>div.right_nav>.member_content>ul").eq(0).attr("class","uls").siblings("ul").removeAttr("class");
    })
    $("#prev").click(function(){
        var fa=$("div.contents>div.right_nav>.paging>div").length;
        var fas=$("div.contents>div.right_nav>.paging>div>span");
        var index;
        for(var i=0;i<=fa;i++){
            if(fas.hasClass("paging_s")){
                index=fas.index();
            }
        }
        console.log(index);
        $("div.contents>div.right_nav>.paging>div>span").eq(index).attr("class","paging_s").siblings("span").removeAttr("class");
        $("div.contents>div.right_nav>.member_content>ul").eq(index).attr("class","uls").siblings("ul").removeAttr("class");
    })
    $("#nexta").click(function(){
        var fa=$("div.contents>div.right_nav>.paging>div").length;
        console.log(fa);
        $("div.contents>div.right_nav>.paging>div>span").eq(fa).attr("class","paging_s").siblings("span").removeAttr("class");
        $("div.contents>div.right_nav>.member_content>ul").eq(fa).attr("class","uls").siblings("ul").removeAttr("class");
    })
    $("#next").click(function(){
        var fa=$("div.contents>div.right_nav>.paging>div").length;
        var fas=$("div.contents>div.right_nav>.paging>div>span");
        var index;
        for(var i=0;i<=fa;i++){
            if(fas.hasClass("paging_s")){
                index=fas.index()+1;
            }
        }
        console.log(index);
        $("div.contents>div.right_nav>.paging>div>span").eq(index).attr("class","paging_s").siblings("span").removeAttr("class");
        $("div.contents>div.right_nav>.member_content>ul").eq(index).attr("class","uls").siblings("ul").removeAttr("class");
    })

    console.log($(".message>div>textarea").length);
    $(".message>div>textarea").keyup(function(){
        $("#num").html($(this).val().length);
    })
})

//移动端
$(function(){
    var num=$(".moblie_paging>div>span").length;
    console.log(num);
    var newnum=$(".moblie_paging>div>span");
    var data;
    console.log(newnum);
    for(var i=0;i<num;i++){
        if(newnum.eq(i).attr("class")=="pag"){
            data=i;
        }
    }
    console.log(data);
    $(".moblie_paging>div>span").click(function(){
        var index=$(this).index()
        data=index;
        $(this).attr("class","pag").siblings("span").removeAttr("class");
        if(data==0 || data==num+1){
            console.log(index);
            if(data==0){
                $(".moblie_paging>span:first-child").attr("class","bg").siblings("span").removeAttr("class");
            }
            if(data==num+1){
                $(".moblie_paging>span:last-child").attr("class","bg").siblings("span").removeAttr("class");
            }
        }
        if(index>1 || index<11){
            if(index>1){
                for(var i=1;i<9;i++){
                    $(".moblie_paging>div>span").eq(i).css("display","none");
                    $(".moblie_paging>div>p").eq(0).css("display","inline-block");
                    $(".moblie_paging>div>p").eq(1).css("display","inline-block");
                }
                // if(index<11){
                //     $(".moblie_paging>div>span").eq(1).nextAll().css("display","none");
                //     $(".moblie_paging>div>span").eq(11).css("display","inline-block");
                //     $(this).css("display","inline-block").prev().css("display","inline-block").end().next().css("display","inline-block");
                // }
            }
        }
    })
})