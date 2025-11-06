import React, { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useAuth } from '../context/AuthContext'
import { Player } from '@lottiefiles/react-lottie-player'
import plantAnimation from '../assets/growing.json'

const Home = () => {
  const { user } = useAuth()
  const [currentStep, setCurrentStep] = useState(0)
  const playerRef = useRef(null)
  const location = useLocation();

  const steps = [
    { title: "Open the right accounts" },
    { title: "Choose the right investments" },
    { title: "Save the right amount" },
    { title: "Automate it all" }
  ]

  useEffect(() => {
    const timer = setTimeout(() => {
      if (playerRef.current) {
        playerRef.current.stop()
        playerRef.current.play()
      }
    }, 100) // Small delay ensures player is ready
    
    return () => clearTimeout(timer)
  }, [location.key])  // ← Triggers on navigation

  // 🌱 Sequentially reveal steps
  useEffect(() => {
    setCurrentStep(0)
    const timers = steps.map((_, i) =>
      setTimeout(() => setCurrentStep(i + 1), (i + 1) * 800)
    )
    return () => timers.forEach(clearTimeout)
  }, [location.key])

  if (user) {
    return <LoggedInHome user={user} />
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="flex-1 flex items-center justify-center px-4 pt-15 pb-20 min-h-screen static-background">
        <div className="max-w-6xl w-full">
          <div className="text-center mb-16 animate-fadeIn">
            <h1 className="text-5xl md:text-6xl font-bold text-primary-100 mb-6">
              Start your investment journey today.
            </h1>
            <p className="text-xl text-primary-400 mb-4 max-w-2xl mx-auto">
              We walk you through the first steps... wherever you are in life.
            </p>
          </div>

          {/* Visual + Steps Section */}
          <section className="relative pb-10 lg:pb-15 flex flex-col md:flex-row items-center justify-center gap-16 md:gap-28 px-6 md:px-16">
            
            {/* LEFT: Animation + Signup */}
            <div className="relative flex flex-col items-center w-full md:w-1/2">
              <div className="absolute inset-0 bg-gradient-to-b from-green-100/30 to-transparent blur-2xl rounded-full"></div>
              <Player
                ref={playerRef}
                autoplay
                loop={false}
                keepLastFrame
                src={plantAnimation}
                style={{
                  width: "100%",
                  maxWidth: "750px",
                  height: "auto",
                  transform: "scale(1.15)",
                }}
              />

            </div>
          

            {/* RIGHT: Steps */}
            <div className="flex flex-col space-y-6 lg:space-y-10 max-w-md w-full">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: currentStep > index ? 1 : 0,
                    y: currentStep > index ? 0 : 20,
                  }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg bg-green-500">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg md:text-xl text-primary-100">
                      {step.title}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          <div className="text-center animate-slideUp">
            <Link
              to="/journey"
              className="inline-block bg-gradient-to-r from-accent-green-500 to-accent-green-600 hover:from-accent-green-600 hover:to-accent-green-700 text-white text-2xl font-bold px-12 py-6 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              Get Started
            </Link>
          </div>

          
        </div>
      </section>

      {/* Not just another course section */}
      <section className="py-20 bg-gradient-to-br from-accent-green-50 to-accent-purple-50">
        <div className="max-w-6xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Not just another investing course.</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Most sites teach you what investing is. We help you actually do it — step by step, personalized to your goals and income.
          </p>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition">
              <div className="text-3xl mb-3">🧭</div>
              <h3 className="font-semibold text-lg text-gray-900 mb-2">Personalized Roadmap</h3>
              <p className="text-gray-600">Answer a few questions and get a plan tailored to your situation — not generic advice.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition">
              <div className="text-3xl mb-3">💬</div>
              <h3 className="font-semibold text-lg text-gray-900 mb-2">Real Guidance</h3>
              <p className="text-gray-600">We guide you through opening accounts, choosing funds, and setting up automation — like a real coach.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="font-semibold text-lg text-gray-900 mb-2">Action-Based</h3>
              <p className="text-gray-600">Less theory, more doing. We turn confusing finance steps into clear, 5-minute tasks.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Ready to start growing your wealth?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands taking control of their financial future
          </p>
          <Link
            to="/journey"
            className="inline-block bg-gradient-to-r from-accent-green-500 to-accent-green-600 hover:from-accent-green-600 hover:to-accent-green-700 text-white text-xl font-bold px-10 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Start Your Journey →
          </Link>
          <p className="text-sm text-gray-500 mt-4">Takes about 10 minutes • No credit card required</p>
        </div>
      </section>
    </div>
  )
}

// Logged-in user view
const LoggedInHome = ({ user }) => {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-accent-purple-600 to-accent-green-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">
            Welcome Back, {user.email.split('@')[0]}! 👋
          </h1>
          <p className="text-xl mb-8 opacity-90">
            Continue your journey to financial freedom
          </p>
          <div className="flex gap-4 justify-center">
            <Link to="/journey" className="btn-primary bg-white text-accent-purple-600 hover:bg-gray-100">
              Continue Journey
            </Link>
            <Link to="/dashboard" className="btn-secondary border-white text-white hover:bg-white/10">
              Go to Dashboard
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home