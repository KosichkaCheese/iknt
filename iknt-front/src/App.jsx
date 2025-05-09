import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contacts from './pages/Contacts'
import Teachers from './pages/Teachers'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/contacts" element={<Contacts />} /> */}
          <Route path="/teachers" element={<Teachers />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  )
}

export default App