jQuery(document).ready(function() {

    // 一鍵複製
    $(".js_copy").click(function() {
        $(this).parent().next().next().select();
        console.log($(this).parent().next().next());
        document.execCommand("copy");

        // 複製提示動畫
        $(this).toggleClass('active');
        setTimeout(function(){
            $(this).toggleClass('active');
        }, 250);
    });

    // 展開 & 收合
    $(".js_expand").click(function() {
        $(this).toggleClass('expand');
        
    });
});