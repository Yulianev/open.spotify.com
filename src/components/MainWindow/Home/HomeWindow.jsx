import './HomeWindow.css'
import HomeHeader from './HeaderComponents/Header/HomeHeader'
import HomeLastMusicList from './HomeLastMusic'
import MusicShelf from './MusicShelf/MusicShelf'

export default function HomeWindow() {
    return (
        <main className="home-window">
            <HomeHeader />
            <HomeLastMusicList />
            <MusicShelf title="Music for you" />
            <MusicShelf title="Music for you" />
            <MusicShelf title="Music for you" />
            <MusicShelf title="Music for you" />
        </main>
    )
}
