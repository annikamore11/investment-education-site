import React, { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import { X, Menu } from 'lucide-react'

// Import section configurations
import { welcomeConfig } from './sections/Welcome'
import { aboutConfig } from './sections/About'
// import { budgetIncomeConfig } from './sections/BudgetIncome'
// import { emergencyFundConfig } from './sections/EmergencyFund'
// import { retirementConfig } from './sections/Retirement'

const JourneyFlow = () => {
  const { user } = useAuth()
  const navigate = useNavigate()
  
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const mainContentRef = useRef(null)
  
  // Journey state - stores all user answers
  const [journeyData, setJourneyData] = useState({
    // About You data
    employment: '',
    hasEmployer401k: null,
    age: '',
    hasBankAccount: null,
    bankType: '',
    
    // Budget & Income data
    monthlyIncome: '',
    rent: '',
    carPayment: '',
    food: '',
    insurance: '',
    essential: '',
    nonEssential: '',

    // Emergency fund data
    emergencyFundGoal: '',
    emergencyAccountType: '',

    // Retirement data
    currentSavings: 0,
    recommendedAccount: '',
    selectedInvestment: '',
    selectedProvider: '',
    
    completed: false,

    // Section completion tracking
    sectionCompletion: {
      welcome: false,
      aboutYou: false,
      budgetIncome: false,
      emergencyFund: false,
      retirement: false,
    }
  })

  const [currentSection, setCurrentSection] = useState('welcome')
  const [currentStepInSection, setCurrentStepInSection] = useState(0)

  // Define all section configurations in order
  const sectionConfigs = [
    welcomeConfig,
    aboutConfig,
    // budgetIncomeConfig,
    // emergencyFundConfig,
    // retirementConfig,
  ]

  // Load saved progress if user is logged in
  useEffect(() => {
    if (user) {
      const savedProgress = localStorage.getItem(`journey_${user.id}`)
      if (savedProgress) {
        try {
          const parsed = JSON.parse(savedProgress)
          setJourneyData(parsed.data)
          setCurrentSection(parsed.section || 'welcome')
          setCurrentStepInSection(parsed.stepInSection || 0)
        } catch (error) {
          console.error('Error loading saved progress:', error)
        }
      }
    }
  }, [user])

  // Save progress whenever data changes
  useEffect(() => {
    if (user) {
      localStorage.setItem(`journey_${user.id}`, JSON.stringify({
        data: journeyData,
        section: currentSection,
        stepInSection: currentStepInSection,
        lastSaved: new Date().toISOString()
      }))
    }
  }, [journeyData, currentSection, currentStepInSection, user])

  // Update journey data (single field)
  const updateJourneyData = (key, value) => {
    setJourneyData(prev => ({ ...prev, [key]: value }))
  }

  // Update multiple fields at once
  const updateMultipleFields = (updates) => {
    setJourneyData(prev => ({ ...prev, ...updates }))
  }

  // Mark section as complete
  const markSectionComplete = (sectionId) => {
    setJourneyData(prev => ({
      ...prev,
      sectionCompletion: {
        ...prev.sectionCompletion,
        [sectionId]: true
      }
    }))
  }

  // Get current section config
  const getCurrentSection = () => {
    return sectionConfigs.find(s => s.id === currentSection)
  }

  // Get current steps (dynamically generated based on journey data)
  const getCurrentSteps = () => {
    const section = getCurrentSection()
    if (!section) return []
    
    // If section has getSteps function, use it (dynamic)
    if (typeof section.getSteps === 'function') {
      return section.getSteps(journeyData)
    }
    
    // Otherwise use static steps array
    return section.steps || []
  }

  // Scroll to top helper
  const scrollToTop = () => {
    setTimeout(() => {
      if (mainContentRef.current) {
        mainContentRef.current.scrollTo({ top: 0, behavior: 'smooth' })
      }
    }, 50)
  }

  // Navigate to next step
  const nextStep = () => {
    const section = getCurrentSection()
    const steps = getCurrentSteps()
    
    if (!section || steps.length === 0) return

    // Check if we're at the last step of the current section
    if (currentStepInSection < steps.length - 1) {
      // Move to next step in same section
      setCurrentStepInSection(prev => prev + 1)
    } else {
      // We're at the last step - complete section
      
      // Run section's onComplete hook if it exists
      if (section.onComplete) {
        section.onComplete(journeyData, updateJourneyData, updateMultipleFields)
      }
      
      // Mark section as complete
      markSectionComplete(currentSection)
      
      // Move to next section
      const currentSectionIndex = sectionConfigs.findIndex(s => s.id === currentSection)
      if (currentSectionIndex < sectionConfigs.length - 1) {
        const nextSection = sectionConfigs[currentSectionIndex + 1]
        setCurrentSection(nextSection.id)
        setCurrentStepInSection(0)
      } else {
        // Journey complete!
        updateJourneyData('completed', true)
      }
    }
    
    scrollToTop()
  }

  // Navigate to previous step
  const prevStep = () => {
    const steps = getCurrentSteps()
    
    if (currentStepInSection > 0) {
      // Go back to previous step in same section
      setCurrentStepInSection(prev => prev - 1)
    } else {
      // Go back to last step of previous section
      const currentSectionIndex = sectionConfigs.findIndex(s => s.id === currentSection)
      if (currentSectionIndex > 0) {
        const prevSectionConfig = sectionConfigs[currentSectionIndex - 1]
        setCurrentSection(prevSectionConfig.id)
        
        // Get the steps for the previous section (might be dynamic)
        const prevSteps = typeof prevSectionConfig.getSteps === 'function'
          ? prevSectionConfig.getSteps(journeyData)
          : prevSectionConfig.steps || []
        
        setCurrentStepInSection(Math.max(0, prevSteps.length - 1))
      }
    }
    
    scrollToTop()
  }

  // Navigate to a specific section (from sidebar)
  const goToSection = (sectionId) => {
    setCurrentSection(sectionId)
    setCurrentStepInSection(0)
    scrollToTop()
  }

  // Reset entire journey
  const resetJourney = () => {
    if (!window.confirm('Are you sure you want to reset your entire journey? This cannot be undone.')) {
      return
    }

    setJourneyData({
      employment: '',
      hasEmployer401k: null,
      age: '',
      hasBankAccount: null,
      bankType: '',
      monthlyIncome: '',
      rent: '',
      carPayment: '',
      food: '',
      insurance: '',
      essential: '',
      nonEssential: '',
      emergencyFundGoal: '',
      emergencyAccountType: '',
      currentSavings: 0,
      recommendedAccount: '',
      selectedInvestment: '',
      selectedProvider: '',
      completed: false,
      sectionCompletion: {
        welcome: false,
        aboutYou: false,
        budgetIncome: false,
        emergencyFund: false,
        retirement: false,
      }
    })
    
    setCurrentSection('welcome')
    setCurrentStepInSection(0)
    
    if (user) {
      localStorage.removeItem(`journey_${user.id}`)
    }

    scrollToTop()
  }

  // Render the current step component
  const renderStep = () => {
    const section = getCurrentSection()
    const steps = getCurrentSteps()
    
    if (!section || !steps[currentStepInSection]) {
      return (
        <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
          <p className="text-gray-600">Step not found</p>
          <button 
            onClick={() => goToSection('welcome')} 
            className="mt-4 btn-primary"
          >
            Return to Start
          </button>
        </div>
      )
    }

    const StepComponent = steps[currentStepInSection]
    
    // Props passed to every step component
    const stepProps = {
      journeyData,
      updateJourneyData,
      updateMultipleFields,
      nextStep,
      prevStep,
      resetJourney,
      currentStepInSection,
      totalStepsInSection: steps.length,
      sectionId: section.id,
    }

    return <StepComponent {...stepProps} />
  }

  

  // Section progress bar component
  const SectionProgressBar = ({ currentStep, totalSteps }) => {
    const progress = (currentStep / totalSteps) * 100

    return (
      <div className="w-full bg-gray-800 rounded-full h-2.5 mb-2">
        <div
          className="bg-accent-green-600 h-2.5 rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
        <div className="text-sm text-primary-100 mt-1 text-right">
          Step {currentStep} of {totalSteps}
        </div>
      </div>
    )
  }

  return (
    <>
      {/* Background Layer */}
      <div className="fixed inset-0 overflow-hidden static-background"></div>
      
      {/* Main Container */}
      <div className="min-h-screen relative" style={{ zIndex: 1 }}>
        {/* Top border line */}
        <div className="border-b border-primary-400 fixed top-16 left-0 right-0 z-50"></div>
        
        {/* Hamburger Menu Button - Only visible when sidebar is closed */}
        {!isSidebarOpen && (
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="fixed top-20 left-4 z-50 bg-zinc-950 shadow-lg rounded-lg p-3 hover:bg-gray-700 transition-all"
            aria-label="Open navigation"
          >
            <Menu className="w-6 h-6 text-primary-100" />
          </button>
        )}

        {/* Content wrapper with padding top for navbar */}
        <div className="pt-16 relative">
          {/* Sidebar */}
          <aside 
            className={`
              absolute top-18 left-0 bg-zinc-950 shadow-lg transition-transform duration-300 ease-in-out z-40 border-r border-primary-400
              ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
              w-64 flex flex-col
            `}
            style={{ minHeight: 'calc(100vh - 4rem)' }}
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
              {sectionConfigs.map((section) => {
                const isCompleted = journeyData.sectionCompletion[section.id]
                const isActive = currentSection === section.id

                return (
                  <button
                    key={section.id}
                    onClick={() => goToSection(section.id)}
                    className={`
                      w-full text-left px-4 py-3 rounded-lg transition-all duration-200 flex items-center justify-between
                      ${isActive 
                        ? 'bg-accent-green-600 border border-accent-green-800 text-primary-100 shadow-md' 
                        : isCompleted 
                          ? 'bg-green-50 border border-green-200 text-green-700 hover:bg-green-100' 
                          : 'bg-accent-purple-50 border border-accent-purple-200 text-gray-800 opacity-50'
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
          <div className={`transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-0'}`}>
            {/* Scrollable container with fixed height */}
            <div 
              ref={mainContentRef}
              className="h-[calc(100vh-4rem)] overflow-y-auto scroll-smooth"
            >
              <div className="max-w-6xl mx-auto px-8 py-8 min-h-full">
                <div 
                  key={`${currentSection}-${currentStepInSection}`}
                  className="fadeInCard"
                >
                  {/* Section Progress Bar (only show if section has multiple steps) */}
                  {getCurrentSection()?.multipleSteps && getCurrentSteps().length > 1 && (
                    <div className="mb-6">
                      <SectionProgressBar 
                        currentStep={currentStepInSection + 1}
                        totalSteps={getCurrentSteps().length}
                      />
                    </div>
                  )}

                  {/* Render the current step */}
                  {renderStep()}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Save indicator for logged in users */}
        {user && (
          <div className="fixed bottom-4 right-4 bg-zinc-950 shadow-lg rounded-full px-4 py-2 text-sm text-primary-100 flex items-center space-x-2 z-50">
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

      