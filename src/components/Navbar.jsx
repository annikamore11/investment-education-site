import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import logoUrl from '../assets/logo/Sprout2.svg';
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { user, signOut } = useAuth()
  const navigate = useNavigate()

  const handleSignOut = async () => {
    await signOut()
    navigate('/')
  }

  return (
    <nav className="bg-zinc-950 z-50 fixed top-0 left-0 right-0">
      <div className="max-w-7xl mx-auto px-4 pt-2">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <img
                src={logoUrl}
                alt="Sprout logo"
                className="h-6 w-auto object-contain align-middle"
              />
              <span className="text-xl font-bold text-primary-100">InvestEd</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <Link to="/journey" className="text-primary-100 hover:text-primary-200 px-3 py-2 font-medium">
              Your Journey
            </Link>
            <Link to="/retirement" className="text-primary-100 hover:text-primary-200 px-3 py-2 font-medium">
              Learn More
            </Link>
            

            
            
            {user ? (
              <div className="flex items-center space-x-4">
                <Link to="/dashboard" className="btn-border">
                  Dashboard
                </Link>
                <button onClick={handleSignOut} className="btn-secondary">
                  Sign Out
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link to="/login" className="btn-border">
                  Login
                </Link>
                <Link to="/login?mode=signup" className="btn-secondary">
                  Sign Up
                </Link>
              </div>
              
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-primary-100 hover:text-primary-200 focus:outline-none"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
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
              className="block text-gray-100 hover:text-primary-200 hover:bg-gray-50 px-3 py-2 rounded-md font-medium"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            {user && (
              <Link
                to="/dashboard"
                className="block text-primary-100 hover:text-primary-200 hover:bg-gray-50 px-3 py-2 rounded-md font-medium"
                onClick={() => setIsOpen(false)}
              >
                Dashboard
              </Link>
            )}
            <Link
              to="/retirement"
              className="block text-primary-100 hover:text-primary-200 hover:bg-gray-50 px-3 py-2 rounded-md font-medium"
              onClick={() => setIsOpen(false)}
            >
              Investing 101
            </Link>
            
            {user ? (
              <>
                <button
                  onClick={() => {
                    handleSignOut()
                    setIsOpen(false)
                  }}
                  className="block w-full text-left text-primary-100 hover:text-primary-200 hover:bg-gray-50 px-3 py-2 rounded-md font-medium"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="block text-primary-100 hover:text-primary-200 hover:bg-gray-50 px-3 py-2 rounded-md font-medium"
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
