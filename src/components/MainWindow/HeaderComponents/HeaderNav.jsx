import styles from './headerNav.module.css'
import { MdOutlineArrowBackIos,MdOutlineArrowForwardIos } from "react-icons/md";


export default function HeaderNavigation() {
    return <div className={styles.header_nav_buttons}>
        <MdOutlineArrowBackIos size='20px' className={styles.header_nav_button} />
        <MdOutlineArrowForwardIos size='20px' className={styles.header_nav_button} />
    </div>
}