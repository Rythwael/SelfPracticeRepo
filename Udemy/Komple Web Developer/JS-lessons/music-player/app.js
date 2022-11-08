const musicPlayer = new MusicPlayer(songs);

const container = document.querySelector(".container");
const image = document.querySelector("#music-image");
const title = document.querySelector("#music-title");
const singer = document.querySelector("#music-singer");
const prev = document.querySelector("#prev");
const play = document.querySelector("#play");
const next = document.querySelector("#next");
const audio = document.querySelector("#audio");
const duration = document.querySelector("#duration");
const currentTime = document.querySelector("#current-time");
const progressBar = document.querySelector("#progress-bar");
const volumeBar = document.querySelector("#volume-bar");
const volume = document.querySelector("#volume");
const listGroup = document.querySelector(".list-group");


window.addEventListener("load", () => {
    let currentlyPlaying = musicPlayer.getSong();
    displayPlaylist(songs);
    displaySong(currentlyPlaying);
})


play.addEventListener("click", () => {
    const isSongPlaying = container.classList.contains("playing");
    isSongPlaying ? pauseSong() : playSong();
})

prev.addEventListener("click", () => { prevSong(); })

next.addEventListener("click", () => { nextSong(); })

function displaySong(song) {
    title.innerText = song.getName();
    singer.innerText = song.singer;
    image.src = song.img;
    audio.src = song.file;
    activePlaylistSong(songs.indexOf(song))
}

function pauseSong() {
    container.classList.remove("playing");
    play.innerHTML = `<i class="fa-solid fa-play"></i>`;
    audio.pause();
}

function playSong() {
    container.classList.add("playing");
    play.innerHTML = `<i class="fa-solid fa-pause"></i>`;
    audio.play();
}

function nextSong() {
    musicPlayer.next();
    currentlyPlaying = musicPlayer.getSong();
    displaySong(currentlyPlaying);
    playSong();
}

function prevSong() {
    musicPlayer.previous();
    currentlyPlaying = musicPlayer.getSong();
    displaySong(currentlyPlaying);
    playSong();
}

const calculateTime = (fullDuration) => {
    const minute = Math.floor(fullDuration / 60);
    const seconds = Math.floor(fullDuration % 60);
    const updatedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`
    const calculatedTime = `${minute}:${updatedSeconds}`;
    return calculatedTime;

}

audio.addEventListener("loadedmetadata", () => {
    duration.textContent = calculateTime(audio.duration);
    progressBar.max = Math.floor(audio.duration);
})

audio.addEventListener("timeupdate", () => {
    progressBar.value = Math.floor(audio.currentTime);
    currentTime.textContent = calculateTime(progressBar.value);
})

progressBar.addEventListener("input", () => {
    currentTime.textContent = calculateTime(progressBar.value);
    audio.currentTime = progressBar.value;
})

volume.addEventListener("click", () => {
    if (volume.classList.contains("fa-volume-xmark")) {
        volume.classList = "fa-solid fa-volume-high";
        audio.muted = false;
    } else {
        volume.classList = "fa-solid fa-volume-xmark";
        audio.muted = true;
    }
})

volumeBar.addEventListener("input", () => {
    if (volumeBar.value > 0) {
        volume.classList = "fa-solid fa-volume-high";
    }
    if (volumeBar.value == 0) {
        volume.classList = "fa-solid fa-volume-xmark";
    }
    audio.volume = volumeBar.value / 100;
})

function displayPlaylist(songs) {
    for (let i = 0; i < songs.length; i++) {
        listGroup.insertAdjacentHTML("beforeend", `<li id="${i}" onclick="playListSong(this)"
        class="list-group-item d-flex justify-content-between align-items-center"
      >
        <span class="playlist-song-name">${songs[i].getName()}</span>
        <span id="song-${i}" class="badge bg-primary rounded pill"></span>
        <audio class="song-${i}" src="${songs[i].file}"></audio>`)

        let liAudioDuration = listGroup.querySelector(`#song-${i}`);
        let liAudioTag = listGroup.querySelector(`.song-${i}`);
        liAudioTag.addEventListener("loadeddata", () => {
            let songDuration = calculateTime(liAudioTag.duration);
            liAudioDuration.textContent = songDuration;
        })
    }

}

function playListSong(element) {
    let songIndex = element.id;
    musicPlayer.index = songIndex;
    displaySong(songs[songIndex]);
    activePlaylistSong(songIndex);
    playSong();
}

function activePlaylistSong(index) {
    for (let i = 0; i < musicPlayer.songs.length; i++) {
        if (index == i) {
            document.getElementById(`${i}`).classList.add("playing");
        } else {
            document.getElementById(`${i}`).classList.remove("playing");
        }
    }
}