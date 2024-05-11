import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import About from './pages/About'
import Home from './pages/Home'
import VideoList from './pages/VideoList'
import VideoPlayer from './pages/VideoPlayer'
import NavBar from './components/NavBar'


function App() {

  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/results/:resultTitle" element={<VideoList />}/>
          <Route path="/results/:resultTitle/:video" element={<VideoPlayer />}/>
          <Route path="/about" element={<About />}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
