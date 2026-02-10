# Quick Setup Guide

## 🚀 Get Up and Running in 5 Minutes

### Step 1: Install Dependencies

```bash
# Frontend
cd frontend
npm install

# Backend
cd ../backend
npm install
```

### Step 2: Configure Backend

```bash
cd backend
cp .env.example .env
```

Edit `.env` with your email credentials:

```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password  # See instructions below
EMAIL_TO=tamilselvanrm01@gmail.com
```

#### Getting Gmail App Password

1. Go to [Google Account Settings](https://myaccount.google.com/)
2. Security → 2-Step Verification (enable if not already)
3. Security → App passwords
4. Select "Mail" and "Other (Custom name)"
5. Generate and copy the 16-character password
6. Use this in `.env` as `EMAIL_PASSWORD`

### Step 3: Update Portfolio Content

Edit `frontend/src/data/portfolioData.js`:

```javascript
export const portfolioData = {
  personal: {
    name: "Your Name",
    email: "your@email.com",
    phone: "+1234567890",
    linkedin: "https://linkedin.com/in/yourprofile",
    github: "https://github.com/yourusername",
    // ... update all personal info
  },
  
  // Update projects, skills, experience, etc.
};
```

### Step 4: Start Development Servers

**Terminal 1 - Backend:**
```bash
cd backend
npm run dev
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
```

### Step 5: Open Browser

Navigate to `http://localhost:3000`

## ✅ Verification Checklist

- [ ] Frontend loads on port 3000
- [ ] Backend runs on port 5000
- [ ] Can toggle dark/light mode
- [ ] All sections visible
- [ ] Contact form validates inputs
- [ ] Contact form submits (check email)

## 🎨 Customization Quick Tips

### Change Colors

Edit `frontend/tailwind.config.js`:
```javascript
accent: {
  blue: '#your-color',
  violet: '#your-color',
  // ...
}
```

### Add/Remove Sections

Edit `frontend/src/App.jsx`:
```javascript
<main>
  <Hero />
  <About />
  {/* Comment out or add sections */}
</main>
```

### Update Projects

Edit `frontend/src/data/portfolioData.js` → `projects` array

### Change Fonts

Edit `frontend/tailwind.config.js`:
```javascript
fontFamily: {
  display: ['YourFont', 'sans-serif'],
  body: ['YourFont', 'system-ui'],
}
```

Don't forget to import fonts in `frontend/src/index.css`!

## 🐛 Common Issues

### Issue: Email not sending

**Solution**: 
1. Check `.env` has correct credentials
2. Use App Password, not regular password
3. Check Gmail settings allow "Less secure apps" (if needed)
4. Restart backend server after changing `.env`

### Issue: Port already in use

**Solution**:
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill

# Kill process on port 5000
lsof -ti:5000 | xargs kill
```

Or change ports in:
- Frontend: `vite.config.js` → `server.port`
- Backend: `.env` → `PORT`

### Issue: Frontend can't connect to backend

**Solution**:
1. Check backend is running
2. Check `frontend/vite.config.js` proxy config:
```javascript
proxy: {
  '/api': {
    target: 'http://localhost:5000',
  },
}
```

### Issue: Animations not working

**Solution**:
1. Clear browser cache
2. Check Framer Motion is installed: `npm list framer-motion`
3. Restart dev server

## 📦 Production Build

### Frontend
```bash
cd frontend
npm run build
# Output in frontend/dist/
```

### Backend
```bash
cd backend
npm start
# Production server starts
```

## 🚢 Deployment

### Frontend (Vercel)
1. Push to GitHub
2. Import project in Vercel
3. Build command: `cd frontend && npm run build`
4. Output directory: `frontend/dist`
5. Deploy!

### Backend (Railway)
1. Push to GitHub
2. New project in Railway
3. Connect GitHub repo
4. Root directory: `backend`
5. Add environment variables
6. Deploy!

### Environment Variables for Production
```env
NODE_ENV=production
PORT=5000
CLIENT_URL=https://your-frontend-url.vercel.app
CORS_ORIGIN=https://your-frontend-url.vercel.app
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
EMAIL_TO=tamilselvanrm01@gmail.com
```

## 🎯 Next Steps

1. ✅ Setup complete
2. 📝 Customize content
3. 🎨 Adjust styling
4. 🧪 Test thoroughly
5. 🚀 Deploy to production
6. 📊 Monitor performance
7. 🔄 Iterate and improve

## 📚 Additional Resources

- [Full README](./README.md) - Complete documentation
- [Architecture Guide](./ARCHITECTURE.md) - System design details
- [React Docs](https://react.dev/) - React documentation
- [Express Docs](https://expressjs.com/) - Express documentation
- [Tailwind Docs](https://tailwindcss.com/) - Styling guide
- [Framer Motion Docs](https://www.framer.com/motion/) - Animation guide

## 💡 Pro Tips

1. **Development Workflow**:
   - Use two terminals (backend + frontend)
   - Install [Concurrently](https://www.npmjs.com/package/concurrently) to run both with one command

2. **Code Quality**:
   - Use ESLint: `npm install -D eslint`
   - Format with Prettier: `npm install -D prettier`

3. **Git Workflow**:
   - Use meaningful commit messages
   - Branch for features: `git checkout -b feature/new-section`
   - Never commit `.env` file!

4. **Performance**:
   - Use React DevTools to profile
   - Check Lighthouse scores
   - Optimize images with WebP format

5. **SEO**:
   - Update meta tags in `index.html`
   - Add structured data (JSON-LD)
   - Create sitemap.xml
   - Submit to Google Search Console

---

**Need Help?**
- Check [GitHub Issues](link-to-issues)
- Read [Full Documentation](./README.md)
- Contact: tamilselvanrm01@gmail.com
