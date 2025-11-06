import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const JourneyProgress = () => {
  const location = useLocation()

  const steps = [
    { name: 'Retirement Basics', path: '/retirement', step: 1 },
    { name: 'Account Types', path: '/account-types', step: 2 },
    { name: 'Investment Options', path: '/investment-options', step: 3 },
    { name: 'Strategies', path: '/strategies', step: 4 },
  ]

  const currentStepIndex = steps.findIndex(step => step.path === location.pathname)

  return (
    <div className="bg-white shadow-md border-b border-gray-200 flex justify-center">
      <div className="max-w-6xl mx-auto px-4">
        <nav className="flex space-x-2 overflow-x-auto">
          {steps.map((step, index) => {
            const isActive = index === currentStepIndex
            const isPast = index < currentStepIndex

            return (
              <Link
                key={step.path}
                to={step.path}
                className={`flex items-center space-x-2 px-6 py-4 border-b-4 transition-all whitespace-nowrap rounded-t-2xl ${
                  isActive
                    ? 'border-accent-purple-500 text-accent-purple-600 bg-accent-purple-50'
                    : isPast
                    ? 'border-accent-green-500 text-accent-green-600 hover:bg-accent-green-50'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                }`}
              >
                {/* Step Number Badge */}
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs ${
                    isActive
                      ? 'bg-accent-purple-500 text-white'
                      : isPast
                      ? 'bg-accent-green-500 text-white'
                      : 'bg-gray-300 text-gray-600'
                  }`}
                >
                  {isPast ? (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    step.step
                  )}
                </div>

                {/* Step Name */}
                <span className="font-semibold text-sm">{step.name}</span>
              </Link>
            )
          })}
        </nav>
      </div>
    </div>
  )
}

export default JourneyProgress