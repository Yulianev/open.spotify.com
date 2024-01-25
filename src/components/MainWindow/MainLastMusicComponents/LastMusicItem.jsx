import styles from './lastMusic.module.css'
import libraryPlaylistList from '../../MusicList/PlaylistList.js'
import {MdOutlinePauseCircleFilled, MdOutlinePlayCircleFilled} from 'react-icons/md'
import PlayerControls from '../../Player/PlayerControls.jsx'

const LastMusicItem = (props) => {
    // eslint-disable-next-line react/prop-types
    const { item } = props
    return (
        <div
            className={styles.last_music_item}
            key={libraryPlaylistList[item].id}
        >
            <div className={styles.last_music_article}>
                <img src={libraryPlaylistList[item].img} alt="" />
                <strong>
                    {libraryPlaylistList[item].title.charAt(0).toUpperCase() +
                        libraryPlaylistList[item].title.slice(1)}
                </strong>
            </div>
            <button>
                {PlayerControls.playMusic ? <MdOutlinePauseCircleFilled size="56px" className={styles.play_button}/> : <MdOutlinePlayCircleFilled size="56px" className={styles.play_button}/>}
            </button>
        </div>
    )
}

export default LastMusicItem
