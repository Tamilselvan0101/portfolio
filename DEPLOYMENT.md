# Hello Recruiters 👋

# Deployment Guide

Complete guide for deploying your portfolio to production.

## Pre-Deployment Checklist

### Frontend
- [ ] Update all personal information in `portfolioData.js`
- [ ] Add real project images to `public/` folder
- [ ] Add resume PDF to `public/assets/resume.pdf`
- [ ] Test all links (GitHub, LinkedIn, Email)
- [ ] Test responsive design on mobile/tablet
- [ ] Run production build locally: `npm run build`
- [ ] Test production build: `npm run preview`
- [ ] Check console for errors (F12)
- [ ] Test dark/light mode toggle
- [ ] Verify all animations work

### Backend
- [ ] Email service configured and tested
- [ ] Environment variables documented
- [ ] Rate limiting configured appropriately
- [ ] CORS origins set for production
- [ ] Error logging setup
- [ ] Health check endpoint working

## Option 1: Vercel (Frontend) + Railway (Backend)

**Recommended for beginners**

### Deploy Frontend to Vercel

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/portfolio.git
   git push -u origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Configure:
     ```
     Framework Preset: Vite
     Root Directory: frontend
     Build Command: npm run build
     Output Directory: dist
     ```
   - Click "Deploy"

3. **Get Your URL**
   - Vercel will give you a URL like: `your-portfolio.vercel.app`
   - Save this URL for backend configuration

### Deploy Backend to Railway

