class MusicPlayer {
    constructor(songs) {
        this.songs = songs;
        this.index = 0;
    }

    getSong() {
        return this.songs[this.index];
    }

    next() {
        this.index++;
        if (this.index == this.songs.length) {
            this.index = 0;
        }
    }

    previous() {
        this.index--;
        if (this.index < 0) {
            this.index = this.songs.length - 1;
        }
    }
}