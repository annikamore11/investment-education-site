// import React, { useState } from 'react'

// const EmergencyFund = ({ journeyData, updateJourneyData, nextStep, prevStep }) => {
//   const [selectedAmount, setSelectedAmount] = useState(journeyData.emergencyFundGoal || '')
//   const [selectedAccount, setSelectedAccount] = useState(journeyData.emergencyAccountType || '')
//   const [showBrokerageGuide, setShowBrokerageGuide] = useState(false)
//   const [showBankWarning, setShowBankWarning] = useState(false)

//   // Calculate recommended emergency fund range
//   const monthlyExpenses = journeyData.monthlyTotal || 0
//   const minRecommended = monthlyExpenses * 3
//   const maxRecommended = monthlyExpenses * 6

//   // Preset amounts based on their expenses
//   const suggestedAmounts = [
//     { value: minRecommended, label: `$${minRecommended.toLocaleString()}`, months: '3 months' },
//     { value: monthlyExpenses * 4, label: `$${(monthlyExpenses * 4).toLocaleString()}`, months: '4 months' },
//     { value: monthlyExpenses * 5, label: `$${(monthlyExpenses * 5).toLocaleString()}`, months: '5 months' },
//     { value: maxRecommended, label: `$${maxRecommended.toLocaleString()}`, months: '6 months' },
//   ]

//   const handleAccountSelection = (type) => {
//     setSelectedAccount(type)
//     if (type === 'brokerage') {
//       setShowBrokerageGuide(true)
//       setShowBankWarning(false)
//     } else if (type === 'bank') {
//       setShowBankWarning(true)
//       setShowBrokerageGuide(false)
//     }
//   }

//   const handleNext = () => {
//     updateJourneyData('emergencyFundGoal', selectedAmount)
//     updateJourneyData('emergencyAccountType', selectedAccount)
//     updateJourneyData('selectedProvider', selectedProvider)
//     nextStep()
//   }

//   const isComplete = selectedAmount && selectedAccount

//   // Interest comparison for bank warning
//   const yearsToCompare = 5
//   const bankInterest = 0 // 0%
//   const brokerageInterest = 0.05 // 5% for money market
//   const bankValue = selectedAmount
//   const brokerageValue = selectedAmount * Math.pow(1 + brokerageInterest, yearsToCompare)
//   const difference = brokerageValue - bankValue

//   const [selectedProvider, setSelectedProvider] = useState(journeyData.selectedProvider || '')
  
//     const providers = [
//         {
//         id: 'fidelity',
//         name: 'Fidelity',
//         logo: '🟢',
//         bestFor: 'Best overall for beginners',
//         pros: ['Easy to use website & app', 'Great customer service', 'No account minimums', 'Excellent research tools'],
//         url: 'https://www.fidelity.com'
//         },
//         {
//         id: 'vanguard',
//         name: 'Vanguard',
//         logo: '🔴',
//         bestFor: 'Best for low-cost investing',
//         pros: ['Lowest expense ratios', 'Investor-owned (profits go to you)', 'Pioneer of index funds', 'Strong reputation'],
//         url: 'https://www.vanguard.com'
//         },
//         {
//         id: 'schwab',
//         name: 'Charles Schwab',
//         logo: '🔵',
//         bestFor: 'Best for full-service banking',
//         pros: ['Great mobile app', 'Physical branches nationwide', 'Good for checking accounts too', 'Excellent tools'],
//         url: 'https://www.schwab.com'
//         }
//     ]


//   return (
//     <div className="max-w-3xl mx-auto">
//       <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
//         {!showBrokerageGuide && !showBankWarning ? (
//           <>
//             {/* Introduction */}
//             <div className="mb-8">
//               <h2 className="text-3xl font-bold text-gray-900 mb-2">
//                 Step 1: Build Your Emergency Fund
//               </h2>
//               <p className="text-xl text-gray-600">
//                 Now that we know your expenses, let's make sure you're protected
//               </p>
//             </div>

