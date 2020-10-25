$(function() {
    $(".share").click(function() {
        $("#shareShow").toggle();
    })
    $(".serverLog img").mouseover(function() {
        $(this).css({"transform":"translateY(-20px)"},300);
        $(this).mouseleave(function() {
            $(this).css({"transform":"translateY(0px)"},300);
        })
    })
})