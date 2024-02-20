/* eslint-disable react/prop-types */
import styles from './lastMusic.module.css'
import libraryPlaylistList from '../../../MusicList/PlaylistList.js'
import {
    MdOutlinePauseCircleFilled,
    MdOutlinePlayCircleFilled,
} from 'react-icons/md'
import PlayerControls from '../../../player/PlayerControls.jsx'
import { useState } from 'react'


const LastMusicItem = (props) => {
    const [hover, setHover] = useState(false);

    const handleMouseEnter = () => {
        setHover(true);
      }
    
      const handleMouseLeave = () => {
        setHover(false);
      }

    const { item } = props

    return (
        <div
            className={styles.last_music_item}
            key={libraryPlaylistList[item].id}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className={styles.last_music_article}>
                <img src={libraryPlaylistList[item].img} alt="" />
                <strong>
                    {libraryPlaylistList[item].title.charAt(0).toUpperCase() +
                        libraryPlaylistList[item].title.slice(1)}
                </strong>
            </div>
            <button style={
                hover
                ?
                {
                    opacity: '1', 
                    transition: '0.3s all'
                }
                : 
                {
                    opacity: '0',
                    transition: '0.3s all'
                }
            }>
                {PlayerControls.playMusic ? (
                    <MdOutlinePauseCircleFilled
                        size="56px"
                        className={styles.play_button}
                    />
                ) : (
                    <MdOutlinePlayCircleFilled
                        size="56px"
                        className={styles.play_button}
                    />
                )}
            </button>
        </div>
    )
}

export default LastMusicItem
