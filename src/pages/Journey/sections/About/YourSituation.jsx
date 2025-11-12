import React, { useState } from 'react'

const YourSituation = ({ journeyData, updateJourneyData, nextStep, prevStep }) => {
  const [localData, setLocalData] = useState({
    employment: journeyData.employment || '',
    hasEmployer401k: journeyData.hasEmployer401k ?? null,
    age: journeyData.age || ''
  })

  const handleNext = () => {
    // Save data to journey
    Object.keys(localData).forEach(key => {
      updateJourneyData(key, localData[key])
    })

    // Determine recommendation based on answers
    let recommendation = ''
    if (localData.employment === 'employed-company' && localData.hasEmployer401k === true) {
      recommendation = '401k'
    } else if (localData.employment === 'employed-company' && localData.hasEmployer401k === false) {
      recommendation = 'roth-ira'
    } else if (localData.employment === 'self-employed') {
      recommendation = 'solo-401k'
    } else if (localData.employment === 'student') {
      recommendation = 'roth-ira'
    } else {
      recommendation = 'roth-ira'
    }

    updateJourneyData('recommendedAccount', recommendation)
    nextStep()
  }

  const isComplete = localData.employment && 
    localData.employment && 
    localData.age

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          First, let's learn a bit about you
        </h2>
        <p className="text-gray-600 mb-8">
          This helps us recommend the best strategies for you
        </p>

        <div className="space-y-8">
          {/* Question 1: Employment */}
          <div>
            <label className="block text-lg font-semibold text-gray-900 mb-4">
              What's your current employment situation?
            </label>
            <div className="space-y-3">
              {[
                { value: 'employed-company', label: 'I work for a company', icon: '🏢' },
                { value: 'self-employed', label: "I'm self-employed/freelance", icon: '💼' },
                { value: 'student', label: "I'm a student", icon: '🎓' },
                { value: 'other', label: 'Other', icon: '📋' }
              ].map(option => (
                <button
                  key={option.value}
                  onClick={() => setLocalData({ ...localData, employment: option.value, hasEmployer401k: null })}
                  className={`w-full p-4 rounded-xl border-2 transition-all text-left flex items-center space-x-3 ${
                    localData.employment === option.value
                      ? 'border-accent-purple-500 bg-accent-purple-50 shadow-md'
                      : 'border-gray-200 hover:border-accent-purple-300 hover:bg-gray-50'
                  }`}
                >
                  <span className="text-2xl">{option.icon}</span>
                  <span className="font-semibold text-gray-900">{option.label}</span>
                  {localData.employment === option.value && (
                    <svg className="w-6 h-6 text-accent-purple-600 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </button>
              ))}
            </div>
          </div>

          
          {/* Question 3: Age range */}
          <div className={localData.employment ? 'animate-slideUp' : 'opacity-50'}>
            <label className="block text-lg font-semibold text-gray-900 mb-4">
              What's your age range?
            </label>
            <div className="grid grid-cols-2 gap-3">
              {[
                { value: '18-25', label: '18-25' },
                { value: '26-35', label: '26-35' },
                { value: '36-45', label: '36-45' },
                { value: '46+', label: '46+' }
              ].map(option => (
                <button
                  key={option.value}
                  onClick={() => setLocalData({ ...localData, age: option.value })}
                  disabled={!localData.employment}
                  className={`p-4 rounded-xl border-2 transition-all font-semibold ${
                    localData.age === option.value
                      ? 'border-accent-purple-500 bg-accent-purple-50 shadow-md text-accent-purple-700'
                      : 'border-gray-200 hover:border-accent-purple-300 hover:bg-gray-50 text-gray-700'
                  } ${!localData.employment ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex gap-4 mt-8">
          <button
            onClick={prevStep}
            className="px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-all"
          >
            ← Back
          </button>
          <button
            onClick={handleNext}
            disabled={!isComplete}
            className={`flex-1 py-3 px-6 font-bold rounded-xl transition-all ${
              isComplete
                ? 'bg-accent-purple-600 hover:bg-accent-purple-700 text-white shadow-lg transform hover:scale-105'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
          >
            Next
          </button>
        </div>

        {!isComplete && (
          <p className="text-sm text-gray-500 text-center mt-4">
            Please answer all questions to continue
          </p>
        )}
      </div>
    </div>
  )
}

export default YourSituation