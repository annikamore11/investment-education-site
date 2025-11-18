import React from 'react'
import { DollarSign, TrendingUp, Calendar, PiggyBank } from 'lucide-react'

const BudgetSummary = ({ journeyData, nextStep, prevStep }) => {
  const income = journeyData.monthlyIncome || 0
  const expenses = journeyData.monthlyExpenses || 0
  const leftover = income - expenses
  const savingsRate = income > 0 ? ((leftover / income) * 100).toFixed(1) : 0

  const getFrequencyLabel = (freq) => {
    const labels = {
      'weekly': 'Weekly',
      'biweekly': 'Every 2 weeks',
      'semimonthly': 'Twice per month',
      'monthly': 'Once per month',
      'irregular': 'Irregular/Variable'
    }
    return labels[freq] || freq
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="text-center mt-10 mb-6 lg:mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-primary-100 mb-3">
          Your Financial Snapshot
        </h1>
        <p className="text-lg text-primary-200 max-w-4xl mx-auto">
          Here's what we learned about your finances
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-xl p-8 md:p-12 border-2 border-gray-200">
        
        {/* Report Header */}
        <div className="border-b-2 border-gray-300 pb-4 mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Expenses and Income Summary</h2>
          <p className="text-sm text-gray-600 mt-1">Review your information</p>
        </div>

        {/* Summary Rows */}
        <div className="space-y-1 mb-8">
          
          {/* Monthly Income */}
          <div className="grid grid-cols-3 py-4 border-b border-gray-200 hover:bg-gray-50 transition-colors">
            <div className="flex items-center space-x-3 col-span-1">
              <TrendingUp className="w-5 h-5 text-gray-500" />
              <span className="font-semibold text-gray-700">Monthly Income</span>
            </div>
            <div className="col-span-2 text-gray-900 font-bold text-lg">
              ${income.toLocaleString()}
            </div>
          </div>

          {/* Monthly Expenses */}
          <div className="grid grid-cols-3 py-4 border-b border-gray-200 hover:bg-gray-50 transition-colors">
            <div className="flex items-center space-x-3 col-span-1">
              <DollarSign className="w-5 h-5 text-gray-500" />
              <span className="font-semibold text-gray-700">Monthly Expenses</span>
            </div>
            <div className="col-span-2 text-gray-900 font-bold text-lg">
              ${expenses.toLocaleString()}
            </div>
          </div>

          {/* Pay Frequency */}
          <div className="grid grid-cols-3 py-4 border-b border-gray-200 hover:bg-gray-50 transition-colors">
            <div className="flex items-center space-x-3 col-span-1">
              <Calendar className="w-5 h-5 text-gray-500" />
              <span className="font-semibold text-gray-700">Pay Frequency</span>
            </div>
            <div className="col-span-2 text-gray-900">
              {getFrequencyLabel(journeyData.payFrequency)}
            </div>
          </div>

          {/* Leftover */}
          <div className={`grid grid-cols-3 py-4 border-b border-gray-200 ${
            leftover >= 0 ? 'bg-green-50' : 'bg-red-50'
          } transition-colors`}>
            <div className="flex items-center space-x-3 col-span-1">
              <PiggyBank className="w-5 h-5 text-gray-500" />
              <span className="font-semibold text-gray-700">Available to Save</span>
            </div>
            <div className={`col-span-2 font-bold text-lg ${
              leftover >= 0 ? 'text-green-700' : 'text-red-700'
            }`}>
              {leftover >= 0 ? `$${leftover.toLocaleString()}` : `-$${Math.abs(leftover).toLocaleString()}`}
              <span className="text-sm font-normal ml-2">
                ({savingsRate}% savings rate)
              </span>
            </div>
          </div>
        </div>

        {/* Insights */}
        <div className={`rounded-xl p-6 mb-8 border-2 ${
          leftover >= 500 ? 'bg-green-50 border-green-300' :
          leftover >= 0 ? 'bg-yellow-50 border-yellow-300' :
          'bg-red-50 border-red-300'
        }`}>
          <h3 className="font-bold text-gray-900 mb-2">Quick Insight</h3>
          {leftover >= 500 && (
            <p className="text-gray-700">
              Great! You have ${leftover.toLocaleString()} available to save and invest each month. We'll help you make the most of it.
            </p>
          )}
          {leftover > 0 && leftover < 500 && (
            <p className="text-gray-700">
              You have ${leftover.toLocaleString()} available to save. Every dollar counts - we'll help you build wealth over time!
            </p>
          )}
          {leftover <= 0 && (
            <p className="text-gray-700">
              Your expenses match or exceed your income. Focus on building an emergency fund first, even if it's just $25-50/month.
            </p>
          )}
        </div>

        {/* Note */}
        <div className="bg-purple-50 border-l-4 border-purple-500 p-4 mb-8">
          <p className="text-sm text-gray-800">
            <strong className="text-purple-900">Note:</strong> Need to change something? Use the <strong>← Back</strong> button to edit your answers.
          </p>
        </div>

        {/* Navigation */}
        <div className="flex gap-4">
          <button onClick={prevStep} className="btn-journey-back">
            ← Back
          </button>
          <button onClick={nextStep} className="flex-1 btn-journey-next">
            Continue to Next Section →
          </button>
        </div>
      </div>
    </div>
  )
}

export default BudgetSummary