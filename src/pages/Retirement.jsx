import React from 'react'
import { Link } from 'react-router-dom'

const Retirement = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Save for Retirement
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            A few things to know as you begin to save for retirement
          </p>

          <div className="space-y-12">
            {/* Account Types Card */}
            <div className="border-l-4 border-primary-600 pl-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Types of Accounts
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                There are two main types of retirement accounts you can save money in
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-primary-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-primary-900 mb-4">
                    Employer Plan (401k or 403b)
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-primary-600 mr-2">•</span>
                      <span>These are only set up through your company</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-600 mr-2">•</span>
                      <span>Savings will come directly from your paycheck</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-600 mr-2">•</span>
                      <span>Your company will usually match (they will put money in as well)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-600 mr-2">•</span>
                      <span>Less flexible in terms of withdrawals and investment choices</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-primary-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-primary-900 mb-4">
                    IRA (Traditional IRA or Roth IRA)
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-primary-600 mr-2">•</span>
                      <span>These are yours and yours only - not set up through a company</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-600 mr-2">•</span>
                      <span>Savings will usually be transferred in from your bank account</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-600 mr-2">•</span>
                      <span>No company match</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-600 mr-2">•</span>
                      <span>More flexible in terms of investment choices and withdrawals</span>
                    </li>
                  </ul>
                </div>
              </div>

              <Link to="/account-types" className="text-primary-600 hover:text-primary-700 font-semibold">
                Learn more about account types →
              </Link>
            </div>

            {/* Types of Money Card */}
            <div className="border-l-4 border-green-600 pl-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Types of Money
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                There are two main types of money you can save in retirement accounts
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-green-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-green-900 mb-4">
                    Pre Tax (Traditional)
                  </h3>
                  <ul className="space-y-3 text-gray-700 mb-4">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span>Don't pay taxes now, pay them later</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span>Will only be taxed when you take the money out in retirement</span>
                    </li>
                  </ul>
                  <div className="bg-white rounded p-4">
                    <p className="font-semibold text-green-900 mb-2">Why should I save Pre Tax Money?</p>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">•</span>
                        <span>Your salary is very high</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">•</span>
                        <span>You are closer to retirement</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-green-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-green-900 mb-4">
                    Roth
                  </h3>
                  <ul className="space-y-3 text-gray-700 mb-4">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span>Pay taxes now, not in retirement</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span>When you take money out in retirement, you won't have to pay taxes on any of it</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span>All of the earnings will come out tax free</span>
                    </li>
                  </ul>
                  <div className="bg-white rounded p-4">
                    <p className="font-semibold text-green-900 mb-2">Why should I save Roth Money?</p>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">•</span>
                        <span>You are young</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">•</span>
                        <span>Your salary is low compared to what it might be later in your career</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Cards */}
            <div className="grid md:grid-cols-2 gap-6 pt-8">
              <Link to="/investment-options" className="card group">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary-600">
                  Next: Investment Options →
                </h3>
                <p className="text-gray-600">
                  Learn about target date funds, mutual funds, and ETFs
                </p>
              </Link>

              <Link to="/strategies" className="card group">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary-600">
                  Skip to: Can't-Miss Strategies →
                </h3>
                <p className="text-gray-600">
                  Essential strategies every investor should know
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Retirement
