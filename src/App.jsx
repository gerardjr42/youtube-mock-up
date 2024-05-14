import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { useState } from 'react'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Watch from './pages/Watch'
import VideoList from './pages/VideoList'
import VideoPlayer from './pages/VideoPlayer'
import About from './pages/About'
import './App.css'

function App() {
  const [videos, setVideos] = useState([]);

  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home videos={videos} setVideos={setVideos} />}/>
          <Route path="/watch/:title/:id" element={<Watch/>} />
          <Route path="/results/:resultTitle" element={<VideoList />}/>
          <Route path="/results/:resultTitle/:video" element={<VideoPlayer />}/>
          <Route path="/about" element={<About />}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
