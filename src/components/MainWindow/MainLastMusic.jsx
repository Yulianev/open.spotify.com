import { useState, useEffect } from 'react'
import styles from './mainLastMusicList.module.css'
import LastMusicGrid from './MainLastMusicComponents/LastMusicGrid'

export default function MainLastMusicList() {
    // Last heard music Playlists, Artists, Favorite
    const [currentTime, setCurrentTime] = useState('Доброе утро')

    const handleTime = () => {
        let hours = new Date().getHours()
        console.log(hours)
        if (hours < 12) {
            setCurrentTime('Доброе утро')
        } else if (hours >= 12 && hours < 18) {
            setCurrentTime('Добрый день')
        } else if (hours >= 18 && hours <= 24) {
            setCurrentTime('Добрый вечер')
        }
    }

    useEffect(() => {
        handleTime()
    }, [])

    return (
        <div>
            <div className={styles.welcome_msg}>{currentTime}</div>
            <LastMusicGrid />
        </div>
    )
}
