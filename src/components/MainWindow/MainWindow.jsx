import './MainWindow.css'
import MainHeader from './MainHeader'
import MainLastMusicList from './MainLastMusic'
import MusicShelf from './MusicShelf/MusicShelf'

export default function MainWindow() {
    return (
        <main className="main-window">
            <MainHeader />
            <MainLastMusicList />
            <MusicShelf title="Music for you" />
            <MusicShelf title="Music for you" />
        </main>
    )
}
