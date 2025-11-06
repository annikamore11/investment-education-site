import React from 'react'

const Welcome = ({ nextStep }) => {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
        {/* Hero Icon */}
        <div className="flex justify-center mb-6">
          <div className="bg-linear-to-br from-accent-purple-100 to-accent-purple-200 rounded-full p-6">
            <svg className="w-16 h-16 text-accent-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
            </svg>
          </div>
        </div>

        {/* Welcome Message */}
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-4">
          Welcome!
        </h1>
        
        <p className="text-xl text-center text-gray-600 mb-8">
          Let's open your first investment account together
        </p>

        <div className="bg-linear-to-r from-accent-purple-50 to-accent-green-50 rounded-xl p-6 mb-8">
          <p className="text-lg text-gray-700 mb-6">
            In the next <strong>10 minutes</strong>, we'll help you:
          </p>

          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="bg-accent-green-500 rounded-full p-1 mt-1">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Figure out your current budget</p>
                <p className="text-sm text-gray-600">This will help us recommend strategies and best practices tailored to you</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Figure out which account is best for YOU</p>
                <p className="text-sm text-gray-600">401(k), IRA, or Roth? We'll recommend the right one based on your situation.</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="bg-accent-green-500 rounded-full p-1 mt-1">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Choose the right investment</p>
                <p className="text-sm text-gray-600">Simple, safe options perfect for beginners. No complex decisions.</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="bg-accent-green-500 rounded-full p-1 mt-1">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Walk through opening it step-by-step</p>
                <p className="text-sm text-gray-600">We'll show you exactly what to do, with screenshots and helpful tips.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Promise */}
        <div className="bg-gray-50 rounded-xl p-6 mb-8">
          <p className="text-center text-gray-700">
            <strong>No jargon. No confusion.</strong> Just simple guidance from start to finish.
          </p>
          <p className="text-center text-sm text-gray-600 mt-2">
            Think of us as your friend who's already done this and is here to help.
          </p>
        </div>

        {/* CTA Button */}
        <button
          onClick={nextStep}
          className="w-full bg-accent-purple-600 hover:bg-accent-purple-700 text-white font-bold py-4 px-8 rounded-xl transition-all transform hover:scale-105 shadow-lg"
        >
          Let's Get Started →
        </button>

        {/* Trust badges */}
        <div className="mt-8 flex justify-center items-center space-x-4 text-xs text-gray-500">
          <div className="flex items-center space-x-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <span>Your info is private</span>
          </div>
          <div className="flex items-center space-x-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>100% free</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Welcome