//             {/* Why Emergency Fund */}
//             <div className="bg-gradient-to-r from-red-50 to-orange-50 border-2 border-orange-200 rounded-xl p-6 mb-8">
//               <div className="flex items-start space-x-3">
//                 <div className="text-3xl">🛡️</div>
//                 <div>
//                   <h3 className="text-xl font-bold text-orange-900 mb-2">
//                     Why You Need This
//                   </h3>
//                   <p className="text-orange-800 mb-3">
//                     Life happens. Jobs end. Cars break down. Medical emergencies occur. 
//                     Having 3-6 months of expenses saved means you won't have to go into debt 
//                     or sell your investments when something unexpected happens.
//                   </p>
//                   <p className="text-orange-800 font-semibold">
//                     This is your financial safety net. Set it up first, then invest.
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* Recommended Amount */}
//             <div className="mb-8">
//               <div className="bg-blue-50 rounded-xl p-6 border-2 border-blue-200 mb-6">
//                 <p className="text-blue-900 font-semibold mb-2">
//                   📊 Based on your monthly expenses of ${monthlyExpenses.toLocaleString()}:
//                 </p>
//                 <p className="text-2xl font-bold text-blue-900">
//                   We recommend ${minRecommended.toLocaleString()} - ${maxRecommended.toLocaleString()}
//                 </p>
//                 <p className="text-sm text-blue-700 mt-2">That's 3-6 months of expenses</p>
//               </div>

//               <label className="block text-lg font-semibold text-gray-900 mb-4">
//                 What amount would you feel comfortable with?
//               </label>

//               <div className="grid grid-cols-2 gap-3 mb-3">
//                 {suggestedAmounts.map(amount => (
//                   <button
//                     key={amount.value}
//                     onClick={() => setSelectedAmount(amount.value)}
//                     className={`p-4 rounded-xl border-2 transition-all ${
//                       selectedAmount === amount.value
//                         ? 'border-accent-purple-500 bg-accent-purple-50 shadow-lg'
//                         : 'border-gray-200 hover:border-accent-purple-300 hover:bg-gray-50'
//                     }`}
//                   >
//                     <p className="text-2xl font-bold text-gray-900">{amount.label}</p>
//                     <p className="text-sm text-gray-600">{amount.months}</p>
//                     {selectedAmount === amount.value && (
//                       <svg className="w-6 h-6 text-accent-purple-600 mx-auto mt-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
//                       </svg>
//                     )}
//                   </button>
//                 ))}
//               </div>

//               {/* Other Amount Option */}
//               <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-200 rounded-xl p-6">
//                 <div className="flex items-center justify-between mb-3">
//                   <label className="text-lg font-semibold text-gray-900">
//                     Or enter your own amount
//                   </label>
//                 </div>
//                 <div className="flex items-center mb-4">
//                   <span className="text-2xl font-bold text-gray-700 mr-2">$</span>
//                   <input
//                     type="text"
//                     inputMode="decimal"
//                     placeholder="5000"
//                     value={typeof selectedAmount === 'number' && !suggestedAmounts.some(a => a.value === selectedAmount) ? selectedAmount : ''}
//                     onChange={(e) => {
//                       const value = e.target.value.replace(/[^\d]/g, '')
//                       if (value) {
//                         setSelectedAmount(parseInt(value))
//                       } else {
//                         setSelectedAmount('')
//                       }
//                     }}
//                     className="flex-1 text-2xl font-bold p-3 border-2 border-purple-300 rounded-lg focus:border-accent-purple-500 focus:outline-none"
//                   />
//                 </div>
//                 <div className="bg-white rounded-lg p-4 border-2 border-purple-200">
//                   <div className="flex items-start space-x-2">
//                     <span className="text-xl">💡</span>
//                     <div className="flex-1">
//                       <p className="text-sm text-gray-700 font-semibold mb-1">
//                         Starting smaller? That's totally okay!
//                       </p>
//                       <p className="text-sm text-gray-600">
//                         You don't need to have the full amount right away. Many people build their emergency fund over time by transferring money every paycheck or whenever they're comfortable. Even starting with $1,000 is better than $0!
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Where to Keep It */}
//             {selectedAmount && (
//               <div className="mb-8 animate-slideUp">
//                 <h3 className="text-2xl font-bold text-gray-900 mb-4">
//                   Where should you keep this money?
//                 </h3>
//                 <p className="text-gray-600 mb-6">
//                   You want your emergency fund to be safe, easily accessible, 
//                   and earning some interest while it sits there.
//                 </p>

