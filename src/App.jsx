import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import VideoPlayer from './pages/VideoPlayer'
import VideoList from './pages/VideoList'
import NavBar from './Components/NavBar'



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
