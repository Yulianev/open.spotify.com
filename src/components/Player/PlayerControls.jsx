import { useState } from 'react'

import {
    MdOutlineShuffle,
    MdSkipPrevious,
    MdSkipNext,
    MdOutlinePauseCircleFilled,
    MdOutlinePlayCircleFilled,
    MdRepeat,
} from 'react-icons/md'

export default function PlayerControls() {
    const [playMusic, setPlayMusic] = useState(false)
    const changePlayMusic = () => {
        setPlayMusic(!playMusic)
    }
    const [shuffleMusic, setShuffleMusic] = useState(false)
    const changeShuffleMusic = () => {
        setShuffleMusic((prev) => !prev)
    }
    const [repeatMusic, setRepeatMusic] = useState(false)
    const changeRepeatMusic = () => {
        setRepeatMusic((prev) => !prev)
    }

    return (
        <div className="footer-player">
            <div className="player-buttons">
                <MdOutlineShuffle
                    onClick={changeShuffleMusic}
                    className={shuffleMusic ? 'active' : ''}
                    size="24px"
                />
                <MdSkipPrevious size="24px" />
                <div onClick={changePlayMusic}>
                    {playMusic ? (
                        <MdOutlinePauseCircleFilled
                            className="active"
                            size="36px"
                        />
                    ) : (
                        <MdOutlinePlayCircleFilled size="36px" />
                    )}
                </div>
                <MdSkipNext size="24px" />
                <MdRepeat
                    onClick={changeRepeatMusic}
                    className={repeatMusic ? 'active' : ''}
                    size="24px"
                />
            </div>
            <div className="main-player-slider">
                <p>0:00</p>
                <input
                    className="player-slider"
                    type="range"
                    name="player"
                    id="rangePlayer"
                    min="1"
                    max="100"
                    // onChange={handleChange}
                />
                <p>1:00</p>
            </div>
        </div>
    )
}
