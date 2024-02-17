import './App.css'
import Aside from './components/Aside/Aside'
import Player from './components/Player/Player'
// import MainWindow from './components/MainWindow/MainWindow'
import { Routes, Route } from 'react-router-dom'
// import Search from './components/Pages/Search'
import routes from './components/routes/routes.jsx'

function App() {
    return (
        <>
            <Aside />
                <Routes>
                    {routes.map((route) => (
                        <Route 
                            key={route.path}
                            path={route.path} 
                            element={route.element}
                        />
                    ))}
                </Routes>
            <Player />
        </>
    )
}

export default App
