import AlbumLogo from '../../assets/img/album.jpg'
import { MdFavoriteBorder } from 'react-icons/md'

export default function TrackDetails() {
    return (
        <div className="footer-album">
            <img src={AlbumLogo} alt="" />
            <div className="album-article">
                <strong>Name</strong>
                <p>Artist</p>
            </div>
            <MdFavoriteBorder fill="white" size="24px" />
        </div>
    )
}
