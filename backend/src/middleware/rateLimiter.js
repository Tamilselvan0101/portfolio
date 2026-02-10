import rateLimit from 'express-rate-limit';
import { config } from '../config/index.js';

// General API rate limiter
export const apiLimiter = rateLimit({
  windowMs: config.rateLimit.windowMs,
  max: config.rateLimit.max,
  message: {
    success: false,
    message: 'Too many requests from this IP, please try again later.',
  },
  standardHeaders: true,
  legacyHeaders: false,
});

// Stricter rate limiter for contact form (prevent spam)
export const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // 5 requests per window
  message: {
    success: false,
    message: 'Too many contact form submissions. Please try again in 15 minutes.',
  },
  standardHeaders: true,
  legacyHeaders: false,
});
