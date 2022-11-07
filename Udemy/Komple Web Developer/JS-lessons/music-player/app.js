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
    let currentlyPlaying = musicPlayer.getSong();
    displaySong(currentlyPlaying);
})

play.addEventListener("click", () => {
    const isSongPlaying = container.classList.contains("playing");
    isSongPlaying ? pauseSong() : playSong();
})

prev.addEventListener("click", () => {
    prevSong();
})

next.addEventListener("click", () => {
    nextSong();
})

function displaySong(song) {
    title.innerText = song.getName();
    singer.innerText = song.singer;
    image.src = song.img;
    audio.src = song.file;
}

function pauseSong() {
    container.classList.remove("playing");
    play.classList = "fa-solid fa-play";
    audio.pause();
}

function playSong() {
    container.classList.add("playing");
    play.classList = "fa-solid fa-pause";
    audio.play();
}

function nextSong() {
    musicPlayer.next();
    currentlyPlaying = musicPlayer.getSong();
    displaySong(currentlyPlaying);
    audio.play();
}

function prevSong() {
    musicPlayer.previous();
    currentlyPlaying = musicPlayer.getSong();
    displaySong(currentlyPlaying);
    audio.play();
}
