// import React from 'react'

// const Recommendation = ({ journeyData, nextStep, prevStep }) => {
//   const recommendations = {
//     '401k': {
//       title: '401(k) through your employer',
//       emoji: '🏢',
//       tagline: 'Your best option - and here\'s why',
//       reasons: [
//         {
//           title: 'Free money from your company',
//           description: 'Most employers match your contributions. That\'s an instant 50-100% return on your money!',
//           icon: '💰'
//         },
//         {
//           title: 'Automatic and easy',
//           description: 'Money comes straight from your paycheck before you see it, making it easier to save consistently.',
//           icon: '🔄'
//         },
//         {
//           title: 'Tax benefits now',
//           description: 'Contributions reduce your taxable income today, meaning you pay less in taxes this year.',
//           icon: '📉'
//         }
//       ],
//       actionText: 'We\'ll help you maximize your company match',
//       color: 'blue'
//     },
//     'roth-ira': {
//       title: 'Roth IRA',
//       emoji: '🎯',
//       tagline: 'Perfect for young investors',
//       reasons: [
//         {
//           title: 'Tax-free in retirement',
//           description: 'Pay taxes now while you\'re young and earning less. In retirement, ALL your money (including gains) comes out tax-free!',
//           icon: '🆓'
//         },
//         {
//           title: 'Full control',
//           description: 'You choose exactly where to invest. Pick from thousands of funds at any provider you want.',
//           icon: '🎮'
//         },
//         {
//           title: 'Flexibility',
//           description: 'You can withdraw your contributions (not gains) anytime penalty-free for emergencies.',
//           icon: '🔓'
//         }
//       ],
//       actionText: 'We\'ll show you exactly how to open one',
//       color: 'purple'
//     },
//     'solo-401k': {
//       title: 'Solo 401(k)',
//       emoji: '💼',
//       tagline: 'Built for self-employed professionals',
//       reasons: [
//         {
//           title: 'Huge contribution limits',
//           description: 'Save up to $69,000/year (2024) - way more than a regular IRA.',
//           icon: '📈'
//         },
//         {
//           title: 'You\'re both employer and employee',
//           description: 'Contribute as both, giving you more ways to save and reduce taxes.',
//           icon: '👤'
//         },
//         {
//           title: 'Tax deductions',
//           description: 'Reduce your taxable income significantly as a business owner.',
//           icon: '💵'
//         }
//       ],
//       actionText: 'We\'ll guide you through the setup process',
//       color: 'green'
//     }
//   }

//   const recommended = recommendations[journeyData.recommendedAccount] || recommendations['roth-ira']
  
//   const colorClasses = {
//     blue: {
//       bg: 'from-blue-500 to-blue-700',
//       light: 'bg-blue-50',
//       border: 'border-blue-200',
//       text: 'text-blue-700',
//       button: 'bg-blue-600 hover:bg-blue-700'
//     },
//     purple: {
//       bg: 'from-accent-purple-500 to-accent-purple-700',
//       light: 'bg-accent-purple-50',
//       border: 'border-accent-purple-200',
//       text: 'text-accent-purple-700',
//       button: 'bg-accent-purple-600 hover:bg-accent-purple-700'
//     },
//     green: {
//       bg: 'from-accent-green-500 to-accent-green-700',
//       light: 'bg-accent-green-50',
//       border: 'border-accent-green-200',
//       text: 'text-accent-green-700',
//       button: 'bg-accent-green-600 hover:bg-accent-green-700'
//     }
//   }

//   const colors = colorClasses[recommended.color]

//   return (
//     <div className="max-w-3xl mx-auto">
//       <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
//         {/* Hero Section */}
//         <div className={`bg-linear-to-r ${colors.bg} text-white p-8 md:p-12 text-center`}>
//           <div className="text-6xl mb-4">{recommended.emoji}</div>
//           <h2 className="text-3xl md:text-4xl font-bold mb-3">
//             {recommended.title}
//           </h2>
//           <p className="text-xl opacity-90">{recommended.tagline}</p>
//         </div>

//         {/* Reasons */}
//         <div className="p-8 md:p-12">
//           <h3 className="text-2xl font-bold text-gray-900 mb-6">
//             Here's why this is perfect for you:
//           </h3>

//           <div className="space-y-6 mb-8">
//             {recommended.reasons.map((reason, index) => (
//               <div
//                 key={index}
//                 className={`${colors.light} border-2 ${colors.border} rounded-xl p-6 transition-all hover:shadow-md`}
//               >
//                 <div className="flex items-start space-x-4">
//                   <div className="text-3xl">{reason.icon}</div>
//                   <div className="flex-1">
//                     <h4 className="text-lg font-bold text-gray-900 mb-2">
//                       {reason.title}
//                     </h4>
//                     <p className="text-gray-700">
//                       {reason.description}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Action CTA */}
//           <div className={`${colors.light} border-2 ${colors.border} rounded-xl p-6 text-center`}>
//             <p className={`text-lg font-semibold ${colors.text} mb-2`}>
//               ✨ What's next?
//             </p>
//             <p className="text-gray-700">
//               {recommended.actionText}
//             </p>
//           </div>

//           {/* Special note for 401k users */}
//           {journeyData.recommendedAccount === '401k' && (
//             <div className="mt-6 bg-yellow-50 border-2 border-yellow-200 rounded-xl p-6">
//               <div className="flex items-start space-x-3">
//                 <div className="text-2xl">⚡</div>
//                 <div>
//                   <p className="font-bold text-yellow-900 mb-1">Pro Tip:</p>
//                   <p className="text-yellow-800">
//                     Always contribute at least enough to get your full company match. 
//                     If they match 5%, never do less than 5%. It's literally free money!
//                   </p>
//                 </div>
//               </div>
//             </div>
//           )}

//           {/* Navigation */}
//           <div className="flex gap-4 mt-8">
//             <button
//               onClick={prevStep}
//               className="px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-all"
//             >
//               ← Back
//             </button>
//             <button
//               onClick={nextStep}
//               className={`flex-1 ${colors.button} text-white font-bold py-3 px-6 rounded-xl transition-all transform hover:scale-105 shadow-lg`}
//             >
//               Perfect! Let's Continue →
//             </button>
//           </div>

//           <button
//             onClick={prevStep}
//             className="w-full mt-4 text-sm text-gray-500 hover:text-gray-700"
//           >
//             Wait, I want to change my answers
//           </button>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Recommendation