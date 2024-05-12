import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import About from './pages/About'
import Home from './pages/Home'
import VideoList from './pages/VideoList'
import VideoPlayer from './pages/VideoPlayer'
import NavBar from './components/NavBar'


function App() {
  const [videos, setVideos] = useState([]);
  const [searchedVideos, setSearchedVideos] = useState([])

  return (
    <>
      <Router>
        <NavBar setSearchedVideos={setSearchedVideos}/>
        <Routes>
          <Route path="/" element={<Home setSearchedVideos={setSearchedVideos} searchedVideos={searchedVideos} videos={videos} setVideos={setVideos}/>}/>
          <Route path="/results/:resultTitle" element={<VideoList />}/>
          <Route path="/results/:resultTitle/:video" element={<VideoPlayer />}/>
          <Route path="/about" element={<About />}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
