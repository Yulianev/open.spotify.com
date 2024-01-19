import './Player.css'

import TrackDetails from './TrackDetails'
import PlayerControls from './PlayerControls'
import PlayerSettings from './PlayerSettings'

export default function Player() {
    return (
        <footer>
            <TrackDetails />
            <PlayerControls />
            <PlayerSettings />
        </footer>
    )
}
