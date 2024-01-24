import styles from './lastMusic.module.css'
import libraryPlaylistList from '../../MusicList/PlaylistList.js'
const LastMusicItem = (props) => {
    const { item } = props
    console.log(item.img)
    return (
        <div
            className={styles.last_music_item}
            key={libraryPlaylistList[item].id}
        >
            <img src={libraryPlaylistList[item].img} alt="" />
            <div className={styles.last_music_article}>
                <strong>
                    {libraryPlaylistList[item].title.charAt(0).toUpperCase() +
                        libraryPlaylistList[item].title.slice(1)}
                </strong>
                <p>
                    {libraryPlaylistList[item].type.charAt(0).toUpperCase() +
                        libraryPlaylistList[item].type.slice(1)}{' '}
                    • {libraryPlaylistList[item].creator}
                </p>
            </div>
        </div>
    )
}

export default LastMusicItem
