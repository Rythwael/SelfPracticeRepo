class Song {
    constructor(title, singer, img, file) {
        this.title = title;
        this.singer = singer;
        this.img = img;
        this.file = file;
    }

    getName() {
        return this.title + " - " + this.singer;
    }
}

const songs = [
    new Song("Hallelujah", "Pentatonix", "img/hallelujah-pentatonix.jpeg", "mp3/hallelujah-pentatonix.mp3"),
    new Song("Akeboshi", "LiSA", "img/hallelujah-pentatonix.jpg", "mp3/hallelujah-pentatonix.mp3"),
    new Song("Dokuz Yıl Öncesine Mektup", "Şanışer", "img/dokuz-yil-oncesine-mektup.jpg", "mp3/dokuz-yil-oncesine-mektup.mp3")
]
