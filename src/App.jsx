import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { useState } from 'react'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Watch from './pages/Watch'
import VideoList from './pages/VideoList'
import About from './pages/About'
import WatchSearchedVideo from "./pages/WatchSearchedVideo"
import './App.css'

function App() {
  const [videos, setVideos] = useState([]);
  const [searchedVideos, setSearchedVideos] = useState([])
  
  return (
    <>
      <Router>
        <NavBar setSearchedVideos={setSearchedVideos}/>
        <Routes>
          <Route path="/" element={<Home videos={videos} setVideos={setVideos} />}/>
          <Route path="/watch/:title/:id" element={<Watch/>} />
          <Route path="/results/:resultTitle" element={<VideoList  searchedVideos={searchedVideos} />}/>
          <Route path="/results/:resultTitle/:videoId" element={<WatchSearchedVideo />}/>
          <Route path="/about" element={<About />}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
