var initial = {
    initialFun: function() {

        animateFun.scrollFun();

    }
}
var animateFun = {
    navFun: function() {
        $('.navb').on('click', function() {
            if (!$('.sec_back').is(':animated')) {
                if ($(this).hasClass('navpre')) {
                    if (ydata > 0 && !$('.sec_back').is(':animated')) ydata--;

                } else if ($(this).hasClass('navnext')) {
                    if (ydata < 4 && !$('.sec_back').is(':animated')) ydata++;

                }
                animateFun.secAddclass(ydata);
            }
        });
        $('.navBox ul li').on('click', function() {
            if (ydata != $(this).index()) {
                ydata = $(this).index();
                //console.log(this.snum);
                animateFun.secAddclass(ydata);
            }
        });
    },
    scrollFun: function() {
        $.Wrapper.on('mousewheel', function(event) {
            if (!$('.sec_back').is(':animated')) {
                if (event.deltaY < 0) { //down
                    if (2 < ydata && ydata < 3) {
                        ydata = 3;
                    } else {
                        ydata++;
                        if (ydata > 4) {
                            ydata = 4;
                        } else {
                            animateFun.secAddclass(ydata);
                        }
                    }
                } else { // up
                    if (2 < ydata && ydata < 3) {
                        ydata = 2;
                    } else {
                        ydata--;
                        if (ydata < 0) {
                            ydata = 0;
                        } else {
                            animateFun.secAddclass(ydata);
                        }
                    }
                }
            }
            //console.log(ydata, event.deltaY);
        });
        animateFun.navFun();
        animateFun.clickFun();
    },
    secAddclass: function(snum) {
        var secw = $('.sec').eq(snum).position().left;
        var offset = (1600 - $.Window.width()) / 2;
        var gotoleft = secw * -1 - offset;

        $('.navBox ul li').eq(snum).css({
            'width': 0,
            'height': 0,
            'border-width': 9
        }).find('span').css({
            'color': '#000'
        }).parent().siblings().removeAttr('style').find('span').removeAttr('style');
        // console.log(this.gotoleft);
        if (snum == 0) {
            gotoleft = offset * -1;
            $('.navpre').hide().siblings().show();
        } else if (snum == 1) {

        } else if (snum == 4) {
            $('.navnext').hide().siblings().show();

        } else {
            $('.navpre').show().siblings().show();
        }
        aniScroll('.sec_back', 0);
        aniScroll('.sec_middle', 80);
        aniScroll('.sec_front', 140);

        function aniScroll(obj, del) {
            $(obj).stop();
            $(obj).stop().delay(del).animate({
                left: gotoleft
            }, 1000, "easeInOutCubic");
        }
    },
    clickFun: function() {
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
        $('.cover').on('mousewheel', function(event) {
            event.preventDefault();
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

$.Window.load(function() {
    PngFix.PngFixF($.Body);
    initial.initialFun();
});
