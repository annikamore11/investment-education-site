import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { user, signOut } = useAuth()
  const navigate = useNavigate()

  const handleSignOut = async () => {
    await signOut()
    navigate('/')
  }

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-primary-600">InvestEd</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link to="/" className="text-gray-700 hover:text-primary-600 px-3 py-2 font-medium">
              Home
            </Link>
            <Link to="/retirement" className="text-gray-700 hover:text-primary-600 px-3 py-2 font-medium">
              Retirement Basics
            </Link>
            <Link to="/account-types" className="text-gray-700 hover:text-primary-600 px-3 py-2 font-medium">
              Account Types
            </Link>
            <Link to="/investment-options" className="text-gray-700 hover:text-primary-600 px-3 py-2 font-medium">
              Investment Options
            </Link>
            <Link to="/strategies" className="text-gray-700 hover:text-primary-600 px-3 py-2 font-medium">
              Strategies
            </Link>
            
            {user ? (
              <div className="flex items-center space-x-4">
                <span className="text-gray-700">Hello, {user.email}</span>
                <button onClick={handleSignOut} className="btn-secondary">
                  Sign Out
                </button>
              </div>
            ) : (
              <Link to="/login" className="btn-primary">
                Login
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-primary-600 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="block text-gray-700 hover:text-primary-600 hover:bg-gray-50 px-3 py-2 rounded-md font-medium"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/retirement"
              className="block text-gray-700 hover:text-primary-600 hover:bg-gray-50 px-3 py-2 rounded-md font-medium"
              onClick={() => setIsOpen(false)}
            >
              Retirement Basics
            </Link>
            <Link
              to="/account-types"
              className="block text-gray-700 hover:text-primary-600 hover:bg-gray-50 px-3 py-2 rounded-md font-medium"
              onClick={() => setIsOpen(false)}
            >
              Account Types
            </Link>
            <Link
              to="/investment-options"
              className="block text-gray-700 hover:text-primary-600 hover:bg-gray-50 px-3 py-2 rounded-md font-medium"
              onClick={() => setIsOpen(false)}
            >
              Investment Options
            </Link>
            <Link
              to="/strategies"
              className="block text-gray-700 hover:text-primary-600 hover:bg-gray-50 px-3 py-2 rounded-md font-medium"
              onClick={() => setIsOpen(false)}
            >
              Strategies
            </Link>
            
            {user ? (
              <>
                <div className="px-3 py-2 text-gray-700">Hello, {user.email}</div>
                <button
                  onClick={() => {
                    handleSignOut()
                    setIsOpen(false)
                  }}
                  className="block w-full text-left text-gray-700 hover:text-primary-600 hover:bg-gray-50 px-3 py-2 rounded-md font-medium"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="block text-gray-700 hover:text-primary-600 hover:bg-gray-50 px-3 py-2 rounded-md font-medium"
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
