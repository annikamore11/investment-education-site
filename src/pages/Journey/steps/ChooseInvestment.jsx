import React, { useState } from 'react'

const ChooseInvestment = ({ journeyData, updateJourneyData, nextStep, prevStep }) => {
  const [selectedOption, setSelectedOption] = useState(journeyData.selectedInvestment || '')

  // Calculate target retirement year based on age
  const getTargetYear = () => {
    const currentYear = new Date().getFullYear()
    const ageRanges = {
      '18-25': 21,
      '26-35': 30,
      '36-45': 40,
      '46+': 50
    }
    const avgAge = ageRanges[journeyData.age] || 30
    return currentYear + (65 - avgAge)
  }

  const targetYear = getTargetYear()
  const roundedYear = Math.round(targetYear / 5) * 5 // Round to nearest 5

  const handleNext = () => {
    updateJourneyData('selectedInvestment', selectedOption)
    nextStep()
  }

  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          Choose Your Investment
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          This is what your money will actually be invested in
        </p>

        {/* Recommendation */}
        <div className="bg-linear-to-r from-accent-purple-500 to-accent-purple-700 text-white rounded-xl p-8 mb-8">
          <div className="flex items-start space-x-4">
            <div className="text-4xl">🎯</div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Our Recommendation</h3>
              <p className="text-lg mb-4 opacity-90">
                Based on your age, we recommend a <strong>Target Date {roundedYear} Fund</strong>
              </p>
              <p className="opacity-90">
                This is literally designed for people planning to retire around {roundedYear}. 
                It automatically adjusts from aggressive (lots of stocks) when you're young to 
                conservative (more bonds) as you approach retirement.
              </p>
            </div>
          </div>
        </div>

        {/* Options */}
        <div className="space-y-4 mb-8">
          {/* Target Date Fund - Recommended */}
          <button
            onClick={() => setSelectedOption('target-date')}
            className={`w-full text-left p-6 rounded-xl border-2 transition-all ${
              selectedOption === 'target-date'
                ? 'border-accent-purple-500 bg-accent-purple-50 shadow-lg'
                : 'border-gray-200 hover:border-accent-purple-300 hover:bg-gray-50'
            }`}
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <h4 className="text-xl font-bold text-gray-900">Target Date Fund</h4>
                  <span className="px-3 py-1 bg-accent-green-500 text-white text-xs font-bold rounded-full">
                    RECOMMENDED
                  </span>
                </div>
                <p className="text-gray-700 mb-3">
                  The "set it and forget it" option. Automatically adjusts as you age.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <svg className="w-4 h-4 text-accent-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Perfect for beginners</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <svg className="w-4 h-4 text-accent-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Fully diversified (stocks + bonds)</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <svg className="w-4 h-4 text-accent-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>No need to rebalance</span>
                  </div>
                </div>
              </div>
              {selectedOption === 'target-date' && (
                <svg className="w-8 h-8 text-accent-purple-600 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              )}
            </div>
          </button>

          {/* Total Stock Market Index */}
          <button
            onClick={() => setSelectedOption('total-market')}
            className={`w-full text-left p-6 rounded-xl border-2 transition-all ${
              selectedOption === 'total-market'
                ? 'border-accent-purple-500 bg-accent-purple-50 shadow-lg'
                : 'border-gray-200 hover:border-accent-purple-300 hover:bg-gray-50'
            }`}
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  Total Stock Market Index Fund
                </h4>
                <p className="text-gray-700 mb-3">
                  Own a piece of the entire US stock market. More control, but you manage it yourself.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>More hands-on approach</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>You'll need to add bonds as you age</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Best for those wanting more control</span>
                  </div>
                </div>
              </div>
              {selectedOption === 'total-market' && (
                <svg className="w-8 h-8 text-accent-purple-600 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              )}
            </div>
          </button>
        </div>

        {/* Why this matters */}
        <div className="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-6 mb-8">
          <div className="flex items-start space-x-3">
            <div className="text-2xl">💡</div>
            <div>
              <p className="font-bold text-yellow-900 mb-2">Why this matters</p>
              <p className="text-yellow-800">
                Your choice determines how your money grows. Both options are great! 
                Target Date Funds are simpler, while index funds give you more control. 
                Either way, you'll be invested in the stock market for long-term growth.
              </p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex gap-4">
          <button
            onClick={prevStep}
            className="px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-all"
          >
            ← Back
          </button>
          <button
            onClick={handleNext}
            disabled={!selectedOption}
            className={`flex-1 font-bold py-3 px-6 rounded-xl transition-all ${
              selectedOption
                ? 'bg-accent-purple-600 hover:bg-accent-purple-700 text-white shadow-lg transform hover:scale-105'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
          >
            {selectedOption ? "Let's Pick a Provider →" : 'Select an Option'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default ChooseInvestment