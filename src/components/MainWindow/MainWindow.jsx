import './MainWindow.css'
import MainHeader from './MainHeader'
import MainLastMusicList from './MainLastMusic'

export default function MainWindow() {
    return (
        <main className="main-window">
            <MainHeader />
            <MainLastMusicList />
        </main>
    )
}
