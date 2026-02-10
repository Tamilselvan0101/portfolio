import emailService from '../services/emailService.js';

export const sendContactMessage = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Send email to portfolio owner
    await emailService.sendContactEmail({ name, email, subject, message });

    // Send auto-reply to sender
    await emailService.sendAutoReply(email, name);

    res.status(200).json({
      success: true,
      message: 'Message sent successfully! I\'ll get back to you soon.',
    });
  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to send message. Please try again later.',
      error: error.message,
    });
  }
};

export const healthCheck = (req, res) => {
  res.status(200).json({
    success: true,
    message: 'API is running',
    timestamp: new Date().toISOString(),
  });
};
