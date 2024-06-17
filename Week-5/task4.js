const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

app.use(bodyParser.json());
const adminEmail = 'admin@example.com';
app.post('/contact-us', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: '21IT133@charusat.edu.in',
        pass: 'lxgbqdizwiojrwrx',
      },
    });

    const mailOptions = {
      from: email,
      to: adminEmail,
      subject: 'Contact Us Message',
      text: `Name: ${name}\nEmail: ${email}\n\nMessage: ${message}`,
    };
    await transporter.sendMail(mailOptions);

    res.status(200).json({ success: true, message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, message: 'Failed to send email.' });
  }
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});