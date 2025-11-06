import React, { useState } from 'react'

const SetupGuide = ({ journeyData, nextStep, prevStep }) => {
  const [completedSteps, setCompletedSteps] = useState([])

  const toggleStep = (stepIndex) => {
    if (completedSteps.includes(stepIndex)) {
      setCompletedSteps(completedSteps.filter(i => i !== stepIndex))
    } else {
      setCompletedSteps([...completedSteps, stepIndex])
    }
  }

  const providerNames = {
    'fidelity': 'Fidelity',
    'vanguard': 'Vanguard',
    'schwab': 'Charles Schwab'
  }

  const providerUrls = {
    'fidelity': 'https://digital.fidelity.com/prgw/digital/aox/aohome/getstarted?accountType=brokerage',
    'vanguard': 'https://open-account.web.vanguard.com/ona-open-account/account-selection/overview',
    'schwab': 'https://www.schwab.com/ira'
  }

  const accountTypes = {
    '401k': {
      title: 'Setting Up Your 401(k)',
      steps: [
        {
          title: 'Talk to HR or check your benefits portal',
          description: 'Ask how to enroll in the 401(k) plan. Most companies have an online portal or enrollment form.',
          tip: 'If you\'re unsure, email HR with: "Hi! I\'d like to enroll in the company 401(k). What are the next steps?"'
        },
        {
          title: 'Choose your contribution percentage',
          description: 'Start with at least enough to get the full company match. You can always increase it later!',
          tip: `If your company matches 5%, contribute at least 5%. That's ${journeyData.employment === 'employed-company' ? 'free money' : 'instant returns'}!`
        },
        {
          title: 'Select your investment',
          description: journeyData.selectedInvestment === 'target-date' 
            ? 'Look for a Target Date fund close to your retirement year. It should have a year in the name like "2055" or "2060".'
            : 'Choose a Total Stock Market Index fund or S&P 500 Index fund.',
          tip: 'Most plans have limited options. Pick the one with the lowest "expense ratio" (usually under 0.20%).'
        },
        {
          title: 'Review and submit',
          description: 'Double-check your contribution amount and investment choice, then submit!',
          tip: 'Changes usually take 1-2 pay periods to start. You\'ll see it on your next paystub.'
        }
      ]
    },
    'roth-ira': {
      title: 'Opening Your Roth IRA',
      steps: [
        {
          title: 'Go to the provider website',
          description: `Visit ${providerNames[journeyData.selectedProvider] || 'your chosen provider'}\'s website and click "Open an Account" or "Open IRA".`,
          tip: 'Have your Social Security number, driver\'s license, and bank account info ready.'
        },
        {
          title: 'Choose "Roth IRA"',
          description: 'You\'ll be asked what type of account. Select "Roth IRA" (NOT Traditional IRA).',
          tip: 'Make sure it says "Roth" - this is important for tax-free growth!'
        },
        {
          title: 'Fill out your personal information',
          description: 'Name, address, Social Security number, employment info. Takes about 5-10 minutes.',
          tip: 'You\'ll also link your bank account to transfer money in.'
        },
        {
          title: 'Fund your account',
          description: 'Transfer money from your bank. Start with whatever you\'re comfortable with - even $50 is fine!',
          tip: 'You can contribute up to $7,000/year total. Spread it out monthly or do it all at once.'
        },
        {
          title: 'Choose your investment',
          description: journeyData.selectedInvestment === 'target-date' 
            ? 'Search for "Target Date" and pick the year closest to when you\'ll turn 65.'
            : 'Search for "Total Stock Market Index" or ticker symbol like "VTSAX" (Vanguard) or "FSKAX" (Fidelity).',
          tip: 'Your money just sits as cash until you invest it. Don\'t forget this step!'
        }
      ]
    },
    'solo-401k': {
      title: 'Setting Up Your Solo 401(k)',
      steps: [
        {
          title: 'Go to the provider website',
          description: `Visit ${providerNames[journeyData.selectedProvider] || 'your chosen provider'}\'s website and search for "Solo 401(k)" or "Individual 401(k)".`,
          tip: 'You\'ll need your EIN (Employer Identification Number) from the IRS. If you don\'t have one, you can get it free at irs.gov.'
        },
        {
          title: 'Complete the application',
          description: 'Fill out business info (name, EIN, type of business) and personal info.',
          tip: 'Takes about 15-20 minutes. Have your business documents handy.'
        },
        {
          title: 'Adopt the plan document',
          description: 'You\'ll need to sign a plan document. The provider will give you this - it\'s standard.',
          tip: 'Keep a copy for your records. You might need it for taxes.'
        },
        {
          title: 'Fund your account',
          description: 'Transfer money from your business bank account. You can contribute as employee and employer.',
          tip: 'Remember: up to $23,000 as employee + up to 25% of compensation as employer!'
        },
        {
          title: 'Choose your investment',
          description: journeyData.selectedInvestment === 'target-date' 
            ? 'Search for a Target Date fund matching your expected retirement year.'
            : 'Choose a Total Stock Market Index fund or S&P 500 Index.',
          tip: 'Your contributions sit as cash until invested. Make sure to complete this step!'
        }
      ]
    }
    
  }

  const guide = accountTypes[journeyData.recommendedAccount] || accountTypes['roth-ira']

  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          {guide.title}
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          Follow these steps to get your account open today
        </p>

        {/* Provider link for IRAs */}
        {(journeyData.recommendedAccount === 'roth-ira' || journeyData.recommendedAccount === 'solo-401k') && (
          <div className="bg-linear-to-r from-accent-purple-500 to-accent-purple-700 text-white rounded-xl p-6 mb-8">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm opacity-90 mb-1">Ready to start?</p>
                <p className="text-xl font-bold">Open at {providerNames[journeyData.selectedProvider]}</p>
              </div>
              <a
                href={providerUrls[journeyData.selectedProvider]}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-white text-accent-purple-600 font-bold rounded-lg hover:bg-gray-100 transition-all"
              >
                Go to Site →
              </a>
            </div>
          </div>
        )}

        {/* Steps */}
        <div className="space-y-4 mb-8">
          {guide.steps.map((step, index) => (
            <div
              key={index}
              className={`border-2 rounded-xl overflow-hidden transition-all ${
                completedSteps.includes(index)
                  ? 'border-accent-green-500 bg-accent-green-50'
                  : 'border-gray-200 bg-white'
              }`}
            >
              <button
                onClick={() => toggleStep(index)}
                className="w-full p-6 text-left flex items-start space-x-4 hover:bg-gray-50 transition-colors"
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0 ${
                    completedSteps.includes(index)
                      ? 'bg-accent-green-500 text-white'
                      : 'bg-gray-200 text-gray-600'
                  }`}
                >
                  {completedSteps.includes(index) ? (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    index + 1
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-700 mb-3">
                    {step.description}
                  </p>
                  <div className="bg-yellow-100 border-l-4 border-yellow-400 p-3 rounded">
                    <p className="text-sm text-yellow-800">
                      <strong>💡 Tip:</strong> {step.tip}
                    </p>
                  </div>
                </div>
              </button>
            </div>
          ))}
        </div>

        {/* Progress indicator */}
        <div className="bg-gray-50 rounded-xl p-6 mb-8">
          <div className="flex items-center justify-between mb-3">
            <span className="font-semibold text-gray-900">Your Progress</span>
            <span className="text-sm text-gray-600">
              {completedSteps.length} of {guide.steps.length} complete
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className="bg-accent-green-500 h-3 rounded-full transition-all duration-500"
              style={{ width: `${(completedSteps.length / guide.steps.length) * 100}%` }}
            ></div>
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
            onClick={nextStep}
            className="flex-1 bg-accent-purple-600 hover:bg-accent-purple-700 text-white font-bold py-3 px-6 rounded-xl transition-all transform hover:scale-105 shadow-lg"
          >
            Next: Set Up Automation →
          </button>
        </div>

        <p className="text-sm text-gray-500 text-center mt-4">
          Don't worry - you can come back to this anytime
        </p>
      </div>
    </div>
  )
}

export default SetupGuide
