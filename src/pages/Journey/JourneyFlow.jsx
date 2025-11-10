

import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

// Import all step components
//import Welcome from './steps/Welcome'
import Budget from './steps/Budget'
import EmergencyFund from './steps/EmergencyFund'
import YourSituation from './steps/YourSituation'
import Recommendation from './steps/Recommendation'
import AccountBasics from './steps/AccountBasics'
import ChooseInvestment from './steps/ChooseInvestment'
import ChooseProvider from './steps/ChooseProvider'
import SetupGuide from './steps/SetupGuide'
import Automation from './steps/Automation'
import Celebration from './steps/Celebration'

const JourneyFlow = () => {
  const { user } = useAuth()
  const navigate = useNavigate()
  
  // Journey state - stores all user answers
  const [journeyData, setJourneyData] = useState({
    rent: '',
    carPayment: '',
    food: '',
    insurance: '',
    essential: '',
    nonEssential: '',

    // Emergency fund data
    emergencyFundGoal: '',
    emergencyAccountType: '',

    employment: '',
    hasEmployer401k: null,
    age: '',
    currentSavings: 0,
    recommendedAccount: '',
    selectedInvestment: '',
    selectedProvider: '',
    completed: false
  })

  const [currentStep, setCurrentStep] = useState(1)
  const totalSteps = 9

  // Load saved progress if user is logged in
  useEffect(() => {
    if (user) {
      const savedProgress = localStorage.getItem(`journey_${user.id}`)
      if (savedProgress) {
        const parsed = JSON.parse(savedProgress)
        setJourneyData(parsed.data)
        setCurrentStep(parsed.step)
      }
    }
  }, [user])

  // Save progress whenever data changes
  useEffect(() => {
    if (user && currentStep > 1) {
      localStorage.setItem(`journey_${user.id}`, JSON.stringify({
        data: journeyData,
        step: currentStep,
        lastSaved: new Date().toISOString()
      }))
    }
  }, [journeyData, currentStep, user])

  const updateJourneyData = (key, value) => {
    setJourneyData(prev => ({ ...prev, [key]: value }))
  }

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(prev => prev + 1)
      window.scrollTo(0, 0)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1)
      window.scrollTo(0, 0)
    }
  }

  const goToStep = (stepNumber) => {
    if (stepNumber >= 1 && stepNumber <= totalSteps) {
      setCurrentStep(stepNumber)
      window.scrollTo(0, 0)
    }
  }

  const resetJourney = () => {
    setJourneyData({
      rent: '',
      carPayment: '',
      food: '',
      insurance: '',
      essential: '',
      nonEssential: '',

      // Emergency fund data
      emergencyFundGoal: '',
      emergencyAccountType: '',

      employment: '',
      hasEmployer401k: null,
      age: '',
      currentSavings: 0,
      recommendedAccount: '',
      selectedInvestment: '',
      selectedProvider: '',
      completed: false
    })
    setCurrentStep(1)
    if (user) {
      localStorage.removeItem(`journey_${user.id}`)
    }
  }

  // Render current step
  const renderStep = () => {
    const stepProps = {
      journeyData,
      updateJourneyData,
      nextStep,
      prevStep,
      goToStep,
      resetJourney
    }

    switch (currentStep) {
      case 1: 
        return <YourSituation {...stepProps} />
      case 2:
        return <Budget {...stepProps} /> 
      
      case 3:
        return <EmergencyFund {...stepProps} />
      
      // case 5:
      //   return <ChooseProvider {...stepProps} />
      case 4:
        return <SetupGuide {...stepProps} />

      case 5:
        return <Recommendation {...stepProps} />
      case 6:
        return <AccountBasics {...stepProps} />
      case 7:
        return <ChooseInvestment {...stepProps} />
      
      case 8:
        return <Automation {...stepProps} />
      case 9:
        return <Celebration {...stepProps} />
      default:
        return <YourSituation {...stepProps} />
    }
  }

  return (
    <div className="min-h-screen bg-linear-to-r from-gray-50 to-gray-100">
      {/* Progress Bar */}
      <div className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-3">
              <button
                onClick={() => navigate('/')}
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <h2 className="text-lg font-bold text-gray-900">Your Investment Journey</h2>
            </div>
            <span className="text-sm font-semibold text-primary-600">
              Step {currentStep} of {totalSteps}
            </span>
          </div>

          {/* Progress bar */}
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className="bg-accent-purple-500 h-2.5 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            ></div>
          </div>

          {/* Step dots */}
          <div className="flex justify-between mt-3">
            {Array.from({ length: totalSteps }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToStep(index + 1)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index + 1 === currentStep
                    ? 'bg-accent-purple-500 ring-4 ring-accent-purple-200 scale-125'
                    : index + 1 < currentStep
                    ? 'bg-accent-green-500 hover:scale-110'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                title={`Step ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Step Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="animate-fadeIn">
          {renderStep()}
        </div>
      </div>

      {/* Save indicator for logged in users */}
      {user && currentStep > 1 && (
        <div className="fixed bottom-4 right-4 bg-white shadow-lg rounded-full px-4 py-2 text-sm text-gray-600 flex items-center space-x-2">
          <svg className="w-4 h-4 text-accent-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span>Progress saved</span>
        </div>
      )}
    </div>
  )
}

export default JourneyFlow