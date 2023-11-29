const progress= document.getElementById('progress');
const song= document.getElementById('song');
const ctrlIcon= document.getElementById('icon');
const song2= document.getElementById('song2');
song=false;


song.onloadedmetadata = function(){
progress.max=song.duration;
progress.value=song.currentTime;

}


function playPause(){
    if(ctrlIcon.classList.contains("fa-pause")){
        song.pause();
       ctrlIcon.classList.remove('fa-pause');
       ctrlIcon.classList.add('fa-play');
    }
    else{
        song.play();
        ctrlIcon.classList.add('fa-pause');
        ctrlIcon.classList.remove('fa-play');
        song=true;
    }
}
if(song.play()){
    setInterval(()=>{
        progress.value=song.currentTime;
    },500);
}
progress.onchange=function(){
    song.play();
    song.currentTime=progress.value;
    ctrlIcon.classList.add('fa-pause');
        ctrlIcon.classList.remove('fa-play');
}
// song 2

function nextSong() {
    // Stop the current song (song)
    song.pause();
    song.currentTime = 0;

    // Load and play song2
    song.src = 'Despacito_320(PagalWorld).mp3';
    song.load(); // Load the new source
    song.play(); // Start playing the new song

    // Update the progress bar for the new song
    song.onloadedmetadata = function() {
        progress.max = song.duration;
        progress.value = song.currentTime;
    };
    ctrlIcon.classList.add('fa-pause');
    ctrlIcon.classList.remove('fa-play');
}

//previousSong

function previousSong(){
    song.pause();
    song.currentTime = 0;

    song.src = 'Tera Yaar Hoon Main(PagalWorld.com.pe).mp3';
    song.load(); // Load the new source
    song.play(); // Start playing the new song

    // Update the progress bar for the new song
    song.onloadedmetadata = function() {
        progress.max = song.duration;
        progress.value = song.currentTime;
    };
    ctrlIcon.classList.add('fa-pause');
    ctrlIcon.classList.remove('fa-play');
}
