from flask import Flask, jsonify, request
from flask_cors import CORS
from dotenv import load_dotenv
import os

# Load environment variables
load_dotenv()

# Initialize Flask app
app = Flask(__name__)

# Configure CORS for development (allow React app on port 3000)
CORS(app, origins=['http://localhost:3000'])

# Health check endpoint
@app.route('/api/health', methods=['GET'])
def health_check():
    """Simple health check endpoint"""
    return jsonify({
        'status': 'healthy',
        'message': 'Investment Education API is running'
    }), 200

# Compound interest calculator endpoint
@app.route('/api/calculate/compound-interest', methods=['POST'])
def calculate_compound_interest():
    """
    Calculate compound interest for retirement savings
    
    Expected JSON body:
    {
        "principal": 1000,           # Initial investment
        "monthly_contribution": 500, # Monthly contribution
        "annual_rate": 7,           # Annual interest rate (%)
        "years": 30,                # Number of years
        "compound_frequency": 12    # Times per year interest compounds
    }
    """
    try:
        data = request.get_json()
        
        # Extract parameters
        principal = float(data.get('principal', 0))
        monthly_contribution = float(data.get('monthly_contribution', 0))
        annual_rate = float(data.get('annual_rate', 7)) / 100
        years = int(data.get('years', 30))
        compound_frequency = int(data.get('compound_frequency', 12))
        
        # Calculate compound interest
        rate_per_period = annual_rate / compound_frequency
        total_periods = years * compound_frequency
        
        # Future value of initial principal
        fv_principal = principal * ((1 + rate_per_period) ** total_periods)
        
        # Future value of monthly contributions (annuity)
        if monthly_contribution > 0 and rate_per_period > 0:
            contributions_per_year = 12
            contribution_periods = years * contributions_per_year
            monthly_rate = annual_rate / 12
            
            fv_contributions = monthly_contribution * (
                ((1 + monthly_rate) ** contribution_periods - 1) / monthly_rate
            )
        else:
            fv_contributions = 0
        
        total_value = fv_principal + fv_contributions
        total_contributed = principal + (monthly_contribution * 12 * years)
        total_interest = total_value - total_contributed
        
        return jsonify({
            'success': True,
            'results': {
                'total_value': round(total_value, 2),
                'total_contributed': round(total_contributed, 2),
                'total_interest': round(total_interest, 2),
                'principal': principal,
                'monthly_contribution': monthly_contribution,
                'years': years,
                'annual_rate': annual_rate * 100
            }
        }), 200
        
    except Exception as e:
        return jsonify({
            'success': False,
            'error': str(e)
        }), 400

# Retirement savings goal calculator
@app.route('/api/calculate/retirement-goal', methods=['POST'])
def calculate_retirement_goal():
    """
    Calculate how much to save monthly to reach retirement goal
    
    Expected JSON body:
    {
        "current_age": 25,
        "retirement_age": 65,
        "current_savings": 10000,
        "desired_retirement_income": 50000,
        "expected_return": 7
    }
    """
    try:
        data = request.get_json()
        
        current_age = int(data.get('current_age', 25))
        retirement_age = int(data.get('retirement_age', 65))
        current_savings = float(data.get('current_savings', 0))
        desired_income = float(data.get('desired_retirement_income', 50000))
        expected_return = float(data.get('expected_return', 7)) / 100
        
        years_to_retirement = retirement_age - current_age
        
        # Using 4% safe withdrawal rate
        required_savings = desired_income / 0.04
        
        # Future value of current savings
        fv_current = current_savings * ((1 + expected_return) ** years_to_retirement)
        
        # Additional needed
        additional_needed = max(0, required_savings - fv_current)
        
        # Calculate monthly contribution needed
        if additional_needed > 0 and expected_return > 0:
            monthly_rate = expected_return / 12
            months = years_to_retirement * 12
            
            # PMT formula
            monthly_contribution = additional_needed * (
                monthly_rate / ((1 + monthly_rate) ** months - 1)
            )
        else:
            monthly_contribution = 0
        
        return jsonify({
            'success': True,
            'results': {
                'required_savings': round(required_savings, 2),
                'years_to_retirement': years_to_retirement,
                'monthly_contribution_needed': round(monthly_contribution, 2),
                'annual_contribution_needed': round(monthly_contribution * 12, 2),
                'current_savings': current_savings,
                'future_value_current_savings': round(fv_current, 2)
            }
        }), 200
        
    except Exception as e:
        return jsonify({
            'success': False,
            'error': str(e)
        }), 400

# 401k match calculator
@app.route('/api/calculate/401k-match', methods=['POST'])
def calculate_401k_match():
    """
    Calculate 401k company match
    
    Expected JSON body:
    {
        "annual_salary": 60000,
        "contribution_percentage": 6,
        "match_percentage": 50,
        "match_limit": 6
    }
    """
    try:
        data = request.get_json()
        
        salary = float(data.get('annual_salary', 0))
        contribution_pct = float(data.get('contribution_percentage', 0)) / 100
        match_pct = float(data.get('match_percentage', 0)) / 100
        match_limit = float(data.get('match_limit', 6)) / 100
        
        # Calculate contributions
        employee_contribution = salary * contribution_pct
        
        # Calculate match (company matches X% up to Y% of salary)
        matchable_amount = min(salary * contribution_pct, salary * match_limit)
        employer_match = matchable_amount * match_pct
        
        total_annual = employee_contribution + employer_match
        
        return jsonify({
            'success': True,
            'results': {
                'employee_annual_contribution': round(employee_contribution, 2),
                'employer_annual_match': round(employer_match, 2),
                'total_annual_contribution': round(total_annual, 2),
                'employee_monthly_contribution': round(employee_contribution / 12, 2),
                'employer_monthly_match': round(employer_match / 12, 2),
                'total_monthly_contribution': round(total_annual / 12, 2),
                'free_money': round(employer_match, 2)
            }
        }), 200
        
    except Exception as e:
        return jsonify({
            'success': False,
            'error': str(e)
        }), 400

# Error handlers
@app.errorhandler(404)
def not_found(error):
    return jsonify({'error': 'Endpoint not found'}), 404

@app.errorhandler(500)
def internal_error(error):
    return jsonify({'error': 'Internal server error'}), 500

if __name__ == '__main__':
    # Get port from environment variable or use default
    port = int(os.environ.get('PORT', 5000))
    
    # Run the app
    app.run(
        host='0.0.0.0',
        port=port,
        debug=True
    )
