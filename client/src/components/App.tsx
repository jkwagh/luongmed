import NavBar from './NavBar'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Events from './Events'
import Home from './Home'

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
        </Routes>
      </div>
    </Router>
    )
}

export default App
