import React from 'react'

const Automation = ({ journeyData, nextStep, prevStep }) => {
  const is401k = journeyData.recommendedAccount === '401k'

  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
        <div className="text-center mb-8">
          <div className="text-6xl mb-4">🤖</div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Set It On Autopilot
          </h2>
          <p className="text-xl text-gray-600">
            The secret to successful investing? Make it automatic!
          </p>
        </div>

        {/* Why automate */}
        <div className="bg-linear-to-r from-accent-green-50 to-accent-purple-50 rounded-xl p-8 mb-8 border-2 border-accent-purple-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Why Automation is Crucial
          </h3>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="text-2xl">🧠</div>
              <div>
                <p className="font-semibold text-gray-900">You won't forget</p>
                <p className="text-gray-700">Life gets busy. Automatic contributions mean you save every month without thinking about it.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="text-2xl">💪</div>
              <div>
                <p className="font-semibold text-gray-900">You won't be tempted to skip</p>
                <p className="text-gray-700">When money moves automatically, you don't have to resist the urge to spend it elsewhere.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="text-2xl">📈</div>
              <div>
                <p className="font-semibold text-gray-900">Consistency beats timing</p>
                <p className="text-gray-700">Regular investing (dollar-cost averaging) often beats trying to "time the market."</p>
              </div>
            </div>
          </div>
        </div>

        {/* How to automate based on account type */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            {is401k ? 'Your 401(k) is Already Automatic!' : 'How to Set Up Automatic Contributions'}
          </h3>

          {is401k ? (
            <div className="space-y-4">
              <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6">
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-blue-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="font-bold text-blue-900 mb-2">Good news!</p>
                    <p className="text-blue-800">
                      When you enrolled in your 401(k), you already set up automatic contributions. 
                      The money comes straight out of your paycheck - you don't have to do anything else!
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-6">
                <div className="flex items-start space-x-3">
                  <div className="text-2xl">💡</div>
                  <div>
                    <p className="font-bold text-yellow-900 mb-2">Pro Tip: Increase it annually</p>
                    <p className="text-yellow-800">
                      Each year when you get a raise, increase your 401(k) contribution by 1-2%. 
                      You won't feel the difference, but your future self will thank you!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-xl p-6 border-2 border-gray-200">
                <h4 className="font-bold text-gray-900 mb-4">Step 1: Log into your account</h4>
                <p className="text-gray-700">
                  Go to {journeyData.selectedProvider === 'fidelity' ? 'Fidelity' : journeyData.selectedProvider === 'vanguard' ? 'Vanguard' : 'Schwab'} 
                  {' '}and log into your new Roth IRA account.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 border-2 border-gray-200">
                <h4 className="font-bold text-gray-900 mb-4">Step 2: Find "Automatic Investments" or "Recurring Transfers"</h4>
                <p className="text-gray-700 mb-2">
                  Look for something like "Set up automatic investments" or "Recurring contributions" in your account settings.
                </p>
                <p className="text-sm text-gray-600">
                  Can't find it? Search their help center or call customer service - they're happy to help!
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 border-2 border-gray-200">
                <h4 className="font-bold text-gray-900 mb-4">Step 3: Choose your amount and frequency</h4>
                <p className="text-gray-700 mb-4">
                  Pick an amount that feels comfortable - even $50/month adds up! Common options:
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  <div className="bg-white p-3 rounded-lg text-center">
                    <p className="font-bold text-gray-900">$50</p>
                    <p className="text-xs text-gray-600">per month</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg text-center">
                    <p className="font-bold text-gray-900">$100</p>
                    <p className="text-xs text-gray-600">per month</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg text-center">
                    <p className="font-bold text-gray-900">$250</p>
                    <p className="text-xs text-gray-600">per month</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg text-center">
                    <p className="font-bold text-gray-900">$500</p>
                    <p className="text-xs text-gray-600">per month</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-4">
                  💡 Tip: Max contribution is $7,000/year, so $583/month maxes it out!
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 border-2 border-gray-200">
                <h4 className="font-bold text-gray-900 mb-4">Step 4: Pick your transfer date</h4>
                <p className="text-gray-700">
                  Choose a date right after payday so the money moves before you spend it. Most people pick the 1st or 15th of the month.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* The compound interest pitch */}
        <div className="bg-linear-to-r from-accent-purple-500 to-accent-purple-700 text-white rounded-xl p-8 mb-8">
          <h3 className="text-2xl font-bold mb-4">The Power of Consistency</h3>
          <p className="text-lg mb-4 opacity-90">
            If you're 25 and invest just <strong>$300/month</strong> with a 7% return...
          </p>
          <p className="text-3xl font-bold mb-2">
            You'll have $1,000,000+ by age 65! 🎉
          </p>
          <p className="opacity-90">
            That's the magic of compound interest and time. Start now, stay consistent, and let time do the heavy lifting.
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
            onClick={nextStep}
            className="flex-1 bg-accent-purple-600 hover:bg-accent-purple-700 text-white font-bold py-3 px-6 rounded-xl transition-all transform hover:scale-105 shadow-lg"
          >
            You're Almost Done! →
          </button>
        </div>
      </div>
    </div>
  )
}

export default Automation