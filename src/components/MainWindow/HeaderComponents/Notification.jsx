import { useState } from 'react'
import styles from './notification.module.css'
import { MdNotifications, MdNotificationsNone } from 'react-icons/md'

export default function Notification() {
    const [notify, setNotify] = useState(false)
    const handleNotify = () => {
        setNotify((prev) => !prev)
    }

    return (
        <div className={styles.notify_button} onClick={handleNotify}>
            {notify ? (
                <MdNotifications size="20px" />
            ) : (
                <MdNotificationsNone size="20px" />
            )}
        </div>
    )
}
