

import React from 'react'

const JourneyProgressBar = ({ currentStep, totalSteps, onStepClick }) => {
  const steps = [
    { number: 1, name: 'About You', icon: '👤' },
    { number: 2, name: 'Your Goals', icon: '🎯' },
    { number: 3, name: 'Next Step 3', icon: '📋' }, // Placeholder
    { number: 4, name: 'Next Step 4', icon: '✅' }, // Placeholder
  ]

  // Only show the steps we've defined
  const activeSteps = steps.slice(0, totalSteps)

  return (
    <div className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4 py-4">
        {/* Top section: Title and step counter */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-gray-900">Your Investment Journey</h2>
          <span className="text-sm font-semibold text-accent-purple-600">
            Step {currentStep} of {totalSteps}
          </span>
        </div>

        {/* Progress bar */}
        <div className="relative mb-4">
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-accent-purple-500 h-2 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Step indicators */}
        <div className="flex justify-between items-start">
          {activeSteps.map((step, index) => {
            const isActive = step.number === currentStep
            const isCompleted = step.number < currentStep
            const isUpcoming = step.number > currentStep

            return (
              <button
                key={step.number}
                onClick={() => step.number <= currentStep && onStepClick(step.number)}
                disabled={step.number > currentStep}
                className={`flex flex-col items-center space-y-1 transition-all ${
                  step.number <= currentStep ? 'cursor-pointer' : 'cursor-not-allowed'
                }`}
              >
                {/* Step circle */}
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all ${
                    isActive
                      ? 'bg-accent-purple-500 text-white ring-4 ring-accent-purple-200 scale-110'
                      : isCompleted
                      ? 'bg-accent-green-500 text-white hover:scale-105'
                      : 'bg-gray-300 text-gray-600'
                  }`}
                >
                  {isCompleted ? (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <span className="text-lg">{step.icon}</span>
                  )}
                </div>

                {/* Step name - hide on mobile for steps that aren't current */}
                <span
                  className={`text-xs font-semibold text-center transition-all ${
                    isActive
                      ? 'text-accent-purple-600'
                      : isCompleted
                      ? 'text-accent-green-600'
                      : 'text-gray-500'
                  } ${!isActive && 'hidden sm:block'}`}
                >
                  {step.name}
                </span>
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default JourneyProgressBar

// import React from 'react'
// import { Link, useLocation } from 'react-router-dom'

// const JourneyProgress = () => {
//   const location = useLocation()

//   const steps = [
//     { name: 'Retirement Basics', path: '/retirement', step: 1 },
//     { name: 'Account Types', path: '/account-types', step: 2 },
//     { name: 'Investment Options', path: '/investment-options', step: 3 },
//     { name: 'Strategies', path: '/strategies', step: 4 },
//   ]

//   const currentStepIndex = steps.findIndex(step => step.path === location.pathname)

//   return (
//     <div className="bg-white shadow-md border-b border-gray-200 flex justify-center">
//       <div className="max-w-6xl mx-auto px-4">
//         <nav className="flex space-x-2 overflow-x-auto">
//           {steps.map((step, index) => {
//             const isActive = index === currentStepIndex
//             const isPast = index < currentStepIndex

//             return (
//               <Link
//                 key={step.path}
//                 to={step.path}
//                 className={`flex items-center space-x-2 px-6 py-4 border-b-4 transition-all whitespace-nowrap rounded-t-2xl ${
//                   isActive
//                     ? 'border-accent-purple-500 text-accent-purple-600 bg-accent-purple-50'
//                     : isPast
//                     ? 'border-accent-green-500 text-accent-green-600 hover:bg-accent-green-50'
//                     : 'border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-50'
//                 }`}
//               >
//                 {/* Step Number Badge */}
//                 <div
//                   className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs ${
//                     isActive
//                       ? 'bg-accent-purple-500 text-white'
//                       : isPast
//                       ? 'bg-accent-green-500 text-white'
//                       : 'bg-gray-300 text-gray-600'
//                   }`}
//                 >
//                   {isPast ? (
//                     <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
//                     </svg>
//                   ) : (
//                     step.step
//                   )}
//                 </div>

//                 {/* Step Name */}
//                 <span className="font-semibold text-sm">{step.name}</span>
//               </Link>
//             )
//           })}
//         </nav>
//       </div>
//     </div>
//   )
// }

// export default JourneyProgress