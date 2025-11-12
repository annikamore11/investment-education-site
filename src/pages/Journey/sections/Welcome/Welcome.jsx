import React from 'react'
import {  Shield, User, LogIn, Split, NotebookPen } from 'lucide-react'

const Welcome = ({ nextStep }) => {
  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* Header Section */}
      <div className="text-center mb-8">
        
        <h1 className="text-3xl md:text-4xl font-bold text-primary-100 mb-3">
          Welcome to Your Financial Journey
        </h1>
        
        <p className="text-lg text-primary-200 max-w-2xl mx-auto">
          We're here to help you take control of your financial future
        </p>
      </div>

      {/* Two Column Layout */}
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        {/* Column 1 - What to Expect */}
        <div className="bg-primary-100 rounded-xl shadow-xl p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            What to Expect
          </h2>
          
          <div className="space-y-5">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <User className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-base mb-1">Personalized to You</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Tailored education for your unique situation and financial goals.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-base mb-1">Safety First</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Build your emergency fund before investing for long-term security.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <Split className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-base mb-1">Smart Strategy</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Choose the right accounts and investment options for your timeline.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <NotebookPen className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-base mb-1">Complete Guidance</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  From opening accounts to setting up automated investing.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Column 2 - Journey Steps */}
        <div className="bg-primary-100 rounded-xl shadow-xl p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            Your Journey
          </h2>
          
          <div className="space-y-3">
            <div className="flex items-center space-x-3 bg-accent-green-100 rounded-lg p-3.5 hover:bg-accent-green-100 transition-colors">
              <div className="w-8 h-8 bg-accent-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white text-sm font-bold">3</span>
              </div>
              <span className="text-gray-700 text-sm font-medium">Plan emergency fund</span>
            </div>
            
            <div className="flex items-center space-x-3 bg-accent-green-100 rounded-lg p-3.5 hover:bg-accent-green-100 transition-colors">
              <div className="w-8 h-8 bg-accent-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white text-sm font-bold">4</span>
              </div>
              <span className="text-gray-700 text-sm font-medium">Choose retirement account</span>
            </div>

            <div className="flex items-center space-x-3 bg-accent-green-100 rounded-lg p-3.5 hover:bg-accent-green-100 transition-colors">
              <div className="w-8 h-8 bg-accent-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white text-sm font-bold">5</span>
              </div>
              <span className="text-gray-700 text-sm font-medium">Select investments</span>
            </div>

            <div className="flex items-center space-x-3 bg-accent-green-100 rounded-lg p-3.5 hover:bg-accent-green-100 transition-colors">
              <div className="w-8 h-8 bg-accent-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white text-sm font-bold">6</span>
              </div>
              <span className="text-gray-700 text-sm font-medium">Set up automation</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section - Time & CTA */}
      <div className="bg-primary-100 rounded-xl shadow-xl p-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Time Estimate with Icon */}
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-br from-accent-green-100 to-accent-green-200 rounded-xl flex items-center justify-center flex-shrink-0">
              <LogIn className="w-6 h-6 text-accent-green-600" />
            </div>
            <div className="text-left">
              <p className="text-base font-bold text-gray-900">
                Login or sign up to save progress
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex gap-3 w-full md:w-auto">
            <button
              onClick={() => window.history.back()}
              className="btn-journey-back"
            >
              ← Back
            </button>
            <button
              onClick={nextStep}
              className="flex-1 md:flex-none btn-journey-next"
            >
              Get Started →
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Welcome