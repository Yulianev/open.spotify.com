import { useState } from 'react'
import { FiPlus } from 'react-icons/fi'
// import { MdArrowRightAlt } from 'react-icons/md'
import { IoIosList, IoIosListBox } from 'react-icons/io'
import libraryPlaylistList from '../MusicList/PlaylistList'

export default function AsideLibrary() {
    const [window, windowChange] = useState(true)
    const changeVisionWindow = () => {
        windowChange((prev) => !prev)
    }

    return (
        <div className="aside-library">
            <div className="library-buttons">
                <button className="library-button" onClick={changeVisionWindow}>
                    {window ? (
                        <IoIosList size="32px" />
                    ) : (
                        <IoIosListBox size="32px" />
                    )}
                    Your Library
                </button>
                <button>
                    <FiPlus size="22px" />
                </button>
                {/* <div>
          <button>
            <MdArrowRightAlt size="32px" />
          </button>
        </div> */}
            </div>
            <ul className="library-type-filter">
                <li>Playlists</li>
                <li>Artists</li>
                <li>Albums</li>
            </ul>

            <div className="library-serach">
                <div>
                    <input type="search" name="" id="" />
                    <button>Recents</button>
                </div>
                <ul className="library-album-list">
                    {libraryPlaylistList.map((item) => (
                        <li className="library-album-item" key={item.id}>
                            <img src={item.img} alt="" />
                            <div className="library-album-article">
                                <strong>
                                    {item.title.charAt(0).toUpperCase() +
                                        item.title.slice(1)}
                                </strong>
                                <p>
                                    {item.type.charAt(0).toUpperCase() +
                                        item.type.slice(1)}{' '}
                                    • {item.creator}
                                </p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
