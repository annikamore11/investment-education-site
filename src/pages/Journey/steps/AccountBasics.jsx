import React from 'react'

const AccountBasics = ({ journeyData, nextStep, prevStep }) => {
  const accountInfo = {
    '401k': {
      title: '401(k) Basics',
      description: 'Everything you need to know about your employer plan',
      sections: [
        {
          question: 'How does it work?',
          answer: 'Money automatically comes out of your paycheck before taxes. Your employer sends it to the 401(k) provider (like Fidelity or Vanguard), where you choose how to invest it.'
        },
        {
          question: 'How much should I contribute?',
          answer: 'Start with at least enough to get your full company match (usually 3-6% of salary). If you can afford more, aim for 10-15% of your income total.'
        },
        {
          question: 'When can I use the money?',
          answer: 'The money is meant for retirement (age 59½). You can access it earlier, but you\'ll pay taxes plus a 10% penalty. There are exceptions for hardships.'
        },
        {
          question: 'What if I change jobs?',
          answer: 'You can roll it over to your new employer\'s 401(k) or to an IRA. You keep all your money and any employer matches that have "vested" (usually after 3-5 years).'
        }
      ]
    },
    'roth-ira': {
      title: 'Roth IRA Basics',
      description: 'Everything you need to know about your own retirement account',
      sections: [
        {
          question: 'How does it work?',
          answer: 'You open an account with a provider like Fidelity or Vanguard. You transfer money from your bank account, choose investments, and watch it grow tax-free!'
        },
        {
          question: 'How much can I contribute?',
          answer: 'In 2024, you can contribute up to $7,000 per year if you\'re under 50. You can contribute any amount up to that limit, even just $50/month to start.'
        },
        {
          question: 'When can I use the money?',
          answer: 'You can withdraw your contributions (what you put in) anytime with no penalty. The earnings stay locked until age 59½, but they grow completely tax-free!'
        },
        {
          question: 'Do I qualify?',
          answer: 'You need earned income and must make under $161,000/year (single) or $240,000 (married filing jointly) to contribute the full amount.'
        }
      ]
    },
    'solo-401k': {
      title: 'Solo 401(k) Basics',
      description: 'Everything you need to know about the self-employed retirement plan',
      sections: [
        {
          question: 'How does it work?',
          answer: 'As a business owner, you\'re both the employee and employer. You can contribute in both roles, allowing for much higher contribution limits than a regular IRA.'
        },
        {
          question: 'How much can I contribute?',
          answer: 'Up to $69,000 in 2024 (or $76,500 if over 50)! You contribute up to $23,000 as the "employee" plus up to 25% of your compensation as the "employer."'
        },
        {
          question: 'When can I use the money?',
          answer: 'Same as a regular 401(k) - meant for retirement at 59½. Early withdrawals face taxes and a 10% penalty, with some exceptions.'
        },
        {
          question: 'Do I qualify?',
          answer: 'You must be self-employed with no employees (spouses are okay). Great for freelancers, contractors, and small business owners.'
        }
      ]
    }
  }

  const info = accountInfo[journeyData.recommendedAccount] || accountInfo['roth-ira']

  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          {info.title}
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          {info.description}
        </p>

        {/* Q&A Sections */}
        <div className="space-y-6 mb-8">
          {info.sections.map((section, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 border-2 border-gray-200">
              <h3 className="text-lg font-bold text-accent-purple-600 mb-3">
                {section.question}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {section.answer}
              </p>
            </div>
          ))}
        </div>

        {/* Key Takeaway */}
        <div className="bg-linear-to-r from-accent-green-50 to-accent-purple-50 rounded-xl p-6 border-2 border-accent-purple-200 mb-8">
          <div className="flex items-start space-x-3">
            <div className="text-2xl">💡</div>
            <div>
              <p className="font-bold text-gray-900 mb-2">The Bottom Line</p>
              <p className="text-gray-700">
                {journeyData.recommendedAccount === '401k' 
                  ? "Start with your company match, then increase over time. It's automatic and easy!"
                  : journeyData.recommendedAccount === 'solo-401k'
                  ? "As a self-employed person, this gives you the highest contribution limits and best tax benefits."
                  : "Start small if needed - even $50/month grows significantly over decades with compound interest."
                }
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
            onClick={nextStep}
            className="flex-1 bg-accent-purple-600 hover:bg-accent-purple-700 text-white font-bold py-3 px-6 rounded-xl transition-all transform hover:scale-105 shadow-lg"
          >
            Got it! What's Next? →
          </button>
        </div>
      </div>
    </div>
  )
}

export default AccountBasics