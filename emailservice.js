const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

async function sendBirthdayEmail(email, username) {
  try {
    const info = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Happy Birthday Love",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #333;">Happy Birthday ${username}!</h2>
          <p>Hello ${username},</p>
          <p>God bless you on this special day of yours!</p>
          <p>You have completed a trip round the sun and I am so happy for you!</p>
          
          <div style="margin: 30px 0; text-align: center;">
            <div style="background-color: #007bff; color: white; padding: 12px 30px; 
                       border-radius: 5px; display: inline-block; font-size: 18px;">
              🎉 HAPPY BIRTHDAY! 🎂
            </div>
          </div>
          
          <p>Wishing you a year filled with happiness, success, and wonderful memories!</p>
          
          <br>
          <p>With love,<br>
          Toyin</p>
        </div>
      `
    });

    console.log('Birthday email sent successfully!');
    console.log('Message ID:', info.messageId);
    return info;

  } catch (error) {
    console.error('Error sending birthday email:', error);
    throw error;
  }
}