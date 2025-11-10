import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import { X, Menu } from 'lucide-react'

// Import all step components
import Budget from './steps/Budget'
import EmergencyFund from './steps/EmergencyFund'
import YourSituation from './steps/YourSituation'
import Recommendation from './steps/Recommendation'
import AccountBasics from './steps/AccountBasics'
import ChooseInvestment from './steps/ChooseInvestment'
import SetupGuide from './steps/SetupGuide'
import Automation from './steps/Automation'
import Celebration from './steps/Celebration'

const JourneyFlow = () => {
  const { user } = useAuth()
  const navigate = useNavigate()
  
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const contentRef = React.useRef(null)
  
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
    completed: false,

    // Section completion tracking
    sectionCompletion: {
      aboutYou: false,
      budgetIncome: false,
      emergencyFund: false,
      retirement: false,
      brokerage: false
    }
  })

  const [currentStep, setCurrentStep] = useState(1)
  const [currentSection, setCurrentSection] = useState('aboutYou')
  const totalSteps = 9

  // Define sections with their steps
  const sections = [
    {
      id: 'aboutYou',
      title: 'About You',
      steps: [1]
    },
    {
      id: 'budgetIncome',
      title: 'Budget & Income',
      steps: [2]
    },
    {
      id: 'emergencyFund',
      title: 'Emergency Fund',
      steps: [3]
    },
    {
      id: 'retirement',
      title: 'Retirement',
      steps: [4, 5, 6, 7]
    },
    {
      id: 'brokerage',
      title: 'Brokerage',
      steps: [8, 9]
    }
  ]

  // Load saved progress if user is logged in
  useEffect(() => {
    if (user) {
      const savedProgress = localStorage.getItem(`journey_${user.id}`)
      if (savedProgress) {
        const parsed = JSON.parse(savedProgress)
        setJourneyData(parsed.data)
        setCurrentStep(parsed.step)
        setCurrentSection(parsed.section || 'aboutYou')
      }
    }
  }, [user])

  // Save progress whenever data changes
  useEffect(() => {
    if (user && currentStep > 1) {
      localStorage.setItem(`journey_${user.id}`, JSON.stringify({
        data: journeyData,
        step: currentStep,
        section: currentSection,
        lastSaved: new Date().toISOString()
      }))
    }
  }, [journeyData, currentStep, currentSection, user])

  // Update current section based on current step
  useEffect(() => {
    const section = sections.find(s => s.steps.includes(currentStep))
    if (section) {
      setCurrentSection(section.id)
    }
  }, [currentStep])

  const updateJourneyData = (key, value) => {
    setJourneyData(prev => ({ ...prev, [key]: value }))
  }

  const markSectionComplete = (sectionId) => {
    setJourneyData(prev => ({
      ...prev,
      sectionCompletion: {
        ...prev.sectionCompletion,
        [sectionId]: true
      }
    }))
  }

  const nextStep = () => {
    if (currentStep < totalSteps) {
      // Check if we're completing a section
      const currentSectionData = sections.find(s => s.id === currentSection)
      if (currentSectionData && currentSectionData.steps[currentSectionData.steps.length - 1] === currentStep) {
        markSectionComplete(currentSection)
      }
      
      setCurrentStep(prev => prev + 1)
      
      // Scroll content area to top with smooth behavior
      if (contentRef.current) {
        contentRef.current.scrollTo({ top: 0, behavior: 'smooth' })
      }
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1)
      
      // Scroll content area to top with smooth behavior
      if (contentRef.current) {
        contentRef.current.scrollTo({ top: 0, behavior: 'smooth' })
      }
    }
  }

  const goToStep = (stepNumber) => {
    if (stepNumber >= 1 && stepNumber <= totalSteps) {
      setCurrentStep(stepNumber)
      
      // Scroll content area to top with smooth behavior
      if (contentRef.current) {
        contentRef.current.scrollTo({ top: 0, behavior: 'smooth' })
      }
    }
  }

  const goToSection = (sectionId) => {
    const section = sections.find(s => s.id === sectionId)
    if (section) {
      setCurrentStep(section.steps[0])
      setCurrentSection(sectionId)
      
      // Scroll content area to top with smooth behavior
      if (contentRef.current) {
        contentRef.current.scrollTo({ top: 0, behavior: 'smooth' })
      }
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
      completed: false,
      
      sectionCompletion: {
        aboutYou: false,
        budgetIncome: false,
        emergencyFund: false,
        retirement: false,
        brokerage: false
      }
    })
    setCurrentStep(1)
    setCurrentSection('aboutYou')
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
      case 4:
        return <Recommendation {...stepProps} />
      case 5:
        return <AccountBasics {...stepProps} />
      case 6:
        return <ChooseInvestment {...stepProps} />
      case 7:
        return <SetupGuide {...stepProps} />
      case 8:
        return <Automation {...stepProps} />
      case 9:
        return <Celebration {...stepProps} />
      default:
        return <YourSituation {...stepProps} />
    }
  }

  return (
    <>
      {/* Background Layer - uses your static-background CSS */}
      <div className="fixed inset-0 overflow-hidden static-background"></div>
      <div className="border-b border-primary-400 z-50 fixed top-20 left-0 right-0"></div>
      {/* Main Container - all content above background */}
      <div className="min-h-screen relative" style={{ zIndex: 1 }}>
        {/* Hamburger Menu Button - Only visible when sidebar is closed */}
        {!isSidebarOpen && (
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="fixed top-25 left-4 z-50 bg-zinc-950 shadow-lg rounded-lg p-3 hover:bg-gray-700 transition-all"
            aria-label="Open navigation"
          >
            <Menu className="w-6 h-6 text-primary-100" />
          </button>
        )}

        {/* Sidebar */}
        <aside 
          className={`
            fixed top-20 left-0 h-[calc(100vh-4rem)] bg-zinc-950 shadow-lg transition-transform duration-300 ease-in-out z-40 border border-primary-400
            ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
            w-64 flex flex-col overflow-hidden
          `}
        >
          {/* Sidebar Header */}
          <div className="flex items-center justify-between p-6">
            <h2 className="text-xl font-bold text-primary-100">Your Journey</h2>
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="p-1 hover:bg-gray-700 rounded-lg transition-colors"
              aria-label="Close navigation"
            >
              <X className="w-5 h-5 text-primary-100" />
            </button>
          </div>

          {/* Scrollable Navigation */}
          <nav className="flex-1 overflow-y-auto p-6 space-y-2">
            {sections.map((section, index) => {
              const isCompleted = journeyData.sectionCompletion[section.id]
              const isActive = currentSection === section.id

              return (
                <button
                  key={section.id}
                  onClick={() => goToSection(section.id)}
                  className={`
                    w-full text-left px-4 py-3 rounded-lg transition-all duration-200 flex items-center justify-between
                    ${isActive 
                      ? 'bg-accent-purple-600 border border-accent-purple-800 text-primary-100 shadow-md' 
                      : isCompleted 
                        ? 'bg-green-50 border border-green-200 text-green-700 hover:bg-green-100' 
                        : 'bg-gray-50 border border-gray-200 text-gray-800 opacity-50'
                    }
                  `}
                >
                  <div className="font-medium">{section.title}</div>
                  {isCompleted && !isActive && (
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </button>
              )
            })}
          </nav>
        </aside>

        {/* Main Content */}
        <div className={`transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-0'} pt-20`}>
          {/* Scrollable Content Area */}
          <div ref={contentRef} className="h-[calc(100vh-4rem)] overflow-y-auto scroll-smooth">
            <div className="max-w-4xl mx-auto px-8 py-8">
              <div className="animate-fadeIn">
                {renderStep()}
              </div>
            </div>
          </div>
        </div>

        {/* Save indicator for logged in users */}
        {user && currentStep > 1 && (
          <div className="fixed bottom-4 right-4 bg-zinc-950 shadow-lg rounded-full px-4 py-2 text-sm text-gray-600 flex items-center space-x-2 z-50">
            <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>Progress saved</span>
          </div>
        )}
      </div>
    </>
  )
}

export default JourneyFlow

      {/* Progress Bar */}
      {/* <div className="bg-white shadow-md sticky top-0 z-50">
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
          </div> */}

          {/* Progress bar */}
          {/* <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className="bg-accent-purple-500 h-2.5 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            ></div>
          </div> */}

          {/* Step dots */}
          {/* <div className="flex justify-between mt-3">
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
      </div> */}