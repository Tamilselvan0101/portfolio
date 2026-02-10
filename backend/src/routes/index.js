import express from 'express';
import { sendContactMessage, healthCheck } from '../controllers/contactController.js';
import { validateContactForm, handleValidationErrors } from '../middleware/validation.js';
import { contactLimiter } from '../middleware/rateLimiter.js';

const router = express.Router();

// Health check endpoint
router.get('/health', healthCheck);

// Contact form endpoint with validation and rate limiting
router.post(
  '/contact',
  contactLimiter,
  validateContactForm,
  handleValidationErrors,
  sendContactMessage
);

export default router;
