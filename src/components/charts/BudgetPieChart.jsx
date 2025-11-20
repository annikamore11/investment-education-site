import React from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts'

const BudgetPieChart = ({ journeyData }) => {
  const income = journeyData.monthlyIncome || 0
  const expenses = journeyData.monthlyExpenses || 0
  const taxes = journeyData.estimatedTaxDollarAmount|| 0
  const isSelfEmployed = journeyData.employment === 'self-employed'
  
  const leftover = isSelfEmployed 
    ? income - taxes - expenses 
    : income - expenses

  // Check if expense breakdown exists
  const hasBreakdown = journeyData.expenseBreakdown && Object.keys(journeyData.expenseBreakdown).length > 0

  // Generate chart data
  const generateChartData = () => {
    const data = []

    if (isSelfEmployed) {
      // Self-employed: show taxes separately
      if (taxes > 0) {
        data.push({ name: 'Taxes', value: taxes, color: '#dc2626' })
      }
    }

    if (hasBreakdown) {
      // Add expense breakdown by category
      Object.entries(journeyData.expenseBreakdown).forEach(([category, amount]) => {
        if (amount > 0) {
          data.push({
            name: formatCategoryName(category),
            value: amount,
            color: getCategoryColor(category)
          })
        }
      })
    } else {
      // Just show total expenses
      if (expenses > 0) {
        data.push({ name: 'Expenses', value: expenses, color: '#f59e0b' })
      }
    }

    // Add savings/leftover
    if (leftover > 0) {
      data.push({ name: 'Available to Save', value: leftover, color: '#16a34a' })
    } else if (leftover < 0) {
      data.push({ name: 'Deficit', value: Math.abs(leftover), color: '#dc2626' })
    }

    return data
  }

  const formatCategoryName = (category) => {
    const names = {
      rent: 'Housing',
      carPayment: 'Car Payment',
      food: 'Food',
      utilities: 'Utilities, Bills, Loans',
      insurance: 'Insurance',
      other: 'Other'
    }
    return names[category] || category
  }

  const getCategoryColor = (category) => {
    const colors = {
      housing: '#8b5cf6',
      transportation: '#ec4899',
      food: '#f59e0b',
      utilities: '#3b82f6',
      healthcare: '#10b981',
      insurance: '#06b6d4',
      debt: '#ef4444',
      entertainment: '#f97316',
      personal: '#84cc16',
      other: '#6b7280'
    }
    return colors[category] || '#9ca3af'
  }

  const chartData = generateChartData()

  // Custom tooltip
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const percent = ((payload[0].value / income) * 100).toFixed(1)
      return (
        <div className="bg-white border border-gray-300 rounded-lg p-3 shadow-lg">
          <p className="font-semibold text-gray-900 mb-1">{payload[0].name}</p>
          <p className="text-sm text-gray-700">
            <strong>${payload[0].value.toLocaleString()}</strong>
          </p>
          <p className="text-xs text-gray-600">
            {percent}% of {isSelfEmployed ? 'gross income' : 'income'}
          </p>
        </div>
      )
    }
    return null
  }


  return (
    <div className="bg-gray-50 border border-gray-300 rounded-xl p-6">
      <h3 className="font-semibold text-gray-900 mb-4 text-center">
        {isSelfEmployed ? 'Gross Income Breakdown' : 'Income Breakdown'}
      </h3>
      
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={chartData}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
          <Legend 
            verticalAlign="bottom" 
            height={36}
            formatter={(value, entry) => (
              <span className="text-sm">
                {value}
              </span>
            )}
          />
        </PieChart>
      </ResponsiveContainer>

      <div className="mt-10 lg:mt-4 text-center">
        <p className="text-sm text-gray-700">
          Total {isSelfEmployed ? 'Gross Income' : 'Income'}: <strong>${income.toLocaleString()}</strong>
        </p>
      </div>
    </div>
  )
}

export default BudgetPieChart