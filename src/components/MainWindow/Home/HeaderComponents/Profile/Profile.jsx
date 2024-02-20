import styles from './profile.module.css'
import { RiAccountCircleLine } from 'react-icons/ri'

export default function Profile() {
    return (
        <div className={styles.profile_button}>
            <RiAccountCircleLine size="20px" />
        </div>
    )
}
