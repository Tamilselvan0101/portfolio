import nodemailer from 'nodemailer';
import { config } from '../config/index.js';

class EmailService {
  constructor() {
    this.transporter = null;
    this.initialize();
  }

  initialize() {
    try {
      this.transporter = nodemailer.createTransport({
        service: config.email.service,
        auth: {
          user: config.email.user,
          pass: config.email.password,
        },
        // Force IPv4 to avoid ENETUNREACH on platforms without IPv6 support (e.g., Render)
        family: 4,
      });
    } catch (error) {
      console.error('Email service initialization failed:', error.message);
    }
  }

  async sendContactEmail(contactData) {
    const { name, email, subject, message } = contactData;

    const mailOptions = {
      from: config.email.user,
      to: config.email.to,
      replyTo: email,
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #00d4ff; border-bottom: 2px solid #00d4ff; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>From:</strong> ${name}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> ${email}</p>
            <p style="margin: 10px 0;"><strong>Subject:</strong> ${subject}</p>
          </div>
          
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0;">Message:</h3>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 12px;">
            <p>This email was sent from your portfolio contact form.</p>
          </div>
        </div>
      `,
    };

    try {
      const info = await this.transporter.sendMail(mailOptions);
      return {
        success: true,
        messageId: info.messageId,
      };
    } catch (error) {
      console.error('Email send error:', error);
      throw new Error('Failed to send email');
    }
  }

  async sendAutoReply(email, name) {
    const mailOptions = {
      from: config.email.user,
      to: email,
      subject: 'Thank you for reaching out!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #00d4ff;">Thank You for Getting in Touch!</h2>
          
          <p>Hi ${name},</p>
          
          <p>Thank you for reaching out through my portfolio. I've received your message and will get back to you as soon as possible.</p>
          
          <p>Best regards,<br>
          <strong>Tamil Selvan MP</strong><br>
          AI/ML Engineer</p>
        </div>
      `,
    };

    try {
      await this.transporter.sendMail(mailOptions);
    } catch (error) {
      console.error('Auto-reply send error:', error);
    }
  }
}

export default new EmailService();
