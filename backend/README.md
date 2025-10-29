# Backend API - Investment Education Platform

Flask-based REST API for the Investment Education Platform.

## Features

- Compound interest calculator
- Retirement goal calculator
- 401(k) match calculator
- CORS enabled for frontend integration
- Ready for Supabase integration

## Setup

### 1. Create Virtual Environment

```bash
cd backend
python -m venv venv
```

### 2. Activate Virtual Environment

**Windows:**
```bash
venv\Scripts\activate
```

**Mac/Linux:**
```bash
source venv/bin/activate
```

### 3. Install Dependencies

```bash
pip install -r requirements.txt
```

### 4. Configure Environment Variables

```bash
cp .env.example .env
```

Edit `.env` with your configuration.

### 5. Run the Server

```bash
python app.py
```

The API will run on `http://localhost:5000`

## API Endpoints

### Health Check
```
GET /api/health
```

Returns API status.

### Compound Interest Calculator
```
POST /api/calculate/compound-interest
Content-Type: application/json

{
  "principal": 10000,
  "monthly_contribution": 500,
  "annual_rate": 7,
  "years": 30,
  "compound_frequency": 12
}
```

### Retirement Goal Calculator
```
POST /api/calculate/retirement-goal
Content-Type: application/json

{
  "current_age": 25,
  "retirement_age": 65,
  "current_savings": 10000,
  "desired_retirement_income": 50000,
  "expected_return": 7
}
```

### 401(k) Match Calculator
```
POST /api/calculate/401k-match
Content-Type: application/json

{
  "annual_salary": 60000,
  "contribution_percentage": 6,
  "match_percentage": 50,
  "match_limit": 6
}
```

## Testing with curl

### Compound Interest
```bash
curl -X POST http://localhost:5000/api/calculate/compound-interest \
  -H "Content-Type: application/json" \
  -d '{
    "principal": 10000,
    "monthly_contribution": 500,
    "annual_rate": 7,
    "years": 30
  }'
```

### 401(k) Match
```bash
curl -X POST http://localhost:5000/api/calculate/401k-match \
  -H "Content-Type: application/json" \
  -d '{
    "annual_salary": 60000,
    "contribution_percentage": 6,
    "match_percentage": 50,
    "match_limit": 6
  }'
```

## Connecting to Frontend

The frontend can call these endpoints using fetch or axios:

```javascript
// Example: Calculate compound interest
const calculateCompoundInterest = async (data) => {
  const response = await fetch('http://localhost:5000/api/calculate/compound-interest', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  
  const result = await response.json();
  return result;
};
```

## Production Deployment

For production, use a production-grade server like Gunicorn:

```bash
gunicorn -w 4 -b 0.0.0.0:5000 app:app
```

Or deploy to platforms like:
- Heroku
- Railway
- Render
- AWS Elastic Beanstalk
- Google Cloud Run

## Future Enhancements

- [ ] User authentication with Supabase
- [ ] Save calculation history
- [ ] Plaid integration for bank connections
- [ ] More calculators (tax-advantaged savings, Roth conversion)
- [ ] Rate limiting
- [ ] API documentation with Swagger/OpenAPI
