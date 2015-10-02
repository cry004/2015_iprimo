var initial = {
    initialFun: function() {
        animateFun.sliderFun();
        $("#date").datepicker({
            changeMonth: true,
            changeYear: true,
            yearRange: '1980:2015'
        });
        init_address();
        $('.rbtn').eq(0).css({
            'background-position': 0 + ' ' + -36 + 'px'
        });
        $('.eventrule').eq(0).show();
        var scrollnow = 0;
        $.Window.scroll(function(){
            if(($(this).scrollTop()-$('.sec2').offset().top)>-100){
                if(($(this).scrollTop()-$('.sec3').offset().top)<0 && scrollnow != 1){
                    ga('send', 'pageview', '/propose');
                    scrollnow = 1;
                }
                if(($(this).scrollTop()-$('.sec3').offset().top)>0 && scrollnow != 0){
                    scrollnow = 0;
                }
            
            }else{
                if(($(this).scrollTop()-$('.sec1').offset().top)>0 && scrollnow != 0){
                    scrollnow = 0;
                }
            }
        });
    }
}
var animateFun = {
    slidepic: $('.pdpp').width(),
    navFun: function() {
        $('.nav:first-child,.logo').on('click', function() {
            $('html,body').stop().animate({
                scrollTop: 0
            }, 800, "easeInOutCubic");
        });
        $('.gotoevent').on('click', function() {
            $('html,body').stop().animate({
                scrollTop: $('.sec2').offset().top - 80
            }, 800, "easeInOutCubic");
        });
        $('.nav:nth-child(3)').on('click', function() {
            $('html,body').stop().animate({
                scrollTop: $('.sec3').offset().top - 80
            }, 800, "easeInOutCubic");
        });
        $('.gorule').on('click', function() {
            $('.cover').fadeIn().find('.eventRule').show();
        });


    },
    sliderFun: function() {
        var now = 0;
        checkNow(now);
        $('.pdnames').each(function() {
            $(this).find('li').eq(0).find('a').css({
                'color': '#fa6473'
            });
        });
        $('.arror').on('click', function() {
            if (!$('.pdpBox').is(':animated')) {
                if ($(this).hasClass('nextpd')) {
                    if (now < 2) {
                        $('.pdpBox').animate({
                            'left': "-=" + animateFun.slidepic
                        }, 800, "easeInOutCubic", function() {
                            // console.log(now);
                        });
                        now += 1;
                        checkNow(now)
                    }
                }

                if ($(this).hasClass('prepd')) {
                    if (now > 0) {
                        $('.pdpBox').animate({
                            'left': "+=" + animateFun.slidepic
                        }, 800, "easeInOutCubic", function() {
                            //console.log(now);
                        });
                        now -= 1;
                        checkNow(now)
                    }
                }
            }
        });

        function checkNow(now) {
            $('.pdnames').eq(now).find('li').off().on('click', function() {
                var index = $(this).index();
                $('.pdpp').eq(now).find('div').eq(index).fadeIn(400).siblings().fadeOut(200);
                $(this).find('a').css({
                    'color': '#fa6473'
                }).parent().siblings().find('a').removeAttr('style');
            });
            $('.pddis').eq(now).fadeIn(2000).siblings().hide();
            $('.pdnames').eq(now).fadeIn(1000).siblings().fadeOut(600);
            $('.nextpd').show();
            $('.prepd').show();
            if (now == 0) {
                $('.prepd').hide();
                $('.morepd a').attr({href:'//www.iprimo.tw/engagement/rings/',onclick:'GT("index", "clk", "/product_1");'});
            }
            if (now == 1) {
                $('.morepd a').attr({href:'//www.iprimo.tw/marriage/rings/',onclick:'GT("index", "clk", "/product_2");'});
            }
            if (now == 2) {
                $('.nextpd').hide();
                $('.morepd a').attr({href:'https://www.iprimo.tw/set/rings/',onclick:'GT("index", "clk", "/product_3");'});
            }
        }
    },
    clickFun: function() {
        animateFun.navFun();
        $('.bigpbox').on('click', function() {
            $('.cover').fadeIn().find('.videos').show();
            if (player != null) {
                player.destroy();
                player = null;
            }
            changeYoutube('AwAjNs_q6Qs');
        });
        $('.smallpbox1').on('click', function() {
            $('.cover').fadeIn().find('.videos').show();
            if (player != null) {
                player.destroy();
                player = null;
            }
            changeYoutube('rqced_eBNtU');
        });
        $('.smallpbox2').on('click', function() {
            $('.cover').fadeIn().find('.videos').show();
            if (player != null) {
                player.destroy();
                player = null;
            }
           changeYoutube('n1pBOeIBdhw');
        });
        function changeYoutube(id){
            player = new YT.Player('player', {
                height: '359',
                width: '639',
                videoId: id,
                playerVars: {
                    'autoplay': 1,
                    'rel': 0,
                    'showinfo': 0,
                    'egm': 0,
                    'wmode': 'transparent',
                    'modestbranding': 1,
                }
            });
        }
        $('.vclose').on('click', function() {
            if (player != null) {
                player.destroy();
                player = null;
            }
            $('.cover').fadeOut().find('.videos').removeAttr('style');
        });
        $('.sendData').on('click', function() {
            checkStep1form();
        });
        $('.rbtn').on('click', function() {
            var index = $(this).index();
            $(this).css({
                'background-position': 0 + ' ' + -35 + 'px'
            }).siblings().removeAttr('style');
            $('.eventrule').eq(index).show().siblings().hide();
        });
        $('.rclose').on('click', function() {
            $('.cover').fadeOut().find('.eventRule').removeAttr('style');
        });
        $('.sendOk').on('click', function() {
            $('.cover').fadeOut().find('.sendDone').removeAttr('style');
            $('html,body').stop().animate({
                scrollTop: $('.sec3').offset().top - 100
            }, 800, "easeInOutCubic");
            clearForm();
        });
    }
}


//*****去除 png圖 黑邊*****
var PngFix = {
    PngFixF: function(obj) {
        obj.find('img[src$=".png"],img[src$=".gif"]').each(function() {
            this.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled='true',sizingMethod='image',src='" + this.src + "')";
        });
    }
}

//var _resize = new resizeit();
//var _animateFun = new animateFun();
$.Body = $('body');
$.Window = $(window);
$.Wrapper = $.Body.find('div.wrapper');
    animateFun.clickFun();
$(document).ready(function() {  
    PngFix.PngFixF($.Body);
    initial.initialFun();
});
