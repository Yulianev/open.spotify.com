class LibraryPlaylistItem {
    constructor(id, type, title, creator, img) {
        this.id = id
        this.type = type
        this.title = title
        this.creator = creator
        this.img = img
    }
}
const libraryPlaylistList = [
    new LibraryPlaylistItem(
        1,
        'Album',
        'Abyss',
        'Pastel Ghost',
        'https://i.scdn.co/image/ab67616d00001e02070a284ad6bfc08feee2b2e7'
    ),
    new LibraryPlaylistItem(
        2,
        'Playlist',
        'Playlist 2',
        'Yulian',
        'https://i.scdn.co/image/ab67616d00001e02b17d34882944eaf0695153f2'
    ),
    new LibraryPlaylistItem(
        3,
        'Playlist',
        'Playlist 3',
        'Yulian',
        'https://i.scdn.co/image/ab67616d00001e02b17d34882944eaf0695153f2'
    ),
    new LibraryPlaylistItem(
        4,
        'Playlist',
        'Playlist 4',
        'Yulian',
        'https://i.scdn.co/image/ab67616d00001e02b17d34882944eaf0695153f2'
    ),
    new LibraryPlaylistItem(
        5,
        'Playlist',
        'Playlist 5',
        'Yulian',
        'https://i.scdn.co/image/ab67616d00001e02b17d34882944eaf0695153f2'
    ),
    new LibraryPlaylistItem(
        6,
        'Playlist',
        'Playlist 6',
        'Yulian',
        'https://i.scdn.co/image/ab67616d00001e02b17d34882944eaf0695153f2'
    ),
]

export default libraryPlaylistList
