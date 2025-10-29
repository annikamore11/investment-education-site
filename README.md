# Investment Education Platform

A modern web application designed to help young people learn about investing and retirement savings. Built with React, Tailwind CSS, and Supabase.

## 🎯 Features

### Current Features
- **Landing Page**: Welcoming hero section with feature highlights
- **Educational Content**: Comprehensive guides on:
  - Retirement savings basics
  - Types of retirement accounts (401k, IRA, Roth IRA)
  - Investment options (Target Date Funds, ETFs, Mutual Funds)
  - Essential investment strategies
- **User Authentication**: Login/signup system powered by Supabase
- **Responsive Design**: Mobile-first design that works on all devices
- **Modern UI**: Clean, professional interface with Tailwind CSS

### Planned Features
- Compound interest calculator
- Plaid integration for bank connections
- Retirement planning tools
- Auto-investment allocation planner
- Personalized savings projections
- User dashboard for saving progress

## 🛠️ Tech Stack

### Frontend
- **React.js** - UI framework
- **React Router** - Navigation
- **Tailwind CSS** - Styling
- **Vite** - Build tool

### Backend (To be implemented)
- **Python Flask/Django** - API server
- **Supabase** - Database and authentication

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Python 3.8+ (for backend)
- Supabase account (free tier available)

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd investment-education-site
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Supabase

1. Go to [Supabase](https://supabase.com) and create a new project
2. Once your project is created, go to Project Settings > API
3. Copy your project URL and anon/public key

### 4. Configure Environment Variables

Create a `.env` file in the root directory:

```bash
cp .env.example .env
```

Edit `.env` and add your Supabase credentials:

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 5. Run the Development Server

```bash
npm run dev
```

The application will open at `http://localhost:3000`

## 🗄️ Database Setup (Supabase)

### User Authentication Table

Supabase automatically creates an `auth.users` table. For additional user data, create a `profiles` table:

```sql
-- Create profiles table
create table profiles (
  id uuid references auth.users on delete cascade primary key,
  email text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable Row Level Security
alter table profiles enable row level security;

-- Create policy for users to read their own profile
create policy "Users can view their own profile"
  on profiles for select
  using ( auth.uid() = id );

-- Create policy for users to update their own profile
create policy "Users can update their own profile"
  on profiles for update
  using ( auth.uid() = id );

-- Create function to handle new user creation
create function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, email)
  values (new.id, new.email);
  return new;
end;
$$ language plpgsql security definer;

-- Create trigger for new user signup
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();
```

## 🐍 Backend Setup (Coming Soon)

### Flask Setup

```bash
# Create virtual environment
python -m venv venv

# Activate virtual environment
# On Windows:
venv\Scripts\activate
# On Mac/Linux:
source venv/bin/activate

# Install dependencies
pip install flask flask-cors supabase python-dotenv
```

### Basic Flask Structure

```
backend/
├── app.py
├── requirements.txt
├── .env
└── routes/
    ├── __init__.py
    ├── auth.py
    └── calculations.py
```

### Sample Flask App (app.py)

```python
from flask import Flask, jsonify
from flask_cors import CORS
from dotenv import load_dotenv
import os

load_dotenv()

app = Flask(__name__)
CORS(app)

@app.route('/api/health')
def health():
    return jsonify({"status": "healthy"})

@app.route('/api/compound-interest', methods=['POST'])
def calculate_compound_interest():
    # Future implementation for compound interest calculator
    pass

if __name__ == '__main__':
    app.run(debug=True, port=5000)
```

## 📁 Project Structure

```
investment-education-site/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Retirement.jsx
│   │   ├── AccountTypes.jsx
│   │   ├── InvestmentOptions.jsx
│   │   ├── Strategies.jsx
│   │   └── Login.jsx
│   ├── context/
│   │   └── AuthContext.jsx
│   ├── utils/
│   │   └── supabase.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## 🎨 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 🔒 Authentication Flow

1. User signs up with email and password
2. Supabase sends verification email
3. User verifies email and can log in
4. Protected routes check authentication status
5. User data is stored in Supabase

## 📱 Responsive Design

The application is fully responsive with breakpoints:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🎯 Next Steps for Development

### Phase 1: Core Features (Current)
- [x] Landing page
- [x] Educational content pages
- [x] Navigation system
- [x] Basic authentication UI

### Phase 2: Backend & Tools
- [ ] Set up Flask/Django backend
- [ ] Connect Supabase database
- [ ] Build compound interest calculator
- [ ] Create retirement projection tool

### Phase 3: Advanced Features
- [ ] Plaid integration for bank connections
- [ ] Auto-investment allocation planner
- [ ] User dashboard
- [ ] Save user preferences and calculations

### Phase 4: Enhancement
- [ ] Dark mode
- [ ] More interactive calculators
- [ ] Educational videos/resources
- [ ] Community features

## 🤝 Contributing

This is a personal project, but suggestions and feedback are welcome!

## 📄 License

MIT License - feel free to use this project as a learning resource

## 🙏 Acknowledgments

- Content inspired by financial education resources
- Built with modern web development best practices
- Designed for accessibility and ease of use

## 📞 Support

For questions or issues, please open an issue on GitHub.

---

**Disclaimer**: This website is for educational purposes only. Always consult with a qualified financial advisor before making investment decisions.
