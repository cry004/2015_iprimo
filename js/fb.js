// function FB_APP(){
var PARAM_SCOPE = 'public_profile';
var FB_STATE = 'out'
var FB_ID = '0',
    FB_NAME = '0';
var scr, scr2;
var msg;
var purl;
var WEB_SITE = "http://iprimo.campaigns.com.tw/";
var sdid;

window.fbAsyncInit = function() {
    FB.init({
        appId: '818461608251558',
        xfbml: true,
        version: 'v2.4'
    });
};

(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {
        return;
    }
    js = d.createElement(s);
    js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));



function ui_post() {
    //GT("index" , "index","fb_post");
    FB.ui({
            method: 'feed',
            name: "【I-PRIMO求婚計畫！幸福情侶招募中！】",
            caption: '',
            description: '想給她一個浪漫的求婚驚喜卻不知如何構想?I-PRIMO精心打造的浪漫求婚等你來報名！開啟幸福新篇章，就從報名求婚活動開始!',
            link: WEB_SITE,
            picture: 'http://iprimo.campaigns.com.tw/img/fb.jpg'
        },
        function(response) {
            $('.shareVideo').fadeOut();
            if (response && response.post_id) {
               
            } else {
               
            }
        }
    );
}