//                 <div className="space-y-4">
//                   {/* Brokerage Account - Recommended */}
//                   <button
//                     onClick={() => handleAccountSelection('brokerage')}
//                     className={`w-full text-left p-6 rounded-xl border-2 transition-all ${
//                       selectedAccount === 'brokerage'
//                         ? 'border-accent-purple-500 bg-accent-purple-50 shadow-lg'
//                         : 'border-gray-200 hover:border-accent-purple-300 hover:bg-gray-50'
//                     }`}
//                   >
//                     <div className="flex items-start justify-between">
//                       <div className="flex-1">
//                         <div className="flex items-center space-x-2 mb-2">
//                           <span className="text-2xl">📈</span>
//                           <h4 className="text-xl font-bold text-gray-900">Brokerage Account (Money Market Fund)</h4>
//                           <span className="px-3 py-1 bg-accent-green-500 text-white text-xs font-bold rounded-full">
//                             RECOMMENDED
//                           </span>
//                         </div>
//                         <div className="space-y-2 mt-3">
//                           <div className="flex items-center space-x-2 text-sm">
//                             <svg className="w-5 h-5 text-accent-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                             </svg>
//                             <span className="text-gray-700">Earn ~5% interest (vs 0% in checking)</span>
//                           </div>
//                           <div className="flex items-center space-x-2 text-sm">
//                             <svg className="w-5 h-5 text-accent-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                             </svg>
//                             <span className="text-gray-700">Just as safe as a bank account (FDIC-like protection)</span>
//                           </div>
//                           <div className="flex items-center space-x-2 text-sm">
//                             <svg className="w-5 h-5 text-accent-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                             </svg>
//                             <span className="text-gray-700">Out of sight, out of mind (less tempting to spend)</span>
//                           </div>
//                           <div className="flex items-center space-x-2 text-sm">
//                             <svg className="w-5 h-5 text-accent-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                             </svg>
//                             <span className="text-gray-700">You'll use this account for investing later anyway</span>
//                           </div>
//                         </div>
//                       </div>
//                       {selectedAccount === 'brokerage' && (
//                         <svg className="w-8 h-8 text-accent-purple-600 ml-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
//                         </svg>
//                       )}
//                     </div>
//                   </button>

//                   {/* Bank Account */}
//                   <button
//                     onClick={() => handleAccountSelection('bank')}
//                     className={`w-full text-left p-6 rounded-xl border-2 transition-all ${
//                       selectedAccount === 'bank'
//                         ? 'border-gray-400 bg-gray-50 shadow-lg'
//                         : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
//                     }`}
//                   >
//                     <div className="flex items-start justify-between">
//                       <div className="flex-1">
//                         <div className="flex items-center space-x-2 mb-2">
//                           <span className="text-2xl">🏦</span>
//                           <h4 className="text-xl font-bold text-gray-900">Bank Checking/Savings Account</h4>
//                         </div>
//                         <div className="space-y-2 mt-3">
//                           <div className="flex items-center space-x-2 text-sm">
//                             <svg className="w-5 h-5 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
//                             </svg>
//                             <span className="text-gray-700">Usually earns 0% interest (money loses value to inflation)</span>
//                           </div>
//                           <div className="flex items-center space-x-2 text-sm">
//                             <svg className="w-5 h-5 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
//                             </svg>
//                             <span className="text-gray-700">Too easy to access (temptation to dip into it)</span>
//                           </div>
//                           <div className="flex items-center space-x-2 text-sm">
//                             <svg className="w-5 h-5 text-accent-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                             </svg>
//                             <span className="text-gray-700">Familiar and convenient</span>
//                           </div>
//                         </div>
//                       </div>
//                       {selectedAccount === 'bank' && (
//                         <svg className="w-8 h-8 text-gray-600 ml-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
//                         </svg>
//                       )}
//                     </div>
//                   </button>
//                 </div>
//               </div>
//             )}

//             {/* Navigation */}
//             <div className="flex gap-4 mt-8">
//               <button
//                 onClick={prevStep}
//                 className="px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-all"
//               >
//                 ← Back
//               </button>
//               <button
//                 onClick={() => {
//                   if (selectedAccount === 'brokerage') {
//                     setShowBrokerageGuide(true)
//                   } else if (selectedAccount === 'bank') {
//                     setShowBankWarning(true)
//                   }
//                 }}
//                 disabled={!isComplete}
//                 className={`flex-1 py-3 px-6 font-bold rounded-xl transition-all ${
//                   isComplete
//                     ? 'bg-accent-purple-600 hover:bg-accent-purple-700 text-white shadow-lg transform hover:scale-105'
//                     : 'bg-gray-200 text-gray-400 cursor-not-allowed'
//                 }`}
//               >
//                 {selectedAccount === 'brokerage' ? 'Show Me How to Set This Up →' : selectedAccount === 'bank' ? 'Continue with Bank Account →' : 'Select an Option'}
//               </button>
//             </div>
//           </>
//         ) : showBrokerageGuide ? (
//           /* Brokerage Setup Guide */
//           <>
//             <h2 className="text-3xl font-bold text-gray-900 mb-6">
//               Setting Up Your Emergency Fund in a Brokerage
//             </h2>

