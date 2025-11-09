import nodemailer from 'nodemailer';

const email = process.env.EMAIL;
const password = process.env.PASSWORD;
const senderMail = process.env.SENDER_MAIL;

if (!email || !password || !senderMail) {
    console.warn('Email configuration missing. Email sending will not work.');
}

export const transporter = nodemailer.createTransport({
    host: 'smtp.mail.me.com',
    port: 587,
    secure: false,
    auth: {
        user: email,
        pass: password,
    },
});

export const mailOptions = {
    from: senderMail,
};

export const getAcknowledgementEmailHTML = (name: string) => {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to BranDeal</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f3f4f6;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f3f4f6; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          
          <!-- Header with Gradient -->
          <tr>
            <td style="background: linear-gradient(135deg, #2563eb 0%, #9333ea 100%); padding: 40px 30px; text-align: center;">
              <div style="background-color: rgba(255, 255, 255, 0.2); width: 80px; height: 80px; border-radius: 20px; display: inline-flex; align-items: center; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 40px;">✨</span>
              </div>
              <h1 style="margin: 0; color: #ffffff; font-size: 32px; font-weight: bold;">Welcome to BranDeal!</h1>
              <p style="margin: 10px 0 0 0; color: #e0e7ff; font-size: 18px;">You're on the list! 🎉</p>
            </td>
          </tr>
          
          <!-- Main Content -->
          <tr>
            <td style="padding: 40px 30px;">
              <p style="margin: 0 0 20px 0; color: #1f2937; font-size: 18px; line-height: 1.6;">
                Hi <strong>${name}</strong>,
              </p>
              
              <p style="margin: 0 0 20px 0; color: #4b5563; font-size: 16px; line-height: 1.6;">
                Thank you for joining the BranDeal waitlist! We're thrilled to have you as one of our early members.
              </p>
              
              <p style="margin: 0 0 30px 0; color: #4b5563; font-size: 16px; line-height: 1.6;">
                Say goodbye to messy spreadsheets! We're building the ultimate brand deal management app to help creators like you track payments, manage invoices, and never miss a deadline.
              </p>
              
              <!-- Benefits Box -->
              <div style="background: linear-gradient(135deg, #eff6ff 0%, #f3e8ff 100%); border-radius: 12px; padding: 30px; margin-bottom: 30px; border: 2px solid #ddd6fe;">
                <h2 style="margin: 0 0 20px 0; color: #1f2937; font-size: 20px; font-weight: bold;">🎁 Your Early Access Benefits:</h2>
                <table width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="padding: 8px 0;">
                      <span style="color: #10b981; font-size: 18px; margin-right: 8px;">✓</span>
                      <span style="color: #374151; font-size: 15px;"><strong>50% Lifetime Discount</strong> - Lock in early pricing forever</span>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0;">
                      <span style="color: #10b981; font-size: 18px; margin-right: 8px;">✓</span>
                      <span style="color: #374151; font-size: 15px;"><strong>Priority Support</strong> - Get help when you need it</span>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0;">
                      <span style="color: #10b981; font-size: 18px; margin-right: 8px;">✓</span>
                      <span style="color: #374151; font-size: 15px;"><strong>Beta Access</strong> - Try new features first</span>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0;">
                      <span style="color: #10b981; font-size: 18px; margin-right: 8px;">✓</span>
                      <span style="color: #374151; font-size: 15px;"><strong>Free Migration</strong> - We'll help import your spreadsheet data</span>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0;">
                      <span style="color: #10b981; font-size: 18px; margin-right: 8px;">✓</span>
                      <span style="color: #374151; font-size: 15px;"><strong>Exclusive Onboarding</strong> - Personal setup session</span>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0;">
                      <span style="color: #10b981; font-size: 18px; margin-right: 8px;">✓</span>
                      <span style="color: #374151; font-size: 15px;"><strong>Shape the Product</strong> - Your feedback matters</span>
                    </td>
                  </tr>
                </table>
              </div>
              
              <!-- What's Next -->
              <div style="background-color: #fef3c7; border-left: 4px solid #f59e0b; padding: 20px; border-radius: 8px; margin-bottom: 30px;">
                <h3 style="margin: 0 0 10px 0; color: #92400e; font-size: 16px; font-weight: bold;">📅 What's Next?</h3>
                <p style="margin: 0; color: #78350f; font-size: 14px; line-height: 1.6;">
                  We're working hard to launch BranDeal. You'll be the first to know when we go live! Keep an eye on your inbox for updates, sneak peeks, and your exclusive early access invite.
                </p>
              </div>
              
              <p style="margin: 0 0 10px 0; color: #4b5563; font-size: 16px; line-height: 1.6;">
                Have questions or suggestions? Just reply to this email - we'd love to hear from you!
              </p>
              
              <p style="margin: 0 0 30px 0; color: #4b5563; font-size: 16px; line-height: 1.6;">
                Thanks for being part of our journey! 🚀
              </p>
              
              <p style="margin: 0; color: #1f2937; font-size: 16px; font-weight: 600;">
                The BranDeal Team
              </p>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="background-color: #f9fafb; padding: 30px; text-align: center; border-top: 1px solid #e5e7eb;">
              <p style="margin: 0 0 10px 0; color: #6b7280; font-size: 14px;">
                <strong style="background: linear-gradient(135deg, #2563eb 0%, #9333ea 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-size: 20px; font-weight: bold;">BranDeal</strong>
              </p>
              <p style="margin: 0 0 10px 0; color: #9ca3af; font-size: 13px;">
                Manage all your brand deals in one place
              </p>
              <p style="margin: 0; color: #9ca3af; font-size: 12px;">
                © 2025 BranDeal. All rights reserved.
              </p>
            </td>
          </tr>
          
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;
};

