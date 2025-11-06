import React from 'react'
import { Link } from 'react-router-dom'
import JourneyProgress from '../../components/JourneyProgress'

const InvestmentOptions = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <JourneyProgress />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Investment Options
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            Your investments determine your risk and your return over time
          </p>

          <div className="space-y-12">
            {/* Target Date Fund */}
            <div className="bg-linear-to-br from-blue-50 to-blue-100 rounded-xl p-8">
              <div className="flex items-start mb-6">
                <div className="bg-blue-600 rounded-full p-3 mr-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">
                    Target Date Fund
                  </h2>
                  <p className="text-lg text-gray-700">
                    The "set it and forget it" option for retirement investing
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">What Is It?</h3>
                <p className="text-gray-700 mb-4">
                  A target date fund is designed specifically for retirement. You choose a fund with a date close to when you plan to retire (like "Target 2060" if you're retiring around 2060), and the fund automatically adjusts its investments as you get older.
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-3">✓</span>
                    <div>
                      <strong>Designed for retirement:</strong> Created with your retirement timeline in mind
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-3">✓</span>
                    <div>
                      <strong>Automatic adjustment:</strong> Aggressive when you're young with lots of stocks, gradually getting safer with more bonds as you approach retirement
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-3">✓</span>
                    <div>
                      <strong>Fully diversified:</strong> Includes US and foreign stocks, plus bonds for safety
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-3">✓</span>
                    <div>
                      <strong>Low cost:</strong> Typically has low fees, which means more money stays in your pocket
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-600 text-white rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2">Perfect For</h3>
                <p className="text-lg">Someone with little to no investment experience who wants a simple, hands-off approach</p>
              </div>
            </div>

            {/* Mutual Funds and ETFs */}
            <div className="bg-linear-to-br from-purple-50 to-purple-100 rounded-xl p-8">
              <div className="flex items-start mb-6">
                <div className="bg-purple-600 rounded-full p-3 mr-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">
                    Mutual Funds and ETFs
                  </h2>
                  <p className="text-lg text-gray-700">
                    Build your own investment strategy with more control
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">What Are They?</h3>
                <p className="text-gray-700 mb-4">
                  Mutual funds and ETFs (Exchange-Traded Funds) are baskets of investments that let you own hundreds or thousands of stocks and bonds in a single investment. Unlike target date funds, these don't automatically adjust over time.
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-purple-600 font-bold mr-3">✓</span>
                    <div>
                      <strong>Choose your own:</strong> More flexibility to pick investments that match your goals
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 font-bold mr-3">✓</span>
                    <div>
                      <strong>Static allocation:</strong> Will NOT automatically get safer as you get older (you manage this yourself)
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 font-bold mr-3">✓</span>
                    <div>
                      <strong>Index or active:</strong> You can try to mimic an index (like the S&P 500) for market returns, or choose actively managed funds that try to beat the market
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 font-bold mr-3">✓</span>
                    <div>
                      <strong>Customizable risk:</strong> You control how aggressive or conservative your portfolio is
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 font-bold mr-3">✓</span>
                    <div>
                      <strong>Low cost:</strong> Especially index funds and ETFs, which typically have very low fees
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6 mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Popular Index Options</h3>
                <div className="space-y-3 text-gray-700">
                  <div className="flex items-start">
                    <span className="text-purple-600 font-bold mr-3">•</span>
                    <div>
                      <strong>S&P 500 Index Fund:</strong> Tracks the 500 largest US companies
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-purple-600 font-bold mr-3">•</span>
                    <div>
                      <strong>Total Stock Market Index:</strong> Tracks the entire US stock market
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-purple-600 font-bold mr-3">•</span>
                    <div>
                      <strong>International Index Fund:</strong> Provides exposure to foreign companies
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-purple-600 font-bold mr-3">•</span>
                    <div>
                      <strong>Bond Index Fund:</strong> Adds stability and reduces risk
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-purple-600 text-white rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2">Perfect For</h3>
                <p className="text-lg">A more experienced investor who wants more control over their investment choices and is comfortable managing their own portfolio</p>
              </div>
            </div>

            {/* Comparison */}
            <div className="bg-gray-100 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Which Should You Choose?
              </h2>
              
              <div className="space-y-4 mb-6">
                <div className="bg-white rounded-lg p-6">
                  <h3 className="font-bold text-blue-900 mb-2 flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Choose a Target Date Fund if:
                  </h3>
                  <ul className="text-gray-700 space-y-2 ml-7">
                    <li>You're new to investing and want simplicity</li>
                    <li>You prefer a hands-off, automatic approach</li>
                    <li>You want everything in one investment</li>
                    <li>You don't want to worry about rebalancing</li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-6">
                  <h3 className="font-bold text-purple-900 mb-2 flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Choose Mutual Funds/ETFs if:
                  </h3>
                  <ul className="text-gray-700 space-y-2 ml-7">
                    <li>You have some investment knowledge</li>
                    <li>You want more control over your investments</li>
                    <li>You're comfortable rebalancing periodically</li>
                    <li>You want to customize your risk level</li>
                  </ul>
                </div>
              </div>

              <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 rounded">
                <p className="text-yellow-900">
                  <strong>Remember:</strong> Both options can work great for retirement savings. The most important thing is to start investing early and stay consistent!
                </p>
              </div>
            </div>

            {/* Navigation */}
            <div className="grid md:grid-cols-2 gap-6 pt-8">
              <Link to="/account-types" className="card group">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary-600">
                  ← Back: Account Types
                </h3>
                <p className="text-gray-600">
                  Review the different retirement account options
                </p>
              </Link>

              <Link to="/strategies" className="card group">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary-600">
                  Next: Can't-Miss Strategies →
                </h3>
                <p className="text-gray-600">
                  Learn the essential strategies for investment success
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InvestmentOptions