1. **Create Railway Account**
   - Go to [railway.app](https://railway.app)
   - Sign up with GitHub

2. **Create New Project**
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Choose your portfolio repository

3. **Configure Service**
   - Root Directory: `backend`
   - Start Command: `npm start`
   - Add environment variables:
     ```env
     NODE_ENV=production
     PORT=5000
     CLIENT_URL=https://your-portfolio.vercel.app
     CORS_ORIGIN=https://your-portfolio.vercel.app
     EMAIL_SERVICE=gmail
     EMAIL_USER=your-email@gmail.com
     EMAIL_PASSWORD=your-app-password
     EMAIL_TO=tamilselvanrm01@gmail.com
     ```

4. **Deploy**
   - Click "Deploy"
   - Get your backend URL: `your-app.railway.app`

5. **Update Frontend**
   - In `frontend/src/config.js` (create if doesn't exist):
     ```javascript
     export const API_URL = import.meta.env.PROD 
       ? 'https://your-app.railway.app'
       : 'http://localhost:5000';
     ```
   - Update Vercel deployment to trigger rebuild

## Option 2: Netlify (Frontend) + Render (Backend)

### Deploy Frontend to Netlify

1. **Push to GitHub** (same as above)

2. **Import to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - "Add new site" → "Import an existing project"
   - Choose GitHub and select repository
   - Configure:
     ```
     Base directory: frontend
     Build command: npm run build
     Publish directory: frontend/dist
     ```

3. **Custom Domain (Optional)**
   - Go to Domain settings
   - Add custom domain
   - Update DNS records

### Deploy Backend to Render

1. **Create Render Account**
   - Go to [render.com](https://render.com)
   - Sign up with GitHub

2. **Create Web Service**
   - "New" → "Web Service"
   - Connect GitHub repository
   - Configure:
     ```
     Name: portfolio-backend
     Root Directory: backend
     Environment: Node
     Build Command: npm install
     Start Command: npm start
     ```

3. **Add Environment Variables**
   - Go to "Environment" tab
   - Add all variables from `.env.example`
   - Update `CLIENT_URL` and `CORS_ORIGIN` with Netlify URL

4. **Deploy**
   - Render will auto-deploy
   - Free tier goes to sleep after inactivity (15 min wake-up time)

## Option 3: All-in-One with Railway

**Easiest for small projects**

1. **Monorepo Setup**
   - Keep both frontend and backend in same repo
   - Railway can build both

2. **Create Two Services**
   - Service 1: Frontend
     - Root: `frontend`
     - Build: `npm run build`
     - Start: `npx serve dist -l $PORT`
   
   - Service 2: Backend
     - Root: `backend`
     - Build: `npm install`
     - Start: `npm start`

3. **Configure Environment**
   - Backend needs frontend URL
   - Frontend needs backend URL
   - Set in environment variables

## Custom Domain Setup

### Frontend (Vercel/Netlify)

1. **Buy Domain** (Namecheap, Google Domains, etc.)

2. **Add to Platform**
   - Vercel: Settings → Domains → Add
   - Netlify: Domain Settings → Add domain

3. **Update DNS**
   ```
   Type: CNAME
   Name: www
   Value: your-app.vercel.app (or netlify.app)
   
   Type: A
   Name: @
   Value: [Platform's IP]
   ```

### Backend (Railway/Render)

1. **Add Custom Domain**
   - Railway: Settings → Custom Domain
   - Render: Settings → Custom Domain

2. **Update DNS**
   ```
   Type: CNAME
   Name: api (or backend)
   Value: your-app.railway.app
   ```

3. **Update Frontend**
   - Change `API_URL` to `https://api.yourdomain.com`

## SSL/HTTPS

All recommended platforms provide **free SSL certificates**:
- Vercel: Automatic
- Netlify: Automatic
- Railway: Automatic
- Render: Automatic

No configuration needed!

## Environment Variables

### Production Frontend
```env
# Usually not needed for Vite
# API URL can be set in code based on environment
```

### Production Backend
```env
NODE_ENV=production
PORT=5000  # or Railway/Render auto-assigns

# Frontend URL
CLIENT_URL=https://your-portfolio.vercel.app
CORS_ORIGIN=https://your-portfolio.vercel.app

# Email (use Gmail App Password)
EMAIL_SERVICE=gmail
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-16-char-app-password
EMAIL_TO=tamilselvanrm01@gmail.com

# Optional: Different rate limits for production
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100
```

## Continuous Deployment

All platforms support auto-deploy on push:

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Update portfolio"
   git push
   ```

2. **Automatic Deploy**
   - Platform detects push
   - Runs build
   - Deploys automatically
   - ~1-3 minutes

## Monitoring

### Uptime Monitoring

**Free Options:**
- [UptimeRobot](https://uptimerobot.com) - 50 monitors free
- [Pingdom](https://pingdom.com) - Free tier available
- [Freshping](https://freshping.io) - 50 checks free

**Setup:**
1. Add your frontend URL
2. Add backend health check: `https://api.yourdomain.com/api/health`
3. Set check interval: 5 minutes
4. Email alerts on downtime

### Error Tracking

**Options:**
- [Sentry](https://sentry.io) - 5k errors/month free
- [LogRocket](https://logrocket.com) - 1k sessions/month free

**Setup:**
```bash
npm install @sentry/react @sentry/node
```

### Analytics

**Options:**
- [Google Analytics](https://analytics.google.com) - Free
- [Plausible](https://plausible.io) - Privacy-focused
- [Vercel Analytics](https://vercel.com/analytics) - Free with Vercel

## Performance Optimization

### Frontend

1. **Image Optimization**
   ```bash
   # Install Sharp for image processing
   npm install sharp
   ```
   - Convert images to WebP
   - Generate multiple sizes
   - Use `<picture>` element for responsive images

2. **Code Splitting**
   - Already handled by Vite
   - Lazy load heavy components:
     ```javascript
     const Projects = lazy(() => import('./components/Projects'));
     ```

3. **Caching**
   - Vercel/Netlify handle this automatically
   - Set long cache times for assets

### Backend

1. **Response Compression**
   - Already enabled via `compression` middleware

2. **Caching Headers**
   ```javascript
   app.use((req, res, next) => {
     res.set('Cache-Control', 'no-cache');
     next();
   });
   ```

3. **Database Connection Pool** (if you add a database)
   ```javascript
   pool: {
     min: 2,
     max: 10,
     idle: 10000
   }
   ```

## SEO Optimization

### Add Meta Tags

Edit `frontend/index.html`:
```html
<head>
  <title>Tamil Selvan MP | AI/ML Engineer</title>
  <meta name="description" content="AI/ML Engineer specializing in Generative AI, LLM Systems, RAG Pipelines, and Full-Stack Development">
  <meta name="keywords" content="AI Engineer, Machine Learning, LangChain, RAG, Full Stack, React, Node.js">
  
  <!-- Open Graph -->
  <meta property="og:title" content="Tamil Selvan MP | AI/ML Engineer">
  <meta property="og:description" content="Building intelligent systems at scale">
  <meta property="og:image" content="/og-image.png">
  <meta property="og:url" content="https://your-portfolio.vercel.app">
  
  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Tamil Selvan MP | AI/ML Engineer">
  <meta name="twitter:description" content="Building intelligent systems at scale">
  <meta name="twitter:image" content="/og-image.png">
</head>
```

### Create Sitemap

Create `frontend/public/sitemap.xml`:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://your-portfolio.vercel.app/</loc>
    <lastmod>2024-01-01</lastmod>
    <priority>1.0</priority>
  </url>
</urlset>
```

### Submit to Google

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add your property
3. Verify ownership
4. Submit sitemap: `https://your-portfolio.vercel.app/sitemap.xml`

## Cost Breakdown

### Free Tier (Recommended to Start)

**Frontend (Vercel/Netlify):**
- Cost: $0
- Limits: 100GB bandwidth/month
- Good for: Personal portfolios

**Backend (Railway/Render):**
- Cost: $0 (with credit card)
- Limits: 500 hours/month (Railway) or sleeps after 15 min idle (Render)
- Good for: Low traffic portfolios

**Total Monthly: $0** 🎉

### Paid Tier (If Needed)

**Vercel Pro:**
- Cost: $20/month
- Limits: 1TB bandwidth
- Features: Analytics, more team seats

**Railway:**
- Cost: $5-20/month
- Pay for what you use
- No sleep, better performance

**Total Monthly: $25-40**

## Troubleshooting

### Build Fails on Vercel

**Error: Module not found**
```bash
# Check package.json in frontend/
# Make sure all dependencies are in "dependencies" not "devDependencies"
npm install --save package-name
```

### CORS Errors in Production

**Error: Access-Control-Allow-Origin**
```javascript
// backend/src/config/index.js
cors: {
  origin: process.env.CORS_ORIGIN || 'https://your-frontend-url.vercel.app',
  credentials: true,
}
```

### Email Not Sending

1. Check environment variables are set correctly
2. Use Gmail App Password (not regular password)
3. Check logs in Railway/Render dashboard
4. Test locally first with same credentials

### Backend Sleeping (Render Free Tier)

**Solution**: 
- Use Railway instead (doesn't sleep with credit card)
- Or: Add a cron job to ping your backend every 10 minutes

## Post-Deployment

1. **Test Everything**
   - [ ] All pages load
   - [ ] Contact form works
   - [ ] Links work
   - [ ] Mobile responsive
   - [ ] Dark/light mode

2. **Monitor**
   - Set up uptime monitoring
   - Check error logs daily (first week)
   - Monitor email inbox for contact submissions

3. **Share**
   - Update LinkedIn with portfolio link
   - Add to GitHub profile
   - Add to resume
   - Share on social media

4. **Maintain**
   - Update projects as you build them
   - Keep dependencies updated: `npm update`
   - Monitor performance with Lighthouse

---

**Congratulations! Your portfolio is live! 🎉**

Need help? Check:
- Platform docs (Vercel, Railway, etc.)
- [Stack Overflow](https://stackoverflow.com)
- Contact: tamilselvanrm01@gmail.com
