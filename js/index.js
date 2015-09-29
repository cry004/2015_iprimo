var initial = {
    initialFun: function() {
        animateFun.sliderFun();
        $("#date").datepicker();
        init_address();
        $('.rbtn').eq(0).css({
            'background-position': 0 + ' ' + -35 + 'px'
        });
        $('.eventrule').eq(0).show();

    }
}
var animateFun = {
    slidepic: $('.pdpp').width(),
    navFun: function() {
        $('.nav:first-child').on('click', function() {
            $('html,body').stop().animate({
                scrollTop: 0
            }, 800, "easeInOutCubic");
        });
        $('.gotoevent').on('click', function() {
            $('html,body').stop().animate({
                scrollTop: $('.sec2').offset().top - 100
            }, 800, "easeInOutCubic");
        });
        $('.nav:nth-child(3)').on('click', function() {
            $('html,body').stop().animate({
                scrollTop: $('.sec3').offset().top - 100
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
                            console.log(now);
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
                            console.log(now);
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
            }
            if (now == 2) {
                $('.nextpd').hide();
            }
        }
    },
    clickFun: function() {
        animateFun.navFun();
        $('.bigpbox').on('click', function() {
            $('.cover').fadeIn().find('.videos').show();
            player.loadVideoById('qZszKP4Qwbg');
        });
        $('.smallpbox1').on('click', function() {
            $('.cover').fadeIn().find('.videos').show();
            player.loadVideoById('bvC_0foemLY');
        });
        $('.smallpbox2').on('click', function() {
            $('.cover').fadeIn().find('.videos').show();
            player.loadVideoById('bMpFmHSgC4Q');
        });
        $('.vclose').on('click', function() {
            player.stopVideo(0);
            player.seekTo(0);
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
$.Window.load(function() {
    PngFix.PngFixF($.Body);
    initial.initialFun();
});
