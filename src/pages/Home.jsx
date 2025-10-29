import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Start Your Investment Journey Today
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-100">
              Learn the basics of saving and investing for retirement, one step at a time
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/retirement" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
                Get Started
              </Link>
              <Link to="/login" className="btn-secondary border-white text-white hover:bg-primary-700">
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need to Know
            </h2>
            <p className="text-xl text-gray-600">
              Simple, straightforward guidance for new investors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Link to="/account-types" className="card group">
              <div className="text-primary-600 mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary-600">Types of Accounts</h3>
              <p className="text-gray-600">
                Understand 401(k)s, IRAs, and which accounts are right for you
              </p>
            </Link>

            <Link to="/investment-options" className="card group">
              <div className="text-primary-600 mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary-600">Investment Options</h3>
              <p className="text-gray-600">
                Learn about target date funds, ETFs, mutual funds, and more
              </p>
            </Link>

            <Link to="/strategies" className="card group">
              <div className="text-primary-600 mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary-600">Can't-Miss Strategies</h3>
              <p className="text-gray-600">
                Essential strategies every investor should know and follow
              </p>
            </Link>

            <div className="card bg-primary-50 border-2 border-primary-200">
              <div className="text-primary-600 mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-primary-900">Tools Coming Soon</h3>
              <p className="text-primary-800">
                Compound interest calculators, retirement planners, and more
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Learning?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of young investors taking control of their financial future
          </p>
          <Link to="/retirement" className="btn-primary">
            Begin Your Journey
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home
