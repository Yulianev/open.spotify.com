import { useState } from 'react'
import styles from './friendsBtn.module.css'
import { BsPeople, BsPeopleFill } from 'react-icons/bs'

export default function Friends() {
    const [friendsBtn, setFriendsBtn] = useState(false)
    const handleFriendsBtn = () => {
        setFriendsBtn((prev) => !prev)
    }

    return (
        <div className={styles.friends_btn} onClick={handleFriendsBtn}>
            {friendsBtn ? (
                <BsPeopleFill size="20px" />
            ) : (
                <BsPeople size="20px" />
            )}
        </div>
    )
}
