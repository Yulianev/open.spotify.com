import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Aside from './components/Aside/Aside'
import Player from './components/Player/Player'
import MainWindow from './components/MainWindow/MainWindow'

function App() {
    return (
        <>
            <Aside />
            <MainWindow />
            <Player />
        </>
    )
}

export default App
