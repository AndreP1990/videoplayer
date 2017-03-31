function PlayPause(btn, video){
    
    var vid = document.getElementById(video);
    if(vid.paused){
        
        vid.play();
        btn.innerHTML = "<img src = 'img/pause.svg'>";
        
    } else {
        
        vid.pause();
        btn.innerHTML = "<img src = 'img/play.svg'>";
        
    }
}