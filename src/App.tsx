import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './auth/login'

function App() {
  return (
    <div className="min-h-screen">
      <BrowserRouter>

        <Routes>
          <Route path="/login" element={<div><Login /></div>} />
          <Route path="/" element={<div><Navbar /><Hero /><About /><Projects /><Services /><Contact /><Footer /></div>} />
        </Routes>

      </BrowserRouter>

    </div>
  )
}

export default App
