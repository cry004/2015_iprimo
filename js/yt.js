 (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-68314926-1', 'auto');
  

function GT(category, action, label) {
    //console.log(category+";"+action+";"+label)
    ga('send','event',category,action,label, 1);  
}//


var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;

function onYouTubeIframeAPIReady() {
    // player = new YT.Player('player', {
    //     height: '359',
    //     width: '639',
    //     videoId: 'AwAjNs_q6Qs',
    //     playerVars: {
    //         'autoplay': 0,
    //         'rel': 0,
    //         'showinfo': 0,
    //         'egm': 0,
    //         'wmode': 'transparent',
    //         'modestbranding': 1,
    //     },
    //     events: {
    //         'onStateChange': onPlayerStateChange
    //     }
    // });
}

var done = false;


