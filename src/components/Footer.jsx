import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-zinc-950 text-primary-100 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">InvestEd</h3>
            <p className="text-gray-400">
              Helping young investors learn the basics of saving and investing for a secure financial future.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/retirement" className="text-gray-400 hover:text-white">
                  Retirement Basics
                </Link>
              </li>
              <li>
                <Link to="/account-types" className="text-gray-400 hover:text-white">
                  Account Types
                </Link>
              </li>
              <li>
                <Link to="/investment-options" className="text-gray-400 hover:text-white">
                  Investment Options
                </Link>
              </li>
              <li>
                <Link to="/strategies" className="text-gray-400 hover:text-white">
                  Strategies
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Disclaimer</h4>
            <p className="text-gray-400 text-sm">
              This website is for educational purposes only. Always consult with a qualified financial advisor before making investment decisions.
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} InvestEd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