//             {/* What is a Money Market Fund */}
//             <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6 mb-8">
//               <h3 className="text-xl font-bold text-blue-900 mb-3 flex items-center">
//                 <span className="mr-2">💡</span> What's a Money Market Fund?
//               </h3>
//               <div className="space-y-2 text-blue-800">
//                 <p><strong>Safety:</strong> Just as safe as a bank account. Backed by US government securities and FDIC-like insurance.</p>
//                 <p><strong>Liquidity:</strong> Access your money anytime. Transfers to your bank in 1-2 business days.</p>
//                 <p><strong>Interest:</strong> Currently earning around 5% per year (vs 0% in most checking accounts).</p>
//                 <p><strong>Stability:</strong> Your balance doesn't go up and down like stocks. It stays steady and grows slowly.</p>
//               </div>
//             </div>
//             <p className="text-2xl font-bold text-gray-900 mb-2">
//                 Choose Your Provider
//             </p>
//             <p className="text-xl text-gray-600 mb-8">
//                 This is where you'll actually open your account
//             </p>

           
//             {/* Provider Cards */}
//             <div className="space-y-4 mb-8">
//             {providers.map(provider => (
//                 <button
//                 key={provider.id}
//                 onClick={() => setSelectedProvider(provider.id)}
//                 className={`w-full text-left p-6 rounded-xl border-2 transition-all ${
//                     selectedProvider === provider.id
//                     ? 'border-accent-purple-500 bg-accent-purple-50 shadow-lg'
//                     : 'border-gray-200 hover:border-accent-purple-300 hover:bg-gray-50'
//                 }`}
//                 >
//                 <div className="flex items-start justify-between">
//                     <div className="flex-1">
//                     <div className="flex items-center space-x-3 mb-2">
//                         <span className="text-3xl">{provider.logo}</span>
//                         <div>
//                             <h3 className="text-2xl font-bold text-gray-900">{provider.name}</h3>
//                             <p className="text-sm text-accent-purple-600 font-semibold">{provider.bestFor}</p>
//                         </div>
//                     </div>
                    
//                     <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-2">
//                         {provider.pros.map((pro, index) => (
//                         <div key={index} className="flex items-start space-x-2">
//                             <svg className="w-5 h-5 text-accent-green-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                             </svg>
//                             <span className="text-gray-700">{pro}</span>
//                         </div>
//                         ))}
//                     </div>
//                     </div>
                    
//                     {selectedProvider === provider.id && (
//                     <svg className="w-8 h-8 text-accent-purple-600 ml-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
//                     </svg>
//                     )}
//                 </div>
//                 </button>
//             ))}
//             </div>

//             {/* Additional info */}
//             <div className="bg-gray-50 rounded-xl p-6 mb-8">
//             <h4 className="font-bold text-gray-900 mb-3">💬 Our Take</h4>
//             <p className="text-gray-700 mb-2">
//                 <strong>Fidelity</strong> is probably the easiest to use if you're brand new.
//             </p>
//             <p className="text-gray-700 mb-2">
//                 <strong>Vanguard</strong> has slightly lower fees, great if you're very cost-conscious.
//             </p>
//             <p className="text-gray-700">
//                 <strong>Schwab</strong> is perfect if you also want a checking account with them.
//             </p>
//             </div>
            

//             {/* Why this matters */}
//             <div className="bg-gradient-to-r from-accent-green-50 to-accent-purple-50 rounded-xl p-6 border-2 border-accent-purple-200 mb-8">
//               <h3 className="font-bold text-gray-900 mb-2">💰 The Math</h3>
//               <p className="text-gray-700">
//                 Over 5 years, your ${selectedAmount.toLocaleString()} emergency fund earning 5% will grow to{' '}
//                 <span className="font-bold text-accent-green-600">
//                   ${(selectedAmount * Math.pow(1.05, 5)).toLocaleString(undefined, {maximumFractionDigits: 0})}
//                 </span>.
//                 That's <span className="font-bold">${(selectedAmount * Math.pow(1.05, 5) - selectedAmount).toLocaleString(undefined, {maximumFractionDigits: 0})} in free interest</span> just for parking it in the right place!
//               </p>
//             </div>

