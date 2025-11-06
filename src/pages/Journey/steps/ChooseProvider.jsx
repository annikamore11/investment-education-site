import React, { useState } from 'react'

const ChooseProvider = ({ journeyData, updateJourneyData, nextStep, prevStep }) => {
  const [selectedProvider, setSelectedProvider] = useState(journeyData.selectedProvider || '')

  const providers = [
    {
      id: 'fidelity',
      name: 'Fidelity',
      logo: '🟢',
      bestFor: 'Best overall for beginners',
      pros: ['Easy to use website & app', 'Great customer service', 'No account minimums', 'Excellent research tools'],
      url: 'https://www.fidelity.com'
    },
    {
      id: 'vanguard',
      name: 'Vanguard',
      logo: '🔴',
      bestFor: 'Best for low-cost investing',
      pros: ['Lowest expense ratios', 'Investor-owned (profits go to you)', 'Pioneer of index funds', 'Strong reputation'],
      url: 'https://www.vanguard.com'
    },
    {
      id: 'schwab',
      name: 'Charles Schwab',
      logo: '🔵',
      bestFor: 'Best for full-service banking',
      pros: ['Great mobile app', 'Physical branches nationwide', 'Good for checking accounts too', 'Excellent tools'],
      url: 'https://www.schwab.com'
    }
  ]

  const handleNext = () => {
    updateJourneyData('selectedProvider', selectedProvider)
    nextStep()
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          Choose Your Provider
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          This is where you'll actually open your account
        </p>

        {/* Reassurance */}
        <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6 mb-8">
          <div className="flex items-start space-x-3">
            <div className="text-2xl">✅</div>
            <div>
              <p className="font-bold text-blue-900 mb-2">Good news: You can't go wrong!</p>
              <p className="text-blue-800">
                All three of these are huge, trusted companies with excellent reputations. 
                They're all SIPC insured (up to $500k). Pick whichever appeals to you most!
              </p>
            </div>
          </div>
        </div>

        {/* Provider Cards */}
        <div className="space-y-4 mb-8">
          {providers.map(provider => (
            <button
              key={provider.id}
              onClick={() => setSelectedProvider(provider.id)}
              className={`w-full text-left p-6 rounded-xl border-2 transition-all ${
                selectedProvider === provider.id
                  ? 'border-accent-purple-500 bg-accent-purple-50 shadow-lg'
                  : 'border-gray-200 hover:border-accent-purple-300 hover:bg-gray-50'
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="text-3xl">{provider.logo}</span>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{provider.name}</h3>
                      <p className="text-sm text-accent-purple-600 font-semibold">{provider.bestFor}</p>
                    </div>
                  </div>
                  
                  <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-2">
                    {provider.pros.map((pro, index) => (
                      <div key={index} className="flex items-start space-x-2">
                        <svg className="w-5 h-5 text-accent-green-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">{pro}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {selectedProvider === provider.id && (
                  <svg className="w-8 h-8 text-accent-purple-600 ml-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>
            </button>
          ))}
        </div>

        {/* Additional info */}
        <div className="bg-gray-50 rounded-xl p-6 mb-8">
          <h4 className="font-bold text-gray-900 mb-3">💬 Our Take</h4>
          <p className="text-gray-700 mb-2">
            <strong>Fidelity</strong> is probably the easiest to use if you're brand new.
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Vanguard</strong> has slightly lower fees, great if you're very cost-conscious.
          </p>
          <p className="text-gray-700">
            <strong>Schwab</strong> is perfect if you also want a checking account with them.
          </p>
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
            disabled={!selectedProvider}
            className={`flex-1 font-bold py-3 px-6 rounded-xl transition-all ${
              selectedProvider
                ? 'bg-accent-purple-600 hover:bg-accent-purple-700 text-white shadow-lg transform hover:scale-105'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
          >
            {selectedProvider ? "Perfect! Let's Set It Up →" : 'Choose a Provider'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default ChooseProvider