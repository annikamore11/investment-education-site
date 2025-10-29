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
  const currentStep = currentStepIndex !== -1 ? currentStepIndex + 1 : 1

  return (
    <div className="bg-white shadow-md border-b border-gray-200 sticky top-0 z-40">
      <div className="max-w-4xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-sm font-semibold text-gray-600">Your Learning Journey</h3>
          <span className="text-sm font-bold text-primary-600">Step {currentStep} of {steps.length}</span>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
          <div 
            className="bg-accent-green-500 h-2 rounded-full transition-all duration-500"
            style={{ width: `${(currentStep / steps.length) * 100}%` }}
          ></div>
        </div>

        {/* Steps */}
        <div className="flex justify-between items-center">
          {steps.map((step, index) => {
            const isCompleted = index < currentStepIndex
            const isCurrent = index === currentStepIndex
            const isLocked = index > currentStepIndex

            return (
              <Link
                key={step.path}
                to={step.path}
                className={`flex flex-col items-center flex-1 ${
                  isLocked ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'
                }`}
                onClick={(e) => isLocked && e.preventDefault()}
              >
                <div className="flex items-center w-full">
                  {/* Circle */}
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all ${
                      isCompleted
                        ? 'bg-accent-green-500 text-white'
                        : isCurrent
                        ? 'bg-accent-purple-500 text-white ring-4 ring-accent-purple-200'
                        : 'bg-gray-200 text-gray-500'
                    }`}
                  >
                    {isCompleted ? (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      step.step
                    )}
                  </div>

                  {/* Connecting Line */}
                  {index < steps.length - 1 && (
                    <div
                      className={`flex-1 h-1 mx-2 transition-all ${
                        isCompleted ? 'bg-accent-green-500' : 'bg-gray-200'
                      }`}
                    ></div>
                  )}
                </div>

                {/* Label */}
                <span
                  className={`text-xs mt-2 text-center font-medium hidden sm:block ${
                    isCurrent ? 'text-accent-purple-600' : isCompleted ? 'text-accent-green-600' : 'text-gray-500'
                  }`}
                >
                  {step.name}
                </span>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default JourneyProgress