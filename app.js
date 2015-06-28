var playlist = new Playlist();

var hereComesTheSun = new Song ("Here comes the sun", "The Beatles", "2:54");
var walkingOnSunshine = new Song ("Walking on sunshine", "Katrina and the Waves", "3:43");

playlist.add(hereComesTheSun);
playlist.add(walkingOnSunshine);

var playListElement = document.getElementById("playlist");

playlist.renderInElement(playListElement);

var playButton = document.getElementById("play");
playButton.onclick = function(){
  playlist.play();
  playlist.renderInElement(playListElement);
  }

var nextButton = document.getElementById("next");
nextButton.onclick = function(){
  playlist.next();
  playlist.renderInElement(playListElement);
  }
var stopButton = document.getElementById("stop");
stopButton.onclick = function(){
  playlist.stop();
  playlist.renderInElement(playListElement);
  }