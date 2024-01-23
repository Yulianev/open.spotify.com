import './MainWindow.css'
import Notification from './HeaderComponents/Notification'
import HeaderNavigation from './HeaderComponents/HeaderNav'
import Friends from './HeaderComponents/Friends'
import Profile from './HeaderComponents/Profile'

export default function MainHeader() {
    return (
        <header className="main_header">
            <HeaderNavigation />
            <div className="header_buttons">
                <Notification />
                <Friends />
                <Profile />
            </div>
        </header>
    )
}
