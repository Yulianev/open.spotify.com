import { useState, useEffect } from 'react'
import LastMusicGrid from './HomeLastMusicComponent/LastMusicGrid'

export default function HomeLastMusicList() {
    // Last heard music Playlists, Artists, Favorite
    const [currentTime, setCurrentTime] = useState('Доброе утро')

    const handleTime = () => {
        let hours = new Date().getHours()
        if (hours < 12) {
            setCurrentTime('Good morning')
        } else if (hours >= 12 && hours < 18) {
            setCurrentTime('Good afternoon')
        } else if (hours >= 18 && hours <= 24) {
            setCurrentTime('Good evening')
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
