import styles from './lastMusic.module.css'
import LastMusicItem from './LastMusicItem'
import libraryPlaylistList from '../../MusicList/PlaylistList'

export default function LastMusicGrid() {
    return (
        <div className={styles.last_music_grid}>
            <LastMusicItem item={0} />
            <LastMusicItem item={1} />
            <LastMusicItem item={2} />
            <LastMusicItem item={3} />
            <LastMusicItem item={4} />
            <LastMusicItem item={5} />
        </div>
    )
}
