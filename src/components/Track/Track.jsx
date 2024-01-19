class Track {
    constructor(name, artist, timeDelation) {
        this.name = name
        this.artist = artist
        this.timeDelation = timeDelation
    }

    present() {
        return 'i have a ' + this.name
    }
}

const myTrack = new Track('GIGA', 'CHAD', 200)
myTrack.present()
