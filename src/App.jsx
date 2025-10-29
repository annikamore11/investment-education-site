import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Retirement from './pages/Retirement'
import AccountTypes from './pages/AccountTypes'
import InvestmentOptions from './pages/InvestmentOptions'
import Strategies from './pages/Strategies'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/retirement" element={<Retirement />} />
              <Route path="/account-types" element={<AccountTypes />} />
              <Route path="/investment-options" element={<InvestmentOptions />} />
              <Route path="/strategies" element={<Strategies />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  )
}

export default App
