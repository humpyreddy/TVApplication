// Inject YouTube API script
var tag = document.createElement('script');
tag.src = "//www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var ChannelList = ["L7mfjvdnPno","QtMzV73NAgk","fKzVK1Di3Dw"];




// global variable for the player
var player;
var Width = '640';
var Height = '390';

// this function gets called when API is ready to use
function onYouTubePlayerAPIReady() {
  // create the global player from the specific iframe (#video)
  player = new window['YT'].Player('player', {
    height: Height,
    width: Width,
    videoId: "" + ChannelList[0],
    playerVars: {
                      'enablejsapi':1,
                      'autoplay': 0,		//1 Autoplay when page loads.
                      'controls': 0,
                      'showinfo': 1,
                      'modestbranding': 1,
                      'loop': 1,
                      'fs': 1,
                      'cc_load_policty': 0,
                      'iv_load_policy': 3
                  },   
     events: {
        'onReady': this.onPlayerReady,
        'onStateChange': this.onPlayerStateChange,

    }
});
}

function onPlayerReady(event) {
  
  var playButton = document.getElementById("playpause");
  var play = playButton.childNodes;

  playButton.addEventListener("click", function() {
    
    if(play[1].classList.contains('fa-play')){
      play[1].removeAttribute('class');
      player.playVideo();
      play[1].classList.add('fa','fa-pause');
    } else {
      play[1].removeAttribute('class');
      player.pauseVideo();
      play[1].classList.add('fa','fa-play')
    }

  });

    //mute unmute


    
          //implement volume control
          let vol = document.getElementById("volume")
  
          vol.oninput = function(){
            player.setVolume(this.value);
          }
    
        //next and previous

      let nextChannel = document.getElementById("next");
      let i=0;

        nextChannel.addEventListener("click", function () {

          console.log("hi")
          if (i !== ChannelList.length) {
              i++;
              player.loadVideoById(ChannelList[i]);
              player.playVideo();
          }
          else {
              i = 0;
              player.loadVideoById(ChannelList[i]);
              player.playVideo();
          }
      });

      let previousChannel = document.getElementById("previous")
      previousChannel.addEventListener("click", function () {
        if (i !== 0) {
            i--;
            player.loadVideoById(ChannelList[i]);
            player.playVideo();
        }
        else {
            i = ChannelList.length - 1;
            player.loadVideoById(ChannelList[i]);
            player.playVideo();
        }
    });
    
    
}

