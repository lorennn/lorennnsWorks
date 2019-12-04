jQuery(document).ready(function() {
    
    // header about me
    $('.js_about_me').click(function(){
        var windowH = $(window).height();
        console.log(windowH);
        if($('body').hasClass('atSec2')){
            $('body').animate({
                scrollTop: (Number(-windowH))
            },2000);

            // 回到sec1時header再變色
            setTimeout(function(){
                $('.sec1_header').removeClass('black');
            },500);
            $(this).html('about <br>me');
            $(this).attr('title','about me');
        }else{
            $('body').animate({
                scrollTop: windowH
            },800);
            $('.sec1_header').addClass('black');
            $(this).html('back to <br>top');
            $(this).attr('title','back to top');
        }
        $('body').toggleClass('atSec2');
    });

    // sec1 swiper
    var swiper = new Swiper('.swiper-container-sec1', {
        direction : 'horizontal',
        slidesPerView: 3,
        centeredSlides: true,
        spaceBetween : 8,
        autoplay : true,
        speed:1500,
        freeMode : true,
        mousewheel: false, // 失效
        keyboard : true,
        pagination: {
          el: '.swiper-pagination-sec1',
          clickable:true,
        },
        navigation: {
          nextEl: '.swiper-button-next-sec1',
          prevEl: '.swiper-button-prev-sec1',
        },
        observer:true,
        observeParents:true,
        breakpoints:{
            768:{ // 桌機
                mousewheel: true, // 失效
            },
            992:{ // 平板
                direction: 'vertical',
                slidesPerView:'auto',
                centeredSlides: false,
                mousewheel: false, // 失效
                spaceBetween : 20,
            },
        }
    });

    // UIUX FD 亂碼
    // 抽取陣列中隨機字符
    function randomText() {
        var texts = ["a", "b", "c", "d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","i","u","v","w","x","y","z","~","&","|","^","ç","@","]","[","{","}","ù","*","µ","¤","$","£","€","°",")","(","+","-","/","<",">","²","`","é","è","1","2","3","4","5","6","7","8","9","0"];
        // 隨機亂數 return Math.ceil( Math.random() * (max - min) + min);
        return texts[Math.ceil( Math.random() * 65)];
    }

    // 每個字改變,停止改變的速率皆不同（寫不出統一運作，先用暴力寫法
    setTimeout(function(){
        // text_1
        let interval_1 = setInterval(function(){
            $('.js_svg_text .text_1').text(randomText());
        }, 500);

        setTimeout(function(){
            clearTimeout(interval_1);
            $('.js_svg_text .text_1').text('U');
        }, 1500);

        // text_2
        let interval_2 = setInterval(function(){
            $('.js_svg_text .text_2').text(randomText());
        }, 80);

        setTimeout(function(){
            clearTimeout(interval_2);
            $('.js_svg_text .text_2').text('I');
        }, 500);

        // text_3
        let interval_3 = setInterval(function(){
            $('.js_svg_text .text_3').text(randomText());
        }, 100);

        setTimeout(function(){
            clearTimeout(interval_3);
            $('.js_svg_text .text_3').text('U');
        }, 2000);

        // text_4
        let interval_4 = setInterval(function(){
            $('.js_svg_text .text_4').text(randomText());
        }, 350);

        setTimeout(function(){
            clearTimeout(interval_4);
            $('.js_svg_text .text_4').text('X');
        }, 1700);


        // text_5
        let interval_5 = setInterval(function(){
            $('.js_svg_text .text_5').text(randomText());
        }, 350);

        setTimeout(function(){
            clearTimeout(interval_5);
            $('.js_svg_text .text_5').text('F');
        }, 3000);


        // text_6
        let interval_6 = setInterval(function(){
            $('.js_svg_text .text_6').text(randomText());
        }, 500);

        setTimeout(function(){
            clearTimeout(interval_6);
            $('.js_svg_text .text_6').text('D');
        }, 3200);
        
    }, 4000);

    // sec1 lightbox
    // 開啟彈窗
    $('.js_sec1_lightbox_btn').click(function(){
        let index = $(this).index();
        $('.js_sec1_lightbox').eq(index).toggleClass('active');
        $('.sec1').toggleClass('lightbox_open');
    });

    // 關閉彈窗
    $('.js_sec1_lightbox_wrap,.js_sec1_lightbox_close').click(function(){
        // console.log(':D');
        $('.js_sec1_lightbox').removeClass('active');
        $('.sec1').removeClass('lightbox_open');
    });
});