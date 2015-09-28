// function GT(category, action, label) {
//     // console.log(category+";"+action+";"+label)
//   ga('send','event',category,action,label, 1);  
// }//


var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '359',
        width: '639',
        videoId: 'NEkH768b_Rg',
        playerVars: {
            'autoplay': 0,
            'rel': 0,
            'showinfo': 0,
            'egm': 0,
            'wmode': 'transparent',
            'modestbranding': 1,
        },
        events: {
            'onStateChange': onPlayerStateChange
        }
    });
}

var done = false;

function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING) {

    }
    if (event.data == YT.PlayerState.ENDED) {

    }
}
