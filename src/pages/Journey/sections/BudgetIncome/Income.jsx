import React, { useState } from 'react'
import { TrendingUp, DollarSign, TriangleAlert } from 'lucide-react'

const Income = ({ journeyData, updateJourneyData, nextStep, prevStep }) => {
  const [income, setIncome] = useState(journeyData.monthlyIncome || 3000)
  const [customIncome, setCustomIncome] = useState('')

  const handleNext = () => {
    const finalIncome = customIncome || income
    updateJourneyData('monthlyIncome', finalIncome)
    
    setTimeout(() => {
      nextStep()
    }, 50)
  }

  const handleSliderChange = (e) => {
    setIncome(parseInt(e.target.value))
    setCustomIncome('') // Clear custom when using slider
  }

  const handleCustomChange = (value) => {
    const sanitized = value.replace(/[^\d]/g, '')
    setCustomIncome(sanitized ? parseInt(sanitized) : '')
    if (sanitized) {
      setIncome(parseInt(sanitized))
    }
  }

  const displayIncome = customIncome || income
  const leftover = displayIncome - (journeyData.monthlyExpenses || 0)

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="text-center mt-10 mb-6 lg:mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-primary-100 mb-3">
          Monthly Income
        </h1>
        <p className="text-lg text-primary-200 max-w-4xl mx-auto">
          What's your approximate take-home pay each month?
        </p>
      </div>

      <div className="bg-primary-100 rounded-xl shadow-xl p-8 md:p-12">
        
        {/* Income Display */}
        <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-xl p-6 mb-6 text-center border-2 border-accent-green-700">
          <p className="text-sm text-gray-700 mb-1">Monthly Take-Home Income</p>
          <p className="text-4xl font-bold text-green-700">
            ${displayIncome.toLocaleString()}
          </p>
        </div>

        {/* Slider */}
        <div className="mb-6">
          <label className="block text-base font-semibold text-gray-900 mb-3">
            Adjust with slider:
          </label>
          <input
            type="range"
            min="1000"
            max="15000"
            step="100"
            value={income}
            onChange={handleSliderChange}
            className="w-full h-2.5 bg-gray-300 rounded-lg appearance-none cursor-pointer accent-accent-green-600"
            style={{
              background: `linear-gradient(to right, #16a34a 0%, #16a34a ${((income - 1000) / (15000 - 1000)) * 100}%, #d1d5db ${((income - 1000) / (15000 - 1000)) * 100}%, #d1d5db 100%)`
            }}
          />
          <div className="flex justify-between text-xs text-gray-600 mt-1">
            <span>$1,000</span>
            <span>$15,000+</span>
          </div>
        </div>

        {/* Custom Input */}
        <div className="bg-gray-50 border-2 border-gray-300 rounded-xl p-4 mb-6">
          <label className="block text-base font-semibold text-gray-900 mb-2">
            Or enter exact amount:
          </label>
          <div className="flex items-center">
            <span className="text-2xl font-bold text-gray-700 mr-2">$</span>
            <input
              type="text"
              inputMode="numeric"
              placeholder="4500"
              value={customIncome}
              onChange={(e) => handleCustomChange(e.target.value)}
              className="flex-1 text-2xl font-bold p-2 border-2 border-gray-300 rounded-lg focus:border-accent-green-600 focus:outline-none bg-white"
            />
            <span className="text-gray-600 ml-2">/month</span>
          </div>
        </div>

        {/* Leftover Preview */}
        {journeyData.monthlyExpenses && (
          <div className={`rounded-xl p-4 mb-6 border-2 ${
            leftover >= 0 
              ? 'bg-gradient-to-r from-green-50 to-green-100 border-accent-green-700' 
              : 'bg-red-50 border-red-300'
          }`}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-gray-700 mb-1">After expenses of ${journeyData.monthlyExpenses.toLocaleString()}</p>
                <p className="text-xl font-bold">
                  {leftover >= 0 ? (
                    <span className="text-accent-green-700">${leftover.toLocaleString()} left over</span>
                  ) : (
                    <span className="text-red-700">${Math.abs(leftover).toLocaleString()} short</span>
                  )}
                </p>
              </div>
              {leftover >= 0 ? (
                <div className="text-accent-green-700">
                  <DollarSign className="w-5 h-5"/>
                </div>
              ) : (
                <div className="text-accent-green-700">
                  <TriangleAlert className="w-5 h-5"/>
                </div>
              )}
            </div>
            {leftover < 0 && (
              <p className="text-xs text-red-700 mt-2">
                You might want to revisit your expenses or consider ways to increase income
              </p>
            )}
          </div>
        )}

        {/* Navigation */}
        <div className="flex gap-4">
          <button onClick={prevStep} className="btn-journey-back">
            ← Back
          </button>
          <button
            onClick={handleNext}
            className="flex-1 btn-journey-next"
          >
            Next →
          </button>
        </div>
      </div>
    </div>
  )
}

export default Income