# Tamil Selvan MP - AI/ML Engineer Portfolio

A production-ready, full-stack portfolio website showcasing expertise in AI/ML Engineering, Generative AI systems, and Full-Stack Development.

## 🎯 Overview

This portfolio demonstrates senior-level engineering capabilities through:
- **Modern React Frontend** with Framer Motion animations and Tailwind CSS
- **Scalable Node.js Backend** with clean architecture and security best practices
- **AI-Themed Design** with dark mode, glassmorphism, and intelligent UI
- **Production-Ready Code** with proper separation of concerns and design patterns

## 🏗️ Architecture

### Frontend (React + Vite)
```
frontend/
├── src/
│   ├── components/        # React components
│   │   ├── Hero.jsx       # Landing section with animations
│   │   ├── About.jsx      # Professional summary
│   │   ├── Skills.jsx     # Categorized technical skills
│   │   ├── Projects.jsx   # Featured projects with modals
│   │   ├── SystemDesign.jsx  # Architecture showcase
│   │   ├── Experience.jsx # Work history & education
│   │   ├── Contact.jsx    # Contact form
│   │   ├── Navigation.jsx # Sticky navigation
│   │   └── Footer.jsx     # Footer with links
│   ├── store/             # Zustand state management
│   ├── data/              # Portfolio content configuration
│   └── index.css          # Global styles with custom properties
├── public/                # Static assets
└── package.json
```

### Backend (Node.js + Express)
```
backend/
├── src/
│   ├── config/            # Configuration management
│   ├── controllers/       # Request handlers
│   ├── routes/            # API routes
│   ├── services/          # Business logic (Email service)
│   ├── middleware/        # Validation, rate limiting
│   └── server.js          # Express app setup
└── package.json
```

## 🎨 Design System

### Theme
- **Style**: Modern AI / Deep Tech / Futuristic Minimal
- **Primary Colors**:
  - Electric Blue: `#00d4ff`
  - Violet: `#a78bfa`
  - Cyan: `#06b6d4`
  - Green: `#10b981`
- **Typography**:
  - Display: Orbitron (headings)
  - Body: Poppins (content)
  - Mono: JetBrains Mono (code)
- **Effects**: Glassmorphism, gradient text, smooth animations

### Key Features
- Dark/Light mode toggle
- Responsive design (mobile-first)
- Smooth scroll animations
- Intersection Observer for scroll-triggered animations
- Custom neural network background
- Interactive project modals

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm or yarn

### Installation

#### 1. Clone the repository
```bash
git clone <repository-url>
cd portfolio-project
```

#### 2. Setup Frontend
```bash
cd frontend
npm install
```

#### 3. Setup Backend
```bash
cd ../backend
npm install
cp .env.example .env
# Edit .env with your email credentials
```

### Configuration

#### Backend Environment Variables (.env)
```env
NODE_ENV=development
PORT=5000
CLIENT_URL=http://localhost:3000

# Email Configuration (use Gmail App Password)
EMAIL_SERVICE=gmail
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
EMAIL_TO=tamilselvanrm01@gmail.com

CORS_ORIGIN=http://localhost:3000
```

**Note**: For Gmail, use an [App Password](https://support.google.com/accounts/answer/185833), not your regular password.

### Running Locally

#### Start Backend Server
```bash
cd backend
npm run dev
# Server runs on http://localhost:5000
```

#### Start Frontend Dev Server
```bash
cd frontend
npm run dev
# App runs on http://localhost:3000
```

### Building for Production

#### Frontend
```bash
cd frontend
npm run build
# Creates optimized build in dist/
```

#### Backend
```bash
cd backend
npm start
# Runs production server
```

## 📁 Project Structure

### Key Files

#### Frontend
- `src/data/portfolioData.js` - All portfolio content (easy to edit!)
- `src/store/index.js` - Global state management
- `tailwind.config.js` - Design system configuration
- `src/index.css` - Custom CSS with variables

#### Backend
- `src/config/index.js` - Centralized configuration
- `src/services/emailService.js` - Email handling (Singleton pattern)
- `src/middleware/validation.js` - Input validation
- `src/middleware/rateLimiter.js` - Rate limiting (anti-spam)

## 🛡️ Security Features

### Backend
- **Helmet.js**: Security headers
- **CORS**: Configured origin control
- **Rate Limiting**: 
  - API: 100 requests/15 minutes
  - Contact Form: 5 requests/15 minutes
- **Input Validation**: Express-validator for all inputs
- **XSS Protection**: Sanitized inputs

### Frontend
- Content Security Policy ready
- No inline scripts
- Proper CORS handling

## 🎯 Design Patterns Used

### Frontend
- **Component Composition**: Modular, reusable components
- **State Management**: Zustand for global state
- **Hooks**: Custom hooks for intersection observers
- **Lazy Loading**: Code splitting for performance

### Backend
- **Singleton Pattern**: Email service instance
- **Middleware Pattern**: Request processing pipeline
- **Factory Pattern**: Configuration management
- **MVC Architecture**: Separation of concerns

## 📊 Performance Optimizations

### Frontend
- Code splitting with Vite
- Lazy loading components
- Optimized animations (CSS > JS)
- Image optimization
- Debounced scroll handlers

### Backend
- Compression middleware
- Response caching headers
- Rate limiting
- Efficient route handling

## 🔧 Customization

### Updating Content
Edit `frontend/src/data/portfolioData.js`:
- Personal information
- Projects
- Skills
- Experience
- System design examples

### Changing Colors
Edit `frontend/tailwind.config.js`:
```javascript
colors: {
  accent: {
    blue: '#your-color',
    // ... other colors
  }
}
```

### Modifying Sections
Components in `frontend/src/components/` can be:
- Reordered in `App.jsx`
- Customized individually
- Hidden by commenting out

## 🌐 Deployment

### Frontend (Netlify/Vercel)
1. Connect repository
2. Build command: `cd frontend && npm run build`
3. Publish directory: `frontend/dist`
4. Environment variables: Not needed for frontend

### Backend (Railway/Render/Heroku)
1. Connect repository
2. Root directory: `backend`
3. Build command: `npm install`
4. Start command: `npm start`
5. Environment variables: Set all from `.env.example`

### Environment Variables for Production
- Update `CLIENT_URL` to your frontend URL
- Update `CORS_ORIGIN` to your frontend URL
- Use production email credentials
- Set `NODE_ENV=production`

## 📝 API Documentation

### Endpoints

#### GET /api/health
Health check endpoint
```json
{
  "success": true,
  "message": "API is running",
  "timestamp": "2024-01-01T00:00:00.000Z"
}
```

#### POST /api/contact
Submit contact form
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Project Inquiry",
  "message": "Hello, I'd like to discuss..."
}
```

**Response**:
```json
{
  "success": true,
  "message": "Message sent successfully!"
}
```

## 🧪 Testing

### Manual Testing Checklist
- [ ] All sections scroll smoothly
- [ ] Dark/Light mode toggle works
- [ ] Mobile navigation opens/closes
- [ ] Project modals open/close
- [ ] Contact form validates inputs
- [ ] Contact form submits successfully
- [ ] Email received (check inbox)
- [ ] All animations play correctly
- [ ] Responsive on mobile/tablet/desktop

## 🤝 Contributing

This is a personal portfolio, but feel free to:
- Report bugs
- Suggest improvements
- Use as a template (give credit!)

## 📄 License

MIT License - feel free to use this as a template for your own portfolio.

## 👤 Author

**Tamil Selvan MP**
- AI/ML Engineer
- Email: tamilselvanrm01@gmail.com
- LinkedIn: [linkedin.com/in/tamilselvan](https://linkedin.com/in/tamilselvan)
- GitHub: [github.com/tamilselvan](https://github.com/tamilselvan)

## 🙏 Acknowledgments

- Framer Motion for animations
- Tailwind CSS for styling
- Lucide React for icons
- The open-source community

---

**Built with ❤️ and modern web technologies**