//             {/* Navigation */}
//             <div className="flex gap-4">
//               <button
//                 onClick={() => setShowBrokerageGuide(false)}
//                 className="px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-all"
//               >
//                 ← Back to Options
//               </button>
//               <button
//                 onClick={handleNext}
//                 disabled={!selectedProvider}
//                 className={`flex-1 font-bold py-3 px-6 rounded-xl transition-all ${
//                 selectedProvider
//                     ? 'bg-accent-purple-600 hover:bg-accent-purple-700 text-white shadow-lg transform hover:scale-105'
//                     : 'bg-gray-200 text-gray-400 cursor-not-allowed'
//                 }`}
//             >
//                 {selectedProvider ? "Perfect! Let's Set It Up →" : 'Choose a Provider'}
//             </button>
//             </div>
//           </>
//         ) : (
//           /* Bank Account Warning */
//           <>
//             <h2 className="text-3xl font-bold text-gray-900 mb-6">
//               Using a Bank Account
//             </h2>

//             <div className="bg-yellow-50 border-2 border-yellow-300 rounded-xl p-6 mb-6">
//               <div className="flex items-start space-x-3">
//                 <div className="text-3xl">⚠️</div>
//                 <div>
//                   <h3 className="text-xl font-bold text-yellow-900 mb-2">
//                     A few things to consider
//                   </h3>
//                   <p className="text-yellow-800">
//                     While bank accounts are convenient, you're leaving money on the table. 
//                     Let us show you why a brokerage might be better.
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* Interest Comparison Calculator */}
//             <div className="bg-white rounded-xl border-2 border-gray-200 p-6 mb-6">
//               <h3 className="text-xl font-bold text-gray-900 mb-4">💸 The Cost of 0% Interest</h3>
              
//               <div className="space-y-4">
//                 <div className="grid grid-cols-2 gap-4">
//                   <div className="bg-red-50 border-2 border-red-200 rounded-lg p-4 text-center">
//                     <p className="text-sm text-red-700 mb-1">Bank Account (0% interest)</p>
//                     <p className="text-3xl font-bold text-red-900">${selectedAmount.toLocaleString()}</p>
//                     <p className="text-xs text-red-600 mt-1">after {yearsToCompare} years</p>
//                   </div>
//                   <div className="bg-green-50 border-2 border-green-200 rounded-lg p-4 text-center">
//                     <p className="text-sm text-green-700 mb-1">Money Market (5% interest)</p>
//                     <p className="text-3xl font-bold text-green-900">${brokerageValue.toLocaleString(undefined, {maximumFractionDigits: 0})}</p>
//                     <p className="text-xs text-green-600 mt-1">after {yearsToCompare} years</p>
//                   </div>
//                 </div>
                
//                 <div className="bg-red-100 border-2 border-red-300 rounded-lg p-4 text-center">
//                   <p className="text-sm text-red-700 mb-1">Money you'd miss out on:</p>
//                   <p className="text-4xl font-bold text-red-900">${difference.toLocaleString(undefined, {maximumFractionDigits: 0})}</p>
//                   <p className="text-sm text-red-700 mt-1">That's a vacation, car repair, or rent payment!</p>
//                 </div>
//               </div>
//             </div>

//             {/* Out of sight, out of mind */}
//             <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6 mb-6">
//               <h3 className="text-xl font-bold text-blue-900 mb-3">
//                 🧠 Out of Sight, Out of Mind
//               </h3>
//               <p className="text-blue-800 mb-3">
//                 When your emergency fund is in your checking account, you see it every day. 
//                 That $1,000 starts looking like spending money for a vacation or new gadget.
//               </p>
//               <p className="text-blue-800 font-semibold">
//                 Keep your emergency fund in a separate account so you're not tempted to use it for non-emergencies.
//               </p>
//             </div>

//             {/* Recommended amount for bank */}
//             <div className="bg-gray-50 rounded-xl p-6 border-2 border-gray-200 mb-8">
//               <h3 className="text-lg font-bold text-gray-900 mb-3">
//                 If you still want to use your bank account:
//               </h3>
//               <p className="text-gray-700 mb-3">
//                 Keep ${selectedAmount.toLocaleString()} in a separate savings account 
//                 (NOT your checking account where you can easily spend it).
//               </p>
//               <p className="text-sm text-gray-600">
//                 💡 Tip: Many banks let you name your savings accounts. Call it "DO NOT TOUCH - Emergency Only"
//               </p>
//             </div>

//             {/* Navigation */}
//             <div className="flex gap-4">
//               <button
//                 onClick={() => setShowBankWarning(false)}
//                 className="px-6 py-3 border-2 border-accent-purple-500 text-accent-purple-600 font-semibold rounded-xl hover:bg-accent-purple-50 transition-all"
//               >
//                 ← Show Me the Brokerage Option Again
//               </button>
//               <button
//                 onClick={handleNext}
//                 className="flex-1 bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-xl transition-all"
//               >
//                 Continue with Bank Account
//               </button>
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   )
// }

// export default EmergencyFund