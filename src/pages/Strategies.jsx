import React from 'react'
import { Link } from 'react-router-dom'

const Strategies = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Can't-Miss Strategies
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            Essential strategies that everyone should know and follow
          </p>

          <div className="space-y-8">
            {/* Strategy 1 */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 md:p-8 border-l-4 border-green-600">
              <div className="flex items-start">
                <div className="bg-green-600 rounded-full p-2 mr-4 mt-1">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">
                    Have an Emergency Fund
                  </h2>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span>Always have 3-6 months worth of expenses saved in cash</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span>Make sure it is easily accessible - not invested in stocks</span>
                    </li>
                  </ul>
                  <div className="mt-4 bg-white rounded-lg p-4">
                    <p className="text-sm text-gray-700">
                      <strong>Why it matters:</strong> An emergency fund protects you from having to sell investments at a loss or go into debt when unexpected expenses arise.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Strategy 2 */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 md:p-8 border-l-4 border-blue-600">
              <div className="flex items-start">
                <div className="bg-blue-600 rounded-full p-2 mr-4 mt-1">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">
                    Always Get Your Company Match!
                  </h2>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Make sure you are receiving your company match in your 401(k) (Employer plan)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>If your company will match 5%, never do less than 5%. It's free money</span>
                    </li>
                  </ul>
                  <div className="mt-4 bg-blue-600 text-white rounded-lg p-4">
                    <p className="text-lg font-semibold">
                      💡 This is literally FREE MONEY! A company match is an instant 100% return on your investment.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Strategy 3 */}
            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-6 md:p-8 border-l-4 border-red-600">
              <div className="flex items-start">
                <div className="bg-red-600 rounded-full p-2 mr-4 mt-1">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">
                    Pay Down and Avoid Bad Debt
                  </h2>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">•</span>
                      <span>Any debt higher than 5 or 6% should be avoided or paid down as soon as possible</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">•</span>
                      <span>Avoid credit card debt at all costs!</span>
                    </li>
                  </ul>
                  <div className="mt-4 bg-white rounded-lg p-4">
                    <p className="text-sm text-gray-700">
                      <strong>Why it matters:</strong> High-interest debt grows faster than most investments can earn. Paying it off is like getting a guaranteed return equal to the interest rate.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Strategy 4 */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 md:p-8 border-l-4 border-purple-600">
              <div className="flex items-start">
                <div className="bg-purple-600 rounded-full p-2 mr-4 mt-1">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">
                    Don't Panic
                  </h2>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">•</span>
                      <span>You will see big swings in the stock market. Your money will go up and down. This is unavoidable</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">•</span>
                      <span>Keep in mind that the money you are saving for retirement will not be touched for 20-40 years and try not to panic</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">•</span>
                      <span>The market has never been down over a period of 20 years</span>
                    </li>
                  </ul>
                  <div className="mt-4 bg-purple-600 text-white rounded-lg p-4">
                    <p className="font-semibold">
                      📈 Long-term investing requires patience. Time in the market beats timing the market!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Strategy 5 */}
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl p-6 md:p-8 border-l-4 border-yellow-600">
              <div className="flex items-start">
                <div className="bg-yellow-600 rounded-full p-2 mr-4 mt-1">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">
                    Save 15% of Your Salary for Retirement
                  </h2>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-yellow-600 mr-2">•</span>
                      <span>If you have an emergency fund, try to get 15% of your annual salary saved for retirement</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-600 mr-2">•</span>
                      <span>Use a retirement account like an IRA or a 401(k). Your company match can count toward the 15%</span>
                    </li>
                  </ul>
                  <div className="mt-4 bg-white rounded-lg p-4">
                    <p className="text-sm text-gray-700">
                      <strong>Example:</strong> If you earn $50,000/year, aim to save $7,500 annually (including employer match). That's about $625/month or $288 per paycheck (if paid bi-weekly).
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Strategy 6 */}
            <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl p-6 md:p-8 border-l-4 border-teal-600">
              <div className="flex items-start">
                <div className="bg-teal-600 rounded-full p-2 mr-4 mt-1">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">
                    Use Your Resources
                  </h2>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2">•</span>
                      <span>If you have money at an institution like Fidelity, Vanguard, or Charles Schwab, give them a call</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2">•</span>
                      <span>They often have licensed advisors there to help you and answer questions</span>
                    </li>
                  </ul>
                  <div className="mt-4 bg-white rounded-lg p-4">
                    <p className="text-sm text-gray-700">
                      <strong>Remember:</strong> These services are often free for account holders. Don't be afraid to ask questions - that's what they're there for!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Summary */}
            <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white rounded-xl p-8 mt-12">
              <h2 className="text-2xl font-bold mb-4">Quick Summary</h2>
              <div className="grid md:grid-cols-2 gap-4 text-primary-50">
                <div className="flex items-center">
                  <span className="text-2xl mr-3">✓</span>
                  <span>Build emergency fund (3-6 months)</span>
                </div>
                <div className="flex items-center">
                  <span className="text-2xl mr-3">✓</span>
                  <span>Get full company match</span>
                </div>
                <div className="flex items-center">
                  <span className="text-2xl mr-3">✓</span>
                  <span>Avoid high-interest debt</span>
                </div>
                <div className="flex items-center">
                  <span className="text-2xl mr-3">✓</span>
                  <span>Stay invested during volatility</span>
                </div>
                <div className="flex items-center">
                  <span className="text-2xl mr-3">✓</span>
                  <span>Save 15% for retirement</span>
                </div>
                <div className="flex items-center">
                  <span className="text-2xl mr-3">✓</span>
                  <span>Use available resources</span>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="grid md:grid-cols-2 gap-6 pt-8">
              <Link to="/investment-options" className="card group">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary-600">
                  ← Back: Investment Options
                </h3>
                <p className="text-gray-600">
                  Review different ways to invest your money
                </p>
              </Link>

              <Link to="/" className="card group">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary-600">
                  Home →
                </h3>
                <p className="text-gray-600">
                  Return to the homepage
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Strategies
