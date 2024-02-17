// import React from 'react'
import MusicShelfItem from './MusicShelfItem'
import libraryPlaylistList from '../../MusicList/PlaylistList'
import PropTypes from 'prop-types'

export default function MusicShelf(props) {
    const shelfList = libraryPlaylistList.map((item, index) => {
        if (index < 4) {
            return (
                <MusicShelfItem
                    key={item.id}
                    title={item.title}
                    creator={item.creator}
                    img={item.img}
                />
            )
        }
    })
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                padding: '16px',
                gap: '8px',
            }}
        >
            <h2 style={{ fontSize: '2rem', fontWeight: '500' }}>
                {props.title}
            </h2>
            <div
                style={{
                    display: 'grid',
                    gridTemplate: '1fr / 1fr 1fr 1fr 1fr',
                    gap: '24px',
                    // placeItems: 'center',
                }}
            >
                {shelfList}
            </div>
        </div>
    )
}

MusicShelf.propTypes = {
    title: PropTypes.string
}