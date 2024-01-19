import { useState } from 'react'

import {
    // MdRepeatOne,
    MdOutlineSmartDisplay,
    MdOutlineQueueMusic,
    MdDevicesOther,
    MdOutlineVolumeUp,
    MdOutlineVolumeOff,
    MdAirplay,
} from 'react-icons/md'

export default function PlayerSettings() {
    const [changeVolume, setChangeVolume] = useState(true)
    const handleVolume = () => {
        setChangeVolume(!changeVolume)
    }

    return (
        <div className="footer-controller">
            <MdOutlineSmartDisplay size="24px" />
            <MdOutlineQueueMusic size="24px" />
            <MdDevicesOther size="24px" />
            <div className="controller-volume" onClick={handleVolume}>
                {changeVolume ? (
                    <MdOutlineVolumeUp
                        className="controller-volume-on"
                        size="24px"
                    />
                ) : (
                    <MdOutlineVolumeOff
                        className="controller-volume-off"
                        size="24px"
                    />
                )}
            </div>
            <input
                className="sound-slider"
                type="range"
                name="player"
                id="rangePlayer"
                min="1"
                max="100"
            />

            <MdAirplay size="24px" />
        </div>
    )
}
