import styles from './lastMusic.module.css'
import LastMusicItem from './LastMusicItem'

export default function LastMusicGrid() {
    return (
        <div className={styles.last_music_grid}>
            <LastMusicItem item={0} />
            <LastMusicItem item={1} />
            <LastMusicItem item={2} />
        </div>
    )
}
