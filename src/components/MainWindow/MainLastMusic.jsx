import { useState, useEffect } from 'react'
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
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                padding: '16px',
                gap: '8px',
            }}
        >
            <div style={{ fontSize: '2rem', fontWeight: '500' }}>
                {currentTime}
            </div>
            <LastMusicGrid />
        </div>
    )
}
