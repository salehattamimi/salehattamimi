import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom'
import Login from './auth/login'
import DashboardLayout from './dashboard/layout'
import Dashboard from './dashboard/page/dashboard'
import ProjectPage from './master/projects'

function ProtectedRoute() {
  const token = localStorage.getItem('token');

  return token ? <Outlet /> : <Navigate to="/login" replace />;
}


function App() {
  return (
    <div className="min-h-screen">
      <BrowserRouter>

        <Routes>
          <Route path="/login" element={<div><Login /></div>} />
          <Route path="/" element={<div><Navbar /><Hero /><About /><Projects /><Services /><Contact /><Footer /></div>} />

          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<DashboardLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="projects" element={<ProjectPage />} />
            </Route>
          </Route>
        </Routes>

      </BrowserRouter>

    </div>
  )
}

export default App
