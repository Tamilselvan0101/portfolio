import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import morgan from 'morgan';
import { config } from './config/index.js';
import routes from './routes/index.js';
import { apiLimiter } from './middleware/rateLimiter.js';

const app = express();

// Security middleware
app.use(helmet());

// CORS configuration
app.use(cors(config.cors));

// Request parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Compression
app.use(compression());

// Logging
if (config.server.env === 'development') {
  app.use(morgan('dev'));
} else {
  app.use(morgan('combined'));
}

// Rate limiting (apply to all routes)
app.use('/api', apiLimiter);

// Routes
app.use('/api', routes);

// Root endpoint
app.get('/', (req, res) => {
  res.json({
    message: 'Tamil Selvan Portfolio API',
    version: '1.0.0',
    endpoints: {
      health: '/api/health',
      contact: '/api/contact',
    },
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Endpoint not found',
  });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error('Server error:', err);
  
  res.status(err.status || 500).json({
    success: false,
    message: err.message || 'Internal server error',
    ...(config.server.env === 'development' && { stack: err.stack }),
  });
});

// Start server
const PORT = config.server.port;

app.listen(PORT, () => {
  console.log(`
╔═══════════════════════════════════════════════════════════╗
║                                                           ║
║   🚀 Portfolio API Server Running                        ║
║                                                           ║
║   Environment: ${config.server.env.padEnd(42)} ║
║   Port:        ${PORT.toString().padEnd(42)} ║
║   URL:         http://localhost:${PORT.toString().padEnd(32)} ║
║                                                           ║
║   API Endpoints:                                          ║
║   • GET  /api/health  - Health check                     ║
║   • POST /api/contact - Contact form                     ║
║                                                           ║
╚═══════════════════════════════════════════════════════════╝
  `);
});

export default app;
