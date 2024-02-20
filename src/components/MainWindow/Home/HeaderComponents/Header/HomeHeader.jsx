import '../../../Home/HomeWindow.css'
import Notification from '../Notification/Notification'
import HeaderNavigation from './HeaderNav'
import Friends from '../Friends/Friends'
import Profile from '../Profile/Profile'

export default function HomeHeader() {
    return (
        <header className="home_header">
            <HeaderNavigation />
            <div className="header_buttons">
                <Notification />
                <Friends />
                <Profile />
            </div>
        </header>
    )
}
