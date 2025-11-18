// import React, { useEffect } from 'react'
// import { useNavigate } from 'react-router-dom'
// import { useAuth } from '../../../context/AuthContext'

// const Celebration = ({ journeyData, updateJourneyData, resetJourney }) => {
//   const navigate = useNavigate()
//   const { user } = useAuth()

//   useEffect(() => {
//     // Mark journey as completed
//     updateJourneyData('completed', true)
//   }, [])

//   const providerNames = {
//     'fidelity': 'Fidelity',
//     'vanguard': 'Vanguard',
//     'schwab': 'Charles Schwab'
//   }

//   return (
//     <div className="max-w-3xl mx-auto">
//       <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center">
//         {/* Celebration */}
//         <div className="mb-8">
//           <div className="text-8xl mb-4 animate-bounce">🎉</div>
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//             Congratulations!
//           </h2>
//           <p className="text-2xl text-gray-600">
//             You just took control of your financial future
//           </p>
//         </div>

//         {/* What they accomplished */}
//         <div className="bg-linear-to-r from-accent-green-50 to-accent-purple-50 rounded-xl p-8 mb-8 border-2 border-accent-purple-200">
//           <h3 className="text-xl font-bold text-gray-900 mb-6">
//             Here's what you accomplished today:
//           </h3>
//           <div className="space-y-4 text-left">
//             <div className="flex items-start space-x-3">
//               <svg className="w-6 h-6 text-accent-green-500 mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
//               </svg>
//               <p className="text-gray-700">
//                 <strong>Found the right account:</strong> You're opening a{' '}
//                 <span className="text-accent-purple-600 font-bold">
//                   {journeyData.recommendedAccount === '401k' ? '401(k)' : journeyData.recommendedAccount === 'roth-ira' ? 'Roth IRA' : 'Solo 401(k)'}
//                 </span>
//               </p>
//             </div>
//             <div className="flex items-start space-x-3">
//               <svg className="w-6 h-6 text-accent-green-500 mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
//               </svg>
//               <p className="text-gray-700">
//                 <strong>Chose your investment:</strong>{' '}
//                 {journeyData.selectedInvestment === 'target-date' ? 'Target Date Fund' : 'Total Stock Market Index'}
//               </p>
//             </div>
//             <div className="flex items-start space-x-3">
//               <svg className="w-6 h-6 text-accent-green-500 mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
//               </svg>
//               <p className="text-gray-700">
//                 <strong>Picked a provider:</strong> {providerNames[journeyData.selectedProvider] || 'Your chosen brokerage'}
//               </p>
//             </div>
//             <div className="flex items-start space-x-3">
//               <svg className="w-6 h-6 text-accent-green-500 mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
//               </svg>
//               <p className="text-gray-700">
//                 <strong>Learned how to automate:</strong> Set it and forget it!
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* The reality check */}
//         <div className="bg-gray-50 rounded-xl p-6 mb-8 text-left">
//           <h3 className="text-lg font-bold text-gray-900 mb-3">💬 Real talk</h3>
//           <p className="text-gray-700 mb-3">
//             Starting to invest is <strong>way scarier</strong> than it actually is. Most people put it off for years 
//             because it feels overwhelming. You didn't. You took action.
//           </p>
//           <p className="text-gray-700">
//             That alone puts you ahead of most people your age. Seriously, pat yourself on the back. 🌟
//           </p>
//         </div>

//         {/* What's next */}
//         <div className="bg-accent-purple-50 border-2 border-accent-purple-200 rounded-xl p-6 mb-8 text-left">
//           <h3 className="text-xl font-bold text-accent-purple-900 mb-4">
//             What's Next?
//           </h3>
//           <div className="space-y-3">
//             <div className="flex items-start space-x-3">
//               <span className="text-2xl">1️⃣</span>
//               <div>
//                 <p className="font-semibold text-gray-900">Finish opening your account</p>
//                 <p className="text-sm text-gray-600">Complete the steps from the setup guide</p>
//               </div>
//             </div>
//             <div className="flex items-start space-x-3">
//               <span className="text-2xl">2️⃣</span>
//               <div>
//                 <p className="font-semibold text-gray-900">Set up automatic contributions</p>
//                 <p className="text-sm text-gray-600">Make saving effortless</p>
//               </div>
//             </div>
//             <div className="flex items-start space-x-3">
//               <span className="text-2xl">3️⃣</span>
//               <div>
//                 <p className="font-semibold text-gray-900">Check it once a year</p>
//                 <p className="text-sm text-gray-600">Resist the urge to check constantly. Let time work its magic!</p>
//               </div>
//             </div>
//             <div className="flex items-start space-x-3">
//               <span className="text-2xl">4️⃣</span>
//               <div>
//                 <p className="font-semibold text-gray-900">Increase contributions when you can</p>
//                 <p className="text-sm text-gray-600">Got a raise? Bump up your savings rate</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Action buttons */}
//         <div className="space-y-4">
//           {user && (
//             <button
//               onClick={() => navigate('/dashboard')}
//               className="w-full bg-accent-purple-600 hover:bg-accent-purple-700 text-white font-bold py-4 px-8 rounded-xl transition-all transform hover:scale-105 shadow-lg"
//             >
//               Go to Your Dashboard
//             </button>
//           )}
          
//           <button
//             onClick={() => navigate('/')}
//             className="w-full bg-white border-2 border-gray-300 text-gray-700 font-semibold py-4 px-8 rounded-xl hover:bg-gray-50 transition-all"
//           >
//             Return to Home
//           </button>

//           <button
//             onClick={resetJourney}
//             className="w-full text-sm text-gray-500 hover:text-gray-700 py-2"
//           >
//             Start journey over (for someone else)
//           </button>
//         </div>

//         {/* Final encouragement */}
//         <div className="mt-12 pt-8 border-t border-gray-200">
//           <p className="text-gray-600 italic">
//             "The best time to plant a tree was 20 years ago. The second best time is now."
//           </p>
//           <p className="text-sm text-gray-500 mt-2">
//             You just planted your tree. 🌱
//           </p>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Celebration