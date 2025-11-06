import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import JourneyFlow from './pages/Journey/JourneyFlow'
import Retirement from './pages/investment_basics/Retirement'
import AccountTypes from './pages/investment_basics/AccountTypes'
import InvestmentOptions from './pages/investment_basics/InvestmentOptions'
import Strategies from './pages/investment_basics/Strategies'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="flex flex-col min-h-screen overflow-x-hidden w-full static-background">
          <Navbar />
          <main className="grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/journey" element={<JourneyFlow />} />
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