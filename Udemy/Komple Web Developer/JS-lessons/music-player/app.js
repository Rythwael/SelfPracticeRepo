const musicPlayer = new MusicPlayer(songs);

const container = document.querySelector(".container");
const image = document.querySelector("#music-image");
const title = document.querySelector("#music-title");
const singer = document.querySelector("#music-singer");
const prev = document.querySelector("#prev");
const play = document.querySelector("#play");
const next = document.querySelector("#next");
const audio = document.querySelector("#audio");


window.addEventListener("load", () => {
    let currentlyPlaying = musicPlayer.getMusic();
    displaySong(currentlyPlaying);
})

play.addEventListener("click", () => {
    audio.play();
})

function displaySong(song) {
    title.innerText = song.getName();
    singer.innerText = song.singer;
    image.src = song.img;
    audio.src = song.file;
}
