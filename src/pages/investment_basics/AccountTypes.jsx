import React from 'react'
import { Link } from 'react-router-dom'

const AccountTypes = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Types of Retirement Accounts
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            Understanding the difference between employer plans and individual retirement accounts
          </p>

          <div className="space-y-12">
            {/* Employer Plan */}
            <div className="bg-linear-to-br from-primary-50 to-primary-100 rounded-xl p-8">
              <div className="flex items-start mb-6">
                <div className="bg-primary-600 rounded-full p-3 mr-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">
                    Employer Plan (401k or 403b)
                  </h2>
                  <p className="text-lg text-gray-700">
                    Retirement accounts sponsored by your employer
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Key Features</h3>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-primary-600 font-bold mr-3 mt-1">✓</span>
                    <div>
                      <strong>Set up through your company:</strong> Your employer establishes and manages the plan
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 font-bold mr-3 mt-1">✓</span>
                    <div>
                      <strong>Automatic paycheck deductions:</strong> Money is automatically saved before you see it, making it easier to stay consistent
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 font-bold mr-3 mt-1">✓</span>
                    <div>
                      <strong>Company match:</strong> Many employers will match your contributions up to a certain percentage. This is free money!
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-600 font-bold mr-3 mt-1">⚠</span>
                    <div>
                      <strong>Less flexible:</strong> Limited investment choices and stricter withdrawal rules
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-primary-600 text-white rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2">Pro Tip</h3>
                <p>Always contribute at least enough to get your full company match. Otherwise, you're leaving free money on the table!</p>
              </div>
            </div>

            {/* IRA */}
            <div className="bg-linear-to-br from-green-50 to-green-100 rounded-xl p-8">
              <div className="flex items-start mb-6">
                <div className="bg-green-600 rounded-full p-3 mr-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">
                    IRA (Traditional IRA or Roth IRA)
                  </h2>
                  <p className="text-lg text-gray-700">
                    Individual retirement accounts you open yourself
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Key Features</h3>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-3 mt-1">✓</span>
                    <div>
                      <strong>Yours and yours only:</strong> Not tied to any employer, so you keep it even if you change jobs
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-3 mt-1">✓</span>
                    <div>
                      <strong>Manual transfers:</strong> You transfer money in from your bank account when you choose
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-3 mt-1">✓</span>
                    <div>
                      <strong>More flexibility:</strong> Greater control over investment choices and more flexible withdrawal options
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-600 font-bold mr-3 mt-1">⚠</span>
                    <div>
                      <strong>No company match:</strong> You're on your own for funding this account
                    </div>
                  </li>
                </ul>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4 border-2 border-green-300">
                  <h4 className="font-bold text-green-900 mb-2">Traditional IRA</h4>
                  <p className="text-sm text-gray-700">Tax deduction now, pay taxes in retirement</p>
                </div>
                <div className="bg-white rounded-lg p-4 border-2 border-green-300">
                  <h4 className="font-bold text-green-900 mb-2">Roth IRA</h4>
                  <p className="text-sm text-gray-700">Pay taxes now, tax-free withdrawals in retirement</p>
                </div>
              </div>
            </div>

            {/* Which is Right for You */}
            <div className="bg-gray-100 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Which Account is Right for You?
              </h2>
              <div className="space-y-4 text-gray-700">
                <p className="flex items-start">
                  <span className="text-primary-600 font-bold mr-3">1.</span>
                  <span><strong>If you have access to a 401(k) with a company match:</strong> Start there first to get the free money</span>
                </p>
                <p className="flex items-start">
                  <span className="text-primary-600 font-bold mr-3">2.</span>
                  <span><strong>After maxing out your match:</strong> Consider opening a Roth IRA for more flexibility and investment options</span>
                </p>
                <p className="flex items-start">
                  <span className="text-primary-600 font-bold mr-3">3.</span>
                  <span><strong>No access to a 401(k)?</strong> An IRA (Traditional or Roth) is a great place to start</span>
                </p>
              </div>
            </div>

            {/* Navigation */}
            <div className="grid md:grid-cols-2 gap-6 pt-8">
              <Link to="/retirement" className="card group">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary-600">
                  ← Back: Retirement Basics
                </h3>
                <p className="text-gray-600">
                  Review the fundamentals of retirement saving
                </p>
              </Link>

              <Link to="/investment-options" className="card group">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary-600">
                  Next: Investment Options →
                </h3>
                <p className="text-gray-600">
                  Learn what to invest in within your accounts
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AccountTypes